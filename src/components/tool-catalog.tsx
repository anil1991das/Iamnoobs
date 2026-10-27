"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { hasToolComponent } from "@/lib/tools/tool-components";
import type { ToolCategory, ToolConfig } from "@/lib/tools/registry";
import { useToolPreview } from "@/components/tool-preview-context";

interface ToolCatalogProps {
  tools: ToolConfig[];
  categories: ToolCategory[];
}

const featuredSlugs = [
  "json-formatter",
  "password-generator",
  "image-compressor",
  "pdf-merger",
  "base64-encoder",
  "qr-code-generator",
];

function subscribeToSearchQuery(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener("tool-search-change", onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener("tool-search-change", onChange);
  };
}

function getSearchQuery() {
  return new URLSearchParams(window.location.search).get("q") ?? "";
}

function getServerSearchQuery() {
  return "";
}

function updateSearchQuery(query: string) {
  const url = new URL(window.location.href);
  const normalizedQuery = query.trim();
  if (normalizedQuery) {
    url.searchParams.set("q", normalizedQuery);
  } else {
    url.searchParams.delete("q");
  }

  window.history.replaceState(
    window.history.state,
    "",
    `${url.pathname}${url.search}${url.hash}`
  );
  window.dispatchEvent(new Event("tool-search-change"));
}

function ToolCard({
  tool,
  highlighted,
}: {
  tool: ToolConfig;
  highlighted: boolean;
}) {
  const isLive = hasToolComponent(tool.slug);

  return (
    <Link
      href={`/${tool.slug}`}
      data-tool-slug={tool.slug}
      className={`group rounded-xl border bg-card p-4 shadow-sm transition-all hover:border-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        highlighted
          ? "border-primary bg-primary/10 outline outline-2 outline-primary ring-4 ring-primary/15"
          : "border-card-border"
      }`}
      prefetch={false}
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg"
          aria-hidden="true"
        >
          {tool.icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate font-semibold transition-colors group-hover:text-primary">
              {tool.name}
            </h3>
            {isLive ? (
              <span className="shrink-0 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">
                LIVE
              </span>
            ) : (
              <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                SOON
              </span>
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {tool.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ToolCatalog({ tools, categories }: ToolCatalogProps) {
  const { activeToolSlug } = useToolPreview();
  const query = useSyncExternalStore(
    subscribeToSearchQuery,
    getSearchQuery,
    getServerSearchQuery
  );

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTools = normalizedQuery
    ? tools.filter((tool) =>
        [tool.name, tool.description, ...tool.keywords]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      )
    : tools;
  const featuredTools = tools.filter(
    (tool) => featuredSlugs.includes(tool.slug) && hasToolComponent(tool.slug)
  );

  useEffect(() => {
    if (!activeToolSlug) return;

    const timeout = window.setTimeout(() => {
      const menu = document.getElementById("tools-menu-panel");
      const card = Array.from(
        document.querySelectorAll<HTMLElement>("[data-tool-slug]"),
      ).find((element) => element.dataset.toolSlug === activeToolSlug);
      if (!menu || !card) return;

      const menuRect = menu.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const overlapsMenu =
        cardRect.top < menuRect.bottom && cardRect.bottom > menuRect.top;
      const outsideViewport = cardRect.top < 0 || cardRect.bottom > window.innerHeight;
      if (!overlapsMenu && !outsideViewport) return;

      const targetTop = Math.max(menuRect.bottom + 16, 16);
      const scrollTop = window.scrollY + cardRect.top - targetTop;
      window.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }, 140);

    return () => window.clearTimeout(timeout);
  }, [activeToolSlug]);

  return (
    <>
      <section className="mx-auto mb-12 w-full max-w-2xl" aria-label="Search tools">
        <label className="sr-only" htmlFor="tool-search">
          Search tools by name, description, or keyword
        </label>
        <div className="flex items-center gap-2">
          <input
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => updateSearchQuery(event.target.value)}
            placeholder="Search tools"
            className="h-12 min-w-0 flex-1 rounded-lg border border-card-border bg-card px-4 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary"
          />
          {query && (
            <button
              type="button"
              onClick={() => updateSearchQuery("")}
              className="h-12 shrink-0 rounded-lg border border-card-border px-4 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Clear
            </button>
          )}
        </div>
        {normalizedQuery && filteredTools.length > 0 && (
          <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
            {filteredTools.length} {filteredTools.length === 1 ? "result" : "results"} for “{query.trim()}”
          </p>
        )}
      </section>

      {!normalizedQuery && (
        <section className="mb-16" aria-labelledby="featured-tools-heading">
          <h2 id="featured-tools-heading" className="mb-5 text-2xl font-bold">
            Featured tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                tool={tool}
                highlighted={activeToolSlug === tool.slug}
              />
            ))}
          </div>
        </section>
      )}

      <section id="tools" className="scroll-mt-20" aria-label="All tools">
        <h2 className="mb-6 text-2xl font-bold">Tool library</h2>

        {filteredTools.length === 0 ? (
          <p className="rounded-lg border border-card-border px-4 py-10 text-center text-muted-foreground">
            No tools match “{query.trim()}”. Try another search.
          </p>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryTools = filteredTools.filter(
                (tool) => tool.category === category.slug
              );
              if (categoryTools.length === 0) return null;

              return (
                <div key={category.slug} aria-label={category.name}>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                    <span aria-hidden="true">{category.icon}</span>
                    {category.name}
                    <span className="text-sm font-normal text-muted-foreground">
                      ({categoryTools.length})
                    </span>
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryTools.map((tool) => (
                      <ToolCard
                        key={tool.slug}
                        tool={tool}
                        highlighted={activeToolSlug === tool.slug}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}