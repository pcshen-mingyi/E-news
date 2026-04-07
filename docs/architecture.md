# 技術架構文件

> 最後更新：2026-04-07

## 系統架構總覽

```
[使用者瀏覽器]
       |
       v
[Vercel Edge Network]
       |
       v
[Next.js 16 App Router]  ─── Turbopack (dev)
       |
       ├── 靜態頁面（Markdown 文章）
       │     └── content/*.md → gray-matter + remark → HTML
       │
       ├── 動態頁面（投稿系統）
       │     └── Prisma ORM → Turso (cloud SQLite)
       │
       └── 認證系統
              └── NextAuth v5 → Google OAuth 2.0
```

## 技術棧

| 層級 | 技術 | 版本 | 說明 |
|------|------|------|------|
| 框架 | Next.js | 16.2.1 | App Router，React 19 |
| 語言 | TypeScript | 5.x | 全專案型別安全 |
| 樣式 | Tailwind CSS | 4.x | 主色 `#2BA8A0` 湖水綠 |
| 字體 | Noto Sans TC + Inter | — | Google Fonts，中英文兼顧 |
| 內容管理 | Markdown | — | gray-matter（frontmatter）+ remark（轉 HTML） |
| ORM | Prisma | 6.19.x | 支援 SQLite + Turso libSQL adapter |
| 資料庫（本地） | SQLite | — | `file:./dev.db` |
| 資料庫（雲端） | Turso | — | libSQL 協定，Vercel 生產環境使用 |
| 認證 | NextAuth v5 | 5.0.0-beta.30 | Google OAuth + PrismaAdapter |
| 部署 | Vercel | — | Git push 自動部署 |

## 資料庫架構

### Prisma + 雙環境策略

`lib/prisma.ts` 使用環境變數自動切換：

- **開發環境**：偵測不到 `TURSO_DATABASE_URL` → 使用本地 SQLite (`file:./dev.db`)
- **生產環境（Vercel）**：偵測到 Turso 環境變數 → 使用 `@prisma/adapter-libsql` 連接 Turso 雲端 SQLite

```
if (TURSO_DATABASE_URL && TURSO_AUTH_TOKEN)
  → PrismaLibSql adapter → Turso cloud
else
  → PrismaClient → local SQLite
```

### 資料模型

| Model | 用途 |
|-------|------|
| User | 使用者（Google 登入），含 `role` 欄位（user/admin） |
| Account | NextAuth OAuth 帳號綁定 |
| Session | 使用者 Session |
| VerificationToken | Email 驗證 Token |
| Submission | 組織投稿（含 pending/approved/rejected 狀態） |
| Comment | 文章留言（關聯 User，含 articleSlug 索引） |
| Reaction | 匿名按讚/倒讚（IP hash 防重複，articleSlug + ipHash unique） |

## 內容管理

### Markdown 文章（技術新知 / 應用新知 / PC 小筆記）

```
content/
├── tech/       # 技術新知
├── apps/       # 應用新知
└── notes/      # PC 小筆記
```

每篇文章的 frontmatter：

```yaml
---
title: "文章標題"
date: "2026-03-26"
author: "作者名"
tags: ["tag1", "tag2"]
summary: "摘要文字"
---
```

文章流程：寫 `.md` → push 到 GitHub → Vercel 自動部署 → 上線

### 投稿系統（組織應用專區）

投稿流程：
1. Google 登入 → `/showcase/submit` 填寫表單
2. 投稿進入 `pending` 狀態
3. 管理員 `/admin` 審核 → approved / rejected
4. 通過的投稿顯示在 `/showcase`

## 認證系統

- **Provider**: Google OAuth 2.0
- **Adapter**: `@auth/prisma-adapter`（NextAuth ↔ Prisma 同步）
- **Google Cloud 專案**: `mingyi-agent`
- **登入頁**: `/auth/signin`
- **Callback URI**: `https://e-news-lilac.vercel.app/api/auth/callback/google`

## 路由結構

| 路徑 | 類型 | 說明 |
|------|------|------|
| `/` | 靜態 | 首頁（Hero + 各區塊預覽） |
| `/tech` | 靜態 | 技術新知列表 |
| `/tech/[slug]` | 動態 | 技術文章詳情（含 SEO metadata） |
| `/apps` | 靜態 | 應用新知列表 |
| `/apps/[slug]` | 動態 | 應用文章詳情 |
| `/notes` | 靜態 | PC 小筆記列表 |
| `/notes/[slug]` | 動態 | 筆記詳情 |
| `/showcase` | 動態 | 組織應用展示（已審核） |
| `/showcase/submit` | 動態 | 投稿表單（需登入） |
| `/admin` | 動態 | 管理員審核後台 |
| `/auth/signin` | 靜態 | Google 登入頁 |
| `/api/auth/[...nextauth]` | API | NextAuth 端點 |
| `/api/showcase` | API | GET 列表 / POST 新增 |
| `/api/showcase/[id]` | API | PATCH 更新狀態 |
| `/api/comments` | API | GET 留言 / POST 新增 |
| `/api/comments/[id]` | API | PATCH 編輯 / DELETE 刪除 |
| `/api/reactions` | API | GET 按讚數 / POST 投票 |

## 元件架構

```
components/
├── Navbar.tsx          # 頂部導航（RWD 漢堡選單）
├── NavLinks.tsx        # 導航連結（桌面/手機共用）
├── AuthButton.tsx      # 登入/登出按鈕（Client Component）
├── Hero.tsx            # 首頁漸層橫幅
├── SectionBlock.tsx    # 左文右圖交替區塊
├── ArticleCard.tsx     # 文章卡片
├── ArticleGrid.tsx     # 文章卡片 Grid
├── CommentSection.tsx  # 文章留言區（Client Component）
├── CommentItem.tsx     # 單則留言（編輯/刪除）
├── ReactionBar.tsx     # 匿名按讚/倒讚（Client Component）
└── Footer.tsx          # 頁尾
```

## SEO 策略

- 全站 metadata template：`%s | AI E-News`
- 每篇文章有獨立 `generateMetadata()`（標題、摘要、Open Graph）
- `robots: { index: true, follow: true }`
- Open Graph 設定：`locale: "zh_TW"`, `type: "website"`
