import type { Metadata } from "next";
import Link from "next/link";
import SnakeGame from "@/components/snake-game";

export const metadata: Metadata = {
  title: "Snake: Learn with Python",
  description:
    "Play Snake in your browser and follow guided Python lessons on game loops, coordinates, keyboard input, collisions, and scoring.",
  alternates: { canonical: "https://iamnoobs.com/games/snake" },
};

export default function SnakePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <Link href="/games" className="text-muted-foreground hover:text-foreground">
          Games
        </Link>
        <span aria-hidden="true" className="mx-2 text-muted-foreground">/</span>
        <span aria-current="page" className="font-medium">Snake</span>
      </nav>

      <header className="mx-auto mb-8 max-w-3xl text-center">
        <span aria-hidden="true" className="text-4xl">🐍</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Snake: Learn with Python
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          Play Snake, then explore the Python ideas behind the game—from its
          update loop to movement, collisions, and scoring.
        </p>
      </header>

      <SnakeGame />
    </main>
  );
}
