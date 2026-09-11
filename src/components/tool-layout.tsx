import { ReactNode } from "react";
import Link from "next/link";

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  children: ReactNode;
  seoContent?: ReactNode;
}

export default function ToolLayout({
  title,
  description,
  icon,
  slug,
  children,
  seoContent,
}: ToolLayoutProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://iamnoobs.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://iamnoobs.com/#tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://iamnoobs.com/tools/${slug}`,
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description,
    url: `https://iamnoobs.com/tools/${slug}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li aria-hidden="true" className="select-none">/</li>
          <li>
            <Link href="/#tools" className="hover:text-foreground transition-colors">Tools</Link>
          </li>
          <li aria-hidden="true" className="select-none">/</li>
          <li aria-current="page" className="font-medium text-foreground truncate">{title}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl" aria-hidden="true">{icon}</span>
          {title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-6">{children}</div>

      {seoContent && (
        <aside className="mt-16" aria-label="About this tool">{seoContent}</aside>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
    </main>
  );
}
