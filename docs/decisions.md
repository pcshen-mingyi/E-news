# 技術決策記錄 (ADR)

> Architecture Decision Records — 記錄專案中每個重要的技術決策與原因

---

## ADR-001: 選用 Next.js 16 App Router

**日期**: 2026-03-26
**狀態**: 已採用

**背景**: 需要一個支援 SSR/SSG、SEO 友善、且部署到 Vercel 最佳化的框架。

**決策**: 採用 Next.js 16 (App Router) + React 19

**理由**:
- App Router 是 Next.js 的未來標準，支援 Server Components
- 與 Vercel 部署深度整合
- 內建 SEO metadata API（`generateMetadata`）
- Turbopack 加速開發體驗

---

## ADR-002: 文章使用 Markdown + Git 管理

**日期**: 2026-03-26
**狀態**: 已採用

**背景**: 團隊需要一種簡單、可版控的方式管理文章內容。

**決策**: 使用 Markdown 檔案存放在 `content/` 目錄，透過 Git 版控

**理由**:
- 不需要額外的 CMS 系統，降低複雜度
- Markdown 語法簡單，團隊成員容易上手
- Git 提供完整的版本歷史和協作能力
- Push 即部署，工作流程簡潔

**工具**: gray-matter（解析 frontmatter）+ remark + remark-html（轉 HTML）

---

## ADR-003: 選用 Google OAuth 作為唯一登入方式

**日期**: 2026-03-26
**狀態**: 已採用

**背景**: 投稿系統需要使用者身分認證，但不想自行管理帳號密碼。

**決策**: 使用 NextAuth v5 + Google OAuth 2.0，不提供其他登入方式

**理由**:
- 團隊成員都有 Google 帳號
- 避免密碼管理的安全風險
- NextAuth v5 提供成熟的 OAuth 整合
- PrismaAdapter 自動同步使用者到資料庫

**注意**: NextAuth v5 目前為 beta 版（5.0.0-beta.30），但功能已穩定

---

## ADR-004: 從 SQLite 遷移到 Turso (cloud SQLite)

**日期**: 2026-03-27
**狀態**: 已採用

**背景**: 本地開發使用 SQLite `file:./dev.db` 運作良好，但部署到 Vercel 後，Showcase 頁面 crash。

**問題**: Vercel Serverless Functions 的檔案系統是**唯讀**且**短暫**的，無法使用本地 SQLite 檔案。

**考慮過的方案**:

| 方案 | 優點 | 缺點 |
|------|------|------|
| Turso (cloud SQLite) | SQL 語法相容、免費額度足夠、遷移成本低 | 需要額外服務帳號 |
| Vercel Postgres | 官方整合 | 已停止新用戶申請 |
| PlanetScale | MySQL 相容 | 需改 Schema |
| 純 Markdown | 最簡單 | 失去投稿功能 |

**決策**: 採用 Turso，透過 `@prisma/adapter-libsql` 連接

**實作**:
- `lib/prisma.ts` 根據環境變數自動切換本地 SQLite / Turso
- 新增 `TURSO_DATABASE_URL` 和 `TURSO_AUTH_TOKEN` 環境變數
- Vercel 環境變數已設定完成

---

## ADR-005: 視覺風格參考明怡基金會

**日期**: 2026-03-26
**狀態**: 已採用

**背景**: 需要一個專業、清爽的視覺風格。

**決策**: 參考 https://www.mingyifoundation.org/ 的設計語言

**設計要素**:
- 主色：湖水綠 `#2BA8A0`
- Hero 區塊：teal → 淺綠漸層
- 排版：左文右圖交替、卡片式文章列表
- RWD：手機版單欄 + 漢堡選單
- 字體：Noto Sans TC（中文）+ Inter（英文）

---

## ADR-006: 投稿審核制

**日期**: 2026-03-26
**狀態**: 已採用

**背景**: 組織應用專區需要品質把關。

**決策**: 投稿需經管理員審核才能公開展示

**流程**: 投稿 → pending → 管理員審核 → approved / rejected

**角色管理**: User 表的 `role` 欄位（`user` / `admin`），首位管理員需透過 Prisma Studio 手動設定

---

## ADR-007: 自建留言系統（而非第三方服務）

**日期**: 2026-03-30
**狀態**: 已採用

**背景**: 希望文章下方有留言討論功能，增加團隊互動。

**考慮過的方案**:

| 方案 | 優點 | 缺點 |
|------|------|------|
| Giscus (GitHub Discussions) | 零後端、免費 | 需要 GitHub 帳號 |
| Disqus | 簡單嵌入 | 有廣告、隱私疑慮 |
| 自建 | 用現有 Google 登入、完全客製 | 需要開發 |

**決策**: 自建留言系統，複用現有 NextAuth + Prisma + Turso 基礎設施

**理由**:
- 團隊成員已有 Google 帳號且已設定 OAuth，不需額外帳號
- Turso 免費額度足夠（數萬筆留言無壓力）
- 實際開發量小（1 model + 2 API routes + 2 components）
- 完全客製化 UI，與網站風格一致

**安全措施**:
- Database-based rate limit（serverless 環境有效）
- CSRF origin 檢查
- React JSX auto-escape（不使用 dangerouslySetInnerHTML）
- 作者/管理員才能刪除留言
