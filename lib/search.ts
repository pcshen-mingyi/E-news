import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { SearchResult } from "@/lib/types/search";

interface SearchEntry {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  category: string;
  thumbnail?: string;
  bodyText: string;
}

const contentDirectory = path.join(process.cwd(), "content");
const CATEGORIES = ["tech", "apps", "notes"];

let cache: SearchEntry[] | null = null;

function validThumbnail(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  if (value.startsWith("/")) return value;
  return undefined;
}

function buildCache(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const category of CATEGORIES) {
    const dir = path.join(contentDirectory, category);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    for (const filename of files) {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      entries.push({
        slug,
        title: data.title || slug,
        date: data.date || "",
        author: data.author || "",
        tags: data.tags || [],
        summary: data.summary || "",
        category,
        thumbnail: validThumbnail(data.thumbnail),
        bodyText: content,
      });
    }
  }

  return entries.sort((a, b) => (a.date > b.date ? -1 : 1));
}

function getCache(): SearchEntry[] {
  if (!cache) {
    cache = buildCache();
  }
  return cache;
}

function extractSnippet(text: string, query: string, length: number = 80): string {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(query.toLowerCase());
  if (idx === -1) return "";

  const start = Math.max(0, idx - 30);
  const end = Math.min(text.length, idx + query.length + length - 30);
  let snippet = text.slice(start, end).replace(/\n+/g, " ").trim();

  if (start > 0) snippet = "..." + snippet;
  if (end < text.length) snippet = snippet + "...";

  return snippet;
}

export function searchArticles(query: string, limit: number = 8): SearchResult[] {
  const entries = getCache();
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  // Split tokens for multi-word queries (e.g., "AI 安全")
  const tokens = q.split(/\s+/).filter((t) => t.length > 0);

  const scored: { entry: SearchEntry; score: number; snippet: string }[] = [];

  for (const entry of entries) {
    const titleLower = entry.title.toLowerCase();
    const summaryLower = entry.summary.toLowerCase();
    const tagsLower = entry.tags.map((t) => t.toLowerCase());
    const bodyLower = entry.bodyText.toLowerCase();

    let score = 0;

    // Full query substring match
    if (titleLower.includes(q)) score += 10;
    if (tagsLower.some((t) => t.includes(q))) score += 5;
    if (summaryLower.includes(q)) score += 3;
    if (bodyLower.includes(q)) score += 1;

    // Individual token matches (for multi-word queries)
    if (tokens.length > 1) {
      for (const token of tokens) {
        if (titleLower.includes(token)) score += 4;
        if (tagsLower.some((t) => t.includes(token))) score += 2;
        if (summaryLower.includes(token)) score += 1;
        if (bodyLower.includes(token)) score += 0.5;
      }
    }

    if (score > 0) {
      // Generate snippet: prefer body match, fall back to summary
      let snippet = extractSnippet(entry.bodyText, q);
      if (!snippet && tokens.length > 1) {
        for (const token of tokens) {
          snippet = extractSnippet(entry.bodyText, token);
          if (snippet) break;
        }
      }
      if (!snippet) snippet = entry.summary;

      scored.push({ entry, score, snippet });
    }
  }

  // Sort by score desc, then date desc
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.entry.date > b.entry.date ? -1 : 1;
  });

  return scored.slice(0, limit).map(({ entry, score, snippet }) => ({
    slug: entry.slug,
    title: entry.title,
    date: entry.date,
    category: entry.category,
    tags: entry.tags,
    summary: entry.summary,
    thumbnail: entry.thumbnail,
    snippet,
    score,
  }));
}
