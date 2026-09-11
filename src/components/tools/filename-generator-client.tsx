"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateFilename } from "@/lib/tools/pdf-file-tools";

export default function FilenameGeneratorClient() {
  const [text, setText] = useState("");
  const [extension, setExtension] = useState("");
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(5);

  const handleGenerate = () => {
    const names = Array.from({ length: count }, () => generateFilename(text || "file", extension));
    setOutput(names.join("\n"));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-3">
        <div><label className="text-sm font-medium text-foreground">Base text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="my document title" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-xs text-muted">Extension</label>
            <input type="text" value={extension} onChange={(e) => setExtension(e.target.value)} placeholder=".pdf" className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Count: {count}</label>
            <input type="range" min="1" max="20" value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full" /></div>
        </div>
      </div>
      <ActionButtons onClear={() => { setText(""); setOutput(""); }} onProcess={handleGenerate} processLabel="Generate Filenames" />
      <ToolOutput label="Generated Filenames" value={output} downloadFilename="filenames.txt" />
    </>
  );
}
