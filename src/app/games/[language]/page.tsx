import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BugHuntGame from "@/components/bug-hunt-game";
import { gameLanguages, getGameLanguage } from "@/lib/games/bug-hunt";

interface GameLanguagePageProps {
  params: Promise<{ language: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return gameLanguages.map(({ slug }) => ({ language: slug }));
}

export async function generateMetadata({
  params,
}: GameLanguagePageProps): Promise<Metadata> {
  const { language: slug } = await params;
  const language = getGameLanguage(slug);
  if (!language) return {};

  const title = `${language.name} Code Games`;
  const description = `Play 10 beginner-friendly ${language.name} coding challenges with answers, hints, and explanations.`;

  return {
    title,
    description,
    alternates: { canonical: `https://iamnoobs.com/games/${language.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://iamnoobs.com/games/${language.slug}`,
      siteName: "iamnoobs",
    },
  };
}

export default async function GameLanguagePage({
  params,
}: GameLanguagePageProps) {
  const { language: slug } = await params;
  const language = getGameLanguage(slug);
  if (!language) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <Link href="/games" className="text-muted-foreground hover:text-foreground">
          Code Games
        </Link>
        <span aria-hidden="true" className="mx-2 text-muted-foreground">/</span>
        <span aria-current="page" className="font-medium">{language.name}</span>
      </nav>
      <header className="mb-8 flex items-center gap-4">
        <span
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-3xl"
        >
          {language.icon}
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {language.name} Bug Hunt
          </h1>
          <p className="mt-1 text-muted-foreground">{language.description}</p>
        </div>
      </header>
      <BugHuntGame language={language} />
    </main>
  );
}
