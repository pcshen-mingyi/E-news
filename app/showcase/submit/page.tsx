"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmitPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      orgName: formData.get("orgName"),
      tags: formData.get("tags"),
    };

    const res = await fetch("/api/showcase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/showcase?submitted=true");
    } else {
      const result = await res.json();
      setError(result.error || "投稿失敗，請稍後再試");
    }
    setLoading(false);
  }

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-text-primary mb-2">投稿 AI 應用案例</h1>
      <p className="text-text-secondary mb-8">分享你的組織如何運用 AI 技術，審核通過後將展示在專區中。</p>
      <div className="w-16 h-1 bg-teal mb-8 rounded-full" />

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">組織名稱 *</label>
          <input name="orgName" required className={inputClass} placeholder="例：明怡基金會" />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">標題 *</label>
          <input name="title" required className={inputClass} placeholder="例：用 AI 優化志工排班系統" />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">簡短描述 *</label>
          <textarea
            name="description"
            required
            rows={2}
            className={inputClass}
            placeholder="一句話描述你的 AI 應用案例"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">詳細內容 *</label>
          <textarea
            name="content"
            required
            rows={10}
            className={inputClass}
            placeholder="詳細描述你的 AI 應用案例：背景、做法、成果..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">標籤</label>
          <input name="tags" className={inputClass} placeholder="以逗號分隔，例：chatbot, 客服, GPT" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal text-white py-3 rounded-lg font-medium hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "提交中..." : "提交投稿"}
        </button>
      </form>
    </div>
  );
}
