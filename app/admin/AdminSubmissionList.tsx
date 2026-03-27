"use client";

import { useState } from "react";

interface Submission {
  id: string;
  title: string;
  description: string;
  orgName: string;
  status: string;
  createdAt: string;
  author: { name: string | null; email: string | null };
}

export default function AdminSubmissionList({
  initialSubmissions,
}: {
  initialSubmissions: Submission[];
}) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [updating, setUpdating] = useState<string | null>(null);

  async function updateStatus(id: string, status: string) {
    setUpdating(id);
    const res = await fetch(`/api/showcase/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );
    }
    setUpdating(null);
  }

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  const statusLabels: Record<string, string> = {
    pending: "待審核",
    approved: "已通過",
    rejected: "已拒絕",
  };

  if (submissions.length === 0) {
    return (
      <div className="bg-gray-bg rounded-xl p-12 text-center">
        <p className="text-text-secondary">目前沒有投稿需要審核。</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((sub) => (
        <div
          key={sub.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-teal font-medium">{sub.orgName}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[sub.status]}`}>
                  {statusLabels[sub.status]}
                </span>
              </div>
              <h3 className="font-bold text-text-primary">{sub.title}</h3>
              <p className="text-sm text-text-secondary mt-1">{sub.description}</p>
              <div className="text-xs text-text-secondary mt-2">
                {sub.author.name || sub.author.email} &middot; {new Date(sub.createdAt).toLocaleDateString("zh-TW")}
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              {sub.status !== "approved" && (
                <button
                  onClick={() => updateStatus(sub.id, "approved")}
                  disabled={updating === sub.id}
                  className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 disabled:opacity-50 transition-colors"
                >
                  通過
                </button>
              )}
              {sub.status !== "rejected" && (
                <button
                  onClick={() => updateStatus(sub.id, "rejected")}
                  disabled={updating === sub.id}
                  className="px-3 py-1.5 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
                >
                  拒絕
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
