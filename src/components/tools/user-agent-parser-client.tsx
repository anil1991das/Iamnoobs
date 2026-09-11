"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { parseUserAgent } from "@/lib/tools/user-agent-parser";

export default function UserAgentParserClient() {
  const [input, setInput] = useState(typeof navigator !== "undefined" ? navigator.userAgent : "");
  const [result, setResult] = useState<Record<string, string> | null>(null);

  const handleParse = () => {
    const parsed = parseUserAgent(input);
    setResult(parsed as unknown as Record<string, string>);
  };

  return (
    <>
      <ToolInput label="User Agent String" value={input} onChange={setInput} placeholder="Mozilla/5.0 (Windows NT 10.0; Win64; x64)..." />
      <ActionButtons onClear={() => { setInput(""); setResult(null); }} onProcess={handleParse} processLabel="Parse User Agent" disabled={!input.trim()} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Parsed Result</h3>
          <div className="grid gap-2">
            {Object.entries(result).map(([key, value]) => (
              <div key={key} className="flex items-start gap-3 rounded-lg bg-accent/50 p-3">
                <span className="min-w-[120px] text-sm font-medium text-muted capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                <span className="text-sm text-foreground">{String(value) || "Unknown"}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
