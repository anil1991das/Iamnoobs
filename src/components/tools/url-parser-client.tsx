"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { parseUrl } from "@/lib/tools/url-parser";

export default function UrlParserClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState("");

  const handleParse = () => {
    setError("");
    try {
      const parsed = parseUrl(input);
      setResult(parsed as unknown as Record<string, string>);
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <>
      <ToolInput label="URL to parse" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="https://example.com:8080/path?query=value#hash" />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setInput(""); setResult(null); setError(""); }} onProcess={handleParse} processLabel="Parse URL" disabled={!input.trim()} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Parsed Components</h3>
          <div className="grid gap-2">
            {Object.entries(result).map(([key, value]) => (
              <div key={key} className="flex items-start gap-3 rounded-lg bg-accent/50 p-3">
                <span className="min-w-[120px] text-sm font-medium text-muted">{key}</span>
                <span className="text-sm text-foreground break-all">{typeof value === "object" ? JSON.stringify(value, null, 2) : String(value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
