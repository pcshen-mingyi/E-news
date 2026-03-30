import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const ARTICLE_SLUG_PATTERN = /^(tech|apps|notes)\/[a-z0-9-]+$/;
const MAX_CONTENT_LENGTH = 1000;
const RATE_LIMIT_MS = 10_000; // 10 seconds

export async function GET(request: NextRequest) {
  const articleSlug = request.nextUrl.searchParams.get("articleSlug");

  if (!articleSlug || !ARTICLE_SLUG_PATTERN.test(articleSlug)) {
    return NextResponse.json(
      { error: "Invalid articleSlug" },
      { status: 400 }
    );
  }

  const comments = await prisma.comment.findMany({
    where: { articleSlug },
    orderBy: { createdAt: "asc" },
    include: {
      author: {
        select: { id: true, name: true, image: true },
      },
    },
  });

  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "請先登入" }, { status: 401 });
  }

  const userId = session.user.id;

  // Database-based rate limit (works on serverless)
  const recentComment = await prisma.comment.findFirst({
    where: {
      authorId: userId,
      createdAt: { gte: new Date(Date.now() - RATE_LIMIT_MS) },
    },
  });
  if (recentComment) {
    return NextResponse.json(
      { error: "留言太頻繁，請稍後再試" },
      { status: 429 }
    );
  }

  // Parse JSON body with error handling
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { articleSlug, content } = body as { articleSlug?: string; content?: string };

  if (!articleSlug || !ARTICLE_SLUG_PATTERN.test(articleSlug)) {
    return NextResponse.json(
      { error: "Invalid articleSlug" },
      { status: 400 }
    );
  }

  if (!content || typeof content !== "string") {
    return NextResponse.json(
      { error: "留言內容不可為空" },
      { status: 400 }
    );
  }

  const trimmed = content.trim();
  if (trimmed.length === 0) {
    return NextResponse.json(
      { error: "留言內容不可為空" },
      { status: 400 }
    );
  }

  if (trimmed.length > MAX_CONTENT_LENGTH) {
    return NextResponse.json(
      { error: `留言不可超過 ${MAX_CONTENT_LENGTH} 字` },
      { status: 400 }
    );
  }

  // Store raw text; React JSX auto-escapes on render (no dangerouslySetInnerHTML)
  const comment = await prisma.comment.create({
    data: {
      content: trimmed,
      articleSlug,
      authorId: userId,
    },
    include: {
      author: {
        select: { id: true, name: true, image: true },
      },
    },
  });

  return NextResponse.json(comment, { status: 201 });
}
