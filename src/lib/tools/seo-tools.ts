export function generateSitemap(urls: { url: string; priority?: string; changefreq?: string }[]): string {
  const items = urls.map((u) => {
    let entry = `  <url>\n    <loc>${escapeXml(u.url)}</loc>\n`;
    if (u.changefreq) entry += `    <changefreq>${u.changefreq}</changefreq>\n`;
    if (u.priority) entry += `    <priority>${u.priority}</priority>\n`;
    entry += `  </url>`;
    return entry;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join("\n")}\n</urlset>`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function generateRobotsTxt(config: { sitemapUrl?: string; disallowPaths?: string[]; allowPaths?: string[]; userAgent?: string }): string {
  const lines: string[] = [];
  lines.push(`User-agent: ${config.userAgent || "*"}`);
  if (config.allowPaths) config.allowPaths.forEach((p) => lines.push(`Allow: ${p}`));
  if (config.disallowPaths) config.disallowPaths.forEach((p) => lines.push(`Disallow: ${p}`));
  lines.push("");
  if (config.sitemapUrl) lines.push(`Sitemap: ${config.sitemapUrl}`);
  return lines.join("\n");
}

export function generateCanonicalTag(url: string): string {
  return `<link rel="canonical" href="${url.replace(/"/g, "&quot;")}" />`;
}

export function generateHtaccessRedirect(from: string, to: string, type: "301" | "302" = "301"): string {
  return `Redirect ${type} ${from} ${to}`;
}

export function generateHtaccessRewrite(from: string, to: string, flags: string = "[R=301,L]"): string {
  return `RewriteRule ^${from}$ ${to} ${flags}`;
}

export function generateKeywordSuggestions(keyword: string): string[] {
  const prefixes = ["how to", "best", "free", "top", "what is", "why", "guide to"];
  const suffixes = ["tutorial", "guide", "tips", "examples", "tools", "online", "free", "2024", "for beginners", "vs"];
  const suggestions: string[] = [];
  prefixes.forEach((p) => suggestions.push(`${p} ${keyword}`));
  suffixes.forEach((s) => suggestions.push(`${keyword} ${s}`));
  suggestions.push(`${keyword} alternatives`);
  suggestions.push(`${keyword} comparison`);
  suggestions.push(`${keyword} review`);
  return suggestions;
}
