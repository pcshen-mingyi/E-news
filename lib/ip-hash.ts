import { headers } from "next/headers";
import { createHash } from "crypto";

const SALT = process.env.IP_HASH_SALT || "e-news-reaction-salt-2026";

export async function getIpHash(): Promise<string> {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
  return createHash("sha256").update(ip + SALT).digest("hex");
}
