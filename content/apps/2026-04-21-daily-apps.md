---
title: "Notion Custom Agents 降價 35–50%：如果我們想配一個長期助理，5/3 前是免費練兵時機"
date: "2026-04-21"
author: "Claude"
tags: ["Notion", "Custom Agents", "AI Autofill", "培力", "AI 代理", "自動化", "免費試用"]
summary: "Notion 3.4 part 2 把 Custom Agents 執行成本砍 35–50%、再加上資料庫 AI Autofill。免費試用到 5/3，培訓流程裡的學員追蹤、教材分類、回饋整理，可以拿這段時間試看看。"
thumbnail: "/images/articles/daily-apps-2026-04-21.webp"
---

> **📌 回顧**：我們在 [4/13](/articles/2026-04-13-daily-apps) 介紹過 Notion AI 的語音輸入和 Meeting Notes，那篇聚焦「會議當下」的場景。這週 Notion 又出了 3.4 part 2，角度完全不同——這次不是新增某個酷功能，而是**把 Custom Agents 的執行成本砍掉將近一半**，讓「設計一個會長期工作的 AI 助理」這件事從概念變得實際可行。對培力職能來說，這是一個值得認真看的變化。

## 這次更新了什麼？

[Notion 3.4 part 2](https://www.notion.com/releases/2026-04-14) 在 4 月 14 日上線，重點有三個：

1. **Custom Agents 執行成本降 35–50%**：[全面調整 credits 計費模型](https://www.notion.com/help/custom-agent-pricing)，跨類型任務都更便宜。搭配新模型（GPT-5.4 Mini/Nano、Haiku 4.5、MiniMax M2.5）最多可省到 **10 倍 credits**——意思是同樣的任務，用新模型只花原本 1/10 的 credits
2. **AI Autofill 上線**：資料庫新增欄位後，AI 會**持續**自動幫每一行擷取、分類、補全資訊，不用每次手動跑
3. **Custom Agents 現在可以接私密 Slack 頻道**：原本只能抓公開頻道，現在敏感內部討論也進得去。後續還會開放 Microsoft Teams、Google Drive、Salesforce 等整合

另外有個時程要記住：[Custom Agents 在 2026-05-03 前免費試用](https://www.notion.com/help/custom-agent-pricing)（Business 和 Enterprise 方案，含試用帳號都可用），5/4 起才開始用 Notion Credits 計費（$10 / 1,000 credits）。換句話說，我們還有**兩週**的時間可以把想試的自動化流程一次試到底。

## 精髓

上次 4/13 講的是「Notion AI 在你身邊——開會時幫你記、打字時讓你用說的」。這週的更新本質上是另一個層次：**不是你用 AI，是你設定好以後 AI 自己跑**。

Custom Agents 在 2 月剛上線的時候，大家試玩後最常見的回饋是「功能很酷但跑一次 credits 扣太快，根本不敢讓它長期工作」。這次降價對於 agent 長期使用的可行性是很實質的。把 agent 成本從「試試看就好」降到「可以讓它持續幫我看著某個流程」，是從「能不能做」到「值不值得做」的分水嶺。

AI Autofill 是同一個邏輯的延伸版。如果我們維護一個學員資料庫，過去要靠 AI 補齊「這個學員的背景職能是什麼」，得手動一行一行跑；現在一次設定好欄位和提示，新學員進來會**自動被分類和補齊**。這從一次性工作變成持續運行的基礎建設。

## 費用

Custom Agents 的成本計算比單純的月費複雜，這裡整理一下：

| 項目 | 5/3 之前 | 5/4 之後 |
|------|---------|---------|
| 方案要求 | [Business 或 Enterprise](https://www.notion.com/pricing)（含試用帳號） | 同 |
| Custom Agents | **免費試用** | 需加購 Notion Credits add-on |
| 費率 | — | [$10 / 1,000 credits](https://www.notion.com/help/custom-agent-pricing) |
| 新模型加成 | — | 選 Haiku 4.5、GPT-5.4 Mini/Nano、MiniMax M2.5 最多省 10 倍 credits |

基本月費方面，[Business 方案是 $18/用戶/月（年繳）](https://www.notion.com/pricing)，這部分沒有變動。

**對基金會同仁的建議**：如果組織已經有 Notion Business，現在就直接試。如果還沒有，可以先開 Business 試用帳號（14 天），把想自動化的流程一次設好試跑。重點是在 5/3 前測出來「哪些 agent 值得長期留下、每次大概會吃多少 credits」，這比試用結束才開始估算要務實很多。

**如果不想付 Business**：基礎 Notion AI（包含最近的語音輸入、Meeting Notes）在 Plus 方案 $10/用戶/月 就有，但 Custom Agents 是 Business 以上的功能，暫時沒有較便宜的替代路徑。

## 效果與限制

幾個實際要留意的邊界：

- **「便宜 35–50%」還是要自己跑一次才有感**：降價幅度是官方宣告，每個 agent 的任務複雜度不同，真正花多少 credits 只有實測才知道。新的 [credits 儀表板](https://www.notion.com/releases/2026-04-14)可以看每個 agent 花了多少，試用期的任務裡建議刻意觀察這個數字
- **新模型不是全部任務都適用**：Haiku 4.5、GPT-5.4 Mini/Nano 是小模型，處理簡單分類、格式整理很划算，但碰到需要深度理解長文本的任務（比如整合多篇培訓回饋寫出綜合摘要），用大模型的品質還是會有差
- **AI Autofill 是「持續運行」，不是「手動觸發」**：這是它的特色也是它的風險。如果欄位定義不清楚，每新增一行都會自動跑一次 AI，credits 會持續被消耗。設定完建議先用小量資料測一週，確認行為符合預期再擴大
- **Slack 私密頻道整合不代表全部都會讀**：Custom Agents 可以存取私密頻道，但要在設定時明確授權。如果我們用 Slack 討論學員個資或敏感輔導內容，授權前要先想清楚資料會怎麼流動
- **Microsoft Teams、Google Drive 整合仍未上線**：官方只說「即將推出」，如果我們的培訓資料主要在 Google Drive，目前還沒辦法直接讓 agent 讀到

## Claude 的小腦力激盪

Custom Agents 降價 + AI Autofill 組合起來，讓一些以前覺得「太貴不值得試」的培訓自動化，現在比較能實際動手：

- 📚 **培力**：如果我們在規劃一個多場次的培訓系列，可以試著設一個「學員追蹤助理」——資料庫欄位包含「出席紀錄」「課後問卷評分」「提出的問題」，AI Autofill 每當學員填完回饋就自動分類情緒傾向和主題；Custom Agent 則每週掃一次資料庫，生出一份「這週學員共同關心的三個問題」，下一場直接納入補充。另一個方向是教材分類 agent：丟進去的新素材（影片、文章、PPT），agent 自動依主題、難度、職能標籤分到對應資料夾
- 🎯 **贊助**：如果我們在管理一份受贈單位追蹤名單，AI Autofill 可以在每次新增一筆進度更新後，自動判斷是否符合「計畫準時推進」「需關切」「逾期」等分類；Custom Agent 則可以定期掃一遍所有標為「需關切」的案件，草擬關懷信件的初稿供確認後發出
- 🔬 **研究**：假設我們在維護一個能量醫學研究的文獻追蹤資料庫，AI Autofill 可以把每篇新加入的論文自動抓出「研究方法」「樣本數」「結論強度」三個欄位；Custom Agent 每兩週整理一次新加入文獻的綜合摘要
- 📋 **行政**：跨職能會議結論散在各頁面的問題，可以設一個 Custom Agent 每週掃一次所有標了「行動項目」的區塊，彙整一份「本週未完成事項清單」到固定頁面

重點不是這些想法都要立刻做，而是趁 5/3 前的免費時段選一個試試看——實際跑過一次，才能判斷「降價到底降到什麼程度足以說服我留下這個 agent」。

## 總結

如果我們組織已經用 Notion 而且想試 AI 自動化，這兩週是觀察「哪些流程適合長期配個 agent」的最佳時機，[5/3 截止](https://www.notion.com/help/custom-agent-pricing)前的試用期幾乎沒有成本顧慮。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **[Gemini Notebooks 全面開放免費用戶](https://9to5google.com/2026/04/17/gemini-notebooks-free/)**（免費，50 sources/notebook）— 4/17 起 Gemini 所有免費用戶都能用 Notebooks 專案工作區，和 NotebookLM 雙向同步。如果我們正在維護一份培訓素材庫，可以把資料丟進 Notebook 再到 NotebookLM 產 Video Overview 和閃卡，全程不用付費。[了解更多 →](https://www.digitaltrends.com/computing/all-gemini-users-can-now-access-notebook-projects-on-the-web-without-paying-a-dime/)
- **[MagicSchool 四月 MagicDrop](https://www.magicschool.ai/blog-posts/ai-teaching-tools-updates-2026)**（免費方案可用，Enterprise/Plus 無限用量）— MagicQuizzes 這次能在學員完成測驗後，自動依答題狀況產出客製化的後續 lesson plan 和練習。雖然主要鎖定 K-12 場景，但成人培訓的「測驗 → 補教材」流程邏輯共通，值得看一下它怎麼設計回饋路徑。[了解更多 →](https://www.magicschool.ai/blog-posts/ai-teaching-tools-updates-2026)
- **[Khan TED Institute 宣布推出 $10K 應用 AI 學士學位](https://www.axios.com/2026/04/14/khan-academy-ted-ets-institute-college)**（背景參考）— Khan Academy、TED、ETS 三家聯手重新設計「AI 時代的學士學位」，12–24 個月內開辦。這不是工具，但它示範了「AI 時代該培養什麼能力組合」，對內部訓練體系的思考有參考價值。[了解更多 →](https://fortune.com/2026/04/15/sal-khan-ceo-khan-academy-google-microsoft-ted-ets-higher-education-institute-bachelors-applied-ai-gen-z-college-upskilling/)

### 延伸閱讀

- [Notion 3.4, part 2 官方 Release Notes（2026-04-14）](https://www.notion.com/releases/2026-04-14) — 官方完整更新清單，包含降價幅度、新模型、AI Autofill 和整合路線圖，是最權威的一手資料
- [Notion Custom Agent Pricing 說明](https://www.notion.com/help/custom-agent-pricing) — 清楚列出 5/3 免費試用和 5/4 之後的 credits 計費規則，決定要不要長期留 agent 前必看
- [AlternativeTo — Notion 3.4 adds AI Autofill and cheaper Custom Agents for teams](https://alternativeto.net/news/2026/4/notion-3-4-adds-ai-autofill-and-cheaper-custom-agents-for-teams/) — 第三方媒體整理，把這次更新放在「Notion 作為 AI 工作平台」的脈絡下解讀，有助於理解為什麼這次是基建升級而非單一功能
- [Matthias Frank — Notion Custom Agents: Full Tutorial, Use Cases & Pricing Changes](https://matthiasfrank.de/en/notion-custom-agents-full-tutorial-use-cases-pricing-changes/) — 實作教學，示範如何從零設計一個 Custom Agent 並估算成本。如果決定在 5/3 前試一個來看，這篇是不錯的上手指南
