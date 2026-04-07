import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIpHash } from "@/lib/ip-hash";

const ARTICLE_SLUG_PATTERN = /^(tech|apps|notes)\/[a-z0-9-]+$/;
const VALID_TYPES = ["like", "dislike"] as const;
const RATE_LIMIT_MS = 2_000;

type ReactionType = (typeof VALID_TYPES)[number];

async function getCounts(articleSlug: string) {
  const groups = await prisma.reaction.groupBy({
    by: ["type"],
    where: { articleSlug },
    _count: true,
  });
  let likes = 0;
  let dislikes = 0;
  for (const g of groups) {
    if (g.type === "like") likes = g._count;
    else if (g.type === "dislike") dislikes = g._count;
  }
  return { likes, dislikes };
}

export async function GET(request: NextRequest) {
  const articleSlug = request.nextUrl.searchParams.get("articleSlug");

  if (!articleSlug || !ARTICLE_SLUG_PATTERN.test(articleSlug)) {
    return NextResponse.json(
      { error: "Invalid articleSlug" },
      { status: 400 }
    );
  }

  const ipHash = await getIpHash();

  const [counts, existing] = await Promise.all([
    getCounts(articleSlug),
    prisma.reaction.findUnique({
      where: { articleSlug_ipHash: { articleSlug, ipHash } },
    }),
  ]);

  return NextResponse.json({
    ...counts,
    userVote: existing?.type ?? null,
  });
}

export async function POST(request: NextRequest) {
  // CSRF check
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { articleSlug, type } = body as {
    articleSlug?: string;
    type?: string;
  };

  if (!articleSlug || !ARTICLE_SLUG_PATTERN.test(articleSlug)) {
    return NextResponse.json(
      { error: "Invalid articleSlug" },
      { status: 400 }
    );
  }

  if (!type || !VALID_TYPES.includes(type as ReactionType)) {
    return NextResponse.json(
      { error: "Invalid type, must be 'like' or 'dislike'" },
      { status: 400 }
    );
  }

  const ipHash = await getIpHash();

  // Rate limit: prevent rapid toggling
  const recent = await prisma.reaction.findFirst({
    where: {
      ipHash,
      updatedAt: { gte: new Date(Date.now() - RATE_LIMIT_MS) },
    },
  });
  if (recent) {
    return NextResponse.json(
      { error: "操作太頻繁，請稍後再試" },
      { status: 429 }
    );
  }

  const existing = await prisma.reaction.findUnique({
    where: { articleSlug_ipHash: { articleSlug, ipHash } },
  });

  let userVote: string | null;

  if (!existing) {
    // New vote
    await prisma.reaction.create({
      data: { articleSlug, ipHash, type },
    });
    userVote = type;
  } else if (existing.type === type) {
    // Same type → remove vote
    await prisma.reaction.delete({
      where: { id: existing.id },
    });
    userVote = null;
  } else {
    // Different type → switch vote
    await prisma.reaction.update({
      where: { id: existing.id },
      data: { type },
    });
    userVote = type;
  }

  const counts = await getCounts(articleSlug);

  return NextResponse.json({ ...counts, userVote });
}
