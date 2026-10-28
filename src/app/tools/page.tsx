import type { Metadata } from "next";
import ToolCatalog from "@/components/tool-catalog";
import { categories, tools } from "@/lib/tools/registry";
import { hasToolComponent } from "@/lib/tools/tool-components";

const liveToolCount = tools.filter((tool) => hasToolComponent(tool.slug)).length;

export const metadata: Metadata = {
  title: "Free Online Tools",
  description:
    "Browse free online developer, text, image, PDF, productivity, and everyday tools. Search the iamnoobs tool library and open tools in your browser.",
  alternates: { canonical: "https://iamnoobs.com/tools" },
  openGraph: {
    title: "Free Online Tools | iamnoobs",
    description:
      "Find practical, free online tools for development, documents, images, productivity, and everyday tasks.",
    url: "https://iamnoobs.com/tools",
    type: "website",
  },
};

export default function ToolsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Quick, useful, right in your browser
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Free online tools
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          Search {liveToolCount} browser-based tools for development, documents,
          images, productivity, and everyday tasks. Choose a category or search
          by name, description, or keyword.
        </p>
      </header>
      <ToolCatalog tools={tools} categories={categories} />
    </main>
  );
}
