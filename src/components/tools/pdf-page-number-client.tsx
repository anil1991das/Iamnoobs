"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { addPageNumbers } from "@/lib/tools/pdf-file-tools";

export default function PdfPageNumberClient() {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<"bottom-center" | "bottom-right">("bottom-center");
  const [processing, setProcessing] = useState(false);

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const buffer = await file.arrayBuffer();
      const result = await addPageNumbers(buffer, position);
      const blob = new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = `numbered-${file.name}`; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Error: " + (e as Error).message);
    } finally { setProcessing(false); }
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-foreground">Upload PDF</label>
        <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
        <div className="flex gap-2">
          <button onClick={() => setPosition("bottom-center")} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${position === "bottom-center" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Bottom Center</button>
          <button onClick={() => setPosition("bottom-right")} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${position === "bottom-right" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Bottom Right</button>
        </div>
      </div>
      <ActionButtons onClear={() => setFile(null)} onProcess={handleProcess} processLabel={processing ? "Processing..." : "Add Page Numbers"} disabled={!file || processing} />
    </>
  );
}
