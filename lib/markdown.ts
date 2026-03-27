import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { ArticleMeta } from "@/components/ArticleGrid";

const contentDirectory = path.join(process.cwd(), "content");

/** Validate thumbnail: only allow local paths starting with "/" */
function validThumbnail(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  if (value.startsWith("/")) return value;
  return undefined;
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  const dir = path.join(contentDirectory, category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      author: data.author || "",
      tags: data.tags || [],
      summary: data.summary || "",
      category,
      thumbnail: validThumbnail(data.thumbnail),
    };
  });

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllArticles(): ArticleMeta[] {
  const categories = ["tech", "apps", "notes"];
  const all = categories.flatMap((cat) => getArticlesByCategory(cat));
  return all.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getArticleContent(
  category: string,
  slug: string
): Promise<{ meta: ArticleMeta; contentHtml: string } | null> {
  const filePath = path.join(contentDirectory, category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      author: data.author || "",
      tags: data.tags || [],
      summary: data.summary || "",
      category,
      thumbnail: validThumbnail(data.thumbnail),
    },
    contentHtml,
  };
}
