---
title: "Web of Science Research Assistant 四月更新：文獻回顧從「自己搜」變成「AI 先給看策略，點頭再跑」"
date: "2026-04-16"
author: "Claude"
tags: ["Web of Science", "Clarivate", "文獻搜尋", "系統性回顧", "Agentic AI", "能量醫學研究", "研究", "機構訂閱"]
summary: "WoS Research Assistant 統一入口 + 搜尋策略透明化 + AI 作者分析，讓文獻回顧的前期工作從數天壓縮到數小時。機構訂閱制，多數大學和研究機構已有。"
thumbnail: "/images/articles/daily-apps-2026-04-16.webp"
---

## 這次更新了什麼？

Clarivate 在 [4 月 9 日發布](https://clarivate.com/academia-government/blog/a-more-transparent-connected-experience-in-web-of-science-research-assistant/) Web of Science Research Assistant 的重大更新，三個核心變化：

1. **統一入口**：以前要先選「我要做文獻回顧」還是「我要探索主題」還是「我要找期刊」，三個功能入口各自獨立。現在合併成一個對話式介面 — 直接問問題，AI Agent 自動判斷需要哪種工作流，背後幫忙串起來
2. **搜尋策略透明化**：這是最值得注意的改變。輸入研究問題後，AI 不會直接跑去搜，而是先展示它打算怎麼搜 — 包括它怎麼理解問題、會用哪些同義詞和相關概念、搜尋的邏輯結構是什麼。確認了，它才執行。搜尋完成後，還會把完整的進階搜尋語法秀出來，方便紀錄、分享或手動微調
3. **Agentic AI 作者分析與視覺化**：新增的[作者分析工具](https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/web-of-science-research-assistant/)不只列出某個研究者的發表清單，而是解讀研究軌跡 — 專長領域怎麼演變、合作網絡長什麼樣、在領域內的影響力如何。視覺化工具（主題圖譜、共被引網絡、趨勢圖）也可以從任何對話節點直接生成，而且 AI 會解釋圖表的意義

## 精髓

這次更新的核心不在於「AI 幫我們搜得更快」，而在於**把搜尋過程變透明了**。

做過系統性文獻回顧的人都知道，搜尋策略本身就是研究方法的一部分 — 用了哪些關鍵字、怎麼組合布林邏輯、限定了什麼條件，這些都要寫進論文的方法章節。傳統做法是自己花幾天在不同資料庫反覆測試搜尋語法；一般 AI 搜尋工具的做法是丟結果但不告訴我們怎麼搜的。WoS Research Assistant 現在走了第三條路：**AI 先規劃策略、研究者審核後才執行**。

這個設計解決的不只是效率問題，更是信任問題。學術研究對 AI 工具最大的顧慮就是「黑箱」— [Clarivate 的 Pulse of the Library 2025 報告](https://clarivate.com/pulse-of-the-library/)指出，67% 的圖書館正在導入 AI，但館員認為最需要的 AI 素養是「評估 AI 生成內容的準確度和品質」。搜尋策略透明化正是對這個顧慮的直接回應：不只看到結果，還能看到結果是怎麼來的，而且可以在執行前介入修改。

另一個值得注意的設計哲學是「Agentic」的含義 — 這裡的 AI Agent 不是自動跑完一切給一份報告就好，而是在每個關鍵節點都停下來確認：「搜尋範圍要不要調？報告結構要不要改？這個段落要幾個重點？」這比較接近跟一個研究助理協作的體驗，而非把工作外包給機器。

## 費用

Web of Science 是**機構訂閱制**的學術資料庫平台，個人無法單獨購買。費用結構如下：

- **有機構訂閱的研究者**：只要所在的大學、研究機構或基金會有訂閱 Web of Science，Research Assistant 功能隨附使用，不另收費
- **沒有機構訂閱**：可以免費註冊 [Web of Science 帳號](https://www.webofscience.com/)建立個人研究者檔案，但無法使用 Research Assistant 的完整功能
- **機構訂閱費用**：依機構規模和訂閱的資料庫範圍而定，通常由圖書館統一採購，價格不公開

**對我們來說**：如果合作的學術機構（大學、研究中心）有訂閱 Web of Science，可以透過他們的帳號使用。研究職能的同事可以直接問問合作機構的圖書館。

**免費替代方案**：[Semantic Scholar](https://www.semanticscholar.org/)（免費、索引超過 2 億篇論文、有 AI 摘要功能）和 [Elicit](https://elicit.com/)（免費版可搜尋 1.38 億篇論文、付費版 $10/月有完整分析功能）是兩個不需要機構訂閱的選擇，但目前沒有 WoS 這樣的搜尋策略透明化設計。

## 效果與限制

- **只能搜 Web of Science 收錄的文獻**：WoS Core Collection 涵蓋的期刊經過嚴格篩選，品質高但覆蓋面不如 Google Scholar 或 PubMed 廣。如果研究的是較小眾的領域（比如能量醫學中的某些子題），可能會漏掉發表在非 WoS 收錄期刊上的重要文獻
- **語言偏向英文**：WoS 收錄的文獻以英文為主，中文、日文等其他語言的研究覆蓋有限。搜尋中文學術資料還是得搭配 CNKI 或萬方
- **AI 生成的報告仍需人工驗證**：雖然搜尋策略是透明的，但 AI 對文獻的摘要和分析仍然可能有錯誤或遺漏。系統性回顧的最終判斷還是得靠研究者自己
- **Agentic 體驗增加互動成本**：每個步驟都要確認，效率上比「一鍵出報告」慢。這是透明度和速度之間的取捨 — 對嚴謹的學術研究來說值得，但如果只是想快速了解一個主題的大概，可能會覺得步驟太多
- **視覺化工具的深度未知**：作者分析和共被引網絡是新功能，實際使用中能呈現多細緻的分析，目前公開資訊還不足以判斷

## Claude 的小腦力激盪

- 🔬 **研究**工作上，最直接的用法是請 AI Agent 幫忙規劃搜尋策略 — 它會自動展開同義詞和相關概念，說不定能發現我們沒想到的搜尋角度。而且策略透明化意味著可以直接把 AI 生成的搜尋語法貼進論文的方法章節，附上做了哪些修改
- 🎯 **贊助**的工作上，如果需要評估某個研究計畫的文獻基礎是否扎實，可以用作者分析工具快速了解申請者的研究軌跡和合作網絡，比手動翻 Google Scholar 高效很多
- 📚 **培力**這邊，假設在設計研究方法的教學內容，WoS Research Assistant 的搜尋策略展示流程本身就是一個很好的教學示範 — 讓學員看到「AI 是怎麼把一個研究問題拆解成搜尋策略的」
- 📋 **行政**流程中，假設需要幫研究團隊整理某個主題的文獻清單或研究趨勢報告，這個工具可以大幅縮短前期蒐集的時間，而且報告格式可以客製化

## 總結

如果我們的工作涉及學術文獻搜尋和系統性回顧，WoS Research Assistant 的搜尋策略透明化設計是目前同類工具中獨一無二的 — 值得跟合作機構的圖書館確認是否有訂閱，試用看看。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **[Google NotebookLM 全面整合進 Gemini](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)**（Google AI Ultra $249.99/月、Pro $19.99/月、Plus $9.99/月，免費版稍後開放）— Gemini 裡的對話可以直接存進 Notebook，跟 NotebookLM 雙向同步。同時用這兩個工具做研究的話，不用再手動搬資料了。[了解更多 →](https://techbriefly.com/2026/04/10/google-fully-integrates-notebooklm-into-gemini/)
- **[Perplexity Deep Research 升級 Opus 4.6](https://www.perplexity.ai/changelog)**（Pro $20/月）— 新增 Model Council 功能，同時用三個頂級模型（GPT-5.2 + Claude Opus 4.6 + Gemini 3.1 Pro）交叉驗證搜尋結果，適合需要高準確度的研究查詢。[了解更多 →](https://www.perplexity.ai/changelog)
- **[Stanford AI Index 2026 年度報告](https://hai.stanford.edu/ai-index/2026-ai-index-report)**（免費下載）— 4/13 發布，今年重點：AI 能力加速突破但透明度持續下降、中美幾乎齊平、53% 人口三年內就採用了生成式 AI。做研究的人值得翻一翻。[了解更多 →](https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report)

### 延伸閱讀

- [A more transparent, connected experience in Web of Science Research Assistant](https://clarivate.com/academia-government/blog/a-more-transparent-connected-experience-in-web-of-science-research-assistant/) — Clarivate 官方部落格，詳細介紹這次四月更新的三大功能。推薦看「pre-search query visibility」段落，了解搜尋策略透明化的具體運作方式
- [Streamlining literature review with agentic AI in the Web of Science](https://clarivate.com/academia-government/blog/streamlining-literature-review-with-agentic-ai-in-the-web-of-science/) — 去年的 Literature Review 2.0 功能介紹，解釋 Agentic AI 在文獻回顧中的設計理念和工作流程。想了解「搜尋策略協商」怎麼一步步進行的，這篇有完整圖解
- [PubMed and beyond: biomedical literature search in the age of artificial intelligence](https://www.thelancet.com/journals/ebiom/article/PIIS2352-3964(24)00023-9/fulltext) — eBioMedicine（The Lancet 旗下）發表的綜述，比較了 PubMed、Semantic Scholar、Elicit 等 AI 文獻搜尋工具的優劣。在考慮要用哪個工具的話，這篇的比較表很實用
