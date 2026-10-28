import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles and Guides",
  description:
    "Practical guides, examples, and tutorials for developers and anyone using iamnoobs online tools.",
  alternates: { canonical: "https://iamnoobs.com/articles" },
};

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          iamnoobs articles
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Practical guides for everyday tech
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Clear explanations, useful examples, and guides to help you get more
          from your tools.
        </p>
      </header>

      {articles.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li
              key={article.slug}
              className="overflow-hidden rounded-2xl border border-card-border bg-card"
            >
              <Link
                href={`/articles/${article.slug}`}
                className="group block h-full"
              >
                {article.coverImage && article.coverImageAlt && (
                  <Image
                    src={article.coverImage}
                    alt={article.coverImageAlt}
                    width={1200}
                    height={630}
                    className="aspect-[1200/630] w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">
                    {article.category} <span aria-hidden="true">·</span>{" "}
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                  </p>
                  <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {article.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <section className="mx-auto max-w-xl rounded-2xl border border-card-border bg-card p-8 text-center">
          <h2 className="text-2xl font-semibold">No published articles yet</h2>
          <p className="mt-3 text-muted-foreground">
            Add a Markdown article to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              src/content/articles/
            </code>{" "}
            and it will appear here. Articles are published by default; set{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              draft: true
            </code>{" "}
            in its frontmatter to keep it hidden.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            The five starter files in that folder are unfinished outlines and
            are marked as drafts, so they stay hidden. After writing an article,
            set <code className="rounded bg-muted px-1.5 py-0.5">draft: false</code>{" "}
            and add its cover image. During development, save the file and
            refresh. For the deployed static site, rebuild and redeploy.
          </p>
          <Link
            href="/tools"
            className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 font-medium text-white hover:bg-primary-hover"
          >
            Explore the tools
          </Link>
        </section>
      )}
    </main>
  );
}
