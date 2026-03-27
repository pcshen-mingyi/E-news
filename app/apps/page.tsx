import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/markdown";

export const metadata = { title: "應用新知 | AI E-News" };

export default function AppsPage() {
  const articles = getArticlesByCategory("apps");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">應用新知</h1>
      <p className="text-text-secondary mb-8">探索 AI 在各行各業的實際應用案例</p>
      <div className="w-16 h-1 bg-teal mb-8 rounded-full" />
      <ArticleGrid articles={articles} />
    </div>
  );
}
