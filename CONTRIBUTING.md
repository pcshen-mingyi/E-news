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

4. 撰寫文章，須包含 frontmatter：
   ```markdown
   ---
   title: "文章標題"
   date: "2026-03-26"
   author: "你的名字"
   tags: ["tag1", "tag2"]
   summary: "一句話摘要，會顯示在卡片上"
   ---

   ## 正文開始

   支援完整 Markdown 語法：

   - **粗體**、*斜體*
   - `行內程式碼`
   - 程式碼區塊（附語法高亮）
   - 圖片、連結、表格
   ```

5. 提交 PR：
   ```bash
   git add content/tech/2026-03-26-llm-fine-tuning.md
   git commit -m "post: LLM Fine-tuning 入門指南"
   git push -u origin post/my-article-name
   ```

6. 在 GitHub 建立 Pull Request，合併後自動部署

### Frontmatter 欄位說明

| 欄位 | 必填 | 說明 |
|------|------|------|
| `title` | 是 | 文章標題 |
| `date` | 是 | 發布日期（YYYY-MM-DD） |
| `author` | 建議 | 作者名字 |
| `tags` | 建議 | 標籤陣列，用於分類和搜尋 |
| `summary` | 建議 | 一句話摘要，顯示在卡片和 SEO 描述 |

### 分類指引

| 分類 | 適合內容 |
|------|---------|
| 技術新知 (`tech`) | AI 模型架構、演算法、論文解讀、技術深度文 |
| 應用新知 (`apps`) | AI 工具評測、產業應用案例、導入經驗 |
| PC 小筆記 (`notes`) | 學習心得、使用技巧、快速筆記 |

## 投稿到組織應用專區

組織應用專區透過網站投稿，不需要編輯程式碼：

1. 前往網站，用 Google 帳號登入
2. 點選「組織應用專區」→「我要投稿」
3. 填寫表單：組織名稱、標題、描述、內容、標籤
4. 提交後等待管理員審核

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

### 分支命名

- `feat/feature-name` — 新功能
- `fix/bug-name` — Bug 修復
- `post/article-name` — 新文章
- `docs/doc-name` — 文件更新
