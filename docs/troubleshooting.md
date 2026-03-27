# 問題排解指南

> 開發過程中遇到的問題與解法，供日後參考

---

## Vercel 部署：Showcase 頁面 Crash

**症狀**: `/showcase` 頁面顯示「This page couldn't load - A server error occurred」

**原因**: Vercel Serverless Functions 的檔案系統是唯讀且短暫的，SQLite `file:./dev.db` 無法在 Vercel 上運作。每次 Function cold start 都會丟失資料。

**解法**: 遷移到 Turso cloud SQLite，透過 `@prisma/adapter-libsql` 連接。`lib/prisma.ts` 自動根據環境變數切換。

---

## Git Push 認證失敗

**症狀**: `fatal: could not read Username for 'https://github.com'`

**原因**: 沒有設定 Git 認證方式

**解法**:
```bash
gh auth login        # 登入 GitHub CLI
gh auth setup-git    # 設定 Git 使用 GitHub CLI 認證
```

---

## Port 3000 被佔用

**症狀**: dev server 自動跳到 3001

**解法**:
```bash
# 找出佔用 3000 的程序
lsof -i :3000

# 殺掉程序
kill -9 <PID>

# 重啟 dev server
npm run dev
```

---

## Google OAuth 設定問題

### Callback URI 不正確

**症狀**: 登入後出現 redirect_uri_mismatch 錯誤

**解法**: 確認 Google Cloud Console 的 Authorized redirect URIs 包含：
```
http://localhost:3000/api/auth/callback/google
https://e-news-lilac.vercel.app/api/auth/callback/google
```

### OAuth 同意畫面未設定

**症狀**: 顯示 "Access blocked: This app's request is invalid"

**解法**: 前往 Google Cloud Console → OAuth 同意畫面 → 填寫應用程式名稱、support email 等必填欄位

---

## Prisma 相關

### `prisma generate` 失敗

**症狀**: Build 時找不到 Prisma Client

**解法**: 確認 `package.json` 有 postinstall hook：
```json
"scripts": {
  "postinstall": "prisma generate"
}
```

### Migration 與 Turso 同步

**注意**: `npx prisma migrate dev` 只作用於本地 SQLite。要同步到 Turso：
```bash
npx prisma db push
```

---

## 常見開發指令速查

```bash
# 開發
npm run dev

# 建置
npm run build

# 資料庫 GUI
npx prisma studio

# 本地 migration
npx prisma migrate dev --name <name>

# 推送 schema 到 Turso
npx prisma db push

# Git
git add <files>
git commit -m "type: description"
git push origin main
```
