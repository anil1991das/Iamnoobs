"use client";
import { useState } from "react";
import { caesarCipher } from "@/lib/tools/css-design-tools";
import ToolOutput from "@/components/tool-output";
import CopyButton from "@/components/copy-button";

export default function CaesarCipherClient() {
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(3);

  const output = input ? caesarCipher(input, shift, mode === "decrypt") : "";

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button onClick={() => setMode("encrypt")} className={`rounded-lg px-4 py-2 text-sm ${mode === "encrypt" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Encrypt</button>
        <button onClick={() => setMode("decrypt")} className={`rounded-lg px-4 py-2 text-sm ${mode === "decrypt" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Decrypt</button>
      </div>

      <label className="space-y-1">
        <span className="text-sm font-medium">Input Text</span>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={4} placeholder="Enter text..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <label className="space-y-1">
        <span className="text-sm text-muted">Shift: {shift}</span>
        <input type="range" min={1} max={25} value={shift} onChange={(e) => setShift(Number(e.target.value))} className="w-full" />
      </label>

      <ToolOutput value={output} label="Result" rows={4} />
      <CopyButton text={output} label="Copy Result" />

      {input && (
        <div className="space-y-2">
          <label className="text-sm font-medium">All Shifts</label>
          <div className="max-h-60 overflow-auto rounded-xl border border-border bg-card p-4">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i} className="flex gap-2 text-xs font-mono py-0.5">
                <span className="w-8 text-muted">+{i + 1}:</span>
                <span>{caesarCipher(input, i + 1, mode === "decrypt")}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
