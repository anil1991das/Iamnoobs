"use client";

import { useState } from "react";
import { testRegex, isValidRegex, type RegexResult } from "@/lib/tools/regex-tester";

export default function RegexTesterClient() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [result, setResult] = useState<RegexResult | null>(null);
  const [error, setError] = useState("");

  const handleTest = () => {
    setError("");
    const validation = isValidRegex(pattern, flags);
    if (!validation.valid) { setError(validation.error || "Invalid regex"); setResult(null); return; }
    try {
      setResult(testRegex(pattern, flags, testString));
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="mb-1.5 block text-sm font-medium text-foreground">Pattern</label>
            <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 font-mono text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="[a-z]+@[a-z]+\.[a-z]+" />
          </div>
          <div className="w-24">
            <label className="mb-1.5 block text-sm font-medium text-foreground">Flags</label>
            <input type="text" value={flags} onChange={(e) => setFlags(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="gi" />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Test String</label>
          <textarea value={testString} onChange={(e) => setTestString(e.target.value)} rows={6} className="w-full rounded-xl border border-border bg-card p-3 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter test string..." />
        </div>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleTest} disabled={!pattern} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Test Regex</button>
        <button onClick={() => { setPattern(""); setFlags("g"); setTestString(""); setResult(null); setError(""); }} className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent">Clear</button>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="flex gap-4 text-sm">
            <span className="font-semibold text-foreground">{result.totalMatches} match{result.totalMatches !== 1 ? "es" : ""}</span>
            <span className="text-muted">{result.executionTime.toFixed(2)}ms</span>
          </div>
          {result.matches.length > 0 && (
            <div className="max-h-64 overflow-auto rounded-xl border border-border bg-card p-3">
              {result.matches.slice(0, 100).map((m, i) => (
                <div key={i} className="flex gap-3 border-b border-border py-1.5 text-xs last:border-0">
                  <span className="text-muted">#{i + 1}</span>
                  <span className="font-mono text-primary">&quot;{m.match}&quot;</span>
                  <span className="text-muted">at index {m.index}</span>
                  {m.groups.length > 0 && <span className="text-muted">groups: [{m.groups.join(", ")}]</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
