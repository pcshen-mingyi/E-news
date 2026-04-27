---
title: "24 小時內 AI 兩種未來同時上場：GPT-5.5 漲價、DeepSeek V4 把 1M context 變成標配"
date: "2026-04-27"
author: "Claude"
tags: ["大模型動態", "GPT-5.5", "DeepSeek V4", "OpenAI", "開源"]
summary: "上週四 OpenAI 把 API 價格翻倍上線 GPT-5.5，相隔不到 24 小時，DeepSeek 把 1M context 從『外掛』變成『預設』Apache 2.0 開源——同一週、同一個故事的兩個極端答案。"
thumbnail: "/images/articles/daily-tech-2026-04-27.webp"
---

## 前言

過去一年我們習慣的 AI 圈節奏：各家輪流推出新模型，比誰更聰明。但上週四晚到週五，出現了一個少見的時刻——兩個被全網等待最久的旗艦模型，在 24 小時內前後落地。值得注意的不是它們各自有多強，而是把它們放在一起看時，會看見一條過去一年都還沒這麼清楚的分岔。

---

## 🔴 Breaking News

### Google 宣布最高 400 億美元投資 Anthropic — Big Tech 押注首次跨入「五百億等級」

4/24，Anthropic 與 Google 共同公告：[Google 將最高投資 400 億美元](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic)——其中 [100 億現金立即到位，剩下 300 億在達成績效目標後分階段釋出](https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/)，以本輪 [3,500 億美元的估值](https://www.cnbc.com/2026/04/24/google-to-invest-up-to-40-billion-in-anthropic-as-search-giant-spreads-its-ai-bets.html) 認購。

時間軸放遠一點看，這個數字更值得記住：Amazon 在同月稍早才剛宣布 25 億美元加碼 Anthropic，本月 Anthropic 同時收到 Google + Amazon 共最高 [650 億美元的承諾](https://www.pymnts.com/news/investment-tracker/2026/google-doubles-down-on-anthropic-with-new-40-billion-investment/)。Anthropic 自家公告的年化營收（ARR）也已 [超過 300 億美元](https://www.pymnts.com/news/investment-tracker/2026/google-doubles-down-on-anthropic-with-new-40-billion-investment/)，而 2025 年底時這個數字還只是 90 億上下。

---

## 📌 Topic News：大模型動態

### 4/23 與 4/24：兩家公司，兩個世界

4/23 上午 10 點 PT，OpenAI [上線 GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)（內部代號「Spud」）——付費訂閱者開始可用，API 同步開放。隔不到 24 小時，4/24，DeepSeek [釋出了 V4 預覽版](https://api-docs.deepseek.com/news/news260424)，並把模型權重以 [Apache 2.0 授權上傳到 Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)。

兩個發布都是各自家中的旗艦級。但細看內容，會發現它們其實沒在同一個維度上競爭——它們各自把 AI 模型未來該長什麼樣，給出了一個極端答案。

### GPT-5.5：自 GPT-4.5 以來，第一次「從零重訓」

過去一年我們看到的 GPT 升級，多半是 fine-tune（微調）+ 後訓練優化——好比一輛車原本的引擎不換，只調整變速箱、改寫導航軟體。GPT-5.5 不一樣：[OpenAI 官方明確指出，這是 GPT-4.5 之後第一個「從零重訓」的基礎模型](https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5)，等同於把整個引擎重做。

底層重做後，GPT-5.5 帶出兩件過去做不到的事：

第一是**原生 omnimodal（全模態）架構**。我們以前用的「multimodal GPT」其實是把多個專門模型（一個處理文字、一個處理圖像、一個處理音訊）拼接在一起。GPT-5.5 是文字、圖像、音訊、影片[同一套權重端到端處理](https://datanorth.ai/news/openai-releases-gpt-5-5-agentic-model)——你拿一段影片問它，它不再是「先把影片轉成描述、再用文字模型回答」。

第二是**長脈絡推理的飛躍**。在 MRCR v2（一個專門考驗模型「在長文件裡找出資訊並推理」的 benchmark）上，1M token 設定下，GPT-5.5 的得分從 GPT-5.4 的 [36.6% 跳到 74.0%](https://tokenmix.ai/blog/gpt-5-5-spud-review-88-swe-bench-2026)——超過一倍。對於要用 AI 處理整本年報、整年信件記錄的人來說，這個分數的意義是「以前 AI 讀完還是會漏一半，現在大概能找到三分之二」。

代價是：API 價格從 GPT-5.4 的 [$2.50 / $15 翻倍到 $5 / $30](https://apidog.com/blog/gpt-5-5-pricing/) per Mtok（每百萬 token 輸入/輸出）。OpenAI 在兩個月內第二次漲價。

### DeepSeek V4：1M context 不是外掛，是地基

對照組來了。4/24 釋出的 [DeepSeek V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) 規格：1.6 兆（trillion）總參數、每次只啟用 49B（這是 MoE 架構），預設 [1M token context window](https://blockchain.news/ainews/deepseek-v4-preview-open-sourced-1m-context-breakthrough-and-49b-active-param-pro-model-2026-analysis)。

這裡有一個很容易被略過的關鍵字：「**預設**」。

過去一年我們在規格表上看到的「百萬 token context」幾乎都是「外掛」——意思是模型訓練時還是用標準長度，事後再用 RoPE extension、context interpolation 等技巧硬把窗戶擴開。能用，但長度愈拉長愈不穩，準確度往往大幅掉。

DeepSeek V4 是[第一個從一開始就設計成「百萬 token 是預設值」的開源模型家族](https://ofox.ai/blog/deepseek-v4-release-guide-2026/)——它的注意力機制本身（[Compressed Sparse Attention + Heavily Compressed Attention 混合](https://nerdleveltech.com/deepseek-v4-open-source-frontier-million-token-context)）就是為了讓百萬 token 能跑得便宜、跑得穩。具體一點：在 1M token 設定下，V4 推論[只需要 V3.2 的 27% 浮點運算與 10% 顯存快取](https://blockchain.news/ainews/deepseek-v4-preview-open-sourced-1m-context-breakthrough-and-49b-active-param-pro-model-2026-analysis)。

授權方面更直接：[Apache 2.0](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)——可商用、可改、可再發布。對應到價格曲線：第三方推估 V4 跑 1M context 的成本，約是頂級閉源模型的 [1/6](https://nerdleveltech.com/deepseek-v4-open-source-frontier-million-token-context)。

### 那我們呢？AI 的「兩條斜槓」

為什麼把這兩件事放在一起講？因為它們其實沒在彼此競爭——它們在告訴我們，AI 模型這條路接下來會分成兩條。

一條是 GPT-5.5 走的「向上」：架構重做、能力一體化、價格翻倍。讓最複雜的工作（同時讀影片、寫程式、改文件）愈來愈靠一個 omnimodal 模型完成，但這種「最頂的能力」的票價會繼續漲。

另一條是 DeepSeek V4 走的「向下」：底層為長脈絡重新設計、權重 Apache 2.0 開放、第三方可以拿去做任何事。讓「中等能力但夠用」的曲線一路下沉，最後被內嵌進每一個你已經在用的工具——你看不到它，但你的 Cursor、Notion、研究軟體背後的成本會被它拉下來。

對基金會的同仁來說，這個分岔比哪個 benchmark 多兩分更值得記住。如果你正在評估用什麼工具處理年報、長期通訊紀錄、研究文獻——以前的問題是「AI 看不完」，現在的問題會慢慢變成「我願意付多少錢買 AI 看得多深」。同一份檔案，貼進 GPT-5.5 跟貼進一個用 DeepSeek V4 為底的開源工具，得到的答案質感會不一樣，但價差也會被拉開。選擇從「哪個最聰明」變成「哪個最匹配你的工作型態」。

---

## 💬 Community News

### Snap CEO 公開承認：AI 已寫了我們 65% 程式碼

4/24，Snap CEO Evan Spiegel 公告裁員[約 1,000 人 + 關閉 300 個未填補職缺](https://www.crescendo.ai/news/latest-ai-news-and-updates)。引人注目的是備忘錄裡的兩個數字：AI 目前產生 Snap [65% 以上的新程式碼](https://www.crescendo.ai/news/latest-ai-news-and-updates)；預計 2026 下半年可省下年化 [5 億美元](https://www.crescendo.ai/news/latest-ai-news-and-updates)。社群上的討論集中在「以後這條曲線會不會變成大型公司的標配公告」——Spiegel 把「AI 讓更小團隊有更大產出」直接放進新聞稿，這個用詞被視為轉折點。

### METR「任務時程曲線」本週再度成為 X 上最被引用的 AI 圖

非營利研究機構 METR 維護一張長期被討論的圖：「AI 能用 50% 可靠度自主完成多長時間的人類任務」。原版顯示 2019–2025 期間每 [7 個月翻倍](https://metr.org/blog/2026-1-29-time-horizon-1-1/)，2024 年起[可能加速到 4 個月](https://medium.com/@AIchats/are-ai-time-horizon-doubling-every-seven-months-e337162eec83)。本週這張圖在 X 與 [Bloomberg](https://www.bloomberg.com/news/articles/2026-04-25/understanding-the-most-viral-chart-in-artificial-intelligence) 大量被引用，討論「GPT-5.5、Claude Opus 4.7 落點到底在曲線哪裡」。MIT Technology Review 同步發了一篇[專文](https://www.technologyreview.com/2026/02/05/1132254/this-is-the-most-misunderstood-graph-in-ai/)，提醒這張圖最容易被誤解的部分是它衡量的不是 100% 成功率、是 50%——換句話說，這張圖描述的是「AI 有一半機會做完的任務時程」，不是「AI 一定做得完」。

---

## 總結

把上面三件事放在一起看：Big Tech 仍在加碼 Anthropic 等前沿閉源公司、OpenAI 把模型重做後漲價、DeepSeek 把 1M context 完全開源——AI 同時在「向上做更貴」與「向下做更開放」兩個方向加速，但中間「中等貴中等開放」的地帶正在被擠壓。METR 的曲線提醒我們，這個分岔不是各家在炒話題：模型能持續完成的任務長度，這幾年沒有要慢下來的跡象。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Bloomberg：Google Plans to Invest Up to $40 Billion in Anthropic](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic)
- [TechCrunch：Google to invest up to $40B in Anthropic in cash and compute](https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/)
- [OpenAI：Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
- [OpenAI：GPT-5.5 System Card](https://openai.com/index/gpt-5-5-system-card/)
- [Vellum：Everything You Need to Know About GPT-5.5](https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5)
- [TokenMix：GPT-5.5 Review — 88% SWE-Bench, 92.4% MMLU, 2x Price Tag](https://tokenmix.ai/blog/gpt-5-5-spud-review-88-swe-bench-2026)
- [Apidog：GPT-5.5 Pricing Full Breakdown](https://apidog.com/blog/gpt-5-5-pricing/)
- [DeepSeek API Docs：V4 Preview Release](https://api-docs.deepseek.com/news/news260424)
- [Hugging Face：DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
- [Nerd Level Tech：DeepSeek V4 — Open-Source Frontier at 1/6 the Cost](https://nerdleveltech.com/deepseek-v4-open-source-frontier-million-token-context)
- [OFox：DeepSeek V4 Released — Open-Source 1.6T MoE, 1M Context, Apache 2.0](https://ofox.ai/blog/deepseek-v4-release-guide-2026/)
- [Crescendo AI：Latest AI News and Updates（Snap layoffs）](https://www.crescendo.ai/news/latest-ai-news-and-updates)
- [Bloomberg：Understanding the Most Viral Chart in AI](https://www.bloomberg.com/news/articles/2026-04-25/understanding-the-most-viral-chart-in-artificial-intelligence)
- [METR：Time Horizon 1.1（2026 年 1 月更新）](https://metr.org/blog/2026-1-29-time-horizon-1-1/)
