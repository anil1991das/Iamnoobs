import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createElement } from "react";
import { tools, getToolBySlug } from "@/lib/tools/registry";
import { getToolComponent, hasToolComponent } from "@/lib/tools/tool-components";
import { seoData } from "@/lib/tools/seo-data";
import ToolLayout from "@/components/tool-layout";
import SeoContent from "@/components/seo-content";
import ComingSoon from "@/components/coming-soon";
import { getPublishedArticles } from "@/lib/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  const isLive = hasToolComponent(slug);

  return {
    title: { absolute: tool.metaTitle },
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      type: "website",
      url: `https://iamnoobs.com/${tool.slug}`,
      siteName: "iamnoobs",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: `https://iamnoobs.com/${tool.slug}`,
    },
    ...(!isLive && {
      robots: {
        index: false,
        follow: true,
      },
    }),
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const ToolClient = getToolComponent(slug);
  const seo = seoData[slug];
  const relatedArticles = hasToolComponent(slug)
    ? (await getPublishedArticles())
        .filter((article) =>
          article.relatedTools.some((relatedTool) => relatedTool.url === `/${slug}`),
        )
        .map(({ slug: articleSlug, title, description }) => ({
          slug: articleSlug,
          title,
          description,
        }))
    : [];

  return (
    <ToolLayout
      title={tool.name}
      description={tool.description}
      icon={tool.icon}
      slug={tool.slug}
      relatedArticles={relatedArticles}
      seoContent={
        seo ? <SeoContent content={seo.content} faqs={seo.faqs} /> : undefined
      }
    >
      {hasToolComponent(slug) && ToolClient ? (
        createElement(ToolClient)
      ) : (
        <ComingSoon toolName={tool.name} />
      )}
    </ToolLayout>
  );
}