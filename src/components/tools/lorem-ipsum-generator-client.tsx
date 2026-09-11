"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import { generateLoremIpsum, generateWords, generateSentences } from "@/lib/tools/lorem-ipsum";

export default function LoremIpsumGeneratorClient() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "words" | "sentences">("paragraphs");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    switch (type) {
      case "paragraphs": setOutput(generateLoremIpsum(count)); break;
      case "words": setOutput(generateWords(count)); break;
      case "sentences": setOutput(generateSentences(count)); break;
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Count</label>
          <input type="number" value={count} onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))} min={1} max={100} className="w-24 rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div className="flex gap-2">
          {(["paragraphs", "sentences", "words"] as const).map((t) => (
            <button key={t} onClick={() => setType(t)} className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${type === t ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={handleGenerate} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Generate</button>
      </div>
      <ToolOutput label="Generated Text" value={output} downloadFilename="lorem-ipsum.txt" />
    </>
  );
}
