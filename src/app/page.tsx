import Link from "next/link";
import Image from "next/image";
import { activities } from "@/lib/activities/registry";
import { courses, type CourseConfig } from "@/lib/courses/curriculum";
import { tools } from "@/lib/tools/registry";
import { hasToolComponent } from "@/lib/tools/tool-components";

const featuredCourseSlugs = ["python", "c", "javascript", "cpp"];

export default function HomePage() {
  const liveToolCount = tools.filter((tool) => hasToolComponent(tool.slug)).length;
  const featuredActivities = activities.slice(0, 3);
  const featuredCourses = featuredCourseSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is CourseConfig => course !== undefined);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <section
        aria-labelledby="home-title"
        className="relative isolate overflow-hidden rounded-3xl border border-card-border bg-gradient-to-br from-primary/10 via-card to-success/10 px-6 py-12 sm:px-10 sm:py-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-3 py-1 text-sm font-medium text-primary">
            <span aria-hidden="true">✦</span> Tools, play, and learn
          </p>
          <h1
            id="home-title"
            className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Make the web work for you.{" "}
            <span className="text-primary">Learn by doing.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Find practical tools, explore curious interactive experiences, and
            build programming skills one clear lesson at a time.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Explore courses <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link
              href="/activities"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-card-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Try an activity
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            {liveToolCount} free tools · 2 coding games · 4 interactive activities · 2 learning paths
          </p>
        </div>
      </section>

      <section aria-labelledby="explore-title" className="py-12 sm:py-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">Find your next step</p>
            <h2 id="explore-title" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Explore iamnoobs
            </h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground">
            Need a quick answer, a playful experiment, or a structured way to learn? Start anywhere.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/tools", icon: "🧰", title: "Tools", text: `${liveToolCount} practical helpers for everyday digital tasks.` },
            { href: "/games", icon: "🎮", title: "Games", text: "Play Snake or solve programming puzzles in Bug Hunt." },
            { href: "/activities", icon: "✨", title: "Activities", text: "Explore the web, pixels, algorithms, and network signals." },
            { href: "/courses", icon: "📚", title: "Courses", text: "Follow guided Python and C learning paths from the basics up." },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-card-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <span aria-hidden="true" className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 font-semibold group-hover:text-primary">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
              <span className="mt-3 inline-flex text-sm font-medium text-primary">
                Explore <span aria-hidden="true" className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="activities-preview-title" className="border-t border-card-border py-12 sm:py-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">Curiosity, meet interaction</p>
            <h2 id="activities-preview-title" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Take a tiny detour
            </h2>
          </div>
          <Link href="/activities" className="text-sm font-semibold text-primary hover:underline">
            All activities <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredActivities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/activities/${activity.slug}`}
              className="group rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <span aria-hidden="true" className="text-2xl">{activity.icon}</span>
              <h3 className="mt-3 font-semibold group-hover:text-primary">{activity.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{activity.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="courses-preview-title" className="border-t border-card-border py-12 sm:py-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-primary">Build a real foundation</p>
            <h2 id="courses-preview-title" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Learn programming step by step
            </h2>
          </div>
          <Link href="/courses" className="text-sm font-semibold text-primary hover:underline">
            Browse learning paths <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  {course.iconImage ? (
                    <Image
                      src={course.iconImage}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    course.icon
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold group-hover:text-primary">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.levelLabel} · {course.modules.length} modules</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{course.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="tools-title" className="border-t border-card-border py-12 sm:py-16">
        <div className="rounded-2xl border border-card-border bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <p className="text-sm font-semibold text-primary">Get something done</p>
            <h2 id="tools-title" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Practical tools, ready when you need them
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Search {liveToolCount} browser-based tools for development, documents, productivity, and more.
            </p>
          </div>
          <Link
            href="/tools"
            className="mt-5 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:mt-0"
          >
            Browse all tools <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
