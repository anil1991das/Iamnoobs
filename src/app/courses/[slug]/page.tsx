import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CoursePlayer from "@/components/course-player";
import { courses, getCourse } from "@/lib/courses/curriculum";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.metaDescription,
    alternates: { canonical: `https://iamnoobs.com/courses/${course.slug}` },
    openGraph: {
      title: course.title,
      description: course.metaDescription,
      url: `https://iamnoobs.com/courses/${course.slug}`,
      type: "article",
      siteName: "iamnoobs",
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const lessonCount = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    url: `https://iamnoobs.com/courses/${course.slug}`,
    educationalLevel: course.levelLabel,
    inLanguage: "en",
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: "iamnoobs",
      url: "https://iamnoobs.com",
    },
    teaches: course.modules.flatMap((module) => module.outcomes),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
    },
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-6 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-5 text-sm lg:mb-6">
        <Link href="/courses" className="text-muted-foreground hover:text-foreground">
          Courses
        </Link>
        <span aria-hidden="true" className="mx-2 text-muted-foreground">/</span>
        <span aria-current="page" className="font-medium">{course.language}</span>
      </nav>

      <header className="mx-auto max-w-4xl">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-2xl lg:h-14 lg:w-14 lg:text-3xl"
          >
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
            <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
              {course.levelLabel} · {course.modules.length} modules · {lessonCount} lessons
            </p>
            <h1 className="mt-1 break-words text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
          {course.description}
        </p>
        <div className="mt-4 grid gap-3 lg:mt-5 lg:grid-cols-2">
          <p className="rounded-xl border border-card-border bg-card p-4 text-sm leading-6">
            <strong>Who this is for:</strong> {course.audience}
          </p>
          <p className="rounded-xl border border-card-border bg-card p-4 text-sm leading-6">
            <strong>Prerequisites:</strong> {course.prerequisites}
          </p>
        </div>
      </header>

      <CoursePlayer course={course} />

      <section aria-labelledby="curriculum-title" className="mx-auto mt-10 max-w-4xl lg:mt-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Full curriculum
        </p>
        <h2 id="curriculum-title" className="mt-1 text-2xl font-bold">
          What you will learn
        </h2>
        <div className="mt-5 space-y-4">
          {course.modules.map((module, index) => (
            <article
              key={module.id}
              className="rounded-2xl border border-card-border bg-card p-4 lg:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {index + 1}. {module.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {module.level}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {module.description}
              </p>
              <ol className="mt-4 grid gap-2 lg:grid-cols-2">
                {module.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className="rounded-lg bg-muted p-3 text-sm"
                  >
                    <h4 className="font-medium">{lesson.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {lesson.summary}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-4 border-t border-card-border pt-3 text-sm leading-6">
                <strong>Module checkpoint:</strong> {module.checkpoint}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="capstone-title"
        className="mx-auto mt-8 max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 p-4 lg:mt-10 lg:p-6"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Put it together
        </p>
        <h2 id="capstone-title" className="mt-1 text-2xl font-bold">
          {course.capstone.title}
        </h2>
        <p className="mt-3 leading-7 text-muted-foreground">{course.capstone.brief}</p>
        <ol className="mt-5 space-y-2">
          {course.capstone.milestones.map((milestone, index) => (
            <li key={milestone} className="flex gap-3 text-sm leading-6">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <span>{milestone}</span>
            </li>
          ))}
        </ol>
      </section>

      <p className="mx-auto mt-8 max-w-4xl text-sm leading-6 text-muted-foreground">
        Progress is saved in this browser when local storage is available. You
        can continue without an account; changing browsers or clearing browser
        data may remove saved progress. Examples are not executed by the site.
      </p>
    </main>
  );
}
