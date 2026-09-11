"use client";

export default function BrokenLinkCheckerClient() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Broken Link Checker</h3>
        <p className="text-sm text-muted">Checking for broken links requires server-side crawling which isn&apos;t possible in a static site. Use these free tools instead:</p>
        <div className="grid gap-3">
          {[
            { name: "Dead Link Checker", url: "https://www.deadlinkchecker.com/" , desc: "Free online broken link checker" },
            { name: "W3C Link Checker", url: "https://validator.w3.org/checklink", desc: "Official W3C link validator" },
            { name: "Ahrefs Broken Link Checker", url: "https://ahrefs.com/broken-link-checker", desc: "Check up to 10,000 links free" },
            { name: "Google Search Console", url: "https://search.google.com/search-console", desc: "Monitor crawl errors for your site" },
          ].map((tool) => (
            <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors">
              <div><p className="font-medium text-foreground">{tool.name}</p><p className="text-xs text-muted">{tool.desc}</p></div>
              <span className="text-primary text-sm">Open →</span>
            </a>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted space-y-2">
        <p><strong>Why check for broken links?</strong></p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Broken links hurt SEO rankings</li>
          <li>They create poor user experience</li>
          <li>Search engines may reduce crawl frequency</li>
          <li>External links to removed pages return 404 errors</li>
        </ul>
      </div>
    </div>
  );
}
