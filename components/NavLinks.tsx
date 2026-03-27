"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "技術新知", href: "/tech" },
  { label: "應用新知", href: "/apps" },
  { label: "PC 小筆記", href: "/notes" },
  { label: "組織應用專區", href: "/showcase" },
];

export default function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <>
        <button
          className="p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {open && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-sm z-50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-50 ${
                  pathname.startsWith(item.href) ? "text-teal" : "text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-teal ${
            pathname.startsWith(item.href)
              ? "text-teal border-b-2 border-teal pb-1"
              : "text-text-primary"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
