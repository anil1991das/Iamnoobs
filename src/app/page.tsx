import ToolCatalog from "@/components/tool-catalog";
import Link from "next/link";
import { categories, tools } from "@/lib/tools/registry";
import { hasToolComponent } from "@/lib/tools/tool-components";

export default function HomePage() {
  const liveToolCount = tools.filter((tool) => hasToolComponent(tool.slug)).length;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <section className="mb-8 text-center" aria-label="Introduction">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          The tools you need.{" "}
          <span className="text-primary">The guides to use them.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore {liveToolCount} tools for development, documents,
          productivity, and everyday digital tasks—along with clear guides to
          help you use them.
        </p>
      </section>

      <section
        aria-labelledby="code-games-title"
        className="mb-12 flex flex-col gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div>
          <p className="text-sm font-semibold text-primary">Learn by playing</p>
          <h2 id="code-games-title" className="mt-1 text-2xl font-bold tracking-tight">
            Try a coding challenge
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Find bugs, predict output, and practice Python, C, C++, Java, or C# with quick puzzles.
          </p>
        </div>
        <Link
          href="/games"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Explore games
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </section>

      <ToolCatalog tools={tools} categories={categories} />
    </main>
  );
}
