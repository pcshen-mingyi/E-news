#!/usr/bin/env node
/**
 * 文章上線前檢查腳本
 * - 掃描 git 未追蹤的新文章（content/tech|apps|notes/）
 * - 驗證 frontmatter 必要欄位
 * - 確認縮圖存在、格式為 webp、大小合理
 * - 檢查縮圖命名是否符合慣例（daily-{category}-{YYYY-MM-DD}.webp）
 * - 若命名不符，自動重新命名並更新 frontmatter
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const REQUIRED_FIELDS = ["title", "date", "author", "tags", "summary", "thumbnail"];
const MAX_SIZE_KB = 100;
const CATEGORY_LABELS = { tech: "技術", apps: "應用", notes: "筆記" };

const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";

function findNewArticles() {
  const output = execSync("git status --short", { cwd: ROOT, encoding: "utf-8" });
  return output
    .split("\n")
    .filter((line) => line.startsWith("??") && /content\/(tech|apps|notes)\/.+\.md$/.test(line))
    .map((line) => line.slice(3).trim());
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rawValue] = m;
    let value = rawValue.trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    else if (value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
    }
    data[key] = value;
  }
  return data;
}

function checkArticle(relPath) {
  const result = { relPath, issues: [], fixed: [], meta: null };
  const fullPath = path.join(ROOT, relPath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const data = parseFrontmatter(raw);

  if (!data) {
    result.issues.push("找不到 frontmatter");
    return result;
  }
  result.meta = data;

  // Required fields
  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
      result.issues.push(`缺少 ${field}`);
    }
  }

  // Thumbnail checks
  const match = relPath.match(/content\/(tech|apps|notes)\/(.+)\.md$/);
  if (!match) return result;
  const [, category, slug] = match;
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  const expectedName = dateMatch ? `daily-${category === "apps" ? "apps" : category === "tech" ? "tech" : "notes"}-${dateMatch[1]}.webp` : null;

  if (data.thumbnail && typeof data.thumbnail === "string") {
    const thumbPath = path.join(ROOT, "public", data.thumbnail.replace(/^\//, ""));
    const thumbFilename = path.basename(thumbPath);

    if (!fs.existsSync(thumbPath)) {
      result.issues.push(`縮圖不存在：${data.thumbnail}`);
    } else {
      // Check format
      if (!thumbPath.endsWith(".webp")) {
        result.issues.push(`縮圖非 webp 格式：${thumbFilename}`);
      }

      // Check size
      const sizeKB = Math.round(fs.statSync(thumbPath).size / 1024);
      result.size = sizeKB;
      if (sizeKB > MAX_SIZE_KB) {
        result.issues.push(`縮圖過大：${sizeKB}KB（建議 < ${MAX_SIZE_KB}KB）`);
      }

      // Check naming convention + auto-fix
      if (expectedName && thumbFilename !== expectedName) {
        const expectedPath = path.join(path.dirname(thumbPath), expectedName);
        if (!fs.existsSync(expectedPath)) {
          fs.renameSync(thumbPath, expectedPath);
          const newThumbValue = `/images/articles/${expectedName}`;
          const newRaw = raw.replace(data.thumbnail, newThumbValue);
          fs.writeFileSync(fullPath, newRaw);
          result.fixed.push(`縮圖命名：${thumbFilename} → ${expectedName}`);
          result.meta.thumbnail = newThumbValue;
        } else {
          result.issues.push(`縮圖命名不符（預期 ${expectedName}）但目標已存在，無法自動修正`);
        }
      }
    }
  }

  return result;
}

function main() {
  console.log(`${BOLD}📝 文章上線前檢查${RESET}\n`);

  const articles = findNewArticles();
  if (articles.length === 0) {
    console.log(`${DIM}沒有發現新文章${RESET}`);
    return;
  }

  console.log(`${DIM}發現 ${articles.length} 篇新文章${RESET}\n`);

  const results = articles.map(checkArticle);
  let allPass = true;

  for (const r of results) {
    const match = r.relPath.match(/content\/(tech|apps|notes)\/.+\.md$/);
    const category = match ? CATEGORY_LABELS[match[1]] : "";
    const title = r.meta?.title || "(未知標題)";
    const hasIssues = r.issues.length > 0;
    const icon = hasIssues ? `${RED}✗${RESET}` : `${GREEN}✓${RESET}`;

    console.log(`${icon} ${BOLD}[${category}]${RESET} ${title}`);
    console.log(`  ${DIM}${r.relPath}${RESET}`);
    if (r.size) console.log(`  ${DIM}縮圖 ${r.size}KB${RESET}`);

    for (const fix of r.fixed) {
      console.log(`  ${YELLOW}⚡ 已自動修正${RESET}：${fix}`);
    }
    for (const issue of r.issues) {
      console.log(`  ${RED}⚠ ${issue}${RESET}`);
      allPass = false;
    }
    console.log();
  }

  console.log("─".repeat(50));
  if (allPass) {
    console.log(`${GREEN}${BOLD}✓ 全部通過，可以 commit + push${RESET}`);
  } else {
    console.log(`${RED}${BOLD}✗ 有問題需要處理${RESET}`);
    process.exit(1);
  }
}

main();
