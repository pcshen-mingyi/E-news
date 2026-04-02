@AGENTS.md

## 專案概要

AI E-News 是團隊共用的每日 AI 新知平台，部署在 Vercel。

- **線上網址**: https://e-news-lilac.vercel.app
- **GitHub**: https://github.com/pcshen-mingyi/E-news
- **技術棧**: Next.js 16 (App Router) + Tailwind CSS 4 + Prisma + Turso + NextAuth v5 (Google OAuth)
- **Google Cloud 專案**: `mingyi-agent`

## 文章管理流程

文章以 Markdown 管理，放在 `content/` 對應分類資料夾（tech / apps / notes）。
詳細格式規範見 `CONTRIBUTING.md`。

### 上線流程

1. **檢查新文章**（可自動執行，不需用戶確認）：
   - `git status` 確認新檔案
   - 讀取 frontmatter（title、date、author、tags、summary、thumbnail）
   - 確認縮圖存在且為 webp 格式
2. **回報檢查結果**給用戶
3. **commit + push 上線**（需用戶確認後才執行）

### 寫文章 Skills

有三個專用 Skill 可撰寫文章：`enews-tech`、`enews-apps`、`enews-notes`。

## 開發流程

依照 `AGENTS.md` 的規範，功能開發需遵循：

1. 新功能前 → 用 **planner** agent 規劃
2. 寫完程式碼 → 用 **code-reviewer** agent 審查
3. 涉及認證/敏感資料 → 用 **security-reviewer** 檢查
4. Build 失敗 → 用 **build-error-resolver** 修復
5. 獨立任務 → **並行執行**

## 資料庫

- **本地開發**: SQLite (`file:./dev.db`)
- **生產環境**: Turso cloud SQLite（`lib/prisma.ts` 自動切換）
- **Turso 資料庫名稱**: `e-news`
- Schema 變更後需手動同步到 Turso：`turso db shell e-news "<SQL>"`

## 重要文件

- `docs/architecture.md` — 技術架構
- `docs/decisions.md` — 技術決策記錄 (ADR)
- `docs/deployment.md` — 部署與環境變數
- `docs/changelog.md` — 開發歷程
- `docs/troubleshooting.md` — 問題排解

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
