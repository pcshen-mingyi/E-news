import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "組織應用專區 | AI E-News" };
export const dynamic = "force-dynamic";

export default async function ShowcasePage() {
  const session = await auth();
  const submissions = await prisma.submission.findMany({
    where: { status: "approved" },
    include: { author: { select: { name: true, image: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-text-primary">組織應用投稿與展示專區</h1>
        {session?.user ? (
          <Link
            href="/showcase/submit"
            className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            我要投稿
          </Link>
        ) : (
          <Link
            href="/auth/signin"
            className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-dark transition-colors"
          >
            登入後投稿
          </Link>
        )}
      </div>
      <p className="text-text-secondary mb-8">分享你的 AI 應用實踐，與團隊一起學習成長</p>
      <div className="w-16 h-1 bg-teal mb-8 rounded-full" />

      {submissions.length === 0 ? (
        <div className="bg-gray-bg rounded-xl p-12 text-center">
          <div className="text-5xl mb-4">📮</div>
          <h2 className="text-xl font-bold text-text-primary mb-2">目前還沒有投稿</h2>
          <p className="text-text-secondary">成為第一個分享 AI 應用案例的人吧！</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {submissions.map((sub) => (
            <Link key={sub.id} href={`/showcase/${sub.id}`} className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-teal/10 to-teal-light/20 flex items-center justify-center">
                  <span className="text-4xl">🏢</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs text-teal font-medium mb-1">{sub.orgName}</span>
                  <h3 className="font-bold text-text-primary group-hover:text-teal transition-colors mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 flex-1">{sub.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-text-secondary">
                    {sub.author.name && <span>by {sub.author.name}</span>}
                    <span>{new Date(sub.createdAt).toLocaleDateString("zh-TW")}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
