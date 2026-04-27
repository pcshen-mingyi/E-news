---
title: "Codex 從寫程式工具變成跨工具助手：當 AI 助手能自己上網查資料，盡職調查可能不再得用人手翻"
date: "2026-04-27"
author: "Claude"
tags: ["OpenAI", "Codex", "AI 代理", "Computer Use", "盡職調查", "贊助", "付費"]
summary: "OpenAI 在 4/16 把 Codex 從工程師工具大改版成跨工具助手——加上 90+ 插件、能自己操作 Mac 瀏覽器、記憶與排程。4/24 又接上 GPT-5.5。對贊助而言，盡職調查這類「跨多個外部網站撈資料」的工作，理論上可全程交給它。"
thumbnail: "/images/articles/daily-apps-2026-04-27.webp"
---

先描述一個常見的工作情境：假設我們手上有一個受贊助單位要做續約評估，需要把 IRS Form 990、慈善機構評鑑網站的資料、近半年的媒體報導、過往三年我們和這個單位的信件與進度報告，全部串在一起看，再寫一份盡職調查 brief。

這種「跨多個外部網站、跨多個內部工具、把零散訊息收成一份判斷依據」的工作，過去幾乎都得人手翻。AI 助手能幫忙的部分，多半止於「我們把資料貼進去後，它幫忙寫摘要」。

OpenAI 在 4 月給 Codex 一輪重大改版後，這件事的邊界開始變了。

## 這次更新了什麼？

OpenAI 在 [2026 年 4 月 16 日推出代號「Codex for (almost) everything」的大改版](https://openai.com/index/codex-for-almost-everything/)，把 Codex 從原本的工程師寫程式工具，重新定位成跨工具的工作助手。緊接著 4 月 24 日，[最新的 GPT-5.5 模型也在 Codex 上線](https://openai.com/index/introducing-gpt-5-5/)。

具體變化有四個：

1. **90+ 個插件**——[插件市集](https://developers.openai.com/codex/plugins)裡列出 Slack、Gmail、Notion、Google Drive、Microsoft 365、HubSpot、Salesforce、Jira 等主流工作軟體都已支援，不需要工程師寫 API
2. **電腦操作（Computer Use）on macOS**——Codex 可以在 Mac 上自己開瀏覽器、移動游標、點擊、輸入。多個 agent 可以同時跑而不互相干擾
3. **記憶與排程**——Codex 會記住我們的審查偏好、過去的修正、特殊背景；可排程讓它跨數天或數週持續推進長期任務
4. **400K 字元上下文（搭配 GPT-5.5）**——一份完整計畫書 + 三年財報 + 過往溝通記錄一次讀完，還有空間

OpenAI 自己對這次改版的定位是：Codex 不再只是寫程式工具，而是一個能「把散落各工具的脈絡拉在一起、推理重要點，產出 brief、plan、checklist、draft、follow-up」的代理。

## 精髓

很多 AI 助手都能讀資料、寫摘要、回答問題，差別其實在「資料怎麼到 AI 手上」。多數工具是被動的——我們得自己貼資料、複製檔案、整理素材給它。AI 寫得再好，前置整理還是人在做。

Codex 這次最關鍵的轉變是：**它能自己出去把資料找回來。**

兩個層次的「找」：

第一層是**跨工具找**。透過插件直接連 Slack、Gmail、Notion、Drive，當我們問「過去三個月與 A 單位的所有重要往來」，它直接從各工具把訊息拉出來，不必每次手動貼。

第二層是**跨網站找**。Computer Use 讓它能像人一樣開瀏覽器、輸入網址、點選欄位、抓資料。盡職調查需要查的那些外部資料庫——IRS Form 990 的線上查詢、Charity Navigator 的評鑑頁、新聞媒體的搜尋結果——理論上都可以由它代為操作。

加上記憶能力，它會記得「這次審查我們最看重的三件事」「這個 grantee 過去有過特殊狀況」，下一輪不必重新交代。這個組合是其他主流 AI 助手目前還沒有的。

## 費用

[ChatGPT Plus（$20/月）即可使用](https://openai.com/codex/) Codex 桌面版的主要功能，包含基本插件、記憶、Computer Use。團隊版 Business 與 Enterprise 提供更高用量、團隊管理、數據隔離設定。

如果想個人試水溫，ChatGPT Plus 的 $20/月是最低門檻。先用一個月測試，從一兩個固定的盡職調查情境開始，比一次推到全部門使用更穩。

要注意的是，[OpenAI 在 4 月稍早也推出了 $100/月的新 ChatGPT Pro 方案](https://thenextweb.com/news/openais-new-100-chatgpt-pro-plan-targets-claude-max-with-five-times-the-codex-access)，主打更高的 Codex 使用配額。如果評估結果是高頻率使用 Computer Use 與長期排程，這個方案的單位成本會比 Plus 升級到 Business 划算。

## 效果與限制

雖然能力跳了一級，這幾個邊界要先知道：

1. **Computer Use 目前只在 macOS**——Windows 同仁無法用「自動操作電腦」的功能（仍可用插件、聊天、記憶）。如果工作主力在 Windows，這個亮點先用不上
2. **介面有學習門檻**——Codex 的設計初衷仍然是工程師導向。第一次打開可能會看到偏 terminal 風格的介面，要花一點時間適應。建議搭配 OpenAI 官方的 [Working with Codex](https://openai.com/academy/working-with-codex/) 教學一起入門
3. **自動操作網站需要人工把關**——Codex 在外部網站點擊、輸入時，偶爾會因為網頁改版、彈窗、驗證碼誤判動作。盡職調查的關鍵數據（金額、年份、單位名稱）一定要人工複核，不能全信 AI 跑出的結果
4. **記憶不會自動跨人**——它記住的是個人帳號的偏好與修正，A 同仁訓練的審查邏輯不會自動傳給 B 同仁。團隊共用的標準仍要靠人寫成文件
5. **GPT-5.5 在中文上仍非最強**——處理英文資料（IRS 表單、英文媒體）流暢；中文資料表現會稍弱，重要的中文文件建議搭配 Claude 一起跑

## Claude 的小腦力激盪

這個工具最有想像空間的，是「跨工具、跨網站、長期關係」的工作。試著想想各職能可以怎麼玩：

- 🎯 **贊助**——如果我們在做受贊助單位的盡職調查，可以讓 Codex 一次跑完外部資料（IRS 990、慈善評鑑、新聞輿情）+ 內部紀錄（過往溝通、合約、進度報告），產出初步盡職調查 brief。或是排程「每週掃一次這幾個 grantee 在新聞上的提及」做被動式監控
- 📚 **培力**——跨多個課程平台（Notion 教材庫、Slack 學員討論、Drive 上的講義），找出「最常被問的問題」與「學員自己沒提但行為上反映出的卡關點」，作為下一輪課程設計的依據
- 📣 **行銷**——排程跨平台社群監控，每天早上自動跑一輪我們關心的議題在 X、LinkedIn 上的討論，挑出值得回應的對象。比手動巡視省下很多時間
- 📋 **行政**——跨 Outlook + 公文系統 + Drive，整合「這個案子目前所有相關文件、決議、待辦」，省去人手翻找的時間。會議準備可以變成排程任務

特別有意思的是「Codex 自己上網查資料」這個能力——以前我們需要手動跑的那些「分散在多個外部系統的訊息整合」，理論上可以全程交由它完成，我們只負責看結果與校對。

## 總結

如果我們手上工作有相當比例花在「跨工具找資料、整理、彙整」，Codex 是 4 月最值得試的工具。先用個人 ChatGPT Plus（$20/月）試一個月，從「自動跑一個外部資料的盡職調查」開始，是最直接看到價值的切入方式。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **Google Workspace Intelligence**（含在 Google Workspace + Gemini 方案內）— Google 4/22 在 Cloud Next ’26 發表的「跨資料源語意層」，讓 Gemini 自動讀懂整個 Workspace（Gmail、Drive、Calendar、Chat）。對重度使用 Google Workspace 的單位有立即價值，門檻低。[了解更多 →](https://workspace.google.com/blog/product-announcements/introducing-workspace-intelligence)
- **GPT-5.5**（含在 ChatGPT Plus / Pro / Business / Enterprise）— OpenAI 4/23 發表的最新模型，已同時在 ChatGPT 與 Codex 上線。寫作、研究、跨工具任務的整體能力升級。[了解更多 →](https://openai.com/index/introducing-gpt-5-5/)
- **Microsoft Researcher Critique / Council**（M365 Copilot $30/用戶/月 + Frontier program）— 用 GPT 與 Claude 互相檢查的研究助手，DRACO benchmark 上比單一模型高約 14 個百分點。適合高風險審查場景，但門檻較高。[了解更多 →](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-multi-model-intelligence-in-researcher/4506011)

### 延伸閱讀

- [Codex for (almost) everything — OpenAI 官方公告](https://openai.com/index/codex-for-almost-everything/) — 想完整了解 4/16 改版背後的設計理念，這是第一手來源。OpenAI 自己怎麼解釋「Codex 不再只是寫程式工具」最值得讀
- [The Decoder — Codex 插件市集解析](https://the-decoder.com/openais-codex-gets-a-plugin-marketplace-for-slack-notion-figma-and-more/) — 第三方視角分析 90+ 插件背後的策略意圖，比官方公告更聚焦在「這對非工程師代表什麼」
- [Spicy Advisory — Codex April 2026 商務角度解析](https://www.spicyadvisory.com/blog/openai-codex-april-2026-update-business-workflows-2026) — 從商業工作流程角度評估各個新功能的實用價值，討論非工程師的使用情境
- [OpenAI Codex Plugins 官方頁面](https://developers.openai.com/codex/plugins) — 想試水溫前先看看自己常用的工具有沒有支援，這是實際的插件清單
