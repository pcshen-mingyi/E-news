---
title: "Google 把 AI 工具全收進同一個門——Gemini Enterprise 上線，連對手 Claude 都能用"
date: "2026-04-28"
author: "Claude"
tags: ["AI 產品", "Google", "Gemini Enterprise", "Vertex AI", "Agent"]
summary: "上週四 Google 在 Cloud Next 把用了五年的 Vertex AI 整個改名整合成 Gemini Enterprise，Model Garden 還直接收了對手 Anthropic 的 Claude——這背後是一場跟 OpenAI、Microsoft 不一樣的押注。"
thumbnail: "/images/articles/daily-tech-2026-04-28.webp"
---

## 前言

上週的 AI 大事大多跟「誰的模型更強」有關。但 Google 在 Cloud Next 上做的這件事很不一樣——它沒有發新模型、沒有刷新 benchmark，只是把自家用了五年的東西重新搬了一次家。值得寫的，是它搬家的方式裡藏的態度。

---

## 🔴 Breaking News

### EU AI Act 合規期限可能延後 16 個月，今天決定

歐盟今天（4/28）正在進行 AI Act Omnibus 的[第二輪三方協商](https://www.ropesgray.com/en/insights/viewpoints/102mquz/ai-omnibus-trilogue-underwaywhat-to-expect-as-negotiations-progress)，外界預期 Council 與 Parliament 將達成政治協議，把高風險 AI 系統的合規期限從原訂的 [2026 年 8 月 2 日，延到 2027 年 12 月 2 日](https://www.onetrust.com/blog/how-the-eu-digital-omnibus-reshapes-ai-act-timelines-and-governance-in-2026/)，整整往後推 16 個月。

延期不是放鬆要求，而是配套追不上。產業界一直反映：歐盟要求企業合規，但對應的[統一標準（harmonised standards）、合規評估流程、官方指引都還沒到位](https://iapp.org/news/a/meps-reach-preliminary-political-agreement-on-AI-omnibus)。等於規則寫好了，工具還沒打造好。脫衣 AI（nudifier）等高風險應用仍然禁止，個別執法也照舊；如果今天破局，原版 AI Act 仍會在 8 月生效。

雖然這是歐盟內部的法規，但全球的 AI 產品大多會跟著歐盟調整時程（類似當年 GDPR 對全球隱私規範的拉動）。我們用的 SaaS 工具未來幾個月會不會出現「合規版本」，多半就看這場談判的結果。

---

## 📌 Topic News：AI 產品與服務

### 改名背後的真正動作

4/22，Google 在 Las Vegas 的 Cloud Next 大會宣布：[把用了五年的 Vertex AI 整個改名、改組成 Gemini Enterprise Agent Platform](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform)。Vertex AI 是 Google Cloud 從 2021 年起的機器學習主力產品，許多企業就是在這上面訓練模型、跑 AI 工作流。新名字底下，做的不只是貼新 logo——而是把過去散落各處的功能拉到同一張桌子上。

過去要在 Google Cloud 上做 AI，工作流很碎：[Vertex AI 訓練模型、Agent Builder 蓋 Agent、Workspace 處理日常文件、第三方整合（Salesforce、Slack 等）住在另一處](https://cloud.google.com/blog/products/ai-machine-learning/the-new-gemini-enterprise-one-platform-for-agent-development)。改名後，這些統統收進同一個入口，從訓練、部署、監控到串接，都在 Gemini Enterprise 裡完成。

說它像便利商店把分散在不同角落的 ATM、繳費機、影印機都搬到同一個櫃檯，並不誇張。技術上沒有變強，但你不必再店裡店外跑。

### 三個必須認得的名字：Agent Studio、Memory Bank、A2A

Agent Studio 是這次拿出的[低程式碼介面](https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era)。意思是不會寫程式的人也能蓋 Agent——用自然語言描述你要它做什麼，再用拖拉的方式把流程拼起來。這類工具市場上不少，但 Agent Studio 的差別是直接接上 Google 的雲端、模型與資料庫，從畫流程到實際跑起來中間沒有縫。

Memory Bank 解決的是 AI 助手最讓人煩的限制：每次對話結束、記憶就清空。下次再找它，得從頭再講一次背景。Memory Bank 給 Agent 加上[跨對話、跨會話的長期記憶](https://www.hpcwire.com/aiwire/2026/04/23/google-unveils-gemini-enterprise-agent-platform/)，Google 強調工程師用[不到 20 行程式碼](https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era)就能掛上。

A2A（Agent-to-Agent）是最有玄機的一個。它是讓不同公司、不同平台做的 Agent 可以互相溝通的協定，可以理解成「Agent 世界的 USB-C」。值得留意的是：A2A 已從 2025 年的 50 家技術夥伴擴張到[現今 150 家在生產環境使用](https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era)；更不尋常的是，這個協定不歸 Google 私有，已經[交給 Linux Foundation 旗下的 Agentic AI Foundation 治理](https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era)。Google 一方面把所有工具收進自家門裡，一方面又把跨平台的標準推給開源基金會管——這兩個動作放在一起，才看得出這次發布真正想說的話。

### 連對手 Claude 都收進來

故事的核心，藏在 Model Garden 這個區塊。Gemini Enterprise 的模型市集裡放了[超過 200 個模型](https://cloud.google.com/products/gemini-enterprise-agent-platform)：Google 自家的 Gemini 3.1 Pro、Flash Image、Lyria 3，開源的 Gemma 4，以及——**Anthropic 的 Claude Opus、Sonnet、Haiku**。客戶在 Gemini Enterprise 裡可以直接選 Claude 來跑，不必跳出去找另一個平台。

這個動作放在當週的時間軸上看更耐人尋味。同一週稍後的 4/24，Google 才剛公告要[最高投資 Anthropic 400 億美元](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic)——是 Big Tech 對單一 AI 公司最大規模的押注之一。一邊砸幾百億押對手，一邊把對手的旗艦模型直接放在自家平台首頁讓客戶選。乍看像兩個方向相反的決策，其實是同一個策略的兩面。

對比之下：[OpenAI 的 Workspace Agents](https://openai.com/index/introducing-workspace-agents-in-chatgpt/) 只跑自家 Codex；[Microsoft Copilot Agent Mode](https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/) 主力靠長年策略夥伴 OpenAI 與自家 Phi 系列模型，並沒有把 Google Gemini 或 Anthropic Claude 放進核心體驗。三家裡只有 Google 主動把對手家的旗艦放進自家平台讓客戶選。

這不是技術選擇，是商業姿態。Google 不打算把客戶綁在自家模型上，它押的是另一件事：不論你用誰的模型，最後都會用我家的雲、我家的 Agent 平台、我家的整合工具。模型只是地基上的一塊石頭，平台才是那棟建築。

### 對我們意味著什麼

明怡基金會不會直接架 Gemini Enterprise，但這個策略對我們仍然有感。我們現在用的工具——Salesforce、Google Workspace、未來會接到的各種 SaaS——背後正在被 Gemini 整合進去。同日 Salesforce 與 Google Cloud 宣布的[深度整合](https://www.salesforce.com/news/press-releases/2026/04/22/salesforce-google-cloud-launch-new-integrations-deep-context/?bc=OTH)就是直接的例子：Agentforce 的推理引擎改用 Gemini，未來 Slack 或 Google Workspace 裡跑的 AI Agent，背後可能就是這套東西。

而 Memory Bank 這件事的影響更貼身。一旦 Agent 真的能跨對話記得「我們的專案、我們的語氣、我們的文件慣例」，每次都不用從頭再交代一遍——這個小但日積月累的便利，比 benchmark 高個幾分對日常工作的影響，往往大得多。

---

## 💬 Community News

### 23 歲業餘者用 ChatGPT Pro 解開 60 年數學難題

4/24，[Scientific American 一篇報導](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/)在 X 與數學圈瘋傳：23 歲、沒有進階數學訓練的 Liam Price，靠一份 ChatGPT Pro 訂閱（用的是 GPT-5.4 Pro）解開了 [Erdős 在 1965 年提出的「primitive sets」猜想](https://www.erdosproblems.com/forum/thread/1196)。模型用了一個叫 [Markov chains 結合 von Mangoldt weights](https://eu.36kr.com/en/p/3784815604817154) 的方法——這個技術數學界已存在 90 年，從來沒有人把它套在這類問題上。AI 思考了 80 分鐘才給出回答，原始輸出粗糙到要靠專家解讀，但其中的關鍵洞察被 Fields Medalist Terence Tao 公開肯定。

### DeepSeek V4 開源同日，美國國務院公開指控 IP 盜竊

4/24 上午 DeepSeek 把 V4 模型權重以 Apache 2.0 [釋出到 Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)（昨天的文章已寫過 V4 的技術面）。但同一天上午，美國國務院罕見地發出聲明，公開指控 DeepSeek 涉及 IP 盜竊。一邊用開源證明可行，一邊用政治力施壓——[時間幾乎重疊的兩個動作](https://www.theneuron.ai/explainer-articles/around-the-horn-digest-everything-that-happened-in-ai-today-friday-april-24-2026/)在 X 上引發討論：開源這條路會不會反而變成國際政治的新前線。

---

## 總結

這次 Google 沒有用更強的模型來打仗，而是用「不獨佔」這個姿態來定義自己的市場位置——把對手的東西放進自己的店裡賣。對 AI 巨頭來說，這是個值得觀察的選擇：當模型能力的差距越來越接近於 commodity，下一個競爭軸線會不會從「我家的模型」轉到「我家的平台是不是好用得讓你不想離開」。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Google Cloud Blog：Introducing Gemini Enterprise Agent Platform](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform)
- [Google Cloud Blog：The new Gemini Enterprise — one platform for agent development](https://cloud.google.com/blog/products/ai-machine-learning/the-new-gemini-enterprise-one-platform-for-agent-development)
- [TheNextWeb：Google Cloud Next 2026 — AI agents, A2A protocol, Workspace Studio](https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era)
- [HPCwire：Google Unveils Gemini Enterprise Agent Platform, Expands Vertex AI into Full Agent Stack](https://www.hpcwire.com/aiwire/2026/04/23/google-unveils-gemini-enterprise-agent-platform/)
- [Bloomberg：Google Plans to Invest Up to $40 Billion in Anthropic](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic)
- [Salesforce Press：Salesforce and Google Cloud Enable AI Agents to Act Across Both Platforms](https://www.salesforce.com/news/press-releases/2026/04/22/salesforce-google-cloud-launch-new-integrations-deep-context/?bc=OTH)
- [Ropes & Gray：AI Omnibus — Trilogue Underway](https://www.ropesgray.com/en/insights/viewpoints/102mquz/ai-omnibus-trilogue-underwaywhat-to-expect-as-negotiations-progress)
- [Scientific American：Amateur armed with ChatGPT 'vibe-maths' a 60-year-old problem](https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/)
