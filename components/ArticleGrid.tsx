import ArticleCard from "./ArticleCard";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  category: string;
  thumbnail?: string;
}

interface ArticleGridProps {
  articles: ArticleMeta[];
  showCategory?: boolean;
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-text-secondary">
        目前還沒有文章，敬請期待！
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard
          key={`${article.category}-${article.slug}`}
          title={article.title}
          summary={article.summary}
          date={article.date}
          tags={article.tags}
          href={`/${article.category}/${article.slug}`}
          category={article.category}
          thumbnail={article.thumbnail}
        />
      ))}
    </div>
  );
}
