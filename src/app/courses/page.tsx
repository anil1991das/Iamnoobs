import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/courses/curriculum";

export const metadata: Metadata = {
  title: "Free Programming Courses",
  description:
    "Follow free, self-paced programming courses from beginner foundations to advanced concepts with lessons, quests, and progress tracking.",
  alternates: { canonical: "https://iamnoobs.com/courses" },
  openGraph: {
    title: "Free Programming Courses | iamnoobs",
    description:
      "Learn programming through structured lessons, practical examples, knowledge quests, and browser-saved progress.",
    url: "https://iamnoobs.com/courses",
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6 lg:py-12">
      <header className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Learn by building understanding
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Programming courses
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          Follow a clear learning path from your first program to deeper ideas.
          Each course includes guided examples, short relevance quests, module
          checkpoints, and progress saved in your browser.
        </p>
      </header>

      <section aria-label="Available programming courses" className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        {courses.map((course) => {
          const lessonCount = course.modules.reduce(
            (total, module) => total + module.lessons.length,
            0,
          );
          return (
            <article
              key={course.slug}
              className="flex min-w-0 flex-col rounded-2xl border border-card-border bg-card p-4 shadow-sm lg:p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl"
                >
                  {course.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {course.levelLabel}
                  </p>
                  <h2 className="mt-1 break-words text-xl font-bold">{course.language}</h2>
                </div>
              </div>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                {course.description}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {course.modules.length} modules · {lessonCount} lessons ·{" "}
                {lessonCount} knowledge quests
              </p>
              <Link
                href={`/courses/${course.slug}`}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Start {course.language} course
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </article>
          );
        })}
      </section>

      <aside className="mx-auto mt-8 max-w-3xl rounded-xl border border-card-border bg-muted p-4 lg:p-5">
        <h2 className="font-semibold">Made for steady, self-paced learning</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          No account is needed. Lesson and quest progress stays in this
          browser. The code samples are teaching examples; this site does not
          execute submitted code.
        </p>
      </aside>
    </main>
  );
}
