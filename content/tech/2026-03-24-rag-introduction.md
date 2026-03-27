---
title: "RAG 檢索增強生成入門指南"
date: "2026-03-24"
author: "PC"
tags: ["RAG", "LLM", "vector-database"]
summary: "了解 RAG 如何結合檢索與生成，讓 AI 回答更準確、更即時。"
---

## 什麼是 RAG？

RAG（Retrieval-Augmented Generation）是一種結合**資訊檢索**與**文本生成**的技術框架。它讓大型語言模型能夠存取外部知識庫，產生更準確、更有依據的回答。

## RAG 的工作流程

1. **文件切割**：將知識庫文件切割成適當大小的片段
2. **向量化**：使用 Embedding 模型將文字轉換為向量
3. **檢索**：根據使用者問題找出最相關的文件片段
4. **生成**：將檢索結果作為上下文，讓 LLM 生成回答

## 為什麼需要 RAG？

- 解決 LLM 知識截止日期問題
- 減少幻覺（Hallucination）
- 支援企業內部知識查詢
- 可追溯答案來源

## 常見工具

- **向量資料庫**：Pinecone、Weaviate、Chroma
- **框架**：LangChain、LlamaIndex
- **Embedding 模型**：OpenAI Ada、Cohere Embed
