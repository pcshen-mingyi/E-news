# AI E-News — 每日 AI 新知平台

團隊共用的 AI 新知網站，讓大家每天都能獲取 AI 技術與應用新知。

## 功能區塊

| 區塊 | 路徑 | 說明 |
|------|------|------|
| 技術新知 | `/tech` | AI 技術文章（Markdown 管理） |
| 應用新知 | `/apps` | AI 應用案例（Markdown 管理） |
| PC 小筆記 | `/notes` | 個人筆記專欄（Markdown 管理） |
| 組織應用專區 | `/showcase` | 帳號登入投稿，管理員審核後展示 |

## 技術架構

- **框架**: Next.js 16 (App Router)
- **樣式**: Tailwind CSS 4
- **字體**: Noto Sans TC + Inter
- **內容管理**: Markdown + gray-matter + remark
- **資料庫**: SQLite + Prisma ORM
- **認證**: NextAuth v5 (Google OAuth)
- **部署**: Vercel

## 快速開始

### 1. 安裝相依套件

```bash
npm install
```

### 2. 設定環境變數

複製 `.env.example` 為 `.env`，填入實際值：

```bash
cp .env.example .env
```

需要設定：
- `AUTH_SECRET` — 執行 `openssl rand -base64 32` 產生
- `AUTH_GOOGLE_ID` — Google OAuth Client ID
- `AUTH_GOOGLE_SECRET` — Google OAuth Client Secret

> Google OAuth 憑證請到 [Google Cloud Console](https://console.cloud.google.com/apis/credentials) 建立

### 3. 初始化資料庫

```bash
npx prisma migrate dev
```

### 4. 啟動開發伺服器

```bash
npm run dev
```

瀏覽器開啟 [http://localhost:3000](http://localhost:3000)

## 專案結構

```
E-news/
├── app/                        # Next.js App Router 頁面
│   ├── layout.tsx              # 全站 Layout（Navbar + Footer）
│   ├── page.tsx                # 首頁
│   ├── globals.css             # 全域樣式 + Tailwind 主題
│   ├── tech/                   # 技術新知
│   │   ├── page.tsx            # 列表頁
│   │   └── [slug]/page.tsx     # 文章頁（含 SEO metadata）
│   ├── apps/                   # 應用新知（同上結構）
│   ├── notes/                  # PC 小筆記（同上結構）
│   ├── showcase/               # 組織應用專區
│   │   ├── page.tsx            # 展示列表（已審核通過）
│   │   ├── submit/page.tsx     # 投稿表單（需登入）
│   │   └── [id]/page.tsx       # 投稿詳情
│   ├── admin/                  # 管理員後台
│   │   ├── page.tsx            # 審核儀表板
│   │   └── AdminSubmissionList.tsx
│   ├── auth/signin/page.tsx    # 登入頁
│   └── api/
│       ├── auth/[...nextauth]/ # NextAuth API
│       └── showcase/           # 投稿 CRUD API
│           ├── route.ts        # GET (列表) / POST (新增)
│           └── [id]/route.ts   # PATCH (審核狀態更新)
├── components/                 # 共用元件
│   ├── Navbar.tsx              # 導航列（RWD 漢堡選單）
│   ├── NavLinks.tsx            # 導航連結
│   ├── AuthButton.tsx          # 登入/登出按鈕
│   ├── Hero.tsx                # 首頁漸層橫幅
│   ├── SectionBlock.tsx        # 左文右圖交替區塊
│   ├── ArticleCard.tsx         # 文章卡片
│   ├── ArticleGrid.tsx         # 文章卡片 Grid
│   └── Footer.tsx              # 頁尾
├── content/                    # Markdown 文章（Git 管理）
│   ├── tech/                   # 技術新知文章
│   ├── apps/                   # 應用新知文章
│   └── notes/                  # PC 小筆記文章
├── lib/                        # 工具函式
│   ├── auth.ts                 # NextAuth 設定（Google OAuth）
│   ├── markdown.ts             # Markdown 解析（gray-matter + remark）
│   └── prisma.ts               # Prisma Client 單例
├── prisma/
│   ├── schema.prisma           # 資料庫 Schema
│   └── migrations/             # 資料庫遷移紀錄
└── public/                     # 靜態資源
```

## 新增文章

在 `content/` 對應的分類資料夾中建立 `.md` 檔案：

```markdown
---
title: "文章標題"
date: "2026-03-26"
author: "作者名"
tags: ["tag1", "tag2"]
summary: "文章摘要，會顯示在卡片和 SEO 描述"
---

文章內容，支援完整 Markdown 語法...
```

檔案命名建議：`YYYY-MM-DD-slug-name.md`（例如 `2026-03-26-llm-fine-tuning.md`）

Push 到 Git 後即自動發布。

## 投稿系統

### 投稿流程

1. 使用者透過 Google 帳號登入
2. 前往 `/showcase/submit` 填寫投稿表單
3. 投稿進入 `pending` 狀態等待審核
4. 管理員在 `/admin` 審核通過或退回
5. 通過的投稿顯示在 `/showcase`

### 設定管理員

首次登入後，在 SQLite 中手動設定：

```bash
npx prisma studio
```

找到 User 表，將目標使用者的 `role` 欄位改為 `admin`。

## API 文件

### GET `/api/showcase`

取得投稿列表。

| 參數 | 說明 |
|------|------|
| `status` | 篩選狀態（`pending` / `approved` / `rejected`），僅管理員可用 |

- 一般使用者：只回傳 `approved` 的投稿
- 管理員：可透過 `status` 參數篩選

**回應範例：**
```json
[
  {
    "id": "clx...",
    "title": "我們如何用 AI 優化客服",
    "description": "導入 ChatGPT 後的經驗分享",
    "content": "...",
    "orgName": "XX 公司",
    "tags": "chatgpt,customer-service",
    "status": "approved",
    "author": { "name": "張三", "image": "https://..." },
    "createdAt": "2026-03-26T08:00:00.000Z"
  }
]
```

### POST `/api/showcase`

新增投稿（需登入）。

**Request Body：**
```json
{
  "title": "投稿標題",
  "description": "簡短描述",
  "content": "詳細內容",
  "orgName": "組織名稱",
  "tags": "tag1,tag2"
}
```

**回應：** `201 Created` 回傳建立的投稿物件

### PATCH `/api/showcase/[id]`

更新投稿狀態（僅管理員）。

**Request Body：**
```json
{
  "status": "approved"
}
```

可用狀態：`pending` / `approved` / `rejected`

## 資料庫 Schema

### User（使用者）

| 欄位 | 類型 | 說明 |
|------|------|------|
| id | String | 主鍵 (cuid) |
| name | String? | 顯示名稱 |
| email | String? | Email（唯一） |
| image | String? | 頭像 URL |
| role | String | 角色：`user` / `admin` |

### Submission（投稿）

| 欄位 | 類型 | 說明 |
|------|------|------|
| id | String | 主鍵 (cuid) |
| title | String | 標題 |
| description | String | 簡短描述 |
| content | String | 完整內容 |
| orgName | String | 組織名稱 |
| tags | String | 逗號分隔的標籤 |
| status | String | 狀態：`pending` / `approved` / `rejected` |
| authorId | String | 作者 ID（外鍵） |

## 部署到 Vercel

### 步驟

1. 將專案推到 GitHub
2. 到 [Vercel](https://vercel.com) 匯入 GitHub repo
3. 設定環境變數：

| 變數 | 說明 |
|------|------|
| `DATABASE_URL` | `file:./dev.db`（或改用 Turso 等雲端 SQLite） |
| `AUTH_SECRET` | 隨機密鑰 |
| `AUTH_GOOGLE_ID` | Google OAuth Client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth Client Secret |

4. 部署！後續每次 push 都會自動部署

### Google OAuth 回呼 URL

在 Google Cloud Console 設定 Authorized redirect URI：
```
https://your-domain.vercel.app/api/auth/callback/google
```

## 開發指令

```bash
npm run dev          # 啟動開發伺服器
npm run build        # 建置正式版
npm run start        # 啟動正式版伺服器
npm run lint         # ESLint 檢查
npx prisma studio    # 開啟資料庫 GUI
npx prisma migrate dev  # 執行資料庫遷移
```

## 設計風格

- **主色**：湖水綠 `#2BA8A0`
- **漸層**：teal → 淺綠（Hero 區塊）
- **排版**：參考明怡基金會風格 — 左文右圖交替、卡片式文章列表
- **RWD**：手機版自動切換為單欄、漢堡選單
