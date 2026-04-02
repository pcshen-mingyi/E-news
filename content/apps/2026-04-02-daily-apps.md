---
title: "Scite MCP：讓 Claude 和 ChatGPT 直接搜學術論文，還能告訴你這篇研究是否被後人支持"
date: "2026-04-02"
author: "Claude"
tags: ["Scite", "MCP", "Smart Citations", "文獻搜尋", "學術研究", "研究", "付費"]
summary: "Scite MCP 讓 AI 助手直接搜尋 2.5 億篇學術文獻，獨家的 Smart Citations 能顯示論文被支持或質疑的次數。付費訂閱制，目前僅支援 Open Access 文章。"
thumbnail: "/images/articles/daily-apps-2026-04-02.webp"
---

## 這次更新了什麼？

[Scite](https://scite.ai/) 在 2026 年 2 月 26 日正式推出了 [Scite MCP](https://www.researchsolutions.com/resources/press-releases/research-solutions-launches-scite-mcp-connecting-chatgpt-claude-and-other-ai-tools-to-scientific-literature)（Model Context Protocol），讓 ChatGPT、Claude、Microsoft Copilot、Cursor 等支援 MCP 的 AI 工具，可以直接搜尋 Scite 收錄的 [2.5 億篇以上](https://www.stocktitan.net/news/RSSS/research-solutions-launches-scite-mcp-connecting-chat-gpt-claude-b688z9h4nro0.html)學術文章、書籍章節、預印本和資料集。

這件事為什麼值得關注？兩個原因：

1. **你常用的 AI 助手，現在能「查論文」了**：以前用 Claude 或 ChatGPT 問研究問題，它只能根據訓練資料回答，容易出現幻覺或引用不存在的論文。接上 Scite MCP 後，AI 的回答會直接引用真實論文，附上可驗證的來源
2. **不只告訴你「有人引用」，還告訴你「怎麼引用」**：這是 Scite 最獨特的能力 — [Smart Citations](https://direct.mit.edu/qss/article/2/3/882/102990/scite-A-smart-citation-index-that-displays-the) 會分析超過 [16 億筆引用關係](https://scite.ai/)，告訴你一篇論文被後續研究「支持」（supporting）、「對比質疑」（contrasting）、還是「僅提及」（mentioning）了多少次

## 精髓

做研究時，找到一篇論文只是第一步。真正的挑戰是判斷：**這篇研究的結論可靠嗎？有多少後續研究支持它？有沒有人得出相反結果？**

傳統做法是一篇一篇讀引用它的論文，看各自怎麼說。Scite 用深度學習模型分析了 2.8 億篇以上來源中的引用語境，把每一筆引用自動分類為三種：

- **Supporting（支持）**：後續研究的實驗結果支持這篇論文的發現
- **Contrasting（對比）**：後續研究得出不同或矛盾的結果
- **Mentioning（提及）**：僅在背景或文獻回顧中提到，沒有明確的支持或反對

這個分類不是只看標題或摘要，而是分析引用出現的[完整段落語境和所在章節](https://clemson.libguides.com/scite/use)（導論、方法、討論等），用經過 [4 萬筆以上標註資料訓練的機器學習模型](https://direct.mit.edu/qss/article/2/3/882/102990/scite-A-smart-citation-index-that-displays-the)來判斷。

透過 MCP 整合，這些引用情報直接進入你的 AI 工作流程。你不用離開 Claude 或 ChatGPT，就能問：「關於某種療法的臨床效果，目前有哪些研究？支持和反對的比例如何？」AI 會基於 Scite 的資料庫回答，而非憑空生成。

## 費用

| 方案 | 價格 | 能做什麼 |
|------|------|---------|
| 免費版 | $0 | 基本搜尋、有限的 Smart Citations 預覽 |
| [Basic](https://scite.ai/pricing) | 約 $7.99/月（年繳） | Smart Citations 完整功能、Scite Assistant 基本用量 |
| [Premium](https://scite.ai/pricing) | 約 $20/月 | 上述全部 + MCP 整合、無限 Assistant 對話、進階搜尋篩選、完整的引用分析報告 |
| 學生方案 | 約 7 折起 | 學生和學術人員可享折扣，需向機構推薦 Scite |

**建議**：如果想使用 MCP 整合功能（也就是讓 Claude 或 ChatGPT 直接搜論文），需要付費訂閱。Premium 方案 $20/月是主要選擇。可以先用 [7 天免費試用](https://scite.ai/pricing)體驗完整功能，再決定是否訂閱。

## 效果與限制

**真正擅長的事：**

- **引用品質判斷**：這是目前市面上唯一能大規模自動分析「引用態度」的工具。你不再只知道一篇論文被引用了 200 次，而是知道其中有多少次是被支持、多少次被質疑
- **全文搜尋**：Scite 搜尋的是論文全文，不只是標題和摘要，能找到更精確的資訊
- **無縫整合現有工作流**：透過 MCP，不用學新介面，你在 Claude 或 ChatGPT 中正常提問，就能獲得有學術文獻支撐的回答
- **存取解析**：如果你的機構有 LibKey 或 GetFTR 整合，Scite 會自動判斷你能否取得全文，並提供存取路徑

**邊界和限制：**

- **目前僅支援 Open Access 文章的全文存取**：這是最大的限制。[付費牆內的論文，目前只能看到元資料和引用分析，無法透過 MCP 取得全文](https://www.stocktitan.net/news/RSSS/research-solutions-launches-scite-mcp-connecting-chat-gpt-claude-b688z9h4nro0.html)。Research Solutions 表示正在與出版商談判擴大授權，但時間表未定
- **分類準確度並非 100%**：機器學習模型在區分「支持」和「僅提及」時表現較好，但在某些細微語境下可能誤判，特別是跨學科或用語不標準的領域
- **英文文獻為主**：Scite 的資料庫以英文學術文獻覆蓋最完整，中文文獻的覆蓋率和引用分析準確度會打折扣
- **需要付費**：MCP 整合功能不在免費方案中，這跟 Semantic Scholar（完全免費）或 Google Scholar 不同

## Claude 的小腦力激盪

Smart Citations 的「支持 vs. 質疑」分析，其實不只研究人員能用：

- 🔬 如果你正在做**研究相關工作**，需要評估某個療法或方法的證據等級，Smart Citations 能快速幫你建立「正反證據地圖」— 哪些研究支持、哪些質疑、分布在哪些年份和期刊。這比手動一篇篇讀高效得多
- 🎯 假設你負責**審閱計畫書**，申請者引用了某些研究來支持他的論點，你可以用 Scite 快速查這些引用是否真的被學界支持，還是其實有大量質疑的聲音。這是一種「引用事實查核」
- 📚 如果你在設計**培訓課程**需要引用學術依據，Scite 能幫你找到被廣泛支持（而非被爭議）的研究作為教材基礎，提高課程的可信度
- 📣 做**對外溝通**時如果需要引用數據或研究結果，Smart Citations 能幫你確認引用的論文在學術圈的接受度，避免引用了一篇「看起來很權威但其實被大量質疑」的研究

## 總結

Scite MCP 的核心價值是讓你的 AI 助手能引用真實論文、判斷研究品質。Smart Citations 的「支持/對比/提及」分類在市面上獨一無二，對需要評估學術證據的人來說特別有用。最大的限制是付費牆內文獻的全文存取尚未開放，且以英文文獻為主。適合經常需要查閱和評估學術文獻的工作者。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 順帶一提：Perplexity Health — 當 AI 搜尋引擎開始讀你的健康數據

Perplexity 在 3 月 19 日推出了 [Perplexity Health](https://www.perplexity.ai/hub/blog/introducing-perplexity-health)，讓 AI 搜尋引擎直接連結你的個人健康數據。它能整合 [Apple Health、Fitbit、Ultrahuman、Withings 等穿戴裝置](https://9to5mac.com/2026/03/19/apple-health-integrates-with-newly-announced-perplexity-health-ai-feature/)，以及透過 b.well 連接超過 [170 萬家醫療機構的電子病歷](https://www.techrepublic.com/article/news-perplexity-health-ai/)。

有趣的是，它回答健康問題時會引用臨床指南和同儕審查期刊，每個回答都附上來源連結。雖然它目前定位是個人健康管理（不是學術研究工具），也明確聲明[不能替代醫療建議](https://www.perplexity.ai/help-center/en/articles/14035438-what-is-perplexity-health)，但「AI + 個人化健康數據 + 醫學文獻」這個組合方式，對於關注健康數據與 AI 交集的人來說值得留意。

費用方面，需要 Perplexity Pro（$20/月）或 Max（$200/月）訂閱，目前僅限美國地區的 Pro/Max 用戶。[了解更多 →](https://www.perplexity.ai/hub/blog/introducing-perplexity-health)

### 本週其他值得關注

- **Consensus Scholar Agent**（免費版可用，Premium $8.99/月）— GPT-5 驅動的多智能體研究系統，能從 2.2 億篇論文中自動搜尋、閱讀和綜合分析。獨家的「共識度量表」能視覺化呈現學界對某問題的同意程度，新增 Medical Mode 專為醫學文獻優化。[了解更多 →](https://consensus.app/)
- **Gemini Deep Research**（免費版可用，進階需 Google AI Ultra）— Google 近期大幅更新的自動化研究工具，能自動搜尋多個來源並產出結構化報告，新增 Audio Overviews 可將報告轉為 podcast 形式聆聽。[了解更多 →](https://blog.google/innovation-and-ai/technology/developers-tools/deep-research-agent-gemini-api/)

### 延伸閱讀

- [Research Solutions 官方新聞稿：Scite MCP 發布](https://www.researchsolutions.com/resources/press-releases/research-solutions-launches-scite-mcp-connecting-chatgpt-claude-and-other-ai-tools-to-scientific-literature) — 最完整的功能介紹和技術細節
- [Smart Citations 原始論文（MIT Press, Quantitative Science Studies）](https://direct.mit.edu/qss/article/2/3/882/102990/scite-A-smart-citation-index-that-displays-the) — 想了解 Smart Citations 背後的機器學習方法和驗證數據，這篇是原始來源
- [Scite MCP 官方頁面](https://scite.ai/mcp) — 安裝設定指南，含 Claude、ChatGPT 等工具的連接步驟
- [Best MCPs for Research 2026（Scite 官方整理）](https://scite.ai/blog/best-mcp-for-research-2026) — Scite 整理的研究用 MCP 工具比較，可以看到 Scite MCP 跟其他研究工具的定位差異
