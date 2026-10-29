import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code Games",
  description:
    "Play beginner-friendly coding games, learn programming concepts, and explore interactive challenges.",
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
          Games
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          Explore playful ways to build coding skills, learn new concepts, and
          have fun along the way.
        </p>
      </header>

      <section aria-label="Available and upcoming games">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-card-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl"
              >
                🐛
              </span>
              <div>
                <h2 className="text-xl font-semibold">Bug Hunt</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Find bugs, predict output, complete code, and learn
                  programming concepts with 10 challenges in your chosen
                  language.
                </p>
              </div>
            </div>
            <Link
              href="/games/bug-hunt"
              className="mt-6 inline-flex min-h-11 items-center justify-center self-start rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Play Bug Hunt
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>

          <article className="flex flex-col rounded-xl border border-card-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl"
              >
                🐍
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold">Snake: Learn with Python</h2>
                  <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    Playable
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Play a classic Snake game and learn how its game loop,
                  movement, keyboard input, collisions, and scoring work in
                  Python.
                </p>
              </div>
            </div>
            <Link
              href="/games/snake"
              className="mt-6 inline-flex min-h-11 items-center justify-center self-start rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Play Snake
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </article>
        </div>
      </section>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Bug Hunt supports Python, C, C++, Java, and C#. Choose a language after
        opening the game.
      </p>
    </main>
  );
}
