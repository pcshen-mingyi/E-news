---
title: "本週回顧：AI 產業的控制權之爭 — 誰來決定什麼該開放、什麼該鎖住？"
date: "2026-04-10"
author: "Claude"
tags: ["本週回顧", "AI 安全", "開源", "Agent", "Anthropic"]
summary: "從開源模型的崛起、Agent 的治理元年、到 AI 安全的地緣政治化 — 本週 AI 圈的每一場角力，核心都是同一個問題：控制權應該在誰手上？"
thumbnail: "/images/articles/daily-tech-2026-04-10.webp"
---

## 前言

回顧這一週，表面上的新聞很多元：開源模型、AI 進車裡、Agent 安全、地緣政治。但如果你退後一步看，會發現所有事情都在回答同一個問題 —「AI 的控制權，應該在誰手上？」

Google 選擇把 Gemma 4 完全開源，讓任何人都能用。Anthropic 的 Mythos 強到能找出所有主流系統的零日漏洞，所以它決定只給 12 家機構用。MCP 生態 60 天爆出 30 多個漏洞，四大巨頭趕緊坐下來定規範。美國各州搶著立法管 AI，聯邦政府卻想把規則鬆綁。

開放還是封閉？自由還是管制？這不是哲學辯論，而是正在發生的產業路線分歧。以下是本週最重要的五件事。

---

## 📌 本週回顧

### 本週最重要的 5 則新知

**1. Anthropic 的「超級週」：Mythos 模型 + $300 億營收 + 雲端 Agent 平台一次到位** [🔗 原文](/tech/2026-04-09-daily-tech)

Anthropic 本週幾乎每天都有大新聞。

先是 4 月 6 至 7 日公布的商業數字：[年化營收突破 $300 億](https://seekingalpha.com/news/4572848-anthropic-targets-30b-revenue-signs-tpu-deal-with-google-and-broadcom)（2025 年底還是 $90 億），年花百萬美元以上的企業客戶超過 [1,000 家](https://techcrunch.com/2026/04/07/anthropic-compute-deal-google-broadcom-tpus/)。同時與 Google 和 Broadcom 簽下 [3.5 GW 下一代 TPU 產能大單](https://www.bloomberg.com/news/articles/2026-04-06/broadcom-confirms-deal-to-ship-google-tpu-chips-to-anthropic)，預計 2027 年上線。

接著是 4 月 7 日的 [Project Glasswing](https://techcrunch.com/2026/04/07/anthropic-mythos-ai-model-preview-security/)：Anthropic 揭露了新旗艦模型 Claude Mythos，在 SWE-bench Verified 拿下 93.9%、GPQA Diamond 94.6%。更驚人的是，它在幾週內識別了主流作業系統和瀏覽器中的數千個零日漏洞。模型太強了，所以只授權給 12 家機構做防禦性安全研究。

然後是 4 月 8 日的 [Claude Managed Agents](https://siliconangle.com/2026/04/08/anthropic-launches-claude-managed-agents-speed-ai-agent-development/)：一套可組合 API，讓開發者在雲端建構、部署和管理 Agent，提供沙箱執行、憑證管理、端到端追蹤。Notion、Asana、Rakuten 都是早期採用者。

一週之內，Anthropic 同時在模型能力、商業規模和開發者平台三條線推進。值得注意的是，[Anthropic 的年化營收已經超越 OpenAI 的 $250 億](https://www.the-ai-corner.com/p/anthropic-30b-arr-passed-openai-revenue-2026)，這是歷史上第一次。而 Anthropic 80% 的營收來自企業客戶，這解釋了它為什麼能成長這麼快 — 企業合約的留存率和 ARPU（每用戶平均收入），遠高於消費者訂閱。

**2. 開源模型的黃金交叉正在發生** [🔗 原文](/tech/2026-04-06-daily-tech)

Google [Gemma 4 以 Apache 2.0 完全開源](https://blog.google/technology/developers/gemma-4/)，在全球模型排行榜打進前三 — 單張 80GB H100 就能跑，效能接近 20 倍大的模型。同一時間，中國的 DeepSeek 確認 V4 即將發布，一兆參數、全面運行在華為晶片上。

為什麼這件事重要？根據 [Stanford AI Index 報告](https://aiindex.stanford.edu/report/)，開源模型與閉源前沿的效能差距已縮小到個位數百分比，落後時間從過去的一兩年縮短到 6 至 18 個月。[41% 的企業](https://letsdatascience.com/blog/open-source-vs-closed-llms-choosing-the-right-model-in-2026)表示如果開源模型效能追平，會從閉源切換過去。當 Gemma 4 這樣的開源模型能用一張消費級 GPU 跑出接近前沿的效能，「只有大公司才用得起 AI」的門檻正在瓦解。對基金會這樣的非營利組織來說，這意味著取得高品質 AI 能力的成本正在快速下降。

**3. AI Agent 從桌面進入治理元年** [🔗 原文](/tech/2026-04-08-daily-tech)

本週我們報導了 AI Agent 生態的安全治理進展。故事的起點是 Salesforce 把 Slackbot 改造成能草擬郵件、排會議、主動建議行動的 [AI 工作夥伴](https://techcrunch.com/2026/03/31/salesforce-announces-an-ai-heavy-makeover-for-slack-with-30-new-features/) — Agent 已經走進每個人的辦公桌面。

但硬幣的另一面是：MCP 生態在 60 天內被揭露 [30+ 個安全漏洞](https://www.darkreading.com/application-security/agentic-ai-risky-mcp-backbone-attack-vectors)，包含 CVSS 9.6 的遠端程式碼執行漏洞。惡意 MCP Server 能讓 Agent 成本暴增 [658 倍](https://adversa.ai/blog/top-mcp-security-resources-april-2026/)。

產業的回應來得很快：MCP Dev Summit 上 Anthropic、AWS、Microsoft、OpenAI [四大維護者聯手發布安全路線圖](https://thenewstack.io/mcp-maintainers-enterprise-roadmap/)，聚焦認證、可觀測性和水平擴展。Microsoft 同時[開源了 Agent Governance Toolkit](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/)，覆蓋 OWASP Agentic AI Top 10 全部十項風險。

這件事為什麼重要？因為 [Gartner 預測 2026 年底 40% 的企業應用將嵌入 AI Agent](https://www.salesmate.io/blog/ai-agents-adoption-statistics/)，但同時也警告：如果治理和可觀測性沒到位，[超過 40% 的 Agent 專案可能在 2027 年被取消](https://cyntexa.com/blog/agentic-ai-statistics/)。Agent 要真正進入企業，安全治理不是選項，而是前提。

**4. AI 安全成為地緣政治議題** [🔗 原文](/tech/2026-04-09-daily-tech)

本週的報導揭示了一件歷史性事件：OpenAI、Anthropic、Google 三家彼此激烈競爭的公司，透過 [Frontier Model Forum 首次聯手進行威脅情報共享](https://www.bloomberg.com/news/articles/2026-04-06/openai-anthropic-google-unite-to-combat-model-copying-in-china)，對象是中國 AI 公司的「對抗性蒸餾」攻擊。被點名的公司包含 DeepSeek、Moonshot AI、MiniMax，Anthropic 單獨記錄到 [1,600 萬次未授權交換](https://www.japantimes.co.jp/business/2026/04/07/tech/openai-anthropic-google-china-copy/)。

這件事最令人擔憂的不是商業版權問題，而是安全問題：蒸餾可以複製模型的能力，但**無法複製安全過濾層**。一個從 Claude 蒸餾出來、卻沒有對齊訓練和拒絕機制的模型，被用於監控或散布假訊息的風險是真實的。模型安全，已經不只是技術問題 — 它是國家安全問題。

**5. AI 管制框架的全球拉鋸** [🔗 原文](/tech/2026-04-09-daily-tech)

與此同時，美國和歐洲的 AI 管制框架都在劇烈變動。加州州長 Newsom [簽署行政命令](https://www.gov.ca.gov/2026/03/30/as-trump-rolls-back-protections-governor-newsom-signs-first-of-its-kind-executive-order-to-strengthen-ai-protections-and-responsible-use/)，要求與加州合作的 AI 廠商符合安全標準，直接反制 Trump 政府的「AI 預佔令」。紐約州也簽署了 [RAISE Act](https://www.governor.ny.gov/news/governor-hochul-signs-nation-leading-legislation-require-ai-frameworks-ai-frontier-models)，要求前沿模型開發者公布安全協議，違規罰款 $300 萬。[2026 年第一季已有 19 項 AI 法案成為法律](https://pluralpolicy.com/blog/the-ai-governance-watch-april-2026-nineteen-new-ai-bills-passed-into-law/)。

但在大西洋對岸，曾被視為全球標竿的 EU AI Act 卻面臨被削弱的風險。歐盟的「數位 Omnibus」提案讓 AI 公司[不再需要公開高風險系統評估](https://www.amnesty.org/en/latest/news/2026/04/eu-simplification-laws/)，國際特赦組織直接警告這是「為了餵養 AI 而犧牲人權保護」。[EU AI Act 強制執行截止日是 2026 年 8 月 2 日](https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-eu-ai-act-implementation-timeline-understanding-the-next-deadline-for-compliance/)，距今不到四個月。

### 本週關鍵數據

- **$300 億** — Anthropic 年化營收，[超越 OpenAI 的 $250 億](https://www.the-ai-corner.com/p/anthropic-30b-arr-passed-openai-revenue-2026)，歷史首次
- **3.5 GW** — Anthropic 與 Google/Broadcom 簽下的[下一代 TPU 產能](https://www.bloomberg.com/news/articles/2026-04-06/broadcom-confirms-deal-to-ship-google-tpu-chips-to-anthropic)
- **93.9%** — Claude Mythos 在 [SWE-bench Verified 的得分](https://techcrunch.com/2026/04/07/anthropic-mythos-ai-model-preview-security/)，目前最高
- **30+** — MCP 生態 60 天內被揭露的 [CVE 數量](https://www.darkreading.com/application-security/agentic-ai-risky-mcp-backbone-attack-vectors)
- **19 項** — 2026 年 Q1 美國新通過的 [AI 法案數量](https://pluralpolicy.com/blog/the-ai-governance-watch-april-2026-nineteen-new-ai-bills-passed-into-law/)
- **78,557 人** — 2026 年 Q1 科技業裁員總數，[近半歸因 AI 自動化](https://www.tomshardware.com/tech-industry/tech-industry-lays-off-nearly-80-000-employees-in-the-first-quarter-of-2026-almost-50-percent-of-affected-positions-cut-due-to-ai)

---

## 🔮 下週展望

**DeepSeek V4 可能月底前發布。** DeepSeek 的聊天介面已出現 [Fast / Expert / Vision 三種模式](https://technode.com/2026/04/08/deepseek-v4-may-launch-this-month-test-interface-suggests-vision-and-expert-modes/)，暗示 V4 不是單一模型，而是一個模型套件。V4-Lite 已在 API 節點測試，開發者報告推理速度提升 30%。整套模型運行在[華為 Ascend 950PR 晶片](https://www.trendforce.com/news/2026/04/07/news-decoding-deepseek-v4-how-huaweis-ascend-950-pr-is-powering-chinas-push-to-break-cuda-dependence/)上，1 兆參數、100 萬 token 上下文窗口。如果如期發布，將是中國 AI 脫離 NVIDIA 生態的最大規模驗證。

**Google Cloud Next 2026（4/22–24，拉斯維加斯）** 和 **ICLR 2026（4/23–27，里約熱內盧）** 將在月底接力登場。Google Cloud Next 預計會有更多 Gemini 3.1 Pro 的企業整合消息；ICLR 則是學術圈最關注的機器學習會議之一，今年的論文接受名單中 Agent 和安全相關的研究佔比創新高。

**OpenAI IPO 持續推進。** CFO Sarah Friar [確認 IPO 將保留散戶配股](https://www.cnbc.com/2026/04/08/openai-ipo-sarah-friar-retail-investors.html)，估值瞄準 $1 兆，可能 2026 下半年向 SEC 提交申請。AI 產業從技術競賽進入資本市場，將是下半年最大的商業敘事之一。

**EU AI Act 倒數計時。** 距離 8 月 2 日強制執行截止日不到四個月，Omnibus 提案的最終走向將決定歐洲 AI 治理的實際力道。

---

## 💬 Community News

**Anthropic 營收超車 OpenAI，社群熱議「企業市場才是真戰場」** — Anthropic $300 億年化營收超越 OpenAI $250 億的消息，在社群引發廣泛討論。多數分析指出關鍵差異在商業模式：[Anthropic 80% 營收來自企業客戶](https://www.the-ai-corner.com/p/anthropic-30b-arr-passed-openai-revenue-2026)，而 OpenAI 仍高度仰賴消費者訂閱。有人形容這是「to B vs to C」路線之爭的最新戰報。也有社群成員觀察到，Anthropic 本週同時推出 Managed Agents 平台，顯然是要把企業 AI Agent 的基礎設施也搶下來。

**Q1 裁員數字引發焦慮與反思** — Tom's Hardware 報導 [2026 年 Q1 科技業裁員 78,557 人、近半歸因 AI](https://www.tomshardware.com/tech-industry/tech-industry-lays-off-nearly-80-000-employees-in-the-first-quarter-of-2026-almost-50-percent-of-affected-positions-cut-due-to-ai) 的數字在 Reddit 和 Hacker News 引發大量討論。Anthropic CEO Dario Amodei 預測 AI 將淘汰一半入門級白領工作的發言被反覆引用。但也有冷靜的聲音指出，企業從 AI 導入到看見生產力提升可能需要一年以上，目前的裁員可能是「先裁再說」的跟風行為。

**Perplexity 轉型 Agent 後營收暴漲 50%** — [Perplexity 的 ARR 在一個月內從約 $3 億跳到 $4.5 億](https://www.pymnts.com/artificial-intelligence-2/2026/perplexitys-shift-to-ai-agents-boosts-revenue-50/)，催化劑是 2 月推出的 Agent 產品「Computer」和用量計費模式。社群在討論這是否證明了 Agent 才是 AI 的真正商業模式 — 搜尋是入口，Agent 才是付費轉換的關鍵。

---

## 總結

本週的 AI 產業新聞，看似五花八門，其實都在回答一個核心問題：**控制權在誰手上？**

模型層面，開源正在快速追趕閉源，Gemma 4 和 DeepSeek V4 讓「人人都用得起 AI」不再只是口號。基礎設施層面，Anthropic 一邊發布「強到不敢開放」的 Mythos，一邊用 $300 億營收和 3.5 GW TPU 大單鞏固算力優勢。安全層面，三大 AI 公司首次聯手對抗蒸餾威脅，MCP 四巨頭趕著為 Agent 生態制定安全底線。政策層面，美國各州和聯邦在角力，歐盟的管制框架在收縮。

這些看似不相關的事件，其實是同一場博弈的不同切面 — AI 越來越強大、越來越普及，但誰來把關、誰來制定規則，還遠遠沒有定論。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 延伸閱讀

- [Anthropic: Expanding our use of Google Cloud TPUs](https://www.anthropic.com/news/google-broadcom-partnership-compute)
- [TechCrunch: Anthropic ups compute deal with Google and Broadcom](https://techcrunch.com/2026/04/07/anthropic-compute-deal-google-broadcom-tpus/)
- [SiliconANGLE: Anthropic launches Claude Managed Agents](https://siliconangle.com/2026/04/08/anthropic-launches-claude-managed-agents-speed-ai-agent-development/)
- [Anthropic 營收超越 OpenAI 分析](https://www.the-ai-corner.com/p/anthropic-30b-arr-passed-openai-revenue-2026)
- [The New Stack: MCP Maintainers Enterprise Roadmap](https://thenewstack.io/mcp-maintainers-enterprise-roadmap/)
- [OpenAI: The next phase of enterprise AI](https://openai.com/index/next-phase-of-enterprise-ai/)
- [CNBC: OpenAI IPO retail investors](https://www.cnbc.com/2026/04/08/openai-ipo-sarah-friar-retail-investors.html)
- [TechNode: DeepSeek V4 test interface](https://technode.com/2026/04/08/deepseek-v4-may-launch-this-month-test-interface-suggests-vision-and-expert-modes/)
- [Tom's Hardware: Tech layoffs Q1 2026](https://www.tomshardware.com/tech-industry/tech-industry-lays-off-nearly-80-000-employees-in-the-first-quarter-of-2026-almost-50-percent-of-affected-positions-cut-due-to-ai)
