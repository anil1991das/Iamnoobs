import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleSlugsForExport,
  getPublishedArticle,
  getPublishedArticles,
  renderArticleMarkdown,
} from "@/lib/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getArticleSlugsForExport();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) return {};

  const canonical = `https://iamnoobs.com/articles/${article.slug}`;
  const image = article.coverImage
    ? [{ url: article.coverImage, alt: article.coverImageAlt }]
    : undefined;

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: canonical,
      siteName: "iamnoobs",
      publishedTime: new Date(`${article.publishedAt}T00:00:00.000Z`).toISOString(),
      modifiedTime: new Date(`${article.updatedAt}T00:00:00.000Z`).toISOString(),
      authors: [article.author],
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: image?.map(({ url }) => url),
    },
  };
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const [article, articles] = await Promise.all([
    getPublishedArticle(slug),
    getPublishedArticles(),
  ]);
  if (!article) notFound();

  const relatedArticles = article.relatedArticles
    .map((relatedSlug) => articles.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);
  const content = await renderArticleMarkdown(article.content);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: `https://iamnoobs.com/articles/${article.slug}`,
    headline: article.title,
    description: article.description,
    image: article.coverImage
      ? `https://iamnoobs.com${article.coverImage}`
      : undefined,
    datePublished: `${article.publishedAt}T00:00:00.000Z`,
    dateModified: `${article.updatedAt}T00:00:00.000Z`,
    author: article.author.toLowerCase() === "iamnoobs"
      ? {
          "@type": "Organization",
          name: article.author,
          url: "https://iamnoobs.com/about",
        }
      : {
          "@type": "Person",
          name: article.author,
        },
    publisher: {
      "@type": "Organization",
      name: "iamnoobs",
      url: "https://iamnoobs.com",
    },
    articleSection: article.category,
    keywords: article.tags,
  };
  const safeArticleSchema = JSON.stringify(articleSchema).replace(/</g, "\\u003c");

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <Link href="/articles" className="hover:text-foreground">
          Articles
        </Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span aria-current="page" className="text-foreground">
          {article.title}
        </span>
      </nav>

      <article>
        <header className="mb-8">
          <p className="text-sm font-semibold text-primary">{article.category}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {article.description}
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            By {article.author} <span aria-hidden="true">·</span>{" "}
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            {article.updatedAt !== article.publishedAt && (
              <>
                {" "}
                <span aria-hidden="true">·</span> Updated{" "}
                <time dateTime={article.updatedAt}>
                  {formatDate(article.updatedAt)}
                </time>
              </>
            )}
          </p>
        </header>

        {article.coverImage && article.coverImageAlt && (
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            width={1200}
            height={630}
            priority
            className="mb-10 aspect-[1200/630] w-full rounded-2xl object-cover"
          />
        )}

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      {article.relatedTools.length > 0 && (
        <aside className="mt-12 rounded-2xl border border-card-border bg-muted p-6">
          <h2 className="text-xl font-semibold">Related tools</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {article.relatedTools.map((tool) => (
              <li key={tool.url}>
                <Link
                  href={tool.url}
                  className="inline-flex rounded-lg bg-primary px-4 py-2 font-medium text-white hover:bg-primary-hover"
                >
                  Try {tool.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {relatedArticles.length > 0 && (
        <nav aria-label="Related articles" className="mt-12 border-t border-card-border pt-8">
          <h2 className="text-xl font-semibold">Related articles</h2>
          <ul className="mt-3 space-y-2">
            {relatedArticles.map((relatedArticle) => (
              <li key={relatedArticle.slug}>
                <Link
                  href={`/articles/${relatedArticle.slug}`}
                  className="text-primary underline underline-offset-4"
                >
                  {relatedArticle.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeArticleSchema }}
      />
    </main>
  );
}
