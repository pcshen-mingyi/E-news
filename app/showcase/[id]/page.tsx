import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await prisma.submission.findUnique({
    where: { id, status: "approved" },
    include: { author: { select: { name: true, image: true } } },
  });

  if (!submission) notFound();

  const tags = submission.tags ? submission.tags.split(",").map((t) => t.trim()).filter(Boolean) : [];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/showcase" className="text-teal text-sm hover:text-teal-dark transition-colors mb-6 inline-block">
        &larr; 返回組織應用專區
      </Link>

      <article>
        <header className="mb-8">
          <span className="text-teal text-sm font-medium">{submission.orgName}</span>
          <h1 className="text-3xl font-bold text-text-primary mt-1 mb-3">{submission.title}</h1>
          <p className="text-lg text-text-secondary mb-4">{submission.description}</p>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            {submission.author.name && <span>by {submission.author.name}</span>}
            <span>{new Date(submission.createdAt).toLocaleDateString("zh-TW")}</span>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span key={tag} className="text-xs text-teal bg-teal/5 px-2 py-0.5 rounded">#{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div className="prose max-w-none whitespace-pre-wrap">{submission.content}</div>
      </article>
    </div>
  );
}
