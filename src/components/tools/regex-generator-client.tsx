"use client";

import { useState } from "react";
import { commonPatterns, type RegexPattern } from "@/lib/tools/regex-generator";
import { copyToClipboard } from "@/lib/utils/clipboard";

export default function RegexGeneratorClient() {
  const [selected, setSelected] = useState<RegexPattern | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (pattern: RegexPattern) => {
    await copyToClipboard(pattern.pattern);
    setCopied(pattern.name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <p className="text-sm text-muted">Select a common regex pattern to use. Click to view details, or copy directly.</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {commonPatterns.map((p) => (
          <div key={p.name} onClick={() => setSelected(p)} className={`cursor-pointer rounded-xl border p-4 transition-colors ${selected?.name === p.name ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"}`}>
            <h3 className="mb-1 text-sm font-semibold text-foreground">{p.name}</h3>
            <p className="mb-2 text-xs text-muted">{p.description}</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 truncate rounded bg-accent px-2 py-1 font-mono text-xs text-foreground">{p.pattern}</code>
              <button onClick={(e) => { e.stopPropagation(); handleCopy(p); }} className="shrink-0 rounded-lg bg-primary px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-primary-hover">
                {copied === p.name ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-2 text-sm font-semibold text-foreground">{selected.name}</h3>
          <p className="mb-2 text-sm text-muted">{selected.description}</p>
          <div className="rounded-lg bg-accent p-3">
            <code className="block break-all font-mono text-sm text-foreground">/{selected.pattern}/{selected.flags}</code>
          </div>
        </div>
      )}
    </>
  );
}
