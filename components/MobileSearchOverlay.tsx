"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";

const CATEGORY_LABELS: Record<string, { label: string; className: string }> = {
  tech: { label: "技術", className: "bg-blue-100 text-blue-700" },
  apps: { label: "應用", className: "bg-green-100 text-green-700" },
  notes: { label: "筆記", className: "bg-orange-100 text-orange-700" },
};

export default function MobileSearchOverlay() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery, results, isLoading, clearSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when overlay opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the overlay is rendered
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [isOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    clearSearch();
  }, [clearSearch]);

  const navigateTo = useCallback(
    (category: string, slug: string) => {
      router.push(`/${category}/${slug}`);
      close();
    },
    [router, close]
  );

  return (
    <>
      {/* Search icon button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-text-secondary hover:text-teal transition-colors"
        aria-label="搜尋"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <button onClick={close} className="p-1 text-text-secondary hover:text-text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜尋文章..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-bg rounded-full border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none"
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto">
            {query.trim().length < 2 ? (
              <div className="px-4 py-12 text-center text-sm text-text-secondary">
                輸入關鍵字搜尋文章
              </div>
            ) : isLoading ? (
              <div className="px-4 py-12 text-center text-sm text-text-secondary">搜尋中...</div>
            ) : results.length === 0 ? (
              <div className="px-4 py-12 text-center text-sm text-text-secondary">沒有找到相關文章</div>
            ) : (
              results.map((result) => {
                const cat = CATEGORY_LABELS[result.category] || { label: result.category, className: "bg-gray-100 text-gray-700" };
                return (
                  <button
                    key={`${result.category}/${result.slug}`}
                    onClick={() => navigateTo(result.category, result.slug)}
                    className="w-full text-left px-4 py-3 border-b border-gray-50 active:bg-gray-50"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${cat.className}`}>
                        {cat.label}
                      </span>
                      <span className="text-[11px] text-text-secondary">{result.date}</span>
                    </div>
                    <div className="text-sm font-medium text-text-primary line-clamp-2">{result.title}</div>
                    <div className="text-xs text-text-secondary line-clamp-1 mt-0.5">{result.snippet}</div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
}
