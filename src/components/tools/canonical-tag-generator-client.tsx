"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import { generateCanonicalTag } from "@/lib/tools/seo-tools";

export default function CanonicalTagGeneratorClient() {
  const [url, setUrl] = useState("");
  const output = url ? generateCanonicalTag(url) : "";

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="text-sm font-medium text-foreground">Canonical URL</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/page" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm mt-1" />
      </div>
      {output && <ToolOutput value={output} />}
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted space-y-2">
        <p><strong>What is a canonical tag?</strong></p>
        <p>A canonical tag tells search engines which version of a URL is the &quot;master&quot; copy when duplicate content exists. Place it in the &lt;head&gt; section of your HTML.</p>
        <p>Use it when you have the same content accessible via multiple URLs (e.g., with/without www, HTTP/HTTPS, query parameters).</p>
      </div>
    </>
  );
}
