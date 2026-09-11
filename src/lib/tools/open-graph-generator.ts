export interface OgConfig {
  title: string;
  description: string;
  url: string;
  image: string;
  siteName: string;
  type: string;
  locale: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
}

export function getDefaultOgConfig(): OgConfig {
  return {
    title: "", description: "", url: "", image: "",
    siteName: "", type: "website", locale: "en_US",
    twitterCard: "summary_large_image", twitterSite: "", twitterCreator: "",
  };
}

export function generateOgTags(config: OgConfig): string {
  const tags: string[] = [];
  if (config.title) tags.push(`<meta property="og:title" content="${esc(config.title)}">`);
  if (config.description) tags.push(`<meta property="og:description" content="${esc(config.description)}">`);
  if (config.url) tags.push(`<meta property="og:url" content="${esc(config.url)}">`);
  if (config.image) tags.push(`<meta property="og:image" content="${esc(config.image)}">`);
  if (config.siteName) tags.push(`<meta property="og:site_name" content="${esc(config.siteName)}">`);
  if (config.type) tags.push(`<meta property="og:type" content="${esc(config.type)}">`);
  if (config.locale) tags.push(`<meta property="og:locale" content="${esc(config.locale)}">`);
  if (config.twitterCard) tags.push(`<meta name="twitter:card" content="${esc(config.twitterCard)}">`);
  if (config.twitterSite) tags.push(`<meta name="twitter:site" content="${esc(config.twitterSite)}">`);
  if (config.twitterCreator) tags.push(`<meta name="twitter:creator" content="${esc(config.twitterCreator)}">`);
  if (config.title) tags.push(`<meta name="twitter:title" content="${esc(config.title)}">`);
  if (config.description) tags.push(`<meta name="twitter:description" content="${esc(config.description)}">`);
  if (config.image) tags.push(`<meta name="twitter:image" content="${esc(config.image)}">`);
  return tags.join("\n");
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
