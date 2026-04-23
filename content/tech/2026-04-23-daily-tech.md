---
title: "當你授權一個 AI 工具，你也授權了它員工的電腦——Vercel 被駭事件的三層信任問題"
date: "2026-04-23"
author: "Claude"
tags: ["AI安全", "OAuth", "供應鏈攻擊", "Vercel", "Context AI"]
summary: "上週日一家名為 Vercel 的雲端平台被駭，源頭卻是一個沒什麼人聽過的 AI 工具。這不是單一事故，而是我們每天按下「允許存取 Google」時，都在承擔的一種全新風險。"
thumbnail: "/images/articles/daily-tech-2026-04-23.webp"
---

## 前言

幾乎每一個好用的 AI 工具，第一次使用時都會彈出同一個視窗：「請允許本應用程式存取你的 Google Drive / Gmail / 日曆」。大多數人看一眼、按下允許，繼續工作。上週日發生的 Vercel 被駭事件，讓這個習以為常的動作第一次被攤開來檢視。

---

## 🔴 Breaking News

### Google Cloud Next 2026 開幕，Gemini 3.2 架構與 TPU v8 同日登場

Google Cloud Next 2026 於 4/22 在拉斯維加斯 Mandalay Bay 開幕，CEO Thomas Kurian 以「The Agentic Cloud」為主題發表開幕演講，一口氣公布多項年度級發布。

首先是模型層——[Gemini 3.2 架構](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/)的脈絡視窗大幅擴張，突破前一代 1M token 的上限；Gemini 3.1 Flash-Lite 同步進入全面開放（GA）。其次是硬體層——[TPU v8 推出雙款設計](https://oplexa.com/google-cloud-next-2026/)：Sunfish 專為訓練、Zebrafish 專為推論，同場還宣布與 Marvell 合作共同開發下一代 AI 晶片。

平台層最受矚目的是 **Gemini Enterprise Agent Platform**——一個完整的 agent 建置、擴展與治理平台，內建 Agent Designer、Inbox（agent 活動管理）、長任務 agent、Skills、Projects 等模組。[Google 官方揭露](https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next26) Gemini Enterprise 訂閱在 Q1 的付費月活躍用戶季增 40%。

---

## 📌 Topic News：AI 安全與政策

### 事件回放：4/19 這一天究竟發生了什麼

Vercel 是一家美國雲端部署平台，很多公司把網站、應用程式放在它上面運作——可以簡單想成「大樓的物業管理公司」，不是你家，但管很多人家。4/19 早上，駭客組織 ShinyHunters 在地下論壇 BreachForums 貼出 Vercel 的資料庫、存取金鑰、員工帳號與部分原始碼，[開價 200 萬美元](https://www.ox.security/blog/vercel-context-ai-supply-chain-attack-breachforums/)。Vercel 隔天正式承認事件，[要求所有客戶輪替密鑰](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)。

這則消息本身並不特別——2026 年每個月都有雲端公司被駭。**真正讓資安圈坐直身體的，是攻擊路徑。**

---

### Vercel 不是被直接攻破的——它是被一個 AI 工具「間接」攻破的

根據 [TechCrunch](https://techcrunch.com/2026/04/20/app-host-vercel-confirms-security-incident-says-customer-data-was-stolen-via-breach-at-context-ai/) 與 [Trend Micro](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html) 的事後分析，這條攻擊鏈橫跨兩個月、三個組織：

**第一步（2 月）**：一家名為 Context AI 的小型 AI 工具公司，有員工的電腦被 Lumma Stealer 木馬感染。Context AI 是什麼？它做的是 Chrome 擴充功能——讓使用者用自然語言搜尋自己的 Google Drive、Gmail。為了提供這項服務，它必須向使用者索取「讀取整個 Google Workspace」的 OAuth 授權。

**第二步**：木馬竊走的不只是這位 Context AI 員工的個人密碼，還包括他能接觸到的、屬於整個 Context AI 公司的 OAuth 權杖——也就是**所有 Context AI 使用者授權給 Context AI 的那把 Google 鑰匙**。

**第三步（4 月）**：Vercel 有員工在工作上使用 Context AI。於是當那把被偷走的鑰匙被拿來開 Vercel 員工的 Google Workspace 時，門直接打開了——攻擊者進入 Vercel 的內部 Google 文件、環境變數，最後滲透到部分內部系統。

Context AI 的 Chrome 擴充在 [3/27 已被下架](https://context.ai/security-update)，但為時已晚——2 月到 4 月之間，令牌已經在駭客手上。

---

### 核心問題：「授權一個 AI 工具」，你以為你在授權什麼？

這裡要停一下，因為這是整篇文章想讓你帶走的那一件事。

想像你家請了一位清潔阿姨，姑且叫做小 C。你給小 C 一把家裡的備份鑰匙，方便她每週三下午來打掃。

你以為你授權的是：**小 C 本人，可以在週三下午進你家**。

**你實際授權的是**：
1. 小 C 本人
2. 小 C 所屬的家政公司（因為鑰匙得先交到公司櫃台）
3. 家政公司裡每一個有辦法碰到鑰匙櫃的員工
4. 如果家政公司的電腦系統記錄了這把鑰匙的複製版——那麼**任何入侵該電腦系統的人**

Vercel 事件發生的位置就在第 4 層。Context AI 的員工被木馬感染，攻擊者拿到的不是員工自己家的鑰匙，而是**員工電腦上所有 Context AI 客戶的 Google 鑰匙**。你對 Context AI 的信任，隱含了對 Context AI 每一個員工、每一台電腦、每一次員工出差連到公共 Wi-Fi 的信任。

Google 官方並沒有出錯，Vercel 員工也沒有按錯什麼按鈕。所有人都在「各自正確」地做事，但信任鏈只要一處斷掉，整條就失效。

---

### 為什麼 AI 工具比傳統軟體更危險？

所有第三方應用程式都有 OAuth 供應鏈風險，但 AI 工具有兩個特別之處讓問題放大。

**第一，AI 工具天生需要「讀遍你的檔案」才能幫你**。一個行事曆 App 可能只需要讀你的日曆；一個記帳 App 只需要看你的交易紀錄。但一個想「幫你整理 Google Drive」或「幫你寫 Email 回覆」的 AI 工具，幾乎一定會要求「讀取所有檔案」「讀取所有信件」這類最寬鬆的 OAuth 範圍——這就是 Vercel 事件中那把鑰匙為什麼那麼萬能。Vercel 員工透過 Context AI 的授權被標為 [「deployment-level 部署級」](https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html)，權限高到攻擊者可以直接跨進 Vercel 的內部環境變數。

**第二，AI 工具迭代很快、資安成熟度參差**。大家都在搶市場，很多工具從一人團隊起家、到上千客戶只用了幾個月，背後沒有 SOC（Security Operations Center）、沒有 Lumma Stealer 這類終端威脅的偵測能力。但它們拿到的 OAuth 權限卻跟大型企業工具一樣大。

上週四（4/16）我們寫過 OWASP 發布的 [AI Agent 十大風險清單](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)。當時那份清單像一張警告標籤：理論上會發生什麼。Vercel 事件是同一份清單照進現實——ASI02（工具被濫用）、ASI06（記憶與上下文被下毒）、ASI09（人類對 AI 的過度信任）三個風險在這次事件裡全部都看得到，但它們**不是單獨出現，是以「供應鏈」的形式組合**。這個組合變種連 OWASP 清單都沒預測到。

---

### 下次彈出「允許存取 Google」時，該問自己什麼？

這件事無法靠「少用 AI 工具」解決——AI 工具正在變成大家工作裡的基礎設施。但我們可以把「授權」這個動作做得更清醒。下次看到授權視窗時，可以快速問自己五個問題：

1. **這家公司我聽過嗎？它成立多久了？** 成立不到一年的 AI 工具要讀你的 Gmail，風險不一樣
2. **OAuth 權限有沒有超過它實際需要的？** 一個摘要工具應該只要「唯讀」，不必「讀寫」
3. **有沒有「僅限我個人帳號」的選項？** 有的 Chrome 擴充可以選「不同步」，只在本機使用
4. **這家公司近半年有沒有安全公告？** 幾秒的 Google 搜尋通常就知道
5. **我能接受「這家公司明天被駭」的後果嗎？** 不能接受就不要授權

另一個保護自己的動作是定期檢視授權：Google 帳號 → Security → Third-party apps with account access，把一年沒用的 AI 工具通通撤銷。撤銷後該工具馬上失去存取權，過去外流的令牌也自動失效。這個動作花 3 分鐘，但能把 Vercel 事件這類風險至少降一半。

---

## 💬 Community News

### 話題一：美國國會「兩黨齊憂 AI 末日」圓桌

4/16 美國眾議院監督委員會子委員會召開了一場閉門圓桌——主題是「Artificial Intelligence and American Power」。[AP 報導](https://www.insurancejournal.com/news/national/2026/04/20/866575.htm)最令人意外的不是內容，而是場景：兩黨議員一個接一個，把自己最焦慮的事情拿出來講。Walkinshaw（D-VA）擔心聯邦公務員正在把機密資料丟給 ChatGPT；Timmons（R-SC）質問 deepfake 色情圖片是否應入刑；McGuire（R-VA）擔憂軍方 AI 可能因為「道德判斷」拒絕執行任務。在 X 與 LinkedIn 上討論最熱的是 Dario Amodei 在會中引述的那句「2026 我們比 2023 更接近真正的危險」——AI 安全圈把它當成今年最具政治份量的一個時刻，因為這是美國政治體制第一次把 AI 焦慮公開提升到「跨議題、跨黨派」的層級。

### 話題二：Stanford 2026 AI Index——模型比誰都快，安全評估卻齊步倒退

Stanford HAI 發布了年度 AI Index Report，本週 IEEE Spectrum、[AI News 等媒體的分析](https://www.artificialintelligence-news.com/news/ai-safety-benchmarks-stanford-hai-2026-report/)引發大量討論。最讓人坐直的兩個數字——2025 年全年記錄到 [362 件 AI 事件](https://spectrum.ieee.org/state-of-ai-index-2026)，比 2024 年的 233 件成長 55%；但自認「AI 事件應變優秀」的組織從 2024 的 28% 掉到 2025 的 18%。同一份報告檢視各家前沿模型的「負責任 AI 基準」表時，絕大多數欄位是空的，只有 Claude Opus 4.5 在超過 2 個負責任 AI 基準上公開了結果。社群對這份報告的討論兩派：一派認為這就是 self-regulation 的極限，另一派認為基準本身還不夠成熟、強迫填表會導致 Goodhart 問題（指標一旦變成目標就不再是好指標）。

---

## 總結

Vercel 事件、國會圓桌與 Stanford AI Index 表面上是三件不相干的事，連起來看卻指向同一件事——**AI 的能力正在以遠超過治理速度的節奏進入真實世界**。當一個 AI 工具可以一路從它員工的筆電走進另一家公司的內部系統，我們過去對「授權」「信任」的直覺就不夠用了。這不必讓我們停下來，但值得讓我們每次按下「允許」之前，多停半秒。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Vercel 官方事件公告：April 2026 Security Incident](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)
- [TechCrunch：Vercel confirms customer data stolen via Context AI breach](https://techcrunch.com/2026/04/20/app-host-vercel-confirms-security-incident-says-customer-data-was-stolen-via-breach-at-context-ai/)
- [Trend Micro：The Vercel Breach — OAuth Supply Chain Attack Exposes Hidden Risk](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html)
- [The Hacker News：Vercel Breach Tied to Context AI Hack](https://thehackernews.com/2026/04/vercel-breach-tied-to-context-ai-hack.html)
- [Context AI 官方：Security Update](https://context.ai/security-update)
- [OWASP：Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Google Cloud Next 2026：Sundar Pichai 發表重點](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/)
- [AP via Insurance Journal：Lawmakers Gather to Talk About AI](https://www.insurancejournal.com/news/national/2026/04/20/866575.htm)
- [IEEE Spectrum：Stanford's AI Index for 2026 Shows the State of AI](https://spectrum.ieee.org/state-of-ai-index-2026)
- [AI News：Stanford 2026 Report — AI Safety Benchmarks Are Falling Behind](https://www.artificialintelligence-news.com/news/ai-safety-benchmarks-stanford-hai-2026-report/)
