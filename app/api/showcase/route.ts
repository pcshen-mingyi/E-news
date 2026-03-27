import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET: List approved submissions (public) or all (admin)
export async function GET(request: NextRequest) {
  const session = await auth();
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  // Check if user is admin for filtered queries
  let isAdmin = false;
  if (session?.user?.id) {
    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    isAdmin = user?.role === "admin";
  }

  const where = isAdmin && status ? { status } : { status: "approved" };

  const submissions = await prisma.submission.findMany({
    where,
    include: { author: { select: { name: true, image: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(submissions);
}

// POST: Create a new submission (authenticated users only)
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "請先登入" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, content, orgName, tags } = body;

  if (!title || !description || !content || !orgName) {
    return NextResponse.json({ error: "請填寫所有必填欄位" }, { status: 400 });
  }

  const submission = await prisma.submission.create({
    data: {
      title,
      description,
      content,
      orgName,
      tags: tags || "",
      authorId: session.user.id,
    },
  });

  return NextResponse.json(submission, { status: 201 });
}
