import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iamnoobs - Free Online Tools for Developers & Everyone",
    template: "%s | iamnoobs",
  },
  description:
    "50+ free online tools: JSON formatter, password generator, image compressor, PDF tools, converters and more. Fast, private, no signup required.",
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
    title: "iamnoobs - Free Online Tools for Developers & Everyone",
    description:
      "50+ free online tools that work in your browser. Fast, private, no signup.",
  },
  twitter: {
    card: "summary_large_image",
    title: "iamnoobs - Free Online Tools",
    description: "50+ fast, free, private browser tools. No signup required.",
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
    "50+ free online tools for developers and everyone. Fast, private, works in your browser.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://iamnoobs.com/#tools?q={search_term_string}",
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
        <Header />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
