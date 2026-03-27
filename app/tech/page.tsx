import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/markdown";

export const metadata = { title: "技術新知 | AI E-News" };

export default function TechPage() {
  const articles = getArticlesByCategory("tech");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">技術新知</h1>
      <p className="text-text-secondary mb-8">深入淺出的 AI 技術解析，掌握核心技術脈動</p>
      <div className="w-16 h-1 bg-teal mb-8 rounded-full" />
      <ArticleGrid articles={articles} />
    </div>
  );
}
