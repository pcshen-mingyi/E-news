---
title: "AI 技術日報｜Anthropic Mythos 洩漏、OpenAI 關閉 Sora、Apple 開放 Siri 生態"
date: "2026-03-30"
author: "Claude"
tags: ["大模型", "Anthropic", "OpenAI", "Apple", "ARC-AGI"]
summary: "本週大模型圈震撼不斷：Anthropic 意外洩漏超越 Opus 的 Mythos 模型、OpenAI 關閉燒錢的 Sora 轉向機器人、Apple 宣布讓 Claude 和 Gemini 進入 Siri。"
thumbnail: "/images/articles/daily-tech-2026-03-30.webp"
---

## 前言

這一週的 AI 圈可以用「重新洗牌」來形容。從 Anthropic 意外洩漏下一代模型，到 OpenAI 果斷砍掉每天燒 1,500 萬美元的產品，再到所有前沿模型在新基準測試上集體不及格——這些事件都指向同一個訊號：AI 產業正在從「比誰更大」轉向「比誰更務實」。

---

## 🔴 Breaking News

### Anthropic「Mythos」模型意外洩漏 — AI 安全公司的安全漏洞

3 月 26 日，安全研究人員發現 Anthropic 的內容管理系統存在設定錯誤，導致近 [3,000 份未公開文件](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)被公開存取。其中包含了一個全新模型「Claude Mythos」（代號 Capybara）的草稿部落格文章。

Mythos 是 Opus 之上的**全新層級**，Anthropic 用了「能力的階梯式跳躍」（step change）來描述它。在程式撰寫、學術推理和網路安全測試上，Mythos 的分數「大幅超越」目前最強的 Claude Opus 4.6。

但更引人關注的是安全面。洩漏文件揭示，Anthropic 內部評估認為 Mythos [可能帶來前所未有的網路安全風險](https://fortune.com/2026/03/27/anthropic-leaked-ai-mythos-cybersecurity-risk/)，因為它能快速發現並利用軟體漏洞。一家以 AI 安全聞名的公司，卻因為人為設定錯誤洩漏了自己最機密的模型資訊——這個諷刺不言而喻。

### OpenAI 關閉 Sora — 每天燒 1,500 萬美元的教訓

3 月 24 日，OpenAI 宣布[關閉上線僅六個月的 Sora 影片生成工具](https://edition.cnn.com/2026/03/24/tech/openai-sora-video-app-shutting-down)。據 [TechCrunch 報導](https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/)，Sora 峰值時每天消耗約 1,500 萬美元推理費用，但整個生命週期收入僅 210 萬美元。原本已承諾 [10 億美元合作的 Disney](https://www.ghacks.net/2026/03/26/openai-shuts-down-sora-and-ends-planned-1-billion-disney-partnership/)，在公告前不到一小時才被通知。

不過 Sora 的技術資產不會浪費。OpenAI 表示 Sora 團隊將轉向**機器人領域的世界模擬**——為了生成逼真影片而學會的物理定律理解（重力、碰撞、光影），正是訓練機器人的核心能力。

---

## 📌 Topic News：大模型動態

### Apple 宣布 iOS 27 開放 Siri 給所有 AI 競爭者

3 月 26 日，[Bloomberg 報導](https://www.bloomberg.com/news/articles/2026-03-26/apple-plans-to-open-up-siri-to-rival-ai-assistants-beyond-chatgpt-in-ios-27) Apple 計劃在 iOS 27 中透過全新的「Extensions」系統開放 Siri 給第三方 AI。除了現有的 ChatGPT 整合外，Google Gemini、Anthropic Claude、Perplexity、Amazon Alexa、Meta AI、xAI Grok 和 Microsoft Copilot 都將能[接入 Siri](https://www.macrumors.com/2026/03/26/apple-ios-27-siri-chatbot-integration/)，預計 6 月 8 日 WWDC 正式公布。

這等於 Apple 承認了單靠自研 AI 無法滿足用戶需求，選擇了平台策略——不跟你比模型，讓所有模型在我的地盤上競爭。對我們的影響？未來在 iPhone 上可以根據不同任務選擇最適合的 AI：寫作找 Claude、搜尋找 Perplexity、程式找 Copilot，全部透過 Siri 統一入口。

### ARC-AGI-3：所有前沿模型得分低於 1%

本月發布的 [ARC-AGI-3 基準測試](https://arcprize.org/blog/arc-agi-3-launch)給了業界一記當頭棒喝。這個測試要求 AI 自主探索互動環境、形成假設並執行計劃——不給任何提示或說明。[結果](https://the-decoder.com/arc-agi-3-offers-2m-to-any-ai-that-matches-untrained-humans-yet-every-frontier-model-scores-below-1/)：Gemini 3.1 Pro 得 0.37%、GPT-5.4 得 0.26%、Opus 4.6 得 0.25%。人類？100%。

這形成了一個有趣的矛盾：模型在既定任務上越來越強（如 Mythos 的跳躍），但在需要真正「理解」和「探索」的場景中，與人類的差距依然是鴻溝。$200 萬獎金等著任何能匹配人類表現的 AI，目前沒有人領得到。

### Gartner：2030 年推理成本降 90%，但總支出反升

[Gartner 在 3 月 25 日發布預測](https://www.gartner.com/en/newsroom/press-releases/2026-03-25-gartner-predicts-that-by-2030-performing-inference-on-an-llm-with-1-trillion-parameters-will-cost-genai-providers-over-90-percent-less-than-in-2025)：到 2030 年，兆級參數模型的推理成本將比 2025 年低 90% 以上。但 Gartner 同時警告，token 消耗增速將超過成本降幅，總推理支出反而會上升。AI 會越來越便宜，但我們會用得越來越多。

---

## 💬 Community News

**Karpathy 的 Autoresearch 持續發酵** — Andrej Karpathy 3/7 開源的 [autoresearch](https://github.com/karpathy/autoresearch)（僅 630 行腳本）讓 AI Agent 自主跑 700 次 ML 實驗，找到 20 個訓練優化讓模型訓練加速 11%。[Shopify CEO 也分享](https://fortune.com/2026/03/17/andrej-karpathy-loop-autonomous-ai-agents-future/)跑一晚 37 個實驗帶來 19% 效能提升。GitHub 已超過 21,000 星，社群熱議「AI 自己做研究」離我們還有多遠。

**ARC-AGI-3 引爆推理辯論** — 所有模型低於 1% 的結果在 Reddit 和 HN 上引發激辯。一派認為這證明 LLM 的「推理」本質只是模式匹配；另一派反駁說測試刻意避開 LLM 強項，不代表全貌。

**Apple Siri 開放策略的產業意義** — LinkedIn 和 X 上的 AI 從業者熱議：AI 助手市場正式進入「平台化」時代，未來競爭不只看模型好不好，還要看誰能在 Apple 生態系中提供最好的整合體驗。

---

## 總結

本週的大模型動態：AI 能力邊界持續被推進（Mythos），但真正的通用智慧仍然遙遠（ARC-AGI-3）。商業上，不可持續的燒錢模式正被修正（Sora 關閉），平台戰爭正在取代模型戰爭（Apple 開放 Siri）。對明怡基金會的同仁來說，最值得關注的是 AI 工具的選擇正在變得更多元，現在是了解各家 AI 優劣勢的好時機。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Anthropic Mythos 模型洩漏 — Fortune 獨家報導](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)
- [Anthropic Mythos 的網路安全風險 — Fortune](https://fortune.com/2026/03/27/anthropic-leaked-ai-mythos-cybersecurity-risk/)
- [Why OpenAI Really Shut Down Sora — TechCrunch](https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/)
- [Apple 計劃在 iOS 27 開放 Siri 給競爭者 — MacRumors](https://www.macrumors.com/2026/03/26/apple-ios-27-siri-chatbot-integration/)
- [ARC-AGI-3：所有前沿模型得分低於 1% — The Decoder](https://the-decoder.com/arc-agi-3-offers-2m-to-any-ai-that-matches-untrained-humans-yet-every-frontier-model-scores-below-1/)
- [Gartner 預測 2030 年 LLM 推理成本降 90%](https://www.gartner.com/en/newsroom/press-releases/2026-03-25-gartner-predicts-that-by-2030-performing-inference-on-an-llm-with-1-trillion-parameters-will-cost-genai-providers-over-90-percent-less-than-in-2025)
- [Karpathy 的 Autoresearch — Fortune](https://fortune.com/2026/03/17/andrej-karpathy-loop-autonomous-ai-agents-future/)
- [Karpathy autoresearch — GitHub](https://github.com/karpathy/autoresearch)
