import { notFound } from "next/navigation";
import { Metadata } from "next";
import { tools, getToolBySlug } from "@/lib/tools/registry";
import { getToolComponent, hasToolComponent } from "@/lib/tools/tool-components";
import { seoData } from "@/lib/tools/seo-data";
import ToolLayout from "@/components/tool-layout";
import SeoContent from "@/components/seo-content";
import ComingSoon from "@/components/coming-soon";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      type: "website",
      url: `https://iamnoobs.com/tools/${tool.slug}`,
      siteName: "iamnoobs",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: `https://iamnoobs.com/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const ToolClient = getToolComponent(slug);
  const seo = seoData[slug];

  return (
    <ToolLayout
      title={tool.name}
      description={tool.description}
      icon={tool.icon}
      slug={tool.slug}
      seoContent={
        seo ? <SeoContent content={seo.content} faqs={seo.faqs} /> : undefined
      }
    >
      {hasToolComponent(slug) && ToolClient ? (
        <ToolClient />
      ) : (
        <ComingSoon toolName={tool.name} />
      )}
    </ToolLayout>
  );
}
