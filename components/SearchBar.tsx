"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";

const CATEGORY_LABELS: Record<string, { label: string; className: string }> = {
  tech: { label: "技術", className: "bg-blue-100 text-blue-700" },
  apps: { label: "應用", className: "bg-green-100 text-green-700" },
  notes: { label: "筆記", className: "bg-orange-100 text-orange-700" },
};

export default function SearchBar() {
  const router = useRouter();
  const { query, setQuery, results, isLoading, clearSearch } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Open dropdown when there are results or loading
  useEffect(() => {
    if (query.trim().length >= 2) {
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setIsOpen(false);
    }
  }, [query, results]);

  const navigateTo = useCallback(
    (category: string, slug: string) => {
      router.push(`/${category}/${slug}`);
      clearSearch();
      setIsOpen(false);
      inputRef.current?.blur();
    },
    [router, clearSearch]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        const r = results[selectedIndex];
        navigateTo(r.category, r.slug);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    },
    [isOpen, results, selectedIndex, navigateTo]
  );

  const showDropdown = isOpen && query.trim().length >= 2;

  return (
    <div ref={wrapperRef} className="relative w-48 lg:w-64 xl:w-72">
      {/* Search input */}
      <div className="relative">
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
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="搜尋文章..."
          className="w-full pl-9 pr-3 py-1.5 text-sm bg-gray-bg rounded-full border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
        />
        {query && (
          <button
            onClick={() => { clearSearch(); inputRef.current?.focus(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div className="absolute top-full mt-1.5 w-[320px] right-0 bg-white rounded-xl shadow-lg border border-gray-100 max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="px-4 py-6 text-center text-sm text-text-secondary">搜尋中...</div>
          ) : results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-text-secondary">沒有找到相關文章</div>
          ) : (
            results.map((result, i) => {
              const cat = CATEGORY_LABELS[result.category] || { label: result.category, className: "bg-gray-100 text-gray-700" };
              return (
                <button
                  key={`${result.category}/${result.slug}`}
                  onClick={() => navigateTo(result.category, result.slug)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full text-left px-4 py-3 border-b border-gray-50 last:border-0 transition-colors ${
                    i === selectedIndex ? "bg-gray-50" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${cat.className}`}>
                      {cat.label}
                    </span>
                    <span className="text-[11px] text-text-secondary">{result.date}</span>
                  </div>
                  <div className="text-sm font-medium text-text-primary line-clamp-1">{result.title}</div>
                  <div className="text-xs text-text-secondary line-clamp-1 mt-0.5">{result.snippet}</div>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
