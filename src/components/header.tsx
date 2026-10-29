"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navigationLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/games", label: "Games" },
  { href: "/activities", label: "Activities" },
  { href: "/courses", label: "Courses" },
  { href: "/articles", label: "Articles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          iamnoobs
        </Link>
        <nav
          aria-label="Main"
          className="hidden items-center gap-3 text-xs font-medium sm:gap-4 sm:text-sm lg:flex lg:gap-5"
        >
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      <nav
        id="mobile-main-navigation"
        aria-label="Main"
        className={`${menuOpen ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-card-border bg-card px-4 pb-3 shadow-lg lg:hidden`}
      >
        <div className="mx-auto max-w-6xl">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
