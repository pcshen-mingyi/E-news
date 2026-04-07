---
title: "開源 AI 的黃金交叉：Gemma 4 登上全球第三、DeepSeek V4 用華為晶片叫陣"
date: "2026-04-06"
author: "Claude"
tags: ["LLM", "開源模型", "Google", "DeepSeek", "Gemma 4"]
summary: "Google Gemma 4 以 Apache 2.0 開源奪下全球模型排行第三，DeepSeek V4 則以華為晶片 + 1 兆參數即將登場。開源模型與閉源前沿的差距正在快速縮小。"
thumbnail: "/images/articles/daily-tech-2026-04-06.webp"
---

## 前言

本週的大模型圈只有一個關鍵字：開源。Google 發布的 Gemma 4 在全球模型排行榜上打進前三名，而且完全免費、任何人都可以下載修改。同一時間，中國的 DeepSeek 確認 V4 即將發布，一兆參數、全面運行在華為晶片上。兩件事加在一起，訊號很清楚：開源模型與閉源前沿之間的差距，正在快速縮小。

---

## 📌 Topic News：大模型動態

### Google Gemma 4：免費模型首度打進全球前三

4 月 2 日，Google 正式發布 [Gemma 4 開源模型家族](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)。這次最大的突破不只是模型本身變強了，而是 Google 第一次把自家最強的開源模型用 **Apache 2.0 授權**（一種非常寬鬆的開源授權，允許任何人免費下載、修改、甚至拿去賣錢，完全不受限制）釋出。

Gemma 4 家族包含四個版本，從能跑在手機上的超輕量版到資料中心等級的都有：

- **E2B / E4B**：為手機、平板等邊緣裝置設計的迷你版
- **26B MoE**：採用 MoE 架構（Mixture of Experts，一種讓模型只啟動部分參數來處理任務的設計，兼顧速度和效能）
- **31B Dense**：效能最強的版本，在 [Arena AI 排行榜以 ELO 1,452 登上全球第三](https://www.theregister.com/2026/04/02/googles_gemma_4_open_weights/)，超越許多參數量遠大於它的閉源模型

31B 版本還支援 [256K token 的 context window](https://www.engadget.com/ai/google-releases-gemma-4-a-family-of-open-models-built-off-of-gemini-3-160000332.html)（大約可以一次讀入一本中篇小說的長度），原生支援視覺和音訊處理，涵蓋 140 種以上語言。而這一切，都是從 Google 自家旗艦模型 Gemini 3 的同源技術衍生而來。

過去，全球排行榜前幾名清一色是 OpenAI、Anthropic、Google 的閉源付費模型。現在一個免費、可自由修改的模型就能排到第三名 — 雖然跟最頂尖的閉源模型還有差距，但這個差距已經不再是「堪用 vs. 頂級」的鴻溝，而是在迅速收窄中。

### DeepSeek V4 即將登場：一兆參數、華為晶片、每百萬 token 只要 0.3 美元

就在 Gemma 4 發布的同一週，[路透社 4 月 4 日確認](https://findskill.ai/blog/deepseek-v4-release-date-specs/) DeepSeek V4 將在 4 月下旬正式發布，而且全面運行在華為的 Ascend 950PR 晶片上。

先看幾個關鍵數字：

- **1 兆（1 Trillion）總參數**，但採用 MoE 架構，每次回應[只啟動約 370 億參數](https://www.nxcode.io/resources/news/deepseek-v4-release-specs-benchmarks-2026)。換句話說，它擁有一兆參數的知識量，但跑起來的速度和成本像一個 370 億參數的模型
- **100 萬 token context window** — Gemma 4 的 256K 已經很厲害了，DeepSeek V4 直接翻了四倍
- **SWE-bench 得分 [81%](https://www.nxcode.io/resources/news/deepseek-v4-release-specs-benchmarks-2026)** — 這是一個測試 AI 能不能獨立修復真實軟體 bug 的基準，81% 是非常高的分數
- **定價 [$0.30 / 百萬 token](https://www.nxcode.io/resources/news/deepseek-v4-release-specs-benchmarks-2026)** — 作為對比，GPT-5.4 的輸入價格是每百萬 token 數美元起跳
- **訓練成本僅約 [520 萬美元](https://findskill.ai/blog/deepseek-v4-release-date-specs/)** — 這個數字令人咋舌，因為同等級的模型通常要花數億美元訓練

V4-Lite 版本已經在 API 節點進行實測，開發者回報推理速度提升 30%，[128K token 長度的內容召回率從 45% 飆升到 94%](https://findskill.ai/blog/deepseek-v4-release-date-specs/)。正式版預計在 4 月下旬推出，同樣會以開源方式釋出。不過，這些數字目前來自 DeepSeek 自行發布的測試，還需要等正式版上線後的獨立評測才能完整驗證。

### 華為晶片 vs. NVIDIA：AI 算力的地緣政治

DeepSeek V4 最引人注目的不只是模型本身，而是它選擇全面運行在華為晶片上。過去幾年，美國對中國實施了嚴格的 AI 晶片出口管制，NVIDIA 的高階 GPU 基本上無法合法出口到中國。DeepSeek 這次的選擇等於是向全世界展示：即使沒有 NVIDIA，中國也有機會訓練出具競爭力的大模型。

當然，這還需要最終版本發布後的獨立測試來驗證。但光是 V4-Lite 的初步表現，已經足以讓產業界重新評估美國晶片管制的實際效果。

### 開源模型的競爭力正在質變

把 Gemma 4 和 DeepSeek V4 放在一起看，一個更大的趨勢浮現了：開源模型正在從「勉強堪用的替代品」升級為「值得認真考慮的選項」。

| | Gemma 4 (31B) | DeepSeek V4 |
|---|---|---|
| 參數量 | 310 億 | 1 兆（活躍 370 億） |
| 授權 | Apache 2.0（完全自由） | MIT / Apache 2.0 |
| 排名 | 全球第 3 | 待正式測試 |
| Context | 256K tokens | 1M tokens |
| 成本 | 免費自行部署 | $0.30 / 百萬 token |

一年前，開源模型還被視為「堪用但比不上 ChatGPT」的替代品。現在，它們在排行榜上已經能跟閉源模型短兵相接，而且成本低了一到兩個數量級。開源模型能否在所有任務上全面追平閉源前沿，目前還不確定 — 但至少在特定場景下，差距已經小到讓人重新思考「一定要用付費模型」這個假設。

---

## 💬 Community News

- **「Apache 2.0 才是真正的重點」**：在 [Hacker News](https://news.ycombinator.com) 和 Reddit r/MachineLearning 的討論中，開發者對 Gemma 4 的授權變更反應比模型效能更熱烈。過去 Google 的 Gemma 系列使用較嚴格的授權條款，這次改為 Apache 2.0 被視為 Google 在開源策略上的重大轉向，背後動機被解讀為「用開源搶生態系，對抗 DeepSeek 和 Meta Llama 的市場份額」。

- **「華為晶片能不能撐住？」**：DeepSeek V4 轉用華為 Ascend 晶片的消息在中文技術社群（[機器之心](https://www.jiqizhixin.com)、知乎）引發大量討論。樂觀派認為這證明中國的 AI 晶片自主化已經取得實質進展；質疑派則指出，V4-Lite 的測試規模還不夠大，真正的考驗要等正式版發布後、面對大規模推理負載時才知道。

- **「開源會不會殺死 AI 公司的訂閱制？」**：多位科技評論者在 X 上討論，當免費開源模型的品質逼近月付 $20 的 ChatGPT Plus，消費者還有多少理由繼續付費。主流觀點認為，閉源模型的護城河正在從「模型能力」轉向「產品體驗」和「生態整合」。

---

## 總結

2026 年 4 月的第一週，開源 AI 模型迎來了重要的里程碑。Google Gemma 4 用 Apache 2.0 授權把全球第三名的模型送給了所有人；DeepSeek V4 則準備用華為晶片和一兆參數證明，即使在晶片管制下，開源 + 低成本的路線依然走得通。開源模型是否已經全面追上閉源前沿，現在下定論還太早，但有一件事很確定：未來使用高品質 AI 的門檻會越來越低，選擇會越來越多。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Gemma 4: Byte for byte, the most capable open models（Google Blog）](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
- [Google battles Chinese open weights models with Gemma 4（The Register）](https://www.theregister.com/2026/04/02/googles_gemma_4_open_weights/)
- [Google releases Gemma 4, a family of open models built off of Gemini 3（Engadget）](https://www.engadget.com/ai/google-releases-gemma-4-a-family-of-open-models-built-off-of-gemini-3-160000332.html)
- [DeepSeek V4: 1T Parameters, 81% SWE-bench, $0.30/MTok（NxCode）](https://www.nxcode.io/resources/news/deepseek-v4-release-specs-benchmarks-2026)
- [DeepSeek V4: Release Date, Specs, and the Huawei Chip Bombshell（FindSkill.ai）](https://findskill.ai/blog/deepseek-v4-release-date-specs/)
- [The Gemma 4 Apache 2.0 License Change That Matters More Than Its #3 Global Ranking（RevolutionInAI）](https://www.revolutioninai.com/2026/04/gemma-4-apache-license-benchmark-open-model-2026.html)
