"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { generateKeywordSuggestions } from "@/lib/tools/seo-tools";

export default function KeywordSuggestionClient() {
  const [seed, setSeed] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleGenerate = () => setResults(generateKeywordSuggestions(seed));

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="text-sm font-medium text-foreground">Seed Keyword</label>
        <input type="text" value={seed} onChange={(e) => { setSeed(e.target.value); setResults([]); }} placeholder="digital marketing" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm mt-1" />
      </div>
      <ActionButtons onClear={() => { setSeed(""); setResults([]); }} onProcess={handleGenerate} processLabel="Generate Suggestions" disabled={!seed.trim()} />
      {results.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Keyword Ideas ({results.length})</h3>
          <div className="flex flex-wrap gap-2">
            {results.map((kw, i) => (
              <button key={i} onClick={() => navigator.clipboard.writeText(kw)} title="Click to copy" className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors">{kw}</button>
            ))}
          </div>
          <p className="text-xs text-muted mt-3">Click a keyword to copy it. These are pattern-based suggestions — use Google Keyword Planner for volume data.</p>
        </div>
      )}
    </>
  );
}
