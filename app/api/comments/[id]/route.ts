import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const MAX_CONTENT_LENGTH = 1000;

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const origin = request.headers.get("origin");
  const expected = new URL(request.url).origin;
  if (origin && origin !== expected) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "請先登入" }, { status: 401 });
  }

  const { id } = await params;

  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment) {
    return NextResponse.json({ error: "留言不存在" }, { status: 404 });
  }

  // Only the author can edit their own comment
  if (comment.authorId !== session.user.id) {
    return NextResponse.json({ error: "只能修改自己的留言" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { content } = body as { content?: string };

  if (!content || typeof content !== "string") {
    return NextResponse.json({ error: "留言內容不可為空" }, { status: 400 });
  }

  const trimmed = content.trim();
  if (trimmed.length === 0) {
    return NextResponse.json({ error: "留言內容不可為空" }, { status: 400 });
  }
  if (trimmed.length > MAX_CONTENT_LENGTH) {
    return NextResponse.json({ error: `留言不可超過 ${MAX_CONTENT_LENGTH} 字` }, { status: 400 });
  }

  const updated = await prisma.comment.update({
    where: { id },
    data: { content: trimmed },
    include: {
      author: { select: { id: true, name: true, image: true } },
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // CSRF protection: verify request origin
  const origin = request.headers.get("origin");
  const expected = new URL(request.url).origin;
  if (origin && origin !== expected) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "請先登入" }, { status: 401 });
  }

  const { id } = await params;

  const comment = await prisma.comment.findUnique({
    where: { id },
  });

  if (!comment) {
    return NextResponse.json({ error: "留言不存在" }, { status: 404 });
  }

  // Only the author or an admin can delete
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });

  if (comment.authorId !== session.user.id && user?.role !== "admin") {
    return NextResponse.json({ error: "無權限刪除" }, { status: 403 });
  }

  await prisma.comment.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
