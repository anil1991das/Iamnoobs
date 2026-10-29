import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About iamnoobs",
  description:
    "Learn about iamnoobs: practical tools and straightforward guides for development, documents, productivity, and everyday digital tasks.",
  alternates: { canonical: "https://iamnoobs.com/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About iamnoobs</h1>
        <p className="text-lg text-muted-foreground">
          iamnoobs brings practical tools and straightforward guides together
          in one place. Whether you’re learning something new or looking for a
          simpler way to get a task done, explore the tools and find a guide to
          help you along.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What you can find here</h2>
        <p>
          Find tools for development, documents, productivity, and everyday
          digital tasks, along with practical articles that explain what they
          do and how to use them.
        </p>
        <p>
          Browse the <Link className="text-primary underline" href="/tools">tools</Link>{" "}
          or read our <Link className="text-primary underline" href="/articles">articles and guides</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Questions or feedback?</h2>
        <p>
          Suggestions, corrections, and issue reports are welcome through our{" "}
          <Link className="text-primary underline" href="/contact">contact page</Link>.
        </p>
      </section>
    </main>
  );
}
