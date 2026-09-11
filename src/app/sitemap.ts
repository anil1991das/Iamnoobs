import { MetadataRoute } from "next";
import { tools } from "@/lib/tools/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iamnoobs.com";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolPages,
  ];
}
