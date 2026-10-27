"use client";

import Link from "next/link";
import {
  useMemo,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { categories, tools } from "@/lib/tools/registry";

export default function ToolsMenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug ?? "");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const lastPointerType = useRef<string | null>(null);
  const normalizedQuery = query.trim().toLowerCase();

  const visibleGroups = useMemo(
    () =>
      categories.flatMap((category) => {
        if (!normalizedQuery && category.slug !== activeCategory) return [];

        const categoryTools = tools.filter((tool) => {
          if (tool.category !== category.slug) return false;
          if (!normalizedQuery) return true;
          return [tool.name, tool.description, ...tool.keywords]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);
        });

        return categoryTools.length > 0
          ? [{ category, tools: categoryTools }]
          : [];
      }),
    [activeCategory, normalizedQuery],
  );
  const resultCount = visibleGroups.reduce(
    (count, group) => count + group.tools.length,
    0,
  );

  function closeMenu() {
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target === triggerRef.current
    ) {
      lastPointerType.current = "keyboard";
    }

    if (event.key === "Escape" && isOpen) {
      closeMenu();
      triggerRef.current?.focus();
    }
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeMenu();
    }
  }

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={closeMenu}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="tools-menu-panel"
        onPointerDown={(event) => {
          lastPointerType.current = event.pointerType;
        }}
        onClick={() =>
          setIsOpen((open) =>
            lastPointerType.current === "mouse" ? true : !open,
          )
        }
        className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
      >
        Tools
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
      <div
        id="tools-menu-panel"
        className="absolute right-0 top-full z-50 w-[min(48rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-card-border bg-card text-foreground shadow-xl"
      >
        <div className="border-b border-card-border p-4">
          <label htmlFor="tools-menu-search" className="sr-only">
            Search all tools
          </label>
          <input
            id="tools-menu-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search all tools"
            className="h-10 w-full rounded-lg border border-card-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
          {normalizedQuery && (
            <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
              {resultCount} {resultCount === 1 ? "tool" : "tools"} found
            </p>
          )}
        </div>

        <div className="grid max-h-[min(65vh,34rem)] grid-cols-1 overflow-y-auto md:grid-cols-[14rem_minmax(0,1fr)]">
          <nav
            aria-label="Tool categories"
            className="flex gap-2 overflow-x-auto border-b border-card-border p-3 md:block md:space-y-1 md:overflow-x-visible md:border-b-0 md:border-r"
          >
            {categories.map((category) => {
              const count = tools.filter(
                (tool) => tool.category === category.slug,
              ).length;
              return (
                <button
                  key={category.slug}
                  type="button"
                  aria-pressed={!normalizedQuery && activeCategory === category.slug}
                  onMouseEnter={() => setActiveCategory(category.slug)}
                  onFocus={() => setActiveCategory(category.slug)}
                  onClick={() => {
                    setActiveCategory(category.slug);
                    setQuery("");
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors md:w-full ${
                    !normalizedQuery && activeCategory === category.slug
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span aria-hidden="true">{category.icon}</span>
                  <span className="flex-1 whitespace-nowrap">{category.name}</span>
                  <span className="text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </nav>

          <div className="min-w-0 p-4">
            {visibleGroups.length > 0 ? (
              <div className="space-y-5">
                {visibleGroups.map(({ category, tools: categoryTools }) => (
                  <section key={category.slug} aria-labelledby={`menu-${category.slug}`}>
                    {normalizedQuery && (
                      <h2
                        id={`menu-${category.slug}`}
                        className="mb-2 flex items-center gap-2 text-sm font-semibold"
                      >
                        <span aria-hidden="true">{category.icon}</span>
                        {category.name}
                      </h2>
                    )}
                    <ul
                      className="grid gap-1 sm:grid-cols-2"
                      aria-label={normalizedQuery ? undefined : category.name}
                    >
                      {categoryTools.map((tool) => (
                        <li key={tool.slug}>
                          <Link
                            href={`/${tool.slug}`}
                            prefetch={false}
                            onClick={closeMenu}
                            className="flex min-h-10 items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          >
                            <span aria-hidden="true">{tool.icon}</span>
                            <span className="min-w-0 flex-1 truncate">{tool.name}</span>
                            <span aria-hidden="true" className="text-muted-foreground">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No tools match “{query.trim()}”.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-card-border bg-muted/50 px-4 py-3 text-sm">
          <span className="text-muted-foreground">{tools.length} tools</span>
          <Link
            href="/#tools"
            onClick={closeMenu}
            className="font-medium text-primary hover:underline"
          >
            Browse all tools
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
      )}
    </div>
  );
}
