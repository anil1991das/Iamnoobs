import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About iamnoobs",
  description:
    "Learn about iamnoobs, a collection of free online tools and practical guides for developers and everyday tasks.",
  alternates: { canonical: "https://iamnoobs.com/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About iamnoobs</h1>
        <p className="text-lg text-muted-foreground">
          Simple, useful tools and clear guides for getting things done.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">What you can find here</h2>
        <p>
          iamnoobs brings together free online tools for common developer and
          everyday tasks, along with practical articles that explain how to use
          them and understand the ideas behind them.
        </p>
        <p>
          Browse the <Link className="text-primary underline" href="/#tools">tools</Link>{" "}
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
