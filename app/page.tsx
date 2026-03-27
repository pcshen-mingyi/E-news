import Hero from "@/components/Hero";
import SectionBlock from "@/components/SectionBlock";
import ArticleGrid from "@/components/ArticleGrid";
import { getAllArticles } from "@/lib/markdown";
import Link from "next/link";

export default function Home() {
  const latestArticles = getAllArticles().slice(0, 6);

  return (
    <>
      <Hero />

      {/* Section blocks - alternating layout */}
      <SectionBlock
        title="技術新知"
        description="深入淺出的 AI 技術解析，從基礎概念到前沿研究，帶你掌握核心技術脈動。"
        href="/tech"
        imageSrc="/images/section-tech.webp"
        imageAlt="AI 技術新知 — 神經網絡與電路板插畫"
        priority
      />

      <div className="bg-gray-bg">
        <SectionBlock
          title="應用新知"
          description="探索 AI 在各行各業的實際應用案例，看看 AI 如何改變工作與生活。"
          href="/apps"
          imageSrc="/images/section-apps.webp"
          imageAlt="AI 應用新知 — 團隊協作與 AI 工具插畫"
          reverse
        />
      </div>

      <SectionBlock
        title="PC 小筆記"
        description="個人學習心得與實作紀錄，分享 AI 工具使用技巧與 Prompt 工程經驗。"
        href="/notes"
        imageSrc="/images/section-notes.webp"
        imageAlt="PC 小筆記 — 筆記本與學習插畫"
      />

      {/* Latest articles */}
      <section className="bg-gray-bg py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">最新文章</h2>
              <div className="w-16 h-1 bg-teal mt-2 rounded-full" />
            </div>
            <Link
              href="/tech"
              className="text-teal hover:text-teal-dark transition-colors text-sm font-medium flex items-center gap-1"
            >
              更多文章
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <ArticleGrid articles={latestArticles} />
        </div>
      </section>
    </>
  );
}
