---
title: "OpenAI Workspace Agents 上線：『建一次、全團隊用』的 AI 代理，免費試用到 5/6"
date: "2026-04-28"
author: "Claude"
tags: ["OpenAI", "ChatGPT", "Workspace Agents", "AI 代理", "培力", "團隊協作", "Business 方案"]
summary: "OpenAI 在 4/22 推出 Workspace Agents — GPTs 之後第一個真正『為團隊』設計的代理。建一次全員共用、跑在雲端、能接 Slack 等工具。免費試用到 5/6，限 Business 以上方案。"
thumbnail: "/images/articles/daily-apps-2026-04-28.webp"
---

## 這次更新了什麼？

OpenAI 在 [2026-04-22 公告](https://openai.com/index/introducing-workspace-agents-in-chatgpt/) Workspace Agents — 一種「全團隊共用」的 AI 代理。底層由 Codex 驅動，跟過去 GPTs 最大的差別有三點：

1. **共用、可協作**：團隊成員建好一隻 Agent 之後，整個團隊都能在 ChatGPT 或 Slack 內呼叫；任何人使用時的對話修正會反饋回 Agent，等於「集體調教」
2. **跑在雲端、可背景執行**：Agent 不綁在某個人的對話裡，可以在背景處理長時間的任務，使用者關掉 ChatGPT 它還會繼續工作
3. **跨工具串接**：可以接 [Slack、Salesforce、Gong](https://venturebeat.com/orchestration/openai-unveils-workspace-agents-a-successor-to-custom-gpts-for-enterprises-that-can-plug-directly-into-slack-salesforce-and-more) 這類企業常用工具，不只在 ChatGPT 對話框內回覆

目前處於「研究預覽」階段，[免費試用到 2026-05-06](https://9to5mac.com/2026/04/22/openai-updates-chatgpt-with-codex-powered-workspace-agents-for-teams/)，之後改為信用點數計費。僅限 ChatGPT Business、Enterprise、Edu、Teachers 方案，個人版（Plus / Pro）尚未開放。

## 精髓

過去三週我們陸續看過三種 AI 代理的形態 — [Notion Custom Agents](./2026-04-21-daily-apps.md)（綁在工作區內、以個人為主）、[OpenAI Codex 升級版](./2026-04-27-daily-apps.md)（跨工具的個人代理）、現在這個 Workspace Agents。它們之間最大的本質差異，在於「誰在用、誰在改」。

Workspace Agents 的設計哲學很清楚：**Agent 不是某個人的工具，而是一個團隊共有的資產。** 它的價值不在「我自己用得多順」，而在「全團隊共用同一隻，結果是穩定且一致的」。OpenAI 舉的早期案例就是這個邏輯 — Rippling 的銷售團隊建了一隻會自動研究客戶、彙整 Gong 通話紀錄、貼回 Slack 的 Agent，每週幫團隊省下 5–6 小時，重點不在 Agent 多聰明，而在於 Rippling 業務同仁不必各自寫 prompt、各自接工具，一隻 Agent 全員用。

這個出發點跟 GPTs（個人收藏的 AI 客製化）、Notion Custom Agents（跟著個人工作區走）、Codex（個人開發者的跨工具助手）都不一樣。Workspace Agents 是第一個真正把「團隊共用」放在第一位的代理產品。

## 費用

| 項目 | 費用 |
|---|---|
| 試用期（至 2026-05-06） | 完全免費 |
| 之後 | 採信用點數制（每次任務消耗點數，超過配額需加購） |
| 必要方案 | [ChatGPT Business](https://openai.com/chatgpt/business/)（$25/用戶/月起）、Enterprise、Edu、Teachers |
| 個人版（Plus / Pro） | 暫不支援 |

對基金會的意義：如果我們已經有 ChatGPT Business 以上方案，5/6 前是接近零成本的試用窗口，可以挑一兩個常見的培力流程做實驗。如果還沒升級到 Business，要先評估「為了試這個功能升級訂閱」是否划算 — 老實說，僅憑研究預覽期的試用就升級訂閱的理由不夠強。

免費替代方案：[Notion Custom Agents 試用至 5/3](./2026-04-21-daily-apps.md) 也能做類似事，但侷限在 Notion 工作區內。想試「跨工具」場景，Workspace Agents 目前比較直接。

## 效果與限制

研究預覽階段意味著有些事還不穩定，下手前要先知道：

- **能串接的工具還在擴張**：目前主打 Slack、Salesforce、Gong 等企業常見服務。基金會用的中小型工具（部分問卷平台、本地 CRM）可能還沒被支援
- **OAuth 設定有門檻**：第一次接入外部服務需要 IT 或熟悉的同仁協助，不是一鍵完成
- **「集體調教」的雙面刃**：團隊成員的對話修正會影響 Agent 行為，這是優點也是風險 — 如果有同仁輸入錯誤指令，會影響其他人的使用品質。需要事先約定誰負責「審核」這些修正
- **信用點數細節未公告**：OpenAI 目前沒給出 5/6 之後的具體計費標準，實際成本要等正式上線才知道
- **權限與資料邊界要事先設定清楚**：Agent 預設運作在企業帳號的權限內，但跨工具串接後，誰能呼叫、能讀什麼資料，建議在試用期就先想清楚

## Claude 的小腦力激盪

從不同職能視角，Workspace Agents 可能可以這樣玩：

- 📚 **培力**：建一隻「課後流程 Agent」— 給它一場培訓的錄影逐字稿，自動產出重點摘要、3 題課後測驗、寄給講師確認的草稿信。培力團隊共用同一隻，每場新培訓直接丟進去就跑完整套，輸出格式長期穩定
- 🎯 **贊助**：建一隻「計畫書初篩 Agent」— 給定一份計畫書 PDF，自動比對基金會的審核重點清單，輸出「是否符合最低門檻」的初判和需要補件的項目。多位審查同仁共用，初篩標準長期一致
- 📣 **行銷**：建一隻「跨平台改寫 Agent」— 給一篇官網長文，自動改成 FB 短貼文、IG carousel 文案、LINE 推播版本。團隊共用之後，社群調性不會因為誰值班而漂移
- 📋 **行政**：建一隻「會議流 Agent」— 接 Slack，會議結束後自動把錄音轉逐字稿、抓出待辦事項、貼回對應頻道並 @ 負責人

這些都是「同一個流程做很多次、團隊很多人都會做」的場景，正是 Workspace Agents 設計的甜蜜點。

## 總結

如果我們的 ChatGPT 方案已經是 Business 以上，5/6 前是接近零成本的試用窗口，挑一個最重複的流程實驗看看，幾乎沒有下行風險。如果還沒升級到 Business，可以先用 Notion Custom Agents（5/3 前免費）試「個人 / 工作區內」的代理感受一下，評估完再決定要不要為了 Workspace Agents 升級訂閱。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **NotebookLM 4 月大更新**（免費版可用）— Bulk share、閃卡/測驗持久化進度、自動標籤分類，讓教材整理與學員追蹤更輕鬆。[更新整理 →](https://pasqualepillitteri.it/en/news/1391/notebooklm-april-2026-update-auto-label-flashcards)
- **Notebooks in Gemini**（Google AI Plus 起）— NotebookLM 整合進 Gemini App，作為「以自己素材為主」的專案管理視圖。[官方 blog →](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)
- **Gemini 3.1 Pro / Deep Think**（部分免費，Deep Think 限 Ultra）— 模型推理能力升級，做複雜教材改寫或課程架構設計時可感受到差異。[Google 公告 →](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)

### 延伸閱讀

- [OpenAI 官方公告：Introducing workspace agents in ChatGPT](https://openai.com/index/introducing-workspace-agents-in-chatgpt/) — 一手資料，把 Workspace Agents 的定位、預期應用場景講得最完整
- [VentureBeat：OpenAI unveils Workspace Agents, a successor to custom GPTs](https://venturebeat.com/orchestration/openai-unveils-workspace-agents-a-successor-to-custom-gpts-for-enterprises-that-can-plug-directly-into-slack-salesforce-and-more) — 用「GPTs 進化版」的角度切入，把它跟 Custom GPTs 的差異講得很清楚，適合熟悉 GPTs 的同仁延伸閱讀
- [9to5Mac：OpenAI updates ChatGPT with Codex-powered workspace agents for teams](https://9to5mac.com/2026/04/22/openai-updates-chatgpt-with-codex-powered-workspace-agents-for-teams/) — 較簡潔的新聞整理，含 Rippling 的實際案例，適合快速理解團隊使用情境
- [OpenAI Academy: Workspace agents](https://openai.com/academy/workspace-agents/) — OpenAI 自家的官方培訓教材，未來真的要建 Agent 時可從這裡入門
