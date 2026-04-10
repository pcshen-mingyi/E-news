# 001: 匿名按讚/倒讚功能

> 日期：2026-04-07
> 狀態：已實作

## 需求

留言功能需要登入，門檻太高。希望有不需登入就能互動的方式，讓讀者表達文章是否有幫助。

## 使用者決策

- **位置**：文章末尾、留言討論區上方
- **防重複機制**：IP hash（後端記錄）

## 架構決策

### 資料模型

```prisma
model Reaction {
  id          String   @id @default(cuid())
  articleSlug String   // "tech/slug-name"
  ipHash      String   // SHA-256(IP + salt)，不儲存原始 IP
  type        String   // "like" | "dislike"
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([articleSlug, ipHash])
  @@index([articleSlug])
}
```

### API 設計

- **GET** `/api/reactions?articleSlug=...` → `{ likes, dislikes, userVote }`
  - `groupBy` 算數量 + `findUnique` 查當前 IP 的投票
- **POST** `/api/reactions` → `{ articleSlug, type }` → 三種情況：
  - 沒投過 → create
  - 同類型 → delete（取消投票）
  - 不同類型 → update（切換投票）

### 安全措施

- IP 以 SHA-256 + salt 雜湊，不儲存原始 IP
- Salt 可透過 `IP_HASH_SALT` 環境變數自訂
- CSRF origin header 檢查
- 2 秒 rate limit 防快速連擊
- `@@unique([articleSlug, ipHash])` 資料庫層級防重複

### UI 設計

- 「這篇文章對你有幫助嗎？」文字 + 👍/👎 按鈕 + 計數
- Optimistic update + 錯誤回滾
- 按讚啟用：teal 色調（`bg-teal/10 text-teal border-teal`）
- 倒讚啟用：紅色調（`bg-red-50 text-red-500 border-red-300`）
- 未選：灰色邊框（`bg-white text-text-secondary border-gray-200`）

## 檔案清單

| 動作 | 檔案 | 說明 |
|------|------|------|
| 修改 | `prisma/schema.prisma` | 新增 Reaction model |
| 新增 | `lib/ip-hash.ts` | IP → SHA-256 hash 工具 |
| 新增 | `app/api/reactions/route.ts` | GET/POST API route |
| 新增 | `components/ReactionBar.tsx` | 按讚/倒讚 client component |
| 修改 | `app/tech/[slug]/page.tsx` | 嵌入 ReactionBar |
| 修改 | `app/apps/[slug]/page.tsx` | 嵌入 ReactionBar |
| 修改 | `app/notes/[slug]/page.tsx` | 嵌入 ReactionBar |
| 新增 | `prisma/migrations/.../migration.sql` | DB migration |

## 考慮過但未採用的方案

| 方案 | 優點 | 為何未採用 |
|------|------|-----------|
| localStorage | 最簡單、零後端 | 換瀏覽器/清快取即可重複投票 |
| Fingerprint + localStorage | 比純 localStorage 難繞過 | 仍可繞過、增加前端複雜度 |

## 部署注意

需手動同步 Turso：`turso db shell e-news "<CREATE TABLE + INDEX SQL>"`
