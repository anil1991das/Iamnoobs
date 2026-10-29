import type { Metadata } from "next";
import Link from "next/link";
import { activities } from "@/lib/activities/registry";

export const metadata: Metadata = {
  title: "Interactive Activities",
  description:
    "Explore original interactive activities about web history, pixel art, algorithms, and how internet signals travel.",
  alternates: { canonical: "https://iamnoobs.com/activities" },
};

export default function ActivitiesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Curiosity, made clickable
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Interactive activities
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          Take a short, hands-on detour through the ideas behind the web,
          creativity, and computer science. No accounts or setup required.
        </p>
      </header>

      <section aria-label="All interactive activities">
        <div className="grid gap-5 sm:grid-cols-2">
          {activities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/activities/${activity.slug}`}
              className="group rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl"
                >
                  {activity.icon}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {activity.category}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold group-hover:text-primary">
                {activity.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {activity.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-primary">
                Explore activity <span aria-hidden="true" className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        These original activities are designed to be quick, friendly, and
        interesting to explore at your own pace.
      </p>
    </main>
  );
}
