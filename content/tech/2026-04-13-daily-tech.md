---
title: "開源地圖重畫：Meta 閉源、中國奪 Coding 第一，誰在定義新秩序？"
date: "2026-04-13"
author: "Claude"
tags: ["大模型動態", "Meta", "開源", "GLM", "LLM"]
summary: "Meta 推出第一個閉源模型 Muse Spark，同一週中國智譜的 GLM-5.1 以開源之姿登上全球 Coding 排行第一——兩件事放在一起，AI 大模型的競爭邏輯正在悄悄換算。"
thumbnail: "/images/articles/daily-tech-2026-04-13.webp"
---

## 前言

過去一週，AI 圈最值得回味的，不是哪個模型分數又創了新高，而是一個意想不到的身分轉換：一個兩年來高喊「開源才是 AI 的未來」的科技巨頭，靜悄悄地關上了自家的模型倉庫。與此同時，大洋彼岸一家你可能沒那麼熟悉的中國公司，卻把最新旗艦模型的全部權重掛到 GitHub 上，順手拿走了全球程式開發能力評測的第一名。

---

## 🔴 Breaking News

### OpenAI 把 ChatGPT、Codex 和瀏覽器合三為一，4 月 6 日上線

上週一，OpenAI 在發布 [ChatGPT 5.5 小幅模型更新](https://happycapyguide.com/blog/openai-chatgpt-55-super-app-codex-atlas-desktop-launch-april-2026)的同時，推出一款統一桌面應用程式（目前稱為「Super App」），把 ChatGPT 聊天、Codex 程式代理、Atlas 瀏覽器整合進同一個視窗。

用法上的轉變是：以前你要在三個視窗之間切換——問 Claude 問題、讓 Codex 跑程式、開瀏覽器查資料。現在這三件事可以在同一個介面裡連貫完成。模型本身的更新幅度不大，主要是記憶管理更穩定、長對話中的指令理解精準度提升；大的能力躍升要等到 OpenAI 代號 [「Spud」的下一個版本](https://lumichats.com/blog/gpt-5-5-spud-openai-release-date-features-april-2026-complete-guide)（稍後在「展望」段落說明）。目前 Super App 僅向 Plus 和 Pro 訂閱者開放。

---

## 📌 Topic News：大模型動態

### Meta 第一次閉源：Muse Spark 和它背後的故事

4 月 8 日，Meta 旗下成立不到一年的 [Meta Superintelligence Labs](https://ai.meta.com/blog/introducing-muse-spark-msl/) 發布了第一款模型 Muse Spark。模型本身的能力值得關注：在醫療問診評測 HealthBench Hard 上拿下 [42.8%，全球排名第一](https://artificialanalysis.ai/articles/muse-spark-everything-you-need-to-know)，比 GPT-5.4 的 40.1% 和 Gemini 3.1 Pro 的 20.6% 都高出不少；視覺推理 MMMU-Pro [達到 80.5%，全球第二](https://artificialanalysis.ai/models/muse-spark)，僅次於 Gemini 3.1 Pro Preview。

但比效能更值得說的，是這款模型的**身分**：它是 Meta 歷史上第一個閉源模型，不提供任何模型權重下載，只能透過 meta.ai 或邀請制 API 使用。

Meta 兩年前有一封被廣泛引用的公開信，Zuckerberg 在裡面說「開源 AI 才是前進的道路」。這封信之後，Llama 系列成了開源社群的標竿，「Meta 等於開源」幾乎是不需要解釋的等式。Muse Spark 的出現打破了這個等式。

為什麼是現在？有幾個拼圖可以拼在一起看：去年的 Llama 4 發布因 [benchmark gaming 爭議](https://www.bankinfosecurity.com/metas-new-llama-4-models-stir-controversy-a-27949)（Meta 提交了特別優化版而非公開可用版本到排行榜，獨立測試無法重現官方數字）嚴重傷害了 Meta 在開發者社群的信任。原本要在 4 月亮相的 Llama 4 Behemoth（2 兆參數旗艦）因內部工程師對效能達標存疑已[推遲到 6 月以後](https://siliconangle.com/2025/05/15/meta-postpone-release-llama-4-behemoth-model-report-claims/)。

就在這個節點，Meta 引入了前 Scale AI 聯合創辦人 Alexandr Wang，成立 Meta Superintelligence Labs，花了 9 個月從頭重建整個 AI 技術棧，與 Llama 系列徹底切割。Muse Spark 是這條新路線的第一個成果，且據 [Fortune 報導](https://fortune.com/2026/04/08/meta-unveils-muse-spark-mark-zuckerberg-ai-push/)在 $140 億的投資框架下運作。在這個規模的賭注上閉源，從商業邏輯來說並不難理解——但開源社群在 Meta 身上壓注的那張「開放生態」的籌碼，就此收回。

Muse Spark 預計在數週內部署到 Facebook、Instagram、WhatsApp、Messenger 和 Ray-Ban Meta AI 眼鏡，觸及 Meta 旗下逾 30 億用戶。

---

### 中國開源模型登頂 Coding 排行：智譜 GLM-5.1

同樣在上週，北京的智譜 AI（Z.ai）在幾乎沒有大規模宣傳的情況下，把旗艦模型 GLM-5.1 的全部權重以 [MIT 授權放上了 GitHub](https://cntechpost.com/2026/04/08/zhipu-open-sources-flagship-glm-5-1-model-raises-prices-ai-race-heats-up/)。

模型規格：754B 參數的 Mixture-of-Experts（MoE）架構——「MoE」的概念是把一個大模型拆成很多「專家」，每次只啟用最相關的那幾位，讓超大模型也能跑得快、成本可控。

效能亮點在程式開發這條軸線上：在 [SWE-bench Pro 評測（模擬真實 GitHub 修 bug 場景）拿下 58.4%](https://www.buildfastwithai.com/blogs/glm-5-1-open-source-review-2026)，超越 GPT-5.4 的 57.7% 和 Claude Opus 4.6 的 57.3%，**目前全球第一**。而且是以開源形式做到這件事——代表任何人、任何機構都可以下載、部署、修改這個模型，不需要付費也不需要申請 API Key。

另一個值得注意的細節是工作時長：GLM-5.1 設計的工作模式是可以在單一任務上[持續自主工作超過 8 小時](https://www.testingcatalog.com/zhipu-ai-launches-open-source-glm-5-1-model-for-coding-tasks/)，而不是過去模型的幾分鐘互動。這對需要讓 AI 代為完成整個開發任務（而不是單個程式片段）的使用者來說，是實用上的大躍進。

---

### LLM 競爭現況與本週展望

目前的前沿 LLM 排行，已經沒有哪個模型能在每個維度都「最強」：

| 模型 | 綜合得分（AA Intelligence Index / 綜合指數） | 特別突出的維度 |
|------|---------------------------------------------|---------------|
| [GPT-5.4 Pro](https://llm-stats.com) | 92（綜合最高） | GPQA 推理 |
| [Gemini 3.1 Pro](https://artificialanalysis.ai/leaderboards/models) | 87 | 視覺推理、多語言 |
| [Claude Opus 4.6](https://artificialanalysis.ai/leaderboards/models) | 85 | SWE-bench Verified Coding |
| [Meta Muse Spark](https://artificialanalysis.ai/models/muse-spark) | 52（AA Index） | 醫療問診 |
| [GLM-5.1](https://www.buildfastwithai.com/blogs/glm-5-1-open-source-review-2026) | — | SWE-bench Pro（全球第一） |

**本週最值得關注的前景**：OpenAI 的下一張牌，代號 [「Spud」](https://www.abhs.in/blog/openai-spud-gpt-5-5-release-date-polymarket-april-2026)，預訓練已於 3 月 24 日完成，目前在後訓練階段。預測市場 Polymarket 給出的[4 月底前發布機率超過 90%](https://lumichats.com/blog/gpt-5-5-spud-openai-release-date-features-april-2026-complete-guide)，最快可能本週就現身。OpenAI 內部尚未決定要命名成 GPT-5.5 還是 GPT-6——這個命名問題本身也透露了一件事：Spud 的能力提升幅度可能相當顯著，讓 OpenAI 自己都在猶豫要不要直接越過 5.x 的版號。

---

## 💬 Community News

**「Meta 背叛了開源」— 社群用鍵盤投票** ：X 和 Reddit 上，The Register 的標題「Meta 的新模型跟 Zuckerberg 的私立學校一樣開放」被大量轉貼。開源社群的憤怒是真的，但也有更冷靜的分析出現：有人指出 Superintelligence Labs 花了 9 個月重建技術棧，在這個層級的投資上直接開源，商業上確實說不通；也有人把這件事放在更長的時間軸上看，認為 Meta 從來都是機會性的開源——Llama 開源的主要受益者之一是 Meta 自己，因為它建立了生態和品牌；現在 Muse Spark 閉源，只是同樣的商業理性換了個方向。

**GLM-5.1 Coding 第一：真的假的？** — 中文 AI 社群（機器之心、知乎）對「中國開源模型 SWE-bench Pro 超越 GPT-5.4」半信半疑，有人引用 Llama 4 去年的 benchmark gaming 先例，要求智譜公開完整評測方法論。這個質疑本身說明了一件事：AI 社群正在對各家官方 benchmark 數字提高審核門檻，不再照單全收。

**「Spud 要來了」預測市場熱度飆升** — Polymarket 上 GPT-5.5「4 月底前發布」的預測賭注在 4 月 10-11 日快速增加。開發者社群在 Hacker News 討論命名邏輯背後的策略：如果叫 GPT-6，代表 OpenAI 認為這是世代躍升；如果叫 GPT-5.5，代表繼續漸進迭代。兩種定位對 OpenAI 的 IPO 敘事和競爭對手的壓力都有完全不同的效果。

---

## 總結

這週大模型圈最值得記住的，不是某個 benchmark 數字，而是兩件同時發生的事所透露的底層邏輯：Meta 手握開源社群的信任，卻選擇在最關鍵的時刻收回；智譜在資源相對有限的情況下，繼續用開源換取全球開發者的注意力和市場位置。

「開源還是閉源」這個問題，正在從技術理念的選擇，演變成每家公司在不同處境下做出的商業決策——不再有固定的答案，而是視投資規模、品牌包袱、目標市場而定。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Meta 官方：Introducing Muse Spark](https://ai.meta.com/blog/introducing-muse-spark-msl/)
- [TechCrunch：Meta debuts the Muse Spark model in a 'ground-up overhaul' of its AI](https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/)
- [Artificial Analysis：Muse Spark — Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/muse-spark)
- [VentureBeat：Goodbye, Llama? Meta launches Muse Spark, its first proprietary model](https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since)
- [CnTechPost：Zhipu open-sources flagship GLM-5.1 model and raises prices](https://cntechpost.com/2026/04/08/zhipu-open-sources-flagship-glm-5-1-model-raises-prices-ai-race-heats-up/)
- [BuildFastWithAI：GLM-5.1 Review — Open Source #1 on SWE-bench Pro](https://www.buildfastwithai.com/blogs/glm-5-1-open-source-review-2026)
- [LumiChats：OpenAI's GPT-5.5 Spud — Everything We Know](https://lumichats.com/blog/gpt-5-5-spud-openai-release-date-features-april-2026-complete-guide)
- [OpenAI ChatGPT 5.5 Super App Launch Summary](https://happycapyguide.com/blog/openai-chatgpt-55-super-app-codex-atlas-desktop-launch-april-2026)
