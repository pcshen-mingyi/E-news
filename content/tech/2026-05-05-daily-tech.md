---
title: "Claude 走進 Photoshop、Blender、Ableton——Anthropic 不蓋平台，住進別人家"
date: "2026-05-05"
author: "Claude"
tags: ["AI 產品", "Anthropic", "Claude", "Connectors", "MCP", "Adobe", "Blender"]
summary: "上週 Anthropic 一口氣推出 9 個 Claude Connectors，把 AI 接進創作者已經在用的軟體裡。這跟上週 Google 的策略正好相反——值得我們花一篇看清楚。"
thumbnail: "/images/articles/daily-tech-2026-05-05.webp"
---

## 前言

上週 Anthropic 在同一天接入了 9 個你可能正在用的創意軟體。這不是「又多了一個整合」的新聞——它代表 Claude 換了一種出現方式。

---

## 🔴 Breaking News

### 四大雲端 2026 年 AI 基建砸 $725B，比去年再多 77%

四月底 Q1 2026 財報季結束，Microsoft、Alphabet、Meta、Amazon 四家更新了今年資本支出指引：[加總落在 $700-725B 區間](https://fortune.com/2026/04/30/big-tech-hyperscalers-will-spend-700-billion-on-ai-infrastructure-this-year-with-no-clear-end-in-sight-eye-on-ai/)，比 2025 年的 [$410B](https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion) 整整多出 77%。Microsoft 從原估的 [$120B+ 上修到 $190B](https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion)；Meta 從 $115-135B 上修到超過 $145B。其中約 [75%（$450B+）](https://om.co/2026/04/30/what-i-learned-about-hyperscalers-ai-spend/)直接綁在 AI 基建——資料中心、伺服器、GPU。

換算下來，[相當於部分中型國家全年的 GDP 規模](https://europeanbusinessmagazine.com/business-hyperscaler-ai-capex-725-billion-google-cloud-q1-2026)。我們看不到這些錢花在哪，但能感覺到它的影響：訂閱定價、新功能推出節奏、API 成本調整，背後都是這個 $725B 在跑。

---

## 📌 Topic News：Claude 走進 Photoshop、Blender、Ableton——9 個 Connectors 一次接入

### 9 家軟體，同一天

4/28 那天，Anthropic 一口氣推出 [9 個 Claude Connectors](https://www.anthropic.com/news/claude-for-creative-work)，把 Claude 接進你可能正在用的創意工具裡：

- **Adobe 全家桶**：Photoshop、Premiere、Lightroom、Illustrator、Express、InDesign、Stock，[以「Adobe for creativity」連接器形式整合 50+ 工具](https://blog.adobe.com/en/publish/2026/04/28/adobe-for-creativity-connector)
- **Blender**（3D 建模／動畫）
- **Ableton**（音樂製作）
- **Autodesk Fusion**（產品設計／工業 CAD）
- **SketchUp**（建築／室內設計）
- **Affinity by Canva**（設計工具）
- **Splice**（音樂取樣／合成）
- **Resolume Arena 與 Wire**（VJ／影像表演）

[9to5Mac 的整理](https://9to5mac.com/2026/04/28/anthropic-releases-9-new-claude-connectors-for-creative-tools-including-blender-and-adobe/) 把這份清單形容為「創意產業的半個工具箱」——從圖像、影像、音樂、3D 到 CAD 都涵蓋。重點不是哪一家被接進來，而是這個動作的密度：不是逐家談合作，是同一天集中發力。

### 在 Photoshop 裡用 Claude 是什麼樣子

過去用 Claude 修圖，流程大概是：你描述問題 → Claude 給建議 → 你回到 Photoshop 自己動手做。中間隔著一個視窗，每一步都要切換。

Connectors 之後，[你可以直接在 Claude 對話裡描述要做什麼](https://www.unite.ai/anthropic-wires-claude-into-photoshop-blender-and-ableton/)，Claude 在 Photoshop 裡實際執行——選圖層、套濾鏡、調曲線、輸出。Blender 端的設計類似：[連接器以 MCP 為基礎](https://dataconomy.com/2026/04/29/claude-gains-integrations-with-adobe-blender-and-ableton/)，Claude 能讀懂 Blender 的 Python API、解釋複雜的場景設定、幫你查官方文件。Ableton 端則把 Claude 的回答錨定在 [Live 與 Push 的官方說明](https://www.anthropic.com/news/claude-for-creative-work)裡，避免給你過時或編造的設定建議。

### 跟 Google 上週那一招正好相反

熟悉的讀者會記得，[上週二我們寫過 Google 的 Gemini Enterprise Agent Platform](https://e-news-lilac.vercel.app/tech/2026-04-28-daily-tech)——Google 把所有工具（自家的、Salesforce 的、第三方的）收進一個叫 Gemini Enterprise 的入口。客戶不必到處跑，但要在 Google 的平台裡跑。

Anthropic 這次走相反路線：不蓋自己的平台，把 Claude 送進客戶已經在用的軟體裡。Photoshop 還是 Photoshop，Blender 還是 Blender——只是你打開它們的時候，Claude 已經在裡面待著。

兩種策略對應兩種對市場的判斷。Google 押的是「客戶想要一站式」，Anthropic 押的是「客戶不想搬家」。誰對要看接下來幾季的採用數據。

### 「以 MCP 為基礎」這句話的份量

值得留意的細節：[Blender 連接器以 MCP 為基礎](https://dataconomy.com/2026/04/29/claude-gains-integrations-with-adobe-blender-and-ableton/)，意思是這個連接器不只 Claude 能用，其他支援 MCP 的 LLM 也能接。Anthropic 沒有把這個介面綁成 Claude 獨家。

放在過去半年的時間線上看：A2A 協定[已交給 Linux Foundation 旗下的 Agentic AI Foundation 治理](https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era)；MCP 也走開源路線。各家 AI 公司開始接受一件事——跨工具的連接協定不適合任何一家獨佔。誰先把標準推出去，誰先讓對手都能用，反而是商業上更划算的做法。

### Anthropic 還做了一件事：贊助 Blender 本身

連接器之外，Anthropic [加入 Blender Development Fund 成為 Corporate Patron](https://www.opensourceforu.com/2026/05/anthropic-strengthens-open-source-play-with-blender-backing-and-claude-connectors/)，與 Netflix、Epic、Wacom 並列贊助名單。意思是：Anthropic 不只接了 Blender 的 API，還掏錢資助 Blender 本身的開發。

這個動作放在「住進別人家」的策略裡看，邏輯就清楚了——你住進別人家，就會關心房子蓋得好不好。Photoshop 是 Adobe 的商業產品，Blender 是開源軟體；對於後者，最好的「保險」是直接贊助它的可持續性。

### 對我們意味著什麼

如果你正在 Photoshop 修一張活動主視覺，或在 InDesign 排報告版型——未來 Connector 上線後，可以直接告訴 Claude：「幫我把這張圖背景換成漸層紫，主視覺往左移一點，留白給標題用」——它就會在 Photoshop 裡實際執行，而不是叫你回去自己動手。Adobe 全家桶是基金會做活動素材最常用的工具之一，這條路徑的影響面相對直接。

對於 Blender、Ableton 這類同仁目前較少使用的軟體，意義在另一面：未來如果想嘗試 3D 建模或音樂製作（例如為活動做開場動畫或自製配樂），門檻會比過去低不少。不熟悉軟體沒關係，先用自然語言描述要做什麼，Claude 在工具裡幫你執行，過程中你也順便看到「對應的功能藏在哪個選單」。AI 從「教你怎麼用工具」變成「替你用工具」，學習曲線整個被攤平。

---

## 💬 Community News

### 奧斯卡正式禁 AI 生成的演員與劇本參賽

5/2 美國電影藝術與科學學院更新獎項申請資格條款：[AI 生成的演員與劇本不具備奧斯卡角逐資格](https://aitoolly.com/ai-news/article/2026-05-02-flock-safety-faces-backlash-after-using-sensitive-camera-feeds-of-children-for-sales-demonstrations)。是 2023 年 SAG-AFTRA 罷工後續政策的具體落實。一邊是 Adobe／Anthropic 把 AI 接進創作工具裡，一邊是電影業告訴你：成品不能完全交給它。社群這週同時在辯論這兩件事。

### 「2026 是 AI 助攻網路攻擊之年」——資安圈本週熱議

[The Hacker News 本週分析文](https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html) 整理了一個對比：模型在 GitHub issue 解決率，2024 年 8 月是 33%，[2025 年 12 月已到 81%](https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html)；同樣的能力曲線也讓攻擊端用得更熟練。報告指出 [28.3% 的 CVE 漏洞在揭露 24 小時內就被實際利用](https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html)——以前需要組織化團隊才能執行的攻擊，現在單一個體加 AI 就能做到。Hacker News 上這幾天 Top 10 有兩三則都繞著這個話題打轉。

---

## 總結

AI 競爭的焦點正在從「誰的模型分數高」轉向「誰能讓使用者最少切換視窗」。Google 上週用平台策略回答這題，Anthropic 這週用嵌入策略回答這題——兩種解法對應兩種商業判斷，但動的是同一個方向。對使用者來說，幾季之內，「先打開 AI 再開工具」這個動作會慢慢變成「打開工具，AI 已經在裡面」。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Anthropic：Claude for Creative Work（官方公告）](https://www.anthropic.com/news/claude-for-creative-work)
- [Adobe：Adobe for creativity—a new way to create with Adobe, now in Claude](https://blog.adobe.com/en/publish/2026/04/28/adobe-for-creativity-connector)
- [9to5Mac：Anthropic releases 9 Claude connectors for creative tools, including Blender and Adobe](https://9to5mac.com/2026/04/28/anthropic-releases-9-new-claude-connectors-for-creative-tools-including-blender-and-adobe/)
- [Dataconomy：Claude Gains Integrations With Adobe, Blender And Ableton](https://dataconomy.com/2026/04/29/claude-gains-integrations-with-adobe-blender-and-ableton/)
- [Open Source For You：Anthropic Strengthens Open Source Play With Blender Backing](https://www.opensourceforu.com/2026/05/anthropic-strengthens-open-source-play-with-blender-backing-and-claude-connectors/)
- [Unite.AI：Anthropic Wires Claude Into Photoshop, Blender, and Ableton](https://www.unite.ai/anthropic-wires-claude-into-photoshop-blender-and-ableton/)
- [Fortune：Big Tech is about to spend $700 billion on AI this year](https://fortune.com/2026/04/30/big-tech-hyperscalers-will-spend-700-billion-on-ai-infrastructure-this-year-with-no-clear-end-in-sight-eye-on-ai/)
- [The Hacker News：2026: The Year of AI-Assisted Attacks](https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html)
