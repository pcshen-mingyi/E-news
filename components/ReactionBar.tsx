"use client";

import { useEffect, useState, useCallback } from "react";

interface ReactionState {
  likes: number;
  dislikes: number;
  userVote: "like" | "dislike" | null;
}

export default function ReactionBar({ articleSlug }: { articleSlug: string }) {
  const [state, setState] = useState<ReactionState>({
    likes: 0,
    dislikes: 0,
    userVote: null,
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/reactions?articleSlug=${encodeURIComponent(articleSlug)}`)
      .then((res) => res.json())
      .then((data: ReactionState) => setState(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [articleSlug]);

  const handleVote = useCallback(
    async (type: "like" | "dislike") => {
      if (submitting) return;
      setSubmitting(true);

      // Optimistic update
      const prev = { ...state };
      setState((s) => {
        const next = { ...s };
        if (s.userVote === type) {
          // Remove vote
          next.userVote = null;
          if (type === "like") next.likes--;
          else next.dislikes--;
        } else if (s.userVote === null) {
          // New vote
          next.userVote = type;
          if (type === "like") next.likes++;
          else next.dislikes++;
        } else {
          // Switch vote
          next.userVote = type;
          if (type === "like") {
            next.likes++;
            next.dislikes--;
          } else {
            next.dislikes++;
            next.likes--;
          }
        }
        return next;
      });

      try {
        const res = await fetch("/api/reactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articleSlug, type }),
        });
        if (res.ok) {
          const data: ReactionState = await res.json();
          setState(data);
        } else {
          setState(prev); // Revert on error
        }
      } catch {
        setState(prev); // Revert on network error
      } finally {
        setSubmitting(false);
      }
    },
    [articleSlug, state, submitting]
  );

  if (loading) {
    return (
      <div className="mt-12 mb-8 flex justify-center">
        <div className="h-12 w-48 bg-gray-100 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <section className="mt-12 mb-8">
      <p className="text-sm text-text-secondary text-center mb-4">
        這篇文章對你有幫助嗎？
      </p>
      <div className="flex items-center justify-center gap-4">
        {/* Like button */}
        <button
          onClick={() => handleVote("like")}
          disabled={submitting}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 ${
            state.userVote === "like"
              ? "bg-teal/10 text-teal border-teal"
              : "bg-white text-text-secondary border-gray-200 hover:border-teal hover:text-teal"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <svg
            className="w-5 h-5"
            fill={state.userVote === "like" ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.723-9.752h-1.08"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.867 19.125h.008v.008h-.008v-.008Z m.375-9.375h-.375a1.875 1.875 0 0 0-1.875 1.875v6.75c0 1.036.84 1.875 1.875 1.875h.375a1.875 1.875 0 0 0 1.875-1.875v-6.75a1.875 1.875 0 0 0-1.875-1.875Z"
            />
          </svg>
          {state.likes > 0 && <span>{state.likes}</span>}
        </button>

        {/* Dislike button */}
        <button
          onClick={() => handleVote("dislike")}
          disabled={submitting}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 ${
            state.userVote === "dislike"
              ? "bg-red-50 text-red-500 border-red-300"
              : "bg-white text-text-secondary border-gray-200 hover:border-red-300 hover:text-red-400"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <svg
            className="w-5 h-5"
            fill={state.userVote === "dislike" ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.367 13.75c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 0 0-.322 1.672V21a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282m0 0H4.372c-1.026 0-1.945-.694-2.054-1.715A11.943 11.943 0 0 1 2.25 12c0-2.848.992-5.464 2.649-7.521C5.287 3.997 5.886 3.75 6.504 3.75h2.497c.483 0 .964.078 1.423.23l3.114 1.04c.459.152.94.23 1.423.23h3.135m-7.723 9.75h1.08"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.133 4.875h-.008v-.008h.008v.008Z m-.375 9.375h.375a1.875 1.875 0 0 0 1.875-1.875v-6.75a1.875 1.875 0 0 0-1.875-1.875h-.375a1.875 1.875 0 0 0-1.875 1.875v6.75c0 1.036.84 1.875 1.875 1.875Z"
            />
          </svg>
          {state.dislikes > 0 && <span>{state.dislikes}</span>}
        </button>
      </div>
    </section>
  );
}
