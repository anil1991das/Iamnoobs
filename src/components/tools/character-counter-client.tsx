"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import { countCharacters, type CharCount } from "@/lib/tools/text-processing";

export default function CharacterCounterClient() {
  const [input, setInput] = useState("");

  const stats: CharCount = countCharacters(input);

  const items = [
    { label: "Total Characters", value: stats.total },
    { label: "Without Spaces", value: stats.withoutSpaces },
    { label: "Words", value: stats.words },
    { label: "Lines", value: stats.lines },
    { label: "Letters", value: stats.letters },
    { label: "Digits", value: stats.digits },
    { label: "Spaces", value: stats.spaces },
    { label: "Special Characters", value: stats.special },
  ];

  return (
    <>
      <ToolInput label="Enter text to analyze" value={input} onChange={setInput} placeholder="Start typing to see character statistics..." />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">{item.value}</div>
            <div className="text-xs text-muted mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
