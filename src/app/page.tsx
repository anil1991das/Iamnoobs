import Link from "next/link";
import { categories, getToolsByCategory } from "@/lib/tools/registry";
import { hasToolComponent } from "@/lib/tools/tool-components";

export default function HomePage() {
  const toolCount = categories.reduce(
    (sum, c) => sum + getToolsByCategory(c.slug).length,
    0
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16" aria-label="Introduction">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Free Online Tools for{" "}
          <span className="text-primary">Everyone</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {toolCount} fast, free, and private tools that work right in your browser.
          No signup. No uploads. No tracking.
        </p>
      </section>

      {/* Tool Categories */}
      <section id="tools" className="space-y-12" aria-label="All tools">
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category.slug);
          if (categoryTools.length === 0) return null;

          return (
            <div key={category.slug} role="region" aria-label={category.name}>
              <h2 className="mb-4 text-xl font-bold flex items-center gap-2">
                <span aria-hidden="true">{category.icon}</span>
                {category.name}
                <span className="text-sm font-normal text-muted-foreground">
                  ({categoryTools.length})
                </span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool) => {
                  const isLive = hasToolComponent(tool.slug);
                  return (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="group rounded-xl border border-card-border bg-card p-4 shadow-sm transition-all hover:border-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      prefetch={false}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg" aria-hidden="true">
                          {tool.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
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
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 rounded-2xl bg-accent border border-card-border p-8 text-center" aria-label="Updates">
        <h2 className="text-2xl font-bold">More Tools Coming Soon</h2>
        <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
          We&apos;re actively building all {toolCount} tools. Each tool is designed to be fast,
          private, and works entirely in your browser — no server uploads needed.
        </p>
      </section>
    </main>
  );
}
