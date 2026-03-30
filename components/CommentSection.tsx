"use client";

import { useEffect, useState, useCallback } from "react";
import CommentItem from "./CommentItem";
import Link from "next/link";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

interface SessionUser {
  id: string;
  name?: string | null;
  role?: string;
}

export default function CommentSection({
  articleSlug,
}: {
  articleSlug: string;
}) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<SessionUser | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Fetch session and comments on mount
  useEffect(() => {
    async function init() {
      const [sessionRes, commentsRes] = await Promise.all([
        fetch("/api/auth/session"),
        fetch(`/api/comments?articleSlug=${encodeURIComponent(articleSlug)}`),
      ]);

      if (sessionRes.ok) {
        const session = await sessionRes.json();
        if (session?.user?.id) {
          setUser(session.user);
        }
      }

      if (commentsRes.ok) {
        setComments(await commentsRes.json());
      }

      setLoading(false);
    }
    init();
  }, [articleSlug]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = content.trim();
      if (!trimmed || submitting) return;

      setSubmitting(true);
      setError("");

      try {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articleSlug, content: trimmed }),
        });

        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "留言失敗，請稍後再試");
          return;
        }

        const newComment = await res.json();
        setComments((prev) => [...prev, newComment]);
        setContent("");
      } catch {
        setError("留言失敗，請稍後再試");
      } finally {
        setSubmitting(false);
      }
    },
    [content, submitting, articleSlug]
  );

  const handleEdit = useCallback(async (id: string, newContent: string): Promise<boolean> => {
    setError("");
    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newContent }),
      });
      if (res.ok) {
        const updated = await res.json();
        setComments((prev) =>
          prev.map((c) => (c.id === id ? { ...c, content: updated.content, updatedAt: updated.updatedAt } : c))
        );
        return true;
      } else {
        const data = await res.json();
        setError(data.error || "修改失敗，請稍後再試");
        return false;
      }
    } catch {
      setError("修改失敗，請稍後再試");
      return false;
    }
  }, []);

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-text-primary mb-1">留言討論</h2>
      <div className="w-12 h-1 bg-teal rounded-full mb-6" />

      {/* Comment list */}
      {loading ? (
        <p className="text-sm text-text-secondary py-4">載入中...</p>
      ) : comments.length === 0 ? (
        <p className="text-sm text-text-secondary py-4">
          尚無留言，成為第一個留言的人吧！
        </p>
      ) : (
        <div className="divide-y divide-gray-100">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              currentUserId={user?.id}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {/* Comment form */}
      <div className="mt-6">
        {user ? (
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="分享你的想法..."
              maxLength={1000}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-y"
            />
            {error && (
              <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-text-secondary">
                {content.length}/1000
              </span>
              <button
                type="submit"
                disabled={submitting || content.trim().length === 0}
                className="bg-teal text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "送出中..." : "送出留言"}
              </button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-text-secondary">
            <Link
              href="/auth/signin"
              className="text-teal hover:text-teal-dark font-medium"
            >
              登入
            </Link>
            {" 後即可留言討論"}
          </p>
        )}
      </div>
    </section>
  );
}
