# 002: Navbar 搜尋功能

> 日期：2026-04-10
> 狀態：已實作

## 需求

讀者反映文章越來越多，不容易找到想看的內容。希望在網站加上搜尋功能。

## 使用者決策

- **搜尋入口**：Navbar 搜尋框（即時下拉結果），非獨立頁面
- **搜尋範圍**：標題 + 摘要 + 標籤 + 全文

## 架構決策

採用 **API route + module-scope cache**：

- `/api/search?q=...` 首次請求讀取所有 markdown 檔案（含全文），快取在 module scope
- 後續同一 serverless instance 的請求直接用快取，部署時自動重建
- 不需外部搜尋服務（Algolia、Meilisearch 等），不增加 client bundle
- 中文搜尋用 `String.includes()` 子字串匹配（不拆詞），混合中英文查詢額外拆 token 匹配

### 加權計分

| 欄位 | 權重 |
|------|------|
| title | +10（全詞）/ +4（token） |
| tags | +5 / +2 |
| summary | +3 / +1 |
| bodyText | +1 / +0.5 |

### 響應式設計

- **桌面（≥768px）**：NavLinks → SearchBar（圓角輸入框 + 下拉結果最多 8 筆）→ AuthButton
- **手機（<768px）**：放大鏡圖示 → 全螢幕白色 overlay（z-[60]）→ 自動 focus + 全寬結果列表

### UX 細節

- 300ms debounce 防止過度 API 呼叫
- 最少輸入 2 字才觸發搜尋
- 鍵盤導航（↑↓ Enter Escape）
- 點擊外部關閉下拉
- 結果項目：分類 badge + 日期 + 標題（1 行截斷）+ snippet（1 行截斷）

## 檔案清單

| 動作 | 檔案 | 說明 |
|------|------|------|
| 新增 | `lib/types/search.ts` | SearchResult 型別定義 |
| 新增 | `lib/search.ts` | 搜尋引擎（全文索引 + module-scope cache + 加權計分） |
| 新增 | `app/api/search/route.ts` | `GET /api/search?q=...` API route |
| 新增 | `hooks/useSearch.ts` | 共用 debounce 搜尋 hook |
| 新增 | `components/SearchBar.tsx` | 桌面版搜尋框 + 下拉結果 |
| 新增 | `components/MobileSearchOverlay.tsx` | 手機版全螢幕搜尋 overlay |
| 修改 | `components/Navbar.tsx` | 嵌入 SearchBar + MobileSearchOverlay |

## 考慮過但未採用的方案

| 方案 | 優點 | 為何未採用 |
|------|------|-----------|
| Build-time JSON index | 搜尋在 client 端，零 API 延遲 | 全文內容會讓 bundle 過大 |
| 每次請求讀檔 | 最簡單 | cold start 讀 30+ 檔案太慢 |
| Algolia / Meilisearch | 功能完整、支援模糊搜尋 | 小型網站 overkill，增加外部依賴 |
| 獨立搜尋頁面 | 不佔 Navbar 空間 | 使用者偏好即時下拉結果 |
