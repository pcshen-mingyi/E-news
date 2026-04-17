---
title: "Copilot in Word 終於支援 Track Changes：AI 改了什麼，一筆一筆看得清楚"
date: "2026-04-17"
author: "Claude"
tags: ["Microsoft Copilot", "Word", "Track Changes", "文件審閱", "行政", "付費"]
summary: "AI 編輯文件不再是黑箱。Copilot 的修改現在能逐字標記、留註解，審閱者可以逐一接受或拒絕。"
thumbnail: "/images/articles/daily-apps-2026-04-17.webp"
---

## 這次更新了什麼？

4 月 15 日，Microsoft [正式發表](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974) Copilot in Word 的三項新能力：

1. **Track Changes 整合** — 開啟追蹤修訂後，Copilot 的每一筆新增、刪除、改寫都會以熟悉的紅線標記呈現，精確到單字層級
2. **註解管理** — Copilot 可以在修改處附上說明（「為什麼改這段」），也能讀取、回覆既有的註解討論串
3. **動態頁面元素** — 頁首、頁尾、頁碼、欄位、邊界等版面設定，現在也能透過 Copilot 口語指令完成

這些功能目前在 Windows 桌面版 [Frontier 預覽（Insiders Beta Channel）](https://the-decoder.com/microsoft-copilot-in-word-can-now-track-changes-and-manage-comments/) 開放使用。

## 精髓

過去讓 AI 幫忙修改文件，最大的信任障礙是：**改完之後，到底動了哪裡？**

如果我們拿一份二十頁的補助辦法請 Copilot「統一用語並精簡冗贅段落」，它會直接覆寫原文，改完之後得自己一段段比對才知道哪裡不同。這不是 AI 能不能寫的問題，是流程上不敢放手讓它寫。

Track Changes 整合解決的就是這個卡點。Copilot 現在像一個會留痕跡的編輯：它建議刪除一個逗號、換一個詞、調整一段順序，全部用 Word 原生的修訂標記呈現。審閱者可以逐一「接受」或「拒絕」，跟平常審人類同事的修改一模一樣。

加上註解功能，Copilot 還能解釋「為什麼這樣改」——這對多人審閱的文件尤其重要。不是 AI 說改就改，而是留下理由讓大家判斷。

這背後有一個叫 [Work IQ](https://windowsnews.ai/article/microsoft-word-copilot-gains-track-changes-integration-and-work-iq-for-enterprise-ai-workflows.412942) 的機制：它會參考組織內部的文件、郵件、會議資料來產生更貼近脈絡的建議。換句話說，Copilot 不只是「通用 AI」，它有機會理解我們組織慣用的詞彙和文件風格。

## 費用

這是需要認真算的功能，因為不便宜：

| 方案 | 費用 | 包含什麼 |
|------|------|---------|
| Copilot Chat（免費） | $0 | 基本 AI 對話，**不含** Word/Excel/PPT 內的 Copilot |
| [Copilot Business](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing) | $18/user/月（促銷至 2026/6/30）→ 之後 $21 | Word、Excel、PPT、Outlook 內的 Copilot + Track Changes |
| [Copilot Enterprise](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/enterprise) | $30/user/月 | 同上 + Work IQ 企業知識圖譜 + 進階安全控管 |

**注意**：以上費用是 Copilot 的「附加授權」，前提是已有 Microsoft 365 基礎訂閱（E3 $36→$39/user/月、E5 $57→$60/user/月，[七月起漲價](https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates)）。

另一個重要變化：自 [4 月 15 日起](https://www.onlinects.com/2026/04/06/microsoft-price-increases-are-just-around-the-corner/)，Word、Excel、PowerPoint 內的 Copilot 功能**必須有付費 Copilot 授權才能使用**，不再隨 M365 訂閱附帶。

**免費替代方案**：Google Docs 的 Gemini 也有「[建議模式](https://support.google.com/docs/answer/14206696?hl=en)」可以做 AI 編輯，修改會以建議呈現。基本功能隨 Google Workspace 帳號可用，進階功能需 [Google AI Pro $19.99/月](https://9to5google.com/2026/04/11/google-ai-pro-ultra-features/)。不過 Google Docs 的 Track Changes 功能較陽春，如果文件最終需要 Word 格式或複雜版面，Copilot 仍有優勢。

## 效果與限制

- **目前僅 Windows 桌面版**：Web 版和 Mac 版都還沒支援，如果團隊成員用不同平台，只有部分人能享受這個功能
- **Frontier 預覽階段**：功能尚未正式 GA（General Availability），使用體驗可能還不穩定，且需要加入 [Insiders Beta Channel](https://the-decoder.com/microsoft-copilot-in-word-can-now-track-changes-and-manage-comments/)
- **費用門檻高**：以 5 人團隊計算，Copilot Business 每月額外 $90-105 美金（還不含 M365 基礎授權），對小型組織來說是不小的支出
- **Work IQ 的企業知識功能需要 Enterprise 方案**：$30/user/月的門檻讓小團隊不太容易用到「理解組織脈絡」的能力
- **中文支援程度待觀察**：Microsoft 官方尚未明確說明 Track Changes 模式下的中文處理品質，尤其是中文斷詞精確度可能與英文有落差
- **不會替代人類判斷**：Track Changes 讓 AI 的修改「看得見」，但判斷「該不該接受」仍然是人的工作。如果審閱者不熟悉文件內容，AI 留了痕跡也不見得能發現問題

## Claude 的小腦力激盪

- 🎯 **贊助**的工作上，假設需要審閱受贊助單位繳回的成果報告，或許可以先讓 Copilot 用 Track Changes 標出用語不一致的地方、建議精簡冗贅段落，審閱者再逐一確認，省下反覆比對的時間
- 📋 **行政**流程中，如果定期需要更新內部辦法或政策文件，讓 Copilot 幫忙統一格式、修正錯字、調整段落順序，所有修改都有紅線標記，主管審核時一目了然
- 📚 **培力**這邊，假設在編輯教材或課程講義，試試讓 Copilot 建議「把這段說明改得更口語」，Track Changes 模式能直接比較改前改後，再決定要不要接受 AI 的改寫

## 總結

如果我們的行政工作中有大量需要多人審閱、修訂留痕的文件處理，而且團隊已經在用 Microsoft 365，Copilot in Word 的 Track Changes 功能值得關注。但考量到目前僅 Windows 預覽、費用不低，建議先觀望正式版發布，同時也可以試試 Google Docs Gemini 的建議模式作為免費起步。

> **AI 透明度聲明**：本文由 AI 輔助撰寫，經人工審核後發布。文中資訊可能存在不準確之處，引用數據請以原始來源為準。

---

### 本週其他值得關注

- **[Gemini App for Mac](https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-mac-os/)**（免費）— Google 的桌面 AI 助手 4/15 正式登陸 macOS，按 Option+Space 隨時呼出，還能分享螢幕畫面讓 AI 直接看你在處理什麼。如果平常工作中常需要快速查資料或請 AI 幫忙理解圖表，不用切到瀏覽器就能用。[了解更多 →](https://9to5mac.com/2026/04/15/google-launches-gemini-mac-app-heres-what-it-offers/)
- **[Power Platform AI Agent 更新](https://www.microsoft.com/en-us/power-platform/blog/2026/04/09/whats-new-in-power-platform-april-2026-feature-update/)**（Power Automate $15/user/月起）— 四月更新加入 AI agent authoring 和自我修復功能，自動化流程出錯時能嘗試自動修復。適合已有 Microsoft 生態系、想把重複性行政流程自動化的團隊。[了解更多 →](https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-automate/)
- **[Gallup AI 職場調查](https://www.gallup.com/workplace/704225/rising-adoption-spurs-workforce-changes.aspx)**（免費閱讀）— 4/13 發布的調查顯示，在已導入 AI 的組織中，65% 員工表示生產力有提升。有趣的是，主管（21% 極正面）和一般員工（13% 極正面）的感受有落差，值得思考。[了解更多 →](https://www.gallup.com/workplace/704225/rising-adoption-spurs-workforce-changes.aspx)

### 延伸閱讀

- [Copilot in Word: New Capabilities for Document Workflows — Microsoft 官方部落格](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)：最完整的官方說明，包含功能截圖和使用情境，想了解細節一定要看這篇
- [Microsoft Copilot in Word can now track changes and manage comments — The Decoder](https://the-decoder.com/microsoft-copilot-in-word-can-now-track-changes-and-manage-comments/)：獨立媒體的分析，用比較白話的方式解釋這次更新的意義，適合快速掌握重點
- [Microsoft 365 Pricing and Packaging Updates — Microsoft 官方](https://www.microsoft.com/en-us/licensing/news/2026-m365-packaging-pricing-updates)：七月起的價格調整完整資訊，如果正在評估是否導入 Copilot，費用計算必看
