"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateRobotsTxt } from "@/lib/tools/seo-tools";

export default function RobotsTxtGeneratorClient() {
  const [domain, setDomain] = useState("");
  const [disallow, setDisallow] = useState("/admin\n/private");
  const [allow, setAllow] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const disallowList = disallow.split("\n").map((u) => u.trim()).filter(Boolean);
    const allowList = allow.split("\n").map((u) => u.trim()).filter(Boolean);
    setOutput(generateRobotsTxt({ sitemapUrl: domain ? `${domain}/sitemap.xml` : undefined, disallowPaths: disallowList, allowPaths: allowList }));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Domain (for sitemap URL)</label>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="https://example.com" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">Disallow Paths (one per line)</label>
          <textarea value={disallow} onChange={(e) => setDisallow(e.target.value)} rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono" /></div>
        <div><label className="text-sm font-medium text-foreground">Allow Paths (one per line, optional)</label>
          <textarea value={allow} onChange={(e) => setAllow(e.target.value)} rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono" /></div>
      </div>
      <ActionButtons onClear={() => setOutput("")} onProcess={handleGenerate} processLabel="Generate robots.txt" disabled={!domain} />
      {output && <ToolOutput value={output} />}
    </>
  );
}
