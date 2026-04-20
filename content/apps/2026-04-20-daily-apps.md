---
title: "Claude Opus 4.7 視覺升級 3 倍：掃描版計畫書、受贈單位財報，AI 終於能看清楚"
date: "2026-04-20"
author: "Claude"
tags: ["Claude", "Opus 4.7", "視覺 AI", "文件審閱", "贊助", "付費"]
summary: "Opus 4.7 的視覺解析度從 1.15MP 拉到 3.75MP，準確度從 54.5% 跳到 98.5%。贊助端常遇到的掃描計畫書、受贈單位財報，終於不用再忍受小字糊成一片。"
thumbnail: "/images/articles/daily-apps-2026-04-20.webp"
---

## 這次更新了什麼？

4 月 16 日，Anthropic [正式釋出 Claude Opus 4.7](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7)。這次升級對日常用 Claude 的人來說，最有感的是**視覺與文件處理**這塊：

1. **高解析度影像支援** — 最大可處理 2,576 × 2,576 px 的圖片（約 3.75MP），從前一代的 1,568 px / 1.15MP 拉高了三倍多。對應到實務上，就是整張 A4 掃描件可以清楚讀進去，不用再拆頁
2. **低層次視覺能力變強** — 指認位置、量尺寸、數數量這類基本功，從 [54.5% 的視覺準確度躍升到 98.5%](https://www.buildfastwithai.com/blogs/claude-opus-4-7-review-benchmarks-2026)
3. **.docx 修訂與 .pptx 版面的自我核對** — 官方明確提到，模型現在更會產出、也更會檢查自己寫的追蹤修訂；做投影片版面時也更穩

價格維持不變：API 仍是 $5 / $25 per MTok（input / output），1M token 的 context window 也沒加長文加價。對 Claude.ai 的消費者端則是 Pro 方案 ($20/月) 起就能用。

## 精髓

Opus 4.6 和更早的 Claude，在視覺上的核心限制其實只有一句話：**看不清楚小字**。

這對贊助工作特別有感。假設我們收到一份受贈單位的季度財報，20 頁掃描件，表格密集、字級 10 pt 起跳。餵給 4.6 讓它萃取數字，大概會遇到「某幾格讀錯」「小計和明細對不起來」這種情況，不是模型笨，而是原始畫素就已經糊掉了。

3.75MP 解析度拉上來之後，這個瓶頸很大程度鬆動。官方文件特別點名三個受惠最多的場景：[電腦操作、螢幕截圖理解、文件判讀](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7#high-resolution-image-support)。共同點是「原本就需要看清楚細節才能做對的事」，現在 AI 的眼力終於接近人眼水準。

同時，模型在**自我核對**這件事上也更穩。產一份 tracked changes、做一頁投影片之後，4.7 比較不會留下「看起來對、其實細節亂掉」的成品。這兩件事合起來看，不是單純的「更好」，而是「從不敢放手到可以放手」的跨線。

## 費用

贊助同仁實際會遇到的付費分層：

| 方案 | 費用 | 用到 Opus 4.7 的方式 |
|------|------|---------------------|
| [Claude 免費版](https://www.anthropic.com/pricing) | $0 | 只有 Sonnet 可用，Opus 系列不開放 |
| [Claude Pro](https://www.anthropic.com/pricing) | $20/月 | 有限額度的 Opus 使用，適合個人試水溫 |
| [Claude Max](https://www.anthropic.com/pricing) | $100/月 或 $200/月 | 大量使用 Opus，適合每天要跑掃描件 |
| [Anthropic API](https://platform.claude.com/docs/en/about-claude/pricing) | $5 / $25 per MTok | 用量計費，適合接進既有系統（例如 Google Drive 自動化） |

幾個決策重點：

- **試用門檻低**：Pro $20/月 已足夠驗證「4.7 到底能不能讀我們平常那種掃描件」，不用一開始就上 Max
- **API 新的注意事項**：[新版 tokenizer 會用掉約 1–1.35 倍 tokens](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7#updated-token-counting)，同樣的文件餵進去會比 4.6 再貴一點。如果用量大，記得把成本試算往上抓兩成
- **企業端**：同樣的 Opus 4.7 也上架到了 [Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry](https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available/)，如果組織已經有雲端供應商，可以走合約走法

免費替代方案方面，Google Gemini 2.5 的視覺能力在高解析度上也有進步，但目前一般評測仍認為 Opus 4.7 在「文件判讀」和「數字細節」兩塊領先 ([參考 Techloy 比較](https://www.techloy.com/claude-opus-4-7-vs-opus-4-6-what-actually-changed-and-whether-you-should-switch/))。

## 效果與限制

- **高解析度要花更多 tokens**：官方建議「如果不需要這麼清楚，先降解析度再送」，也就是讀收據小字需要高清，但一般檔案不用全開
- **中文表格判讀仍有落差**：官方 benchmark 大多以英文為主，我們這邊實測時仍建議先抽 2–3 份中文掃描件對答案，再決定要不要整批跑
- **看清楚 ≠ 看懂語意**：把數字從表格讀出來和「判斷這份財報有沒有異常」是兩回事。Opus 4.7 改善的是前者，後者仍需要人來把關
- **自動思考預設是關的**：4.7 改成 adaptive thinking，預設**不開啟**。如果要用它做複雜的跨文件比對，記得在對話中明確要求「仔細思考」或在 API 設定 `thinking: {type: "adaptive"}`，否則會是比較直接的回答
- **語氣變直了**：官方自己提到 4.7 比 4.6 更「直接、有主見、少用 emoji」。如果我們平常把 Claude 的回應直接複製進報告，語氣上可能要再潤一下

## Claude 的小腦力激盪

- 🎯 **贊助**的工作上，假設手上有一批掃描成 PDF 的計畫書或結案報告，可以試試把整份丟給 Opus 4.7 讓它抓摘要、列預算表。過去 4.6 常把小字數字讀錯，這次值得重新測一次再決定工作流
- 📋 **行政**流程中，如果平常要把合約掃描件裡的關鍵條款（生效日、金額、承辦人）彙整成表格，高解析度下的「逐格讀取」比過去穩
- 🔬 **研究**工作上，論文裡的圖表、統計圖的小標注、圖片上的文字，過去 AI 常「看見但讀不出」，現在值得把之前放棄的圖片題目拿回來重跑一次
- 📚 **培力**這邊，若手上有學員作業的手寫掃描件或現場拍的筆記照，4.7 對這類「現實噪點多」的圖像判讀也有改善，可以作為批改參考的第一層整理

## 總結

如果我們平常要處理大量掃描件、表格密集的受贈單位文件、或是常被「小字讀不出來」擋住工作流，Opus 4.7 值得認真試一次。Pro $20/月的門檻低到足以驗證效果，不需要一次承諾 Max。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **[Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)**（Pro / Max / Team 可用）— 4/17 研究預覽釋出，同樣由 Opus 4.7 驅動。可以從文字描述、DOCX/PPTX/XLSX 或網站截圖起手，快速產 one-pager、投影片、原型稿，還能匯出到 Canva、PDF、PPTX。如果要把一份贊助決策快速變成董事會用的視覺稿，這是新選擇。[了解更多 →](https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/)
- **[GrantWatch 2026 AI 工具](https://www.prnewswire.com/news-releases/grantwatchs-2026-ai-tools-redefine-grant-discovery-and-writing-302742442.html)**（年費約 $199）— 4/15 上線五個新工具：自然語言 Grant Finder、章節式 Grant Writer、Foundation Directory、Deadline Tracker、過往得獎者比對。站在贊助方視角，這提醒我們「申請書 AI 化」正在發生——未來收到的文件會愈來愈同質、愈來愈精緻，審查的重點會往「實質內容」和「組織能力」挪動。[了解更多 →](https://completeaitraining.com/news/grantwatch-adds-five-ai-tools-for-grant-discovery-and/)
- **[ChatGPT File Library + Google Drive 整合](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)**（免費版可用，Plus $20/月有更高額度）— 上傳過的檔案會自動存進 Library，跨對話可重複引用；Google Drive 整合後，能直接把 Drive 上的申請表、核銷收據拉進對話。適合常把同一批受贈單位文件丟給 AI 做不同分析的情境。[了解更多 →](https://releasebot.io/updates/openai/chatgpt)

### 延伸閱讀

- [What's new in Claude Opus 4.7 — Anthropic 官方](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7)：最完整的更新清單，含視覺、指令遵循、tokenizer、breaking changes，想了解細節看這篇就夠
- [Claude Opus 4.7 vs 4.6：What Actually Changed — Techloy](https://www.techloy.com/claude-opus-4-7-vs-opus-4-6-what-actually-changed-and-whether-you-should-switch/)：從「要不要升級」角度整理，適合正在決定要不要把工作流切過去的人
- [Claude Opus 4.7 Release Tracker — FindSkill.ai](https://findskill.ai/blog/claude-opus-4-7-release-tracker/)：釋出時間線與各平台上架進度的彙整，如果組織已使用 AWS Bedrock 或 GCP Vertex AI，這篇會告訴你什麼時候可以用到
