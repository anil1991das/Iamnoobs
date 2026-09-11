export interface MetaTagConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  viewport: string;
  charset: string;
}

export function getDefaultConfig(): MetaTagConfig {
  return {
    title: "", description: "", keywords: "", author: "",
    robots: "index, follow", canonical: "",
    ogTitle: "", ogDescription: "", ogImage: "", ogUrl: "", ogType: "website",
    twitterCard: "summary_large_image", twitterTitle: "", twitterDescription: "", twitterImage: "",
    viewport: "width=device-width, initial-scale=1", charset: "UTF-8",
  };
}

export function generateMetaTags(config: MetaTagConfig): string {
  const tags: string[] = [];
  if (config.charset) tags.push(`<meta charset="${esc(config.charset)}">`);
  if (config.viewport) tags.push(`<meta name="viewport" content="${esc(config.viewport)}">`);
  if (config.title) tags.push(`<title>${esc(config.title)}</title>`);
  if (config.description) tags.push(`<meta name="description" content="${esc(config.description)}">`);
  if (config.keywords) tags.push(`<meta name="keywords" content="${esc(config.keywords)}">`);
  if (config.author) tags.push(`<meta name="author" content="${esc(config.author)}">`);
  if (config.robots) tags.push(`<meta name="robots" content="${esc(config.robots)}">`);
  if (config.canonical) tags.push(`<link rel="canonical" href="${esc(config.canonical)}">`);
  if (config.ogTitle) tags.push(`<meta property="og:title" content="${esc(config.ogTitle)}">`);
  if (config.ogDescription) tags.push(`<meta property="og:description" content="${esc(config.ogDescription)}">`);
  if (config.ogImage) tags.push(`<meta property="og:image" content="${esc(config.ogImage)}">`);
  if (config.ogUrl) tags.push(`<meta property="og:url" content="${esc(config.ogUrl)}">`);
  if (config.ogType) tags.push(`<meta property="og:type" content="${esc(config.ogType)}">`);
  if (config.twitterCard) tags.push(`<meta name="twitter:card" content="${esc(config.twitterCard)}">`);
  if (config.twitterTitle) tags.push(`<meta name="twitter:title" content="${esc(config.twitterTitle)}">`);
  if (config.twitterDescription) tags.push(`<meta name="twitter:description" content="${esc(config.twitterDescription)}">`);
  if (config.twitterImage) tags.push(`<meta name="twitter:image" content="${esc(config.twitterImage)}">`);
  return tags.join("\n");
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
