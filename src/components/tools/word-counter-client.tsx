"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import { countWords, type WordCountResult } from "@/lib/tools/word-counter";

const emptyResult: WordCountResult = {
  characters: 0,
  charactersNoSpaces: 0,
  words: 0,
  sentences: 0,
  paragraphs: 0,
  readingTimeMinutes: 0,
};

export default function WordCounterClient() {
  const [input, setInput] = useState("");

  const result = input.trim() ? countWords(input) : emptyResult;

  const stats = [
    { label: "Words", value: result.words },
    { label: "Characters", value: result.characters },
    { label: "Characters (no spaces)", value: result.charactersNoSpaces },
    { label: "Sentences", value: result.sentences },
    { label: "Paragraphs", value: result.paragraphs },
    { label: "Reading Time", value: `${result.readingTimeMinutes} min` },
  ];

  return (
    <>
      <ToolInput
        label="Type or paste your text"
        value={input}
        onChange={setInput}
        placeholder="Start typing or paste your content here to see word count, character count, and more..."
        rows={10}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-card-border bg-card p-4 text-center shadow-sm"
          >
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {input.trim() && (
        <button
          onClick={() => setInput("")}
          className="rounded-xl border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Clear
        </button>
      )}
    </>
  );
}
