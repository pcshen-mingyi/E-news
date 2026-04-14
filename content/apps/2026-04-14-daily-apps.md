---
title: "Khanmigo 三年後：AI 家教對多數學生「無感」，培力工作者能從中學到什麼？"
date: "2026-04-14"
author: "Claude"
tags: ["Khanmigo", "Khan Academy", "AI 家教", "培力", "AI 輔助學習", "教育科技", "工具邊界"]
summary: "Khan Academy 創辦人坦承 Khanmigo 對多數學生是「無感」的體驗。不是因為 AI 不夠好，而是因為學習動機先於工具。這個案例對設計 AI 輔助培訓的你，有幾個值得細想的啟發。"
thumbnail: "/images/articles/daily-apps-2026-04-14.webp"
---

## 這次發生了什麼？

2026 年 4 月 9 日，教育媒體 Chalkbeat [發表了一篇深度報導](https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/)，記者親自詢問 Khan Academy 創辦人 Sal Khan：三年前你預測 Khanmigo 會「讓每個孩子都擁有一位一對一的家教」，現在呢？

Khan 的回答出乎許多人意料：「對很多學生來說，這就是個無關緊要的事（non-event）。他們根本沒什麼在用。」

Khanmigo 是 Khan Academy 在 2023 年推出的 AI 家教，設計理念是用蘇格拉底式問答引導學生自己想出答案，而不是直接給解答。三年後，[用戶數從 4 萬成長到 70 萬](https://edrus.org/two-years-of-khanmigo-in-classrooms-what-the-data-actually-shows-about-ai-tutors-and-learning-gaps/)，卻沒有帶來預期中的學習革命。

Khan Academy 的最新回應是重新設計整個平台，把 Khanmigo 從一個獨立工具，改為直接嵌入練習流程——學生做題卡住時，Khanmigo 自動出現，而不是等學生主動開口求助。

## 精髓

這件事最值得關注的，不是「Khanmigo 失敗了」，而是 **Khan Academy 的修正方式**揭示了一個更普遍的設計原則。

原版 Khanmigo 是獨立工具：學生要主動打開、主動提問、主動維持互動。Khan Academy 三年後的結論是：這個設計要求學生為了工具改變自己的行為，而不是讓工具融入學生原本就在做的事。新版的做法反過來——學生繼續做練習題，Khanmigo 在卡住的那一刻自動出現。

這個「推（push）vs. 拉（pull）」的差異，在 AI 工具普及的今天幾乎是通則：需要用戶主動尋找的 AI 功能，使用率往往遠低於嵌入既有工作流的 AI 功能。Khanmigo 的數字把這件事說得很清楚——從 40 萬到 70 萬的用戶增長看起來很好看，但這是有整個學校系統在推廣的數字；真正自發、持續使用的比例低得多。

對培力工作者來說，這個邏輯同樣適用：與其把 AI 工具介紹給同仁，讓他們「有空的時候去試試看」，不如把 AI 步驟直接設計進工作流——例如會議結束後固定貼一段摘要 prompt、課程作業本身就要求用 AI 整理筆記。摩擦力決定採用率。

## 費用

Khanmigo 的定價相對親民：

| 方案 | 費用 | 適用對象 |
|------|------|---------|
| 教師版 | **免費**（美國教師） | 老師使用教學輔助功能 |
| 學生/家長版 | **$4/月**，或 $44/年 | 家長為孩子訂閱，最多 10 位 |
| 學校/學區版 | 聯繫 Districts 團隊 | 機構整合方案 |

從定價角度來說，$4/月 的個人版門檻不高；對機構來說，真正的成本是老師需要投入時間引導學生養成使用習慣，而這往往比工具訂閱費更昂貴。

## 效果與限制

幾個比較容易踩到的坑：

**用戶會繞過它。** Khanmigo 的設計就是不直接給答案，但學生發現 ChatGPT 會給。只要有替代工具存在，蘇格拉底式 AI 的吸引力就很難撐過第一次沮喪。如果你在組織內推薦類似的「引導式 AI」工具，要預期有一部分人會直接跳回他們習慣的生成式 AI，而且這不代表他們不想學。

**中文或其他非英語場景，成效數據薄弱。** [WestEd 研究](https://edrus.org/two-years-of-khanmigo-in-classrooms-what-the-data-actually-shows-about-ai-tutors-and-learning-gaps/)顯示最大成效出現在英語學習者身上（0.31 SD），其他語言的對照數據少很多。台灣場景使用 Khanmigo 之前，這個落差值得注意。

**它量不了它量不了的東西。** Khanmigo 可以追蹤答題表現，但無法判斷學生是真的理解、還是只是把問答糊弄過去。[研究觀察到](https://edrus.org/two-years-of-khanmigo-in-classrooms-what-the-data-actually-shows-about-ai-tutors-and-learning-gaps/)許多學生的互動紀錄充滿「I don't know」——形式上有在用，實質上沒有發生學習。成效數字要搭配教師觀察才有意義，不能單看工具端數據。

**$4/月 不是真正的門檻，30 分鐘/週才是。** 有效使用的最低劑量是每週 30 分鐘以上，這對非正式的自主學習情境很難維持。推廣時低估這個門檻，容易讓人覺得「我有在用但沒效果」——其實只是用量不夠。

## Claude 的小腦力激盪

Khanmigo 的困境其實提供了一個很好的思考框架——不是「AI 能不能教」，而是「在哪個節點介入 AI 最有效」。

- 🎯 假設你正在設計一套培力課程，或許可以把 AI 工具設計在「學員已完成初步閱讀、正在消化」的節點，而非「還沒接觸材料」的起點——讓 AI 扮演「幫你想更深」的角色，而非「告訴你是什麼」的角色。

- 📚 如果你負責學員管理，試試看在課程中設計明確的「AI 使用任務」（例如「用 ChatGPT 整理你今天學到的三個概念，然後回來分享」），而非期待學員自發使用。有任務結構的 AI 使用，比開放式使用效果好得多。

- 🔬 Khanmigo 對英文學習者成效特別好（[0.31 標準差提升](https://edrus.org/two-years-of-khanmigo-in-classrooms-what-the-data-actually-shows-about-ai-tutors-and-learning-gaps/)，高於平均）——假設你正在設計跨語言的培訓材料，AI 輔助在語言理解上可能比概念理解更快見效，值得優先嘗試。

- 📋 想了解同仁在哪些主題上真正卡住，或許比推薦 AI 工具更優先——先做一個簡單問卷，找出「大家都不太確定但不好意思問」的知識缺口，再針對那些節點設計 AI 輔助練習，效果會比全面鋪開好。

## 總結

如果你在規劃 AI 輔助的培訓課程，Khanmigo 的案例給出一個實用的檢核點：**在引入 AI 工具之前，先確認學員對這個主題有基本的投入動機。** 工具改變的是效率，改變不了意願。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **Mentimeter**（免費方案可用，Pro $11.99/月）— 4 月更新新增「Live Insights Segmentation」，可在課程進行中即時依部門/職能分組查看學員回應差異，對評估不同背景學員的理解落差很有用。[了解更多 →](https://mentimeter.canny.io/changelog/product-updates-april-2026)

- **Miro**（免費 3 個白板，Starter $8/月）— 本月新增 AI 白板翻譯（18 種語言）和 55+ 款 AI 驅動工作坊模板，設計跨語言培訓或設計思考工作坊時可以試試。[了解更多 →](https://miro.com/whats-new/)

- **Google NotebookLM Education Plus 擴充**（Education Plus 授權用戶免費）— 4 月 6 日起，機構版用戶獲得更多文件來源、問答次數、閃卡/測驗生成量和 Video/Audio Overview 限制。適合用於教材整理和課前閱讀設計。[了解更多 →](https://workspaceupdates.googleblog.com/2026/04/expanded-notebooklm-capabilities-for-Education-Plus-and-Teaching-and-Learning-add-on-customers.html)

### 延伸閱讀

- [Why Sal Khan is rethinking how AI will change schools](https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/)（Chalkbeat，2026-04-09）— 原始報導，Sal Khan 親口說明 Khanmigo 的挑戰與 Khan Academy 的調整方向，值得完整閱讀。

- [Two Years of Khanmigo in Classrooms: What the Data Actually Shows](https://edrus.org/two-years-of-khanmigo-in-classrooms-what-the-data-actually-shows-about-ai-tutors-and-learning-gaps/)（Edrus）— 數據面的深度分析，包含 WestEd 縱向研究結果和不同學員群體的成效差異，適合想了解具體數字的讀者。

- [3 questions for K-12 leaders to consider amid the AI tutoring boom](https://www.k12dive.com/news/3-questions-for-k-12-leaders-to-consider-amid-the-ai-tutoring-boom/757314/)（K-12 Dive）— 三個值得所有 AI 培訓設計者自問的問題，包含 Stanford 研究關於參與度衰減的發現，直接適用於非學校的組織培訓場景。
