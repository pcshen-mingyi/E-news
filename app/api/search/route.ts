import { NextRequest, NextResponse } from "next/server";
import { searchArticles } from "@/lib/search";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = searchArticles(q, 8);
  return NextResponse.json({ results });
}
