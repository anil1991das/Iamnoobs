"use client";

export default function WebsiteScreenshotClient() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Website Screenshot Tool</h3>
        <p className="text-sm text-muted">Taking website screenshots requires server-side rendering. Use these free tools:</p>
        <div className="grid gap-3">
          {[
            { name: "Screenshot Machine", url: "https://www.screenshotmachine.com/", desc: "Free website screenshot generator" },
            { name: "Web Capture", url: "https://web-capture.net/", desc: "Full page screenshots online" },
            { name: "Screely", url: "https://screely.com/", desc: "Turn screenshots into mockups" },
            { name: "Shot.so", url: "https://shot.so/", desc: "Beautiful browser mockups" },
          ].map((tool) => (
            <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors">
              <div><p className="font-medium text-foreground">{tool.name}</p><p className="text-xs text-muted">{tool.desc}</p></div>
              <span className="text-primary text-sm">Open →</span>
            </a>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted">
        <p><strong>Tip:</strong> For quick screenshots, use your browser&apos;s built-in DevTools. In Chrome, press F12 → Ctrl+Shift+P → type &quot;screenshot&quot; → choose &quot;Capture full size screenshot&quot;.</p>
      </div>
    </div>
  );
}
