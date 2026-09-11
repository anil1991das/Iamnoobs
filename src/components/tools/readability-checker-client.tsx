"use client";
import { useState, useMemo } from "react";
import { calculateReadability } from "@/lib/tools/css-design-tools";

export default function ReadabilityCheckerClient() {
  const [text, setText] = useState("");

  const result = useMemo(() => (text.trim().length > 0 ? calculateReadability(text) : null), [text]);

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Paste Your Text</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} placeholder="Paste your article, blog post, or any text here..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      {result && (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Flesch Score</p>
              <p className={`text-3xl font-bold ${result.fleschReading >= 60 ? "text-green-500" : result.fleschReading >= 30 ? "text-yellow-500" : "text-red-500"}`}>{result.fleschReading}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Grade Level</p>
              <p className="text-3xl font-bold text-primary">{result.fleschKincaid}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Words</p>
              <p className="text-3xl font-bold">{result.wordCount}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Sentences</p>
              <p className="text-3xl font-bold">{result.sentences}</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-medium">Reading Level: <span className="text-primary">{result.level}</span></p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-muted">
              <p>Avg words/sentence: <span className="text-foreground">{result.avgWordsPerSentence}</span></p>
              <p>Avg syllables/word: <span className="text-foreground">{result.avgSyllablesPerWord}</span></p>
              <p>Total syllables: <span className="text-foreground">{result.syllableCount}</span></p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <p className="mb-2 text-sm font-medium">Readability Scale</p>
            <div className="flex h-3 overflow-hidden rounded-full">
              <div className="bg-red-500 flex-1" /><div className="bg-orange-500 flex-1" /><div className="bg-yellow-500 flex-1" /><div className="bg-green-400 flex-1" /><div className="bg-green-500 flex-1" />
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted">
              <span>Very Hard</span><span>Hard</span><span>Moderate</span><span>Easy</span><span>Very Easy</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
