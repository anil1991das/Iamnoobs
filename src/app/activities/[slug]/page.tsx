import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ActivityExperience from "@/components/activity-experience";
import { activities, getActivity } from "@/lib/activities/registry";

interface ActivityPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return activities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) return {};

  return {
    title: activity.title,
    description: activity.metaDescription,
    keywords: activity.keywords,
    alternates: { canonical: `https://iamnoobs.com/activities/${activity.slug}` },
    openGraph: {
      title: activity.title,
      description: activity.metaDescription,
      type: "website",
      url: `https://iamnoobs.com/activities/${activity.slug}`,
      siteName: "iamnoobs",
    },
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <Link href="/activities" className="text-muted-foreground hover:text-foreground">
          Activities
        </Link>
        <span aria-hidden="true" className="mx-2 text-muted-foreground">/</span>
        <span aria-current="page" className="font-medium">{activity.title}</span>
      </nav>
      <header className="mx-auto mb-8 max-w-3xl text-center">
        <span aria-hidden="true" className="text-4xl">{activity.icon}</span>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {activity.category}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {activity.title}
        </h1>
        <p className="mt-4 text-lg leading-7 text-muted-foreground">
          {activity.intro}
        </p>
      </header>
      <ActivityExperience activity={activity} />
      <aside className="mx-auto mt-8 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="font-semibold">What you explored</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {activity.learningPoint}
        </p>
      </aside>
      <div className="mt-8 text-center">
        <Link href="/activities" className="text-sm font-semibold text-primary hover:underline">
          Explore all activities <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
