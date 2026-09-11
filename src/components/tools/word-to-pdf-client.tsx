"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { createPdf, formatBytes } from "@/lib/tools/pdf-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function WordToPdfClient() {
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(12);
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    if (!input.trim()) return;
    setProcessing(true);
    try {
      setResult(await createPdf(input, fontSize));
    } catch { /* ignore */ }
    setProcessing(false);
  };

  const handleDownload = () => {
    if (!result) return;
    downloadBlob(new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" }), "document.pdf");
  };

  return (
    <>
      <ToolInput label="Enter text to convert to PDF" value={input} onChange={setInput} placeholder="Type or paste your text here..." />

      <div className="flex items-end gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Font Size</label>
          <input type="number" value={fontSize} onChange={(e) => setFontSize(Math.max(8, Math.min(48, Number(e.target.value))))} min={8} max={48} className="w-20 rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!input.trim() || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Creating PDF..." : "Create PDF"}</button>
        {result && <button onClick={handleDownload} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download PDF ({formatBytes(result.length)})</button>}
        <ActionButtons onClear={() => { setInput(""); setResult(null); }} />
      </div>
    </>
  );
}
