"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { textToPdf } from "@/lib/tools/pdf-file-tools";

export default function TextToPdfClient() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    setProcessing(true);
    try {
      const result = await textToPdf(text, title);
      const blob = new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = `${title || "document"}.pdf`; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Error: " + (e as Error).message);
    } finally { setProcessing(false); }
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="block text-sm font-medium text-foreground mb-1">Document Title (optional)</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="My Document" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
      </div>
      <ToolInput label="Text content" value={text} onChange={setText} placeholder="Enter or paste your text here..." />
      <ActionButtons onClear={() => { setText(""); setTitle(""); }} onProcess={handleConvert} processLabel={processing ? "Converting..." : "Convert to PDF"} disabled={!text.trim() || processing} />
    </>
  );
}
