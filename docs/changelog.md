# 專案開發歷程

> 記錄每次重要的變更與里程碑

---

## 2026-03-30

### 文章留言討論功能

- **規劃**: Planner agent 產出 5 階段實作計畫（Schema → API → UI → 整合 → 安全加固）
- **資料庫**: 新增 `Comment` model，含 `articleSlug` 索引，關聯 `User`
- **API**:
  - `GET /api/comments?articleSlug=tech/slug` — 公開讀取
  - `POST /api/comments` — 登入後留言（DB-based rate limit，10 秒內限 1 則）
  - `DELETE /api/comments/[id]` — 作者或管理員可刪除（含 CSRF origin check）
- **UI**: `CommentSection` + `CommentItem` 元件，支援即時新增/刪除、字數計算、未登入提示
- **整合**: 三個分類文章頁面（tech / apps / notes）底部加入留言區
- **安全**: Code Review + Security Review 通過
  - 修復：JSON parse error handling、DB-based rate limit（取代 in-memory）、CSRF origin 驗證、delete 錯誤回饋
  - React JSX auto-escape 防 XSS（不使用 dangerouslySetInnerHTML）
- **Turso**: 手動建立 Comment 表 + 索引

### 新增文章

- PC 小筆記：「搞懂 AI Agent 的本質：它就是一個你帶的實習生」
- 更新文章縮圖色彩規範（技術=深藍紫、應用=暖橘、筆記=柔和綠）

---

## 2026-03-27

### Turso 雲端資料庫遷移

- **問題**: Vercel 部署後 `/showcase` 頁面 crash（SQLite `file:./dev.db` 在 serverless 環境無法運作）
- **解法**: 遷移到 Turso cloud SQLite
- **變更**:
  - 安裝 `@libsql/client` 和 `@prisma/adapter-libsql`
  - 重寫 `lib/prisma.ts`：自動偵測環境，開發用本地 SQLite、生產用 Turso
  - 更新 `.env.example` 加入 Turso 環境變數
  - Vercel 環境變數設定 `TURSO_DATABASE_URL` 和 `TURSO_AUTH_TOKEN`
  - 重新部署成功

---

## 2026-03-26

### 專案初始建立

- 建立 Next.js 16 專案（App Router + Turbopack）
- 設定 Tailwind CSS 4 + 自訂湖水綠主題 `#2BA8A0`
- 建立 4 大區塊頁面結構：
  - 技術新知 (`/tech`)
  - 應用新知 (`/apps`)
  - PC 小筆記 (`/notes`)
  - 組織應用專區 (`/showcase`)

### Markdown 內容系統

- 建立 `content/` 目錄結構（tech / apps / notes）
- 實作 `lib/markdown.ts`（gray-matter + remark 解析）
- 撰寫 6 篇範例文章（每個分類 2 篇）

### 認證與投稿系統

- 設定 NextAuth v5 + Google OAuth
- 建立 Prisma Schema（User / Account / Session / Submission）
- 實作投稿 API（GET / POST / PATCH）
- 建立管理員審核介面 (`/admin`)
- Google Cloud Console 設定 OAuth 同意畫面與憑證

### UI 元件開發

- Navbar（RWD 漢堡選單）
- Hero 漸層橫幅
- SectionBlock（左文右圖交替）
- ArticleCard / ArticleGrid
- Footer

### SEO 優化

- 全站 metadata template
- 各文章頁 `generateMetadata()` 動態 SEO
- Open Graph（zh_TW locale）
- robots 設定

### 版控與部署

- 初始化 Git repository
- 推送到 GitHub: `pcshen-mingyi/E-news`
- Vercel 連結 GitHub repo，自動部署
- 設定 Vercel 環境變數
- 加入 Google OAuth callback URI for Vercel domain

### 文件建立

- README.md（完整專案文件）
- CONTRIBUTING.md（貢獻指南）
- .env.example（環境變數範本）
