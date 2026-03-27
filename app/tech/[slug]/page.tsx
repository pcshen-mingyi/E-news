import type { Metadata } from "next";
import { getArticleContent, getArticlesByCategory } from "@/lib/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getArticlesByCategory("tech");
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleContent("tech", slug);
  if (!article) return {};
  return {
    title: article.meta.title,
    description: article.meta.summary,
    openGraph: { title: article.meta.title, description: article.meta.summary },
  };
}

export default async function TechArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleContent("tech", slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/tech" className="text-teal text-sm hover:text-teal-dark transition-colors mb-6 inline-block">
        &larr; 返回技術新知
      </Link>
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-3">{article.meta.title}</h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span>{article.meta.date}</span>
            {article.meta.author && <span>by {article.meta.author}</span>}
          </div>
          {article.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {article.meta.tags.map((tag) => (
                <span key={tag} className="text-xs text-teal bg-teal/5 px-2 py-0.5 rounded">#{tag}</span>
              ))}
            </div>
          )}
        </header>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </article>
    </div>
  );
}
