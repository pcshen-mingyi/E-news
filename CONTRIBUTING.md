# 貢獻指南

歡迎同事一起貢獻 AI E-News 的內容！

## 新增文章（最常見的貢獻方式）

### 步驟

1. Clone 專案並建立新分支：
   ```bash
   git checkout -b post/my-article-name
   ```

2. 在對應分類資料夾建立 Markdown 檔案：
   - `content/tech/` — 技術新知
   - `content/apps/` — 應用新知
   - `content/notes/` — PC 小筆記

3. 檔案命名格式：`YYYY-MM-DD-slug-name.md`
   ```
   content/tech/2026-03-26-llm-fine-tuning.md
   ```

4. 撰寫文章（詳細格式見下方）

5. 如果有縮圖，將圖片放到 `public/images/articles/`

6. 提交 PR：
   ```bash
   git add content/tech/2026-03-26-llm-fine-tuning.md
   git add public/images/articles/llm-fine-tuning.webp  # 如果有縮圖
   git commit -m "post: LLM Fine-tuning 入門指南"
   git push -u origin post/my-article-name
   ```

7. 在 GitHub 建立 Pull Request，合併後自動部署

---

## 文章格式規範

### 完整範例

```markdown
---
title: "RAG 技術完整指南：從原理到實作"
date: "2026-03-27"
author: "PC"
tags: ["RAG", "LLM", "向量資料庫"]
summary: "深入解析 RAG 架構，並以實際案例示範如何結合檢索與生成，打造精準的 AI 問答系統。"
thumbnail: "/images/articles/rag-guide.webp"
---

## 前言

簡短介紹文章主題和讀者能學到什麼...

## 主要內容

### 第一節：什麼是 RAG？

正文內容，支援完整 Markdown 語法：

- **粗體**、*斜體*
- `行內程式碼`
- [超連結](https://example.com)

### 第二節：實作步驟

程式碼區塊（附語法高亮）：

\```python
from langchain import RetrievalQA
\```

### 第三節：成果與心得

分享你的觀察和建議...

## 總結

一段簡短的總結，幫助讀者回顧重點。
```

### Frontmatter 欄位說明

| 欄位 | 必填 | 格式 | 說明 |
|------|------|------|------|
| `title` | ✅ 必填 | 字串 | 文章標題，建議 10-30 字 |
| `date` | ✅ 必填 | `YYYY-MM-DD` | 發布日期，影響排序（新的在前） |
| `author` | 建議填 | 字串 | 作者名字 |
| `tags` | 建議填 | 字串陣列 | 標籤，卡片最多顯示 3 個 |
| `summary` | 建議填 | 字串 | 一句話摘要（50 字以內），顯示在卡片和 SEO |
| `thumbnail` | 選填 | 路徑字串 | 文章縮圖，沒填會顯示預設漸層圖 |

### 縮圖規範

| 項目 | 建議 |
|------|------|
| 存放位置 | `public/images/articles/` |
| 命名方式 | 與文章 slug 一致，例如 `rag-guide.webp` |
| 檔案格式 | `.webp`（優先）、`.png`、`.jpg` |
| 建議尺寸 | 800 × 450 px（16:9 比例） |
| 檔案大小 | 100KB 以內 |
| 路徑寫法 | `/images/articles/rag-guide.webp`（以 `/` 開頭） |

> 💡 **小技巧**：可以用 [Google ImageFX](https://aitestkitchen.withgoogle.com/tools/image-fx) 或 Gemini 免費生成配圖，再用 `cwebp -q 80 -resize 800 0 input.png -o output.webp` 壓縮。

### 各分類視覺風格

為了讓網站視覺一致，每個分類有各自的色彩風格：

| 分類 | 主色調 | 視覺風格 | 關鍵元素 |
|------|--------|---------|---------|
| 技術新知 | 深藍紫色 (#1a237e ~ #6a1b9a) | 科技感、冷調 | 電路板線條、數據流、幾何圖形 |
| 應用新知 | 暖橘色 (#e65100 ~ #ffa000) | 溫暖、實用 | 人與 AI 互動、工作場景、協作意象 |
| PC 小筆記 | 柔和綠色 (#2e7d32 ~ #81c784) | 輕鬆、手寫感 | 筆記本、便利貼、書桌場景 |

生成縮圖時，請依照文章分類使用對應的色彩與視覺元素，確保整體風格統一。詳細的 Prompt 範本與色票可參考各分類的 Skill 文件（`.claude/skills/enews-tech/`、`enews-apps/`、`enews-notes/`）。

**沒有縮圖也沒關係！** 不填 `thumbnail` 欄位，卡片會顯示漂亮的漸層底色 + 分類 emoji。

---

## 分類指引

| 分類 | 資料夾 | 適合內容 | 範例主題 |
|------|--------|---------|---------|
| 技術新知 | `content/tech/` | AI 模型架構、演算法、論文解讀 | Transformer 原理、Fine-tuning 教學 |
| 應用新知 | `content/apps/` | AI 工具評測、產業應用案例 | ChatGPT 企業導入、AI 客服實戰 |
| PC 小筆記 | `content/notes/` | 學習心得、使用技巧、快速筆記 | Prompt 工程技巧、工具比較心得 |

---

## 寫作建議

### 標題

- ✅ 具體明確：`RAG 技術完整指南：從原理到實作`
- ❌ 太模糊：`AI 很厲害`

### 摘要 (summary)

- ✅ 說明讀者能學到什麼：`深入解析 RAG 架構，並以實際案例示範如何打造 AI 問答系統。`
- ❌ 太空泛：`關於 RAG 的一些東西`

### 標籤 (tags)

- 使用 2-5 個標籤
- 優先用既有標籤保持一致性
- 常用標籤：`LLM`、`RAG`、`Prompt Engineering`、`ChatGPT`、`Computer Vision`、`NLP`、`Fine-tuning`、`Agent`

### 正文

- 善用 `##` 和 `###` 做章節分層
- 程式碼請標注語言（如 ` ```python `）
- 適當加入圖片、表格增加可讀性
- 建議長度：800-2000 字

---

## 投稿到組織應用專區

組織應用專區透過網站投稿，不需要編輯程式碼：

1. 前往網站，用 Google 帳號登入
2. 點選「組織應用專區」→「我要投稿」
3. 填寫表單：組織名稱、標題、描述、內容、標籤
4. 提交後等待管理員審核

---

## 程式碼貢獻

### 環境設定

```bash
git clone <repo-url>
cd E-news
npm install
cp .env.example .env
# 編輯 .env 填入必要設定
npx prisma migrate dev
npm run dev
```

### Commit 訊息格式

```
<type>: <description>
```

Types：
- `feat` — 新功能
- `fix` — 修復 Bug
- `post` — 新增文章
- `refactor` — 重構
- `docs` — 文件更新
- `chore` — 雜項
- `style` — 樣式調整
- `perf` — 效能優化

### 分支命名

- `feat/feature-name` — 新功能
- `fix/bug-name` — Bug 修復
- `post/article-name` — 新文章
- `docs/doc-name` — 文件更新
