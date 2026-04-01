---
title: "NotebookLM 三月大更新：講義自動變互動教材的精髓與邊界"
date: "2026-03-31"
author: "Claude"
tags: ["NotebookLM", "Google", "教材製作", "互動學習", "培力", "免費"]
summary: "Cinematic Video、互動音頻、閃卡進度追蹤 — NotebookLM 三月更新很強，但中文支援和免費額度有邊界。"
thumbnail: "/images/articles/daily-apps-2026-03-31.webp"
---

## 這次更新了什麼？

Google [NotebookLM](https://notebooklm.google.com/) 在 3 月 25 日推出了[一波大幅度更新](https://workspaceupdates.googleblog.com/2026/03/new-ways-to-customize-and-interact-with-your-content-in-NotebookLM.html)，是它上線以來最有感的一次升級。如果你之前用過 NotebookLM 的基本功能（上傳文件、問問題、產摘要），這次的新功能讓它從「AI 筆記工具」跨進了「互動學習平台」的領域。

三個最值得關注的變化：

1. **Cinematic Video 影片概覽**：之前的 Video Overview 本質上是「自動簡報」— 把文件內容排成投影片，配上 AI 旁白逐頁講解，畫面就是靜態文字和圖片在切換。新的 Cinematic Video 完全不同，它背後用了 Gemini（負責決定敘事結構和視覺風格）加上 [Veo 3](https://deepmind.google/models/veo/)（Google 的影片生成模型），會自動產出有流暢動畫、場景轉換、視覺特效的影片，比較接近「你的教材被拍成一段短紀錄片」的感覺。不過目前僅支援英文，且需要最高級的 Google AI Ultra 訂閱
2. **互動式音頻（Interactive Mode）**：聽 AI 主持人討論你的教材時，可以隨時「舉手」打斷提問，他們會根據教材內容回答
3. **閃卡進度追蹤**：學習卡片終於會記住你的學習進度了，跨裝置同步，答錯的自動重來

其他更新還包括：10 種資訊圖表風格、EPUB 電子書支援、與 Google Classroom 的深度整合。

## 精髓

NotebookLM 跟 ChatGPT、Claude 等通用 AI 最大的不同在於：**它只根據你上傳的文件回答問題**。這看似限制，其實是它最大的優勢 — 不會亂掰、不會加油添醋、所有回答都有出處可查。

這次更新的精髓在於，它把這個「忠於原文」的核心能力，延伸到了更多學習媒介。以前只能讀文字摘要，現在同一份教材可以變成閃卡、測驗、音頻節目、影片、資訊圖表。學習者可以選擇最適合自己的方式吸收內容，而內容來源始終是你上傳的那些文件。

互動式音頻特別值得一提：兩位 AI 主持人會用對話的方式講解你的教材重點，而你可以隨時打斷提問。這對於需要「聽懂」而非「讀懂」的學習情境來說，是很有意義的形式突破。

## 費用

| 方案 | 價格 | 能做什麼 |
|------|------|---------|
| 免費版 | $0 | 閃卡、測驗、摘要、基本音頻概覽、聊天問答、資訊圖表。每個筆記本最多 50 個來源 |
| [Google AI Ultra](https://one.google.com/) | 約 NT$850/月 | 上述全部 + Cinematic Video（限英文，每日上限 20 支）、Gemini Ultra 全功能 |

**建議**：免費版已經涵蓋最常用的功能。如果你只是想把講義變成閃卡和測驗，或用音頻概覽快速掌握重點，免費版完全夠用。Cinematic Video 是付費亮點，但日常使用未必需要。

## 效果與限制

**真正擅長的事：**

- 把大量文件快速轉成可互動的學習素材（閃卡、測驗、摘要），速度是手動的數十倍
- 忠於原文的問答，回答都附引用段落，不會「幻覺」
- 音頻概覽適合通勤、運動時消化內容，互動模式讓被動聽變主動學

**邊界和限制：**

- **中文音頻品質有限**：音頻和影片功能目前以英文為主，中文教材的音頻體驗還在提升中，這是目前最大的實用性瓶頸
- **不會幫你補內容**：如果你的教材本身有缺漏或錯誤，它會忠實呈現這些缺漏。它是整理者，不是內容創作者
- **閃卡品質取決於原文**：如果原始教材結構不清楚，產出的閃卡也會比較散
- **Cinematic Video 門檻最高**：需要 Google AI Ultra 訂閱、僅支援英文、每天最多 20 支。對中文教材來說，目前這個功能還用不太到
- **來源上限**：每個筆記本最多 50 個來源，每個來源最大 500,000 字

## Claude 的小腦力激盪

這個工具的應用不限於做教材。根據你的職能，或許可以這樣玩：

- 🎯 如果你平常需要**審閱大量計畫書或報告**，試試把所有文件丟進同一個筆記本，讓 NotebookLM 產出比較分析和重點摘要。用音頻概覽在通勤時先「聽」過一輪，到辦公室就有概念了
- 📚 假設你在準備**培訓或工作坊**，把講義上傳後讓它產出閃卡和測驗，直接當作學員的課前預習或課後測驗工具。閃卡進度追蹤還能讓你知道誰看了、誰還沒看
- 📣 做**活動企劃**的話，把過去幾場活動的回饋報告一起丟進去，問它「這幾場活動最常被提到的改善建議是什麼？」— 它會從所有報告中交叉比對回答你
- 🔬 如果你在做**研究**，上傳多篇論文後讓它產出資訊圖表，快速看出不同研究之間的關聯和差異。用互動音頻模式邊聽邊追問細節

## 總結

NotebookLM 三月更新的精髓是「同一份教材，多種學習方式」，而且核心功能免費。最大的邊界是中文音頻支援還不到位。如果你的工作需要經常把大量文件轉成可消化的素材，值得花 15 分鐘試試看。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **Canvas IgniteAI Agent**（限時免費至 2026/9）— Instructure 為 Canvas LMS 推出的 AI 教學代理，用一句話就能自動建立課程模組、批次調整截止日期。[了解更多 →](https://www.instructure.com/press-release/instructure-delivers-its-agentic-ai-promise-launch-igniteai-agent)
- **Gamma Imagine**（免費方案可用，Plus $10/月）— 用文字描述生成資訊圖表、流程圖，三月最大更新。適合需要快速產出視覺素材的場景。[了解更多 →](https://gamma.app)
- **Coursebox AI**（免費可建 3 門課，Creator $29.99/月）— 上傳講義自動轉成完整線上課程，含 AI 虛擬講師影片，支援 SCORM 匯出。[了解更多 →](https://www.coursebox.ai/)

### 延伸閱讀

- [Google Workspace 三月更新官方公告](https://workspaceupdates.googleblog.com/2026/03/new-ways-to-customize-and-interact-with-your-content-in-NotebookLM.html) — 完整的功能列表和細節
- [NotebookLM for Teachers — 5 Advanced Features in 2026](https://www.chrmbook.com/notebooklm-advanced-features-teachers/) — 從教育者角度的深度解析，含實際操作示範
- [6 Ways to Use NotebookLM to Master Any Subject](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-student-features/) — Google 官方的學習應用指南
- [NotebookLM Changed Completely — Here's What Matters in 2026](https://www.jeffsu.org/notebooklm-changed-completely-heres-what-matters-in-2026/) — Jeff Su 的實測評論，含操作影片
