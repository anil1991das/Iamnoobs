import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToolPreviewProvider } from "@/components/tool-preview-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iamnoobs — Tools and Guides for Everyday Tasks",
    template: "%s | iamnoobs",
  },
  description:
    "Explore practical tools and clear guides for development, documents, productivity, and everyday digital tasks. Find what you need and learn how to use it.",
  keywords: [
    "online tools",
    "developer tools",
    "free tools",
    "json formatter",
    "password generator",
    "base64 encoder",
    "image compressor",
  ],
  metadataBase: new URL("https://iamnoobs.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "iamnoobs",
    title: "iamnoobs — Tools and Guides for Everyday Tasks",
    description:
      "Practical tools and clear guides for development, documents, productivity, and everyday digital tasks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "iamnoobs — Tools and Guides for Everyday Tasks",
    description:
      "Practical tools and clear guides for development, documents, productivity, and everyday digital tasks.",
  },
  alternates: {
    canonical: "https://iamnoobs.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "iamnoobs",
  url: "https://iamnoobs.com",
  description:
    "Practical tools and clear guides for development, documents, productivity, and everyday digital tasks.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://iamnoobs.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:text-sm"
        >
          Skip to content
        </a>
        <ToolPreviewProvider>
          <Header />
          <div id="main-content" className="flex-1">
            {children}
          </div>
          <Footer />
        </ToolPreviewProvider>
      </body>
    </html>
  );
}
