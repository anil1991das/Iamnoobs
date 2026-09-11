"use client";
import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import CopyButton from "@/components/copy-button";

const bases = [
  { label: "Binary (2)", base: 2 },
  { label: "Octal (8)", base: 8 },
  { label: "Decimal (10)", base: 10 },
  { label: "Hexadecimal (16)", base: 16 },
];

export default function NumberBaseConverterClient() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);

  const parsed = (() => {
    if (!input.trim()) return null;
    try {
      const n = parseInt(input, fromBase);
      if (isNaN(n)) return null;
      return n;
    } catch {
      return null;
    }
  })();

  const results = parsed !== null ? bases.map((b) => ({ ...b, value: parsed.toString(b.base).toUpperCase() })) : [];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">Input Number</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a number..." className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">From Base</span>
          <select value={fromBase} onChange={(e) => setFromBase(Number(e.target.value))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
            {bases.map((b) => <option key={b.base} value={b.base}>{b.label}</option>)}
          </select>
        </label>
      </div>

      {parsed !== null && (
        <div className="space-y-3">
          {results.map((r) => (
            <div key={r.base} className="flex items-center gap-4">
              <ToolOutput value={r.value} label={r.label} rows={1} />
              <CopyButton text={r.value} label="Copy" />
            </div>
          ))}
          {parsed >= 0 && parsed <= 1114111 && (
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm text-muted">ASCII / Unicode: <span className="font-mono text-foreground">{String.fromCodePoint(parsed)}</span> (U+{parsed.toString(16).toUpperCase().padStart(4, "0")})</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
