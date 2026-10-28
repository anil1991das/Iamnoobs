import type { Metadata } from "next";
import Link from "next/link";
import { gameLanguages } from "@/lib/games/bug-hunt";

export const metadata: Metadata = {
  title: "Bug Hunt",
  description:
    "Choose Python, C, C++, Java, or C# and solve 10 beginner-friendly coding challenges.",
  alternates: { canonical: "https://iamnoobs.com/games/bug-hunt" },
};

export default function BugHuntPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <Link href="/games" className="text-muted-foreground hover:text-foreground">
          Games
        </Link>
        <span aria-hidden="true" className="mx-2 text-muted-foreground">/</span>
        <span aria-current="page" className="font-medium">Bug Hunt</span>
      </nav>

      <header className="mx-auto mb-10 max-w-3xl text-center">
        <span aria-hidden="true" className="text-4xl">🐛</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Bug Hunt
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          Choose a programming language, then tackle 10 short challenges. Find
          bugs, predict output, complete code, and learn from each explanation.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Fixed-answer puzzles—your code is never executed.
        </p>
      </header>

      <section aria-labelledby="bug-hunt-language-title">
        <h2 id="bug-hunt-language-title" className="mb-4 text-xl font-semibold">
          Choose your language
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gameLanguages.map((language) => (
            <Link
              key={language.slug}
              href={`/games/${language.slug}`}
              className="group rounded-xl border border-card-border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl"
                >
                  {language.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {language.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {language.description}
                  </p>
                  <span className="mt-3 inline-flex text-sm font-medium text-primary">
                    Play 10 levels
                    <span aria-hidden="true" className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Your completed levels are saved locally in this browser.
      </p>
    </main>
  );
}
