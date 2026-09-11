"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateSecureToken } from "@/lib/tools/security-tools";

export default function SecureTokenGeneratorClient() {
  const [length, setLength] = useState(64);
  const [format, setFormat] = useState<"hex" | "base64" | "alphanumeric">("hex");
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(1);

  const handleGenerate = () => {
    const tokens = Array.from({ length: count }, () => generateSecureToken(length, format));
    setOutput(tokens.join("\n"));
  };

  const formats = [
    { key: "hex" as const, label: "Hex" },
    { key: "base64" as const, label: "Base64" },
    { key: "alphanumeric" as const, label: "Alphanumeric" },
  ];

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Length: {length}</label>
          <input type="range" min="8" max="256" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Count: {count}</label>
          <input type="range" min="1" max="10" value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {formats.map((f) => (
            <button key={f.key} onClick={() => setFormat(f.key)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${format === f.key ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{f.label}</button>
          ))}
        </div>
      </div>
      <ActionButtons onClear={() => setOutput("")} onProcess={handleGenerate} processLabel="Generate Token(s)" />
      <ToolOutput label="Secure Token(s)" value={output} downloadFilename="tokens.txt" />
    </>
  );
}
