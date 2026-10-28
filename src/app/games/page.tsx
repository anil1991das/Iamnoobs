import type { Metadata } from "next";
import Link from "next/link";
import { gameLanguages } from "@/lib/games/bug-hunt";

export const metadata: Metadata = {
  title: "Code Games",
  description:
    "Practice Python, C, C++, Java, and C# with beginner-friendly coding puzzles and explanations.",
  alternates: { canonical: "https://iamnoobs.com/games" },
};

export default function GamesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Learn by playing
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Code Games
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          Pick a language and work through 10 short challenges. Find bugs,
          predict output, complete code, and build your programming instincts.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          No setup and no code execution—just puzzles, instant feedback, and
          explanations.
        </p>
      </header>

      <section aria-labelledby="language-picker-title">
        <h2
          id="language-picker-title"
          className="mb-4 text-xl font-semibold"
        >
          Choose a language
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
