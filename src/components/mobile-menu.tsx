"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-muted-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {open && (
        <nav
          className="absolute left-0 right-0 top-14 z-40 border-b border-card-border bg-card px-4 py-3"
          aria-label="Mobile navigation"
        >
          <Link href="/" className="block py-2 text-sm text-muted-foreground" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/#tools" className="block py-2 text-sm text-muted-foreground" onClick={() => setOpen(false)}>
            Tools
          </Link>
        </nav>
      )}
    </div>
  );
}
