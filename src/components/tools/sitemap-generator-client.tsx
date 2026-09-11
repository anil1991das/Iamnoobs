"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateSitemap } from "@/lib/tools/seo-tools";

export default function SitemapGeneratorClient() {
  const [domain, setDomain] = useState("");
  const [urls, setUrls] = useState("/\n/about\n/contact\n/blog");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const urlList = urls.split("\n").map((u) => u.trim()).filter(Boolean);
    const base = domain.replace(/\/+$/, "");
    setOutput(generateSitemap(urlList.map((path) => ({ url: `${base}${path.startsWith("/") ? "" : "/"}${path}` }))));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Domain</label>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="https://example.com" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">URLs (one per line)</label>
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} rows={6} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono" /></div>
      </div>
      <ActionButtons onClear={() => setOutput("")} onProcess={handleGenerate} processLabel="Generate Sitemap" disabled={!domain} />
      {output && <ToolOutput value={output} />}
    </>
  );
}
