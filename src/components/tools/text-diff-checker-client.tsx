"use client";

import { useState } from "react";
import { computeDiff } from "@/lib/tools/text-diff";

export default function TextDiffCheckerClient() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [result, setResult] = useState<ReturnType<typeof computeDiff> | null>(null);

  const handleCompare = () => {
    setResult(computeDiff(oldText, newText));
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Original Text</label>
          <textarea
            value={oldText}
            onChange={(e) => setOldText(e.target.value)}
            rows={10}
            className="w-full rounded-xl border border-border bg-card p-3 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Paste original text here..."
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Modified Text</label>
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            rows={10}
            className="w-full rounded-xl border border-border bg-card p-3 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Paste modified text here..."
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleCompare} disabled={!oldText && !newText} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Compare</button>
        <button onClick={() => { setOldText(""); setNewText(""); setResult(null); }} className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent">Clear</button>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="flex gap-4 text-sm">
            <span className="text-green-600">+{result.additions} added</span>
            <span className="text-red-600">-{result.deletions} removed</span>
            <span className="text-muted">{result.unchanged} unchanged</span>
          </div>
          <div className="max-h-96 overflow-auto rounded-xl border border-border bg-card p-3 font-mono text-xs">
            {result.lines.map((line, i) => (
              <div key={i} className={`px-2 py-0.5 ${line.type === "add" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : line.type === "remove" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : ""}`}>
                <span className="mr-2 inline-block w-4 text-muted">{line.type === "add" ? "+" : line.type === "remove" ? "-" : " "}</span>
                {line.content || "\u00A0"}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
