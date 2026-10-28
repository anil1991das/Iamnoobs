import { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/articles";
import { gameLanguages } from "@/lib/games/bug-hunt";
import { tools } from "@/lib/tools/registry";
import { hasToolComponent } from "@/lib/tools/tool-components";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://iamnoobs.com";
  const articles = await getPublishedArticles();

  const toolPages = tools.filter((tool) => hasToolComponent(tool.slug)).map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const gamePages = [
    {
      url: `${baseUrl}/games`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...gameLanguages.map((language) => ({
      url: `${baseUrl}/games/${language.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...toolPages,
    ...articlePages,
    ...gamePages,
  ];
}
