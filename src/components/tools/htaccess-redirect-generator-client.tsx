"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateHtaccessRedirect, generateHtaccessRewrite } from "@/lib/tools/seo-tools";

export default function HtaccessRedirectGeneratorClient() {
  const [mode, setMode] = useState<"redirect" | "rewrite">("redirect");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState<"301" | "302">("301");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    if (mode === "redirect") setOutput(generateHtaccessRedirect(from, to, type));
    else setOutput(generateHtaccessRewrite(from, to));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("redirect")} className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "redirect" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Redirect</button>
          <button onClick={() => setMode("rewrite")} className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "rewrite" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Rewrite</button>
        </div>
        {mode === "redirect" && (
          <div className="flex gap-2">
            <button onClick={() => setType("301")} className={`rounded-lg px-3 py-1.5 text-xs ${type === "301" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>301 (Permanent)</button>
            <button onClick={() => setType("302")} className={`rounded-lg px-3 py-1.5 text-xs ${type === "302" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>302 (Temporary)</button>
          </div>
        )}
        <div><label className="text-sm font-medium text-foreground">From Path</label>
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="/old-page" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">To URL/Path</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="/new-page or https://example.com/new" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
      </div>
      <ActionButtons onClear={() => setOutput("")} onProcess={handleGenerate} processLabel="Generate .htaccess" disabled={!from || !to} />
      {output && <ToolOutput value={output} />}
    </>
  );
}
