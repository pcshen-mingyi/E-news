import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

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
