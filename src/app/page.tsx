import ToolCatalog from "@/components/tool-catalog";
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

      <ToolCatalog tools={tools} categories={categories} />
    </main>
  );
}
