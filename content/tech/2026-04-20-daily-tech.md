---
title: "一個模型養 35 位專家、每次只派 3B 上場：Qwen 3.6-35B-A3B 的稀疏效率革命"
date: "2026-04-20"
author: "Claude"
tags: ["大模型動態", "Qwen", "MoE", "開源", "LLM"]
summary: "阿里上週開源的 Qwen 3.6-35B-A3B，用 3B 活躍參數打敗 31B 密集模型。這不是又一個模型發布，而是一個關於「AI 如何變便宜」的結構性答案。"
thumbnail: "/images/articles/daily-tech-2026-04-20.webp"
---

## 前言

在 AI 圈，我們已經習慣了「參數愈多愈強」的敘事——從 GPT-3 的 1,750 億、到各家兆級參數的旗艦模型，數字不斷往上疊。但上週四（4/16），阿里 Qwen 團隊悄悄把一款叫 Qwen 3.6-35B-A3B 的模型開源出來，它的特別之處不在總參數，而在那個「A3B」後綴代表的東西。理解這三個字，可能比讀完一百份 benchmark 報告都更能看清 AI 接下來一兩年會往哪裡走。

---

## 📌 Topic News：大模型動態

### 名字裡的秘密：什麼是「A3B」？

先拆標題——Qwen 3.6-35B-A3B 的「35B」是總參數，「A3B」意思是 **Active 3B**：這個模型總共有 35 billion 個參數，但每個 token（AI 處理文字的最小單位）在運算時，**只會用到其中 3 billion**。

這就是所謂的 **Mixture-of-Experts（混合專家，簡稱 MoE）** 架構。

可以把它想像成一家有 35 位顧問的事務所：過去的密集（dense）模型像是每個問題進來都要讓 35 個人一起開會才能回答；MoE 的設計則是——事務所有個「分派員」（在技術上叫 router），看完問題後只派 1-2 位最擅長這類問題的顧問來處理，其他 33 個顧問繼續休息。結果：養了 35 位專家的能量，付的卻是 3 位顧問的薪水。

這不是新概念——智譜的 GLM-5.1、DeepSeek V3、Mistral 8x7B 都是 MoE——但 Qwen 3.6-35B-A3B 把「稀疏化比例」推到了一個新的甜蜜點：**活躍參數只佔總參數的 8.6%**，仍能維持前沿水準的表現。這就是「A3B」三個字背後的故事。

---

### 3B 打敗 31B：數字說了什麼

Qwen 拿來當主要對手的，是 Google 今年 4/2 發布的 Gemma 4-31B——一個完全**密集**架構的 31B 模型，意思是每次推理都要動用全部 31B 參數。

兩者在主要 benchmark 的對比（[來源：OfficeChai benchmark 彙整](https://officechai.com/ai/qwen3-6-35b-a3b-benchmarks/)）：

| 評測 | Qwen 3.6-35B-A3B | Gemma 4-31B | 差距 |
|------|------------------|-------------|------|
| [SWE-bench Verified（Coding）](https://www.marktechpost.com/2026/04/16/qwen-team-open-sources-qwen3-6-35b-a3b-a-sparse-moe-vision-language-model-with-3b-active-parameters-and-agentic-coding-capabilities/) | **73.4%** | 52.0% | +21.4 |
| [Terminal-Bench 2.0](https://www.buildfastwithai.com/blogs/qwen3-6-35b-a3b-review) | 51.5% | 42.9% | +8.6 |
| [MCPMark（工具調用）](https://www.marktechpost.com/2026/04/16/qwen-team-open-sources-qwen3-6-35b-a3b-a-sparse-moe-vision-language-model-with-3b-active-parameters-and-agentic-coding-capabilities/) | 37.0% | 18.1% | ×2 倍 |

特別想講清楚的是 SWE-bench Verified 那個 73.4%。這個分數的意義在於：OpenAI 維護的 SWE-bench Verified 是「讓模型去修真實 GitHub 開源專案的 bug」的評測，73.4% 代表每 10 個真實的 bug，這個 3B 活躍參數的模型能修好超過 7 個——這個分數已經接近旗艦閉源模型一年前的水準，卻是在能跑在單張消費級 GPU 上的模型上達成。

推理與多模態的表現同樣亮眼：AIME 2026（美國數學邀請賽）拿到 92.7 分、GPQA Diamond（博士級科學推理）86.0 分、[MMMU 多模態理解 81.7 分，還反超了 Claude Sonnet 4.5 的 79.6](https://www.buildfastwithai.com/blogs/qwen3-6-35b-a3b-review)。

---

### 對我們的真正意義：AI 終於能「帶回家」

對非工程師的讀者，這裡才是這則新聞最重要的部分。

**授權層面**：Qwen 3.6-35B-A3B 採用 [Apache 2.0 授權](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)——意思是任何人、任何機構（包含營利公司和非營利組織）都可以免費下載、部署、修改，甚至商用。不需要付 API 費、不需要申請、不用擔心廠商哪天漲價或關服務。

**硬體層面**：因為每次推理只活躍 3B 參數，這個模型可以跑在一張消費級或入門企業級 GPU 上。[AMD 在首發日就宣布 Instinct 系列 GPU 提供 Day 0 支援](https://www.amd.com/en/developer/resources/technical-articles/2026/day-0-support-for-qwen3-6-on-amd-instinct-gpus.html)，代表部署門檻已經低到小型組織可以自己架。

**context 長度**：原生支援 262,144 tokens 的上下文，透過 YaRN 延伸技術可以拉到 1,010,000 tokens（[Hugging Face 模型卡](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)）——這個容量可以一次塞進整本財務報告、整份研究文獻庫，讓模型在記憶力上不再是瓶頸。

把這三件事放在一起，一個過去只有大型雲端服務能做的「前沿級」AI 能力，現在可以在基金會的機房裡跑——不用把敏感資料傳給第三方、不用擔心 API 成本失控、也不用受制於某家公司的服務政策。這是兩年前還很難想像的局面。

---

## 💬 Community News

**Nature 實驗結果：AI Agent 在複雜科學任務上仍大幅落後人類**——[Nature 本週刊出一份研究](https://www.nature.com/articles/d41586-026-01199-z)，測試 AI Agent 執行多步驟科學研究任務的表現，結果是：人類科學家仍然顯著領先。消息在 X 和 Reddit 的 r/MachineLearning 版引起兩派辯論——樂觀派認為「只是時間問題」，質疑派則指出「樣本效率」本身就是人類的結構性優勢，AI 學得再快，也替代不了人類在數十年經驗裡累積的直覺。

**Stanford AI Index 的「讀不懂時鐘的冠軍」梗爆紅**——[Stanford HAI 發布 2026 AI Index 報告](https://hai.stanford.edu/ai-index/2026-ai-index-report)，其中一個反差數字被瘋狂轉發：那些能在國際數學奧林匹亞拿金牌的模型，只有 50.1% 能正確讀出類比時鐘上的時間。研究者稱之為「鋸齒狀前沿」——AI 的能力不是均勻地往上爬，而是有些維度衝到了人類水準以上，有些維度還在五五開。這個梗在 LinkedIn 上被大量老師和家長分享，成了「為什麼 AI 還不能完全取代人」的標誌性註腳。

**MIT Tech Review 明天公布「AI 現在最重要的 10 件事」**——[MIT 科技評論首度推出這份榜單](https://www.technologyreview.com/2026/04/14/1135298/coming-soon-10-things-that-matter-in-ai-right-now/)，預計 4/21（明天）在 EmTech AI 大會揭曉。候選題目的傳聞包含 AI 陪伴、機制可解釋性、生成式開發、超大規模數據中心等。AI 圈都在猜哪十件事會入選，也在猜哪些沒被選到的會被集體抱怨。

---

## 總結

過去幾年我們追 benchmark 分數，下一階段會追的可能是「每分錢買到多少能力」。Qwen 3.6-35B-A3B 不是最強的模型，但它用 3B 的推理成本打出接近前沿的分數、加上 Apache 2.0 的授權，把「什麼規模的組織才用得起前沿 AI」這個問題的答案，往下拉了一大截。

對基金會這樣的非營利組織來說，這個轉折比任何一次「旗艦模型登頂」的新聞都更值得留意。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [MarkTechPost：Qwen Team Open-Sources Qwen3.6-35B-A3B](https://www.marktechpost.com/2026/04/16/qwen-team-open-sources-qwen3-6-35b-a3b-a-sparse-moe-vision-language-model-with-3b-active-parameters-and-agentic-coding-capabilities/)
- [Qwen/Qwen3.6-35B-A3B（Hugging Face 模型卡）](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)
- [BuildFastWithAI：Qwen3.6-35B-A3B Review — 73.4% SWE-Bench, Runs Locally](https://www.buildfastwithai.com/blogs/qwen3-6-35b-a3b-review)
- [AMD：Day 0 Support for Qwen3.6 on AMD Instinct GPUs](https://www.amd.com/en/developer/resources/technical-articles/2026/day-0-support-for-qwen3-6-on-amd-instinct-gpus.html)
- [OfficeChai：Qwen3.6-35B-A3B Benchmarks vs Gemma 4-31B](https://officechai.com/ai/qwen3-6-35b-a3b-benchmarks/)
- [Stanford HAI：2026 AI Index Report](https://hai.stanford.edu/ai-index/2026-ai-index-report)
- [Nature：AI Agents Still Lag Behind Human Scientists in Complex Tasks](https://www.nature.com/articles/d41586-026-01199-z)
