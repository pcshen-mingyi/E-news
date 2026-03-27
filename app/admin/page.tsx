import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import AdminSubmissionList from "./AdminSubmissionList";

export const metadata = { title: "管理後台 | AI E-News" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/signin");

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (user?.role !== "admin") {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">權限不足</h1>
        <p className="text-text-secondary">此頁面僅限管理員存取。</p>
      </div>
    );
  }

  const submissions = await prisma.submission.findMany({
    include: { author: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">投稿審核管理</h1>
      <p className="text-text-secondary mb-8">審核並管理組織應用專區的投稿</p>
      <div className="w-16 h-1 bg-teal mb-8 rounded-full" />

      <AdminSubmissionList initialSubmissions={JSON.parse(JSON.stringify(submissions))} />
    </div>
  );
}
