import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { tools } from "@/lib/tools/registry";

export interface ArticleToolLink {
  title: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  coverImage?: string;
  coverImageAlt?: string;
  relatedTools: ArticleToolLink[];
  relatedArticles: string[];
  draft: boolean;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), "src/content/articles");
const publicDirectory = path.join(process.cwd(), "public");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredString(
  data: Record<string, unknown>,
  key: string,
  filename: string,
): string {
  const value = data[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Article ${filename} must define a non-empty "${key}".`);
  }
  return value.trim();
}

function optionalString(value: unknown, key: string, filename: string): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Article ${filename} has an invalid "${key}".`);
  }
  return value.trim();
}

function validateDate(value: string, key: string, filename: string): string {
  const parsedDate = new Date(`${value}T00:00:00.000Z`);
  if (
    !datePattern.test(value) ||
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== value
  ) {
    throw new Error(`Article ${filename} must use a valid YYYY-MM-DD "${key}" date.`);
  }
  return value;
}

function stringArray(value: unknown, key: string, filename: string): string[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) {
    throw new Error(`Article ${filename} must define "${key}" as an array of non-empty strings.`);
  }

  const values: string[] = [];
  for (const entry of value) {
    if (typeof entry !== "string" || entry.trim() === "") {
      throw new Error(
        `Article ${filename} must define "${key}" as an array of non-empty strings.`,
      );
    }
    values.push(entry.trim());
  }
  return values;
}

function toolLinks(value: unknown, filename: string): ArticleToolLink[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) {
    throw new Error(`Article ${filename} must define "relatedTools" as an array.`);
  }

  return value.map((entry, index) => {
    if (!isRecord(entry)) {
      throw new Error(`Article ${filename} has an invalid relatedTools item at index ${index}.`);
    }

    const title = requiredString(entry, "title", filename);
    const url = requiredString(entry, "url", filename);
    if (
      !url.startsWith("/") ||
      url.startsWith("//") ||
      !tools.some((tool) => url === `/${tool.slug}`)
    ) {
      throw new Error(
        `Article ${filename} related tool URLs must match a registered tool route.`,
      );
    }
    return { title, url };
  });
}

async function validateCoverImage(
  coverImage: string | undefined,
  coverImageAlt: string | undefined,
  slug: string,
  draft: boolean,
  filename: string,
): Promise<void> {
  if (!coverImage) {
    if (coverImageAlt) {
      throw new Error(`Article ${filename} defines "coverImageAlt" without a "coverImage".`);
    }
    return;
  }

  if (
    !coverImage.startsWith(`/articles/${slug}/`) ||
    coverImage.split("/").includes("..") ||
    !/^\/articles\/[a-z0-9-]+\/[a-zA-Z0-9._/-]+$/.test(coverImage)
  ) {
    throw new Error(
      `Article ${filename} coverImage must be a local path under /articles/${slug}/.`,
    );
  }
  if (!coverImageAlt) {
    throw new Error(`Article ${filename} must define "coverImageAlt" with its coverImage.`);
  }

  if (!draft) {
    const imagePath = path.resolve(publicDirectory, coverImage.slice(1));
    if (!imagePath.startsWith(`${publicDirectory}${path.sep}`)) {
      throw new Error(`Article ${filename} has an invalid coverImage path.`);
    }
    try {
      await access(imagePath);
    } catch {
      throw new Error(`Published article ${filename} cover image does not exist: ${coverImage}`);
    }
  }
}

async function readArticle(filename: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, filename);
  const source = await readFile(fullPath, "utf8");
  const parsed = matter(source);
  if (!isRecord(parsed.data)) {
    throw new Error(`Article ${filename} must start with YAML frontmatter.`);
  }

  const data = parsed.data;
  const slug = requiredString(data, "slug", filename);
  if (!slugPattern.test(slug) || filename !== `${slug}.md`) {
    throw new Error(`Article ${filename} must have a matching kebab-case slug.`);
  }

  const draft = data.draft ?? false;
  if (typeof draft !== "boolean") {
    throw new Error(`Article ${filename} must set "draft" to true or false.`);
  }

  const coverImage = optionalString(data.coverImage, "coverImage", filename);
  const coverImageAlt = optionalString(data.coverImageAlt, "coverImageAlt", filename);
  await validateCoverImage(coverImage, coverImageAlt, slug, draft, filename);
  const content = parsed.content.trim();
  if (!draft && content === "") {
    throw new Error(`Published article ${filename} must include article content.`);
  }

  return {
    slug,
    title: requiredString(data, "title", filename),
    description: requiredString(data, "description", filename),
    publishedAt: validateDate(requiredString(data, "publishedAt", filename), "publishedAt", filename),
    updatedAt: validateDate(requiredString(data, "updatedAt", filename), "updatedAt", filename),
    author: requiredString(data, "author", filename),
    category: requiredString(data, "category", filename),
    tags: stringArray(data.tags, "tags", filename),
    coverImage,
    coverImageAlt,
    relatedTools: toolLinks(data.relatedTools, filename),
    relatedArticles: stringArray(data.relatedArticles, "relatedArticles", filename).map((relatedSlug) => {
      if (!slugPattern.test(relatedSlug)) {
        throw new Error(`Article ${filename} has an invalid related article slug "${relatedSlug}".`);
      }
      return relatedSlug;
    }),
    draft,
    content,
  };
}

async function readAllArticles(): Promise<Article[]> {
  const filenames = (await readdir(articlesDirectory))
    .filter((filename) => filename.endsWith(".md"))
    .sort();
  const articles = await Promise.all(filenames.map(readArticle));
  const seenSlugs = new Set<string>();

  for (const article of articles) {
    if (seenSlugs.has(article.slug)) {
      throw new Error(`Duplicate article slug "${article.slug}".`);
    }
    seenSlugs.add(article.slug);
  }

  return articles;
}

export async function getPublishedArticles(): Promise<Article[]> {
  return (await readAllArticles())
    .filter((article) => !article.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPublishedArticle(slug: string): Promise<Article | undefined> {
  return (await getPublishedArticles()).find((article) => article.slug === slug);
}

export async function getArticleSlugsForExport(): Promise<string[]> {
  return (await readAllArticles()).map((article) => article.slug);
}

export async function renderArticleMarkdown(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}
