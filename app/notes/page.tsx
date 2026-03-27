import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/markdown";

export const metadata = { title: "PC 小筆記 | AI E-News" };

export default function NotesPage() {
  const articles = getArticlesByCategory("notes");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">PC 小筆記</h1>
      <p className="text-text-secondary mb-8">個人學習心得與實作紀錄</p>
      <div className="w-16 h-1 bg-teal mb-8 rounded-full" />
      <ArticleGrid articles={articles} />
    </div>
  );
}
