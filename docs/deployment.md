# 部署與基礎設施

> 最後更新：2026-03-27

## 部署資訊

| 項目 | 值 |
|------|------|
| 線上網址 | https://e-news-lilac.vercel.app |
| GitHub Repo | https://github.com/pcshen-mingyi/E-news |
| 部署平台 | Vercel |
| 資料庫 | Turso (cloud SQLite) |
| Google Cloud 專案 | `mingyi-agent` |
| 自動部署 | push 到 `main` 分支即觸發 |

## 環境變數

### 本地開發 (`.env`)

```bash
DATABASE_URL="file:./dev.db"          # 本地 SQLite
AUTH_SECRET="<隨機密鑰>"               # openssl rand -base64 32
AUTH_GOOGLE_ID="<Google Client ID>"
AUTH_GOOGLE_SECRET="<Google Client Secret>"
```

### Vercel 生產環境

```bash
TURSO_DATABASE_URL="libsql://..."      # Turso 資料庫 URL
TURSO_AUTH_TOKEN="..."                 # Turso 認證 Token
AUTH_SECRET="<隨機密鑰>"
AUTH_GOOGLE_ID="<Google Client ID>"
AUTH_GOOGLE_SECRET="<Google Client Secret>"
```

> 注意：Vercel 上**不需要** `DATABASE_URL`，`lib/prisma.ts` 會自動偵測 Turso 環境變數

## Vercel 部署流程

```
git push origin main
       |
       v
Vercel 自動觸發 Build
       |
       ├── npm install
       ├── prisma generate (postinstall hook)
       └── next build
       |
       v
部署完成，新版上線
```

## Google OAuth 設定

### Google Cloud Console

- 專案名稱：`mingyi-agent`
- OAuth 同意畫面：External（生產環境需申請驗證）
- 品牌名稱：AI E-News

### Authorized redirect URIs

```
http://localhost:3000/api/auth/callback/google    ← 本地開發
https://e-news-lilac.vercel.app/api/auth/callback/google  ← 生產環境
```

### 如何取得新的 OAuth 憑證

1. 前往 [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. 選擇專案 `mingyi-agent`
3. 點選「建立憑證」→「OAuth 用戶端 ID」
4. 應用程式類型：Web Application
5. 填入授權重新導向 URI
6. 取得 Client ID 和 Client Secret
7. 更新 `.env` 和 Vercel 環境變數

## Turso 資料庫管理

### 常用指令

```bash
# 登入
turso auth login

# 查看資料庫
turso db list

# 連接資料庫 Shell
turso db shell <database-name>

# 取得資料庫 URL
turso db show <database-name> --url

# 建立/更新 Auth Token
turso db tokens create <database-name>
```

### Schema 同步

本地開發完 Schema 變更後，需要同步到 Turso：

```bash
# 1. 本地 migrate
npx prisma migrate dev --name <migration-name>

# 2. 推送 Schema 到 Turso
npx prisma db push
```

## 設定管理員

首位管理員需手動設定：

```bash
# 本地
npx prisma studio
# → 打開 User 表 → 將 role 改為 "admin"

# 或使用 Turso Shell
turso db shell <database-name>
> UPDATE User SET role = 'admin' WHERE email = 'your@email.com';
```
