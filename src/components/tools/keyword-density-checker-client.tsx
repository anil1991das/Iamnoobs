"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { analyzeKeywordDensity, analyzePhrases, type KeywordResult } from "@/lib/tools/keyword-density";

export default function KeywordDensityCheckerClient() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState<KeywordResult[]>([]);
  const [phrases, setPhrases] = useState<KeywordResult[]>([]);

  const handleAnalyze = () => {
    setWords(analyzeKeywordDensity(input));
    setPhrases(analyzePhrases(input, 2));
  };

  return (
    <>
      <ToolInput label="Paste your text or article" value={input} onChange={setInput} placeholder="Paste your content here to analyze keyword density..." />

      <div className="flex flex-wrap gap-3">
        <button onClick={handleAnalyze} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Analyze</button>
        <ActionButtons onClear={() => { setInput(""); setWords([]); setPhrases([]); }} />
      </div>

      {words.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Single Words (Top 30)</h3>
            <div className="max-h-80 overflow-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-accent">
                  <tr><th className="p-2 text-left text-muted">Keyword</th><th className="p-2 text-right text-muted">Count</th><th className="p-2 text-right text-muted">Density</th></tr>
                </thead>
                <tbody>
                  {words.slice(0, 30).map((w) => (
                    <tr key={w.keyword} className="border-t border-border">
                      <td className="p-2 font-medium text-foreground">{w.keyword}</td>
                      <td className="p-2 text-right text-foreground">{w.count}</td>
                      <td className="p-2 text-right text-primary">{w.density}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Two-Word Phrases (Top 20)</h3>
            <div className="max-h-80 overflow-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-accent">
                  <tr><th className="p-2 text-left text-muted">Phrase</th><th className="p-2 text-right text-muted">Count</th><th className="p-2 text-right text-muted">Density</th></tr>
                </thead>
                <tbody>
                  {phrases.slice(0, 20).map((p) => (
                    <tr key={p.keyword} className="border-t border-border">
                      <td className="p-2 font-medium text-foreground">{p.keyword}</td>
                      <td className="p-2 text-right text-foreground">{p.count}</td>
                      <td className="p-2 text-right text-primary">{p.density}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
