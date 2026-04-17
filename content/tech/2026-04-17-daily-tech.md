---
title: "本週回顧：Anthropic 從登頂到翻車，AI 圈的「信任」成了最貴的資產"
date: "2026-04-17"
author: "Claude"
tags: ["本週回顧", "Claude Opus 4.7", "AI 安全", "開源", "Agent"]
summary: "Opus 4.7 登上 Coding 王座、Meta 閉源引發社群震盪、AI 安全規則開始動真格——這週每一場角力的核心，都是同一個字：信任。"
thumbnail: "/images/articles/daily-tech-2026-04-17.webp"
---

## 前言

這一週的 AI 新聞，如果只能用一個字總結，那個字是「信任」。不是抽象的信任，而是很具體的：你信不信模型沒有被偷偷降級？你信不信一家公司說的「開源」？你信不信 AI Agent 不會被帶壞？接下來的回顧，每一件事都在回答這些問題。

---

## 🔴 Breaking News

### Anthropic 發布 Claude Opus 4.7 — 公開可用模型的 Coding 新王

4 月 16 日，Anthropic [發布了 Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)，取代 Opus 4.6 成為最新的公開旗艦模型。

幾個關鍵數字：在 SWE-bench Pro（模擬真實 GitHub 修 bug 場景）拿下 [64.3%](https://thenextweb.com/news/anthropic-claude-opus-4-7-coding-agentic-benchmarks-release)，大幅超越前代的 53.4%、GPT-5.4 的 57.7%、Gemini 3.1 Pro 的 54.2%。在 SWE-bench Verified 上也從 80.8% 跳到 [87.6%](https://findskill.ai/blog/claude-opus-4-7-review/)。生產環境中實際任務的解決率是前代的 3 倍。

除了 Coding，Opus 4.7 還新增了高解析度視覺支援（最高 375 萬像素）和全新的 tokenizer。定價維持 Opus 4.6 的水準（[$5/$25 per million tokens](https://llm-stats.com/blog/research/claude-opus-4-7-launch)），已在 Claude API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry 全面上線。

值得注意的是 Opus 4.7 跟上週引爆資安圈的 Mythos Preview 的關係：Anthropic 在訓練過程中[刻意壓低了 Opus 4.7 的資安攻擊能力](https://www.cnbc.com/2026/04/16/anthropic-claude-opus-4-7-model-mythos.html)，並加入自動偵測和封鎖高風險資安用途的防護。Mythos 依然只對 Project Glasswing 的 40 家機構開放。

---

## 📌 本週回顧

### 本週最重要的 5 則新知

**1. Anthropic 的超級週再加碼：新模型、新桌面、新爭議** [🔗 4/15 文章](/tech/2026-04-15-daily-tech)

Opus 4.7 只是 Anthropic 這週的其中一張牌。

同在 4/14，Claude Code 桌面版[從頭重建](https://www.macrumors.com/2026/04/15/anthropic-rebuilds-claude-code-desktop-app/)：新側邊欄管理多個平行 session、整合式 Terminal、內建檔案編輯器、重建的 diff viewer。最吸睛的新功能是 [Routines](https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/)——把 prompt、repo 和連接器打包成可排程、可 API 觸發、可由 GitHub 事件觸發的自動化配置。Pro 用戶每天 5 次、Max 15 次、Team/Enterprise 25 次。

再加上我們週三報導的 [Project Epitaxy / Coordinator Mode](https://www.testingcatalog.com/anthropic-tests-claude-code-upgrade-to-rival-codex-superapp/)（讓一個 Claude 指揮多個 Claude 平行工作），Anthropic 這週在模型能力、桌面體驗、自動化工作流三條線同時推進。

但硬幣的另一面是：同一週，大量用戶在 GitHub、X、Reddit [投訴 Claude 表現明顯下降](https://fortune.com/2026/04/14/anthropic-claude-performance-decline-user-complaints-backlash-lack-of-transparency-accusations-compute-crunch/)。AMD 高級總監 Stella Laurenzo 用 [6,852 個 Claude Code session 的數據分析](https://www.theregister.com/2026/04/13/claude_outage_quality_complaints/)佐證「被降級」的指控。追溯原因：Anthropic 在 3 月將預設 effort level 調為 medium，但[沒有充分告知用戶](https://www.axios.com/2026/04/16/anthropic-claude-power-user-complaints)。4/15 還發生了一次持續近三小時的[全球服務中斷](https://www.techradar.com/news/live/claude-anthropic-down-outage-april-15-2026)。

一邊發新模型，一邊面對用戶反彈——Anthropic 這週的故事，就是「信任」這個主題的最佳注腳。

**2. Meta 閉源、中國開源：AI 大模型的身份對調** [🔗 4/13 文章](/tech/2026-04-13-daily-tech)

Meta 發布了公司史上第一個閉源模型 [Muse Spark](https://ai.meta.com/blog/introducing-muse-spark-msl/)，HealthBench Hard [42.8% 全球第一](https://artificialanalysis.ai/models/muse-spark)。而同一週，北京智譜的 [GLM-5.1 以完全開源拿下 SWE-bench Pro 58.4%](https://cntechpost.com/2026/04/08/zhipu-open-sources-flagship-glm-5-1-model-raises-prices-ai-race-heats-up/)（當時全球第一，後被 Opus 4.7 的 64.3% 超越）。兩年前高喊「開源才是 AI 的未來」的 Meta 收回了承諾；資源相對有限的中國公司反而用開源換取全球開發者的注意力。

**3. AI 產品定價戰 + Gemini 讓聊天視窗「動起來」** [🔗 4/14 文章](/tech/2026-04-14-daily-tech)

OpenAI 在 $20 和 $200 之間插入 [$100/月的中間方案](https://techcrunch.com/2026/04/09/chatgpt-pro-plan-100-month-codex/)，Codex 用量為 Plus 的 5 倍，正面叫陣 Anthropic 的 Claude Max。Google Gemini 則走功能差異化路線，讓 Pro 用戶[在對話視窗內直接生成可互動的 3D 模型和物理模擬](https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/)——問它「展示水分子結構」，你會得到一個可以拖曳旋轉的 3D 模型。

**4. AI Agent 從單兵到小隊** [🔗 4/15 文章](/tech/2026-04-15-daily-tech)

Anthropic 的 [Coordinator Mode](https://www.testingcatalog.com/anthropic-tests-claude-code-upgrade-to-rival-codex-superapp/) 讓一個 Claude 當主管拆解任務、分派給多個 Claude 平行執行。Microsoft 把 Semantic Kernel 和 AutoGen [合併成 Agent Framework 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/)，為企業多 Agent 系統鋪地基。OpenAI 則以 [GPT-5.4-Cyber](https://openai.com/index/scaling-trusted-access-for-cyber-defense/) 走出「不限制能力，但嚴格控管誰能用」的新路線。三家公司在 Agent 的方向上各有主張，但共識是一致的：AI 的未來不是一個全能的聊天機器人，而是一群能分工的專業助理。

**5. AI 安全規則開始動真格** [🔗 4/16 文章](/tech/2026-04-16-daily-tech)

[OWASP 發布了首份 AI Agent 十大安全風險清單](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)，超過 100 位資安專家共同審核。Anthropic Mythos 揭示了「[AI 發現漏洞的速度遠超企業修補速度](https://fortune.com/2026/04/14/anthropic-mythos-reveals-security-gap-ai-finds-flaws-far-faster-than-companies-can-patch-them/)」的結構性問題，逼出聯準會 + 財政部 + 華爾街 CEO 的國家級回應。[TAKE IT DOWN Act 也迎來首例定罪](https://www.nbcnews.com/tech/security/first-person-convicted-law-criminalizing-intimate-deepfakes-rcna267236)，深偽法律不再只是紙上文字，而是真的會把人送進法院。

### 本週關鍵數據

- **64.3%** — Claude Opus 4.7 在 SWE-bench Pro 的得分，[公開可用模型全球第一](https://thenextweb.com/news/anthropic-claude-opus-4-7-coding-agentic-benchmarks-release)
- **42.8%** — Meta Muse Spark 在 HealthBench Hard 的得分，[醫療問診全球第一](https://artificialanalysis.ai/models/muse-spark)
- **$100/月** — OpenAI 新增的中間方案，[Codex 用量為 Plus 的 5 倍](https://techcrunch.com/2026/04/09/chatgpt-pro-plan-100-month-codex/)
- **1,561** — 2026 年美國 45 州已提出的 [AI 相關法案數量](https://iapp.org/news/a/five-trends-in-the-new-state-ai-legislative-session)
- **6,852** — AMD 高級總監用來佐證 Claude「被降級」的 [Claude Code session 分析數量](https://www.theregister.com/2026/04/13/claude_outage_quality_complaints/)
- **99.99%** — IonQ 跨系統量子閘精度，[量子組網里程碑](https://www.ionq.com/news/ionq-achieves-key-photonic-interconnect-milestone-demonstrating-networked-quantum-systems-using-entanglement)

---

## 🔮 下週展望

**Google Cloud Next 2026（4/22–24，拉斯維加斯）**：Google 的年度主力發布會，今年主題聚焦「AI Agent 進入生產環境」。預計有大量 [Gemini 3.1 + Vertex AI 企業整合消息](https://siliconangle.com/2026/04/15/google-cloud-next-2026-thecube-cloud-infrastructure-googlecloudnext/)，以及 NVIDIA Vera Rubin NVL72 的上架時間表。如果你用 Google Cloud 做任何事，這場會議值得追蹤。

**ICLR 2026（4/23–27，里約熱內盧）**：全球頂級機器學習會議之一，今年 Agent 和安全相關論文佔比創新高。[Microsoft 有超過 150 篇接受論文](https://www.microsoft.com/en-us/research/event/iclr-2026/)。學術圈的風向常常預告半年到一年後的產品方向。

**DeepSeek V4 可能月底前發布**：1 兆參數 MoE 架構，運行在[華為 Ascend 950PR 晶片](https://www.gizchina.com/ai/deepseek-v4-expected-to-launch-in-late-april-with-massive-parameter-scale)上，預計以 Apache 2.0 開源。如果如期登場，將是中國 AI 脫離 NVIDIA 生態的最大規模驗證。

**OpenAI Spud（GPT-5.5 or GPT-6？）仍在等待**：預訓練 3/24 完成，目前在安全評估階段。[Polymarket 給出 4 月底前發布機率 78%](https://lumichats.com/blog/gpt-5-5-spud-openai-release-date-features-april-2026-complete-guide)。Greg Brockman 形容它「代表兩年的研究，不是漸進式改善」。命名未定——叫 GPT-5.5 還是 GPT-6，取決於效能躍升幅度有多大。

**MIT Technology Review「AI 現在最重要的 10 件事」**：預計 [4/21 發布](https://www.technologyreview.com/2026/04/14/1135298/coming-soon-10-things-that-matter-in-ai-right-now/)，候選主題包括 AI 陪伴、機制可解釋性、生成式開發、超大規模數據中心。

---

## 💬 Community News

**Claude「被降級」風波——6,852 個 session 的數據控訴**：這週社群最炸的話題，不是哪個模型又破紀錄，而是 Anthropic 被自家用戶集體質疑。AMD 高級總監 Stella Laurenzo 在 GitHub 上用 6,852 個 Claude Code session 的數據分析指控模型表現明顯下降，[帖子被轉到 X 後引發病毒式傳播](https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance)。[Fortune](https://fortune.com/2026/04/14/anthropic-claude-performance-decline-user-complaints-backlash-lack-of-transparency-accusations-compute-crunch/)、[Axios](https://www.axios.com/2026/04/16/anthropic-claude-power-user-complaints) 都做了深度報導。核心爭議不只是模型變差了多少，而是 Anthropic 悄悄改變預設 effort level 卻沒有充分告知——在一家以「負責任的 AI」為品牌核心的公司身上，這個透明度缺口格外刺眼。

**「AI Agent 真的準備好了嗎？」Nature 潑了一盆冷水**：Nature 本週發表的文章指出，[在複雜任務上，人類科學家仍然大幅領先 AI Agent](https://www.nature.com/articles/d41586-026-01199-z)。這跟本週 Coordinator Mode、Agent Framework 1.0 的熱潮形成有趣對比。開發者社群在討論：Agent 的宣傳跑得比實際能力快了多少？

**鞋商 Allbirds 轉型 AI，市值一天漲 $1.27 億**：賣鞋虧損的 Allbirds 宣布轉型 AI 算力基礎設施（改名 NewBird AI），[市值隔天暴增](https://www.cnbc.com/2026/04/15/allbirds-bird-stock-shoes-ai.html)。X 上充斥嘲諷，但也有人認真思考：「AI 轉型」是否已經變成一種估值魔法？這個案例讓人想起 2017 年長島冰茶公司改名「Long Blockchain Corp」後股價翻三倍的故事。

---

## 總結

這週 AI 圈的每一場角力，底層都在爭奪同一樣東西：信任。Anthropic 用 Opus 4.7 的效能證明技術實力，卻在 effort level 事件中暴露了透明度的缺口。Meta 收回開源承諾，讓社群重新評估「企業說的話能信多久」。OWASP 和各國政府加速制定規則，本質上是在替 AI Agent 建立一套可被信任的框架。下週 Google Cloud Next 和 ICLR 接力登場，DeepSeek V4 和 OpenAI Spud 都在窗口期——信任的考驗還在持續。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Anthropic：Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
- [The Next Web：Claude Opus 4.7 leads on SWE-bench and agentic reasoning](https://thenextweb.com/news/anthropic-claude-opus-4-7-coding-agentic-benchmarks-release)
- [MacRumors：Anthropic Rebuilds Claude Code Desktop App Around Parallel Sessions](https://www.macrumors.com/2026/04/15/anthropic-rebuilds-claude-code-desktop-app/)
- [9to5Mac：Anthropic adds routines to redesigned Claude Code](https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/)
- [Fortune：Anthropic faces user backlash over reported performance issues](https://fortune.com/2026/04/14/anthropic-claude-performance-decline-user-complaints-backlash-lack-of-transparency-accusations-compute-crunch/)
- [Axios：Anthropic's AI downgrade stings power users](https://www.axios.com/2026/04/16/anthropic-claude-power-user-complaints)
- [Nature：Human scientists trounce the best AI agents on complex tasks](https://www.nature.com/articles/d41586-026-01199-z)
- [LumiChats：OpenAI's GPT-5.5 Spud — Everything We Know](https://lumichats.com/blog/gpt-5-5-spud-openai-release-date-features-april-2026-complete-guide)
- [GizChina：DeepSeek V4 Expected to Launch in Late April](https://www.gizchina.com/ai/deepseek-v4-expected-to-launch-in-late-april-with-massive-parameter-scale)
