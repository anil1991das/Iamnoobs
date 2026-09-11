"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { rotatePdfPages } from "@/lib/tools/pdf-file-tools";

export default function PdfRotateClient() {
  const [file, setFile] = useState<File | null>(null);
  const [degrees, setDegrees] = useState<0 | 90 | 180 | 270>(90);
  const [processing, setProcessing] = useState(false);

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const buffer = await file.arrayBuffer();
      const result = await rotatePdfPages(buffer, degrees);
      const blob = new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = `rotated-${file.name}`; a.click();
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
          {([90, 180, 270] as const).map((d) => (
            <button key={d} onClick={() => setDegrees(d)} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${degrees === d ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{d}°</button>
          ))}
        </div>
      </div>
      <ActionButtons onClear={() => setFile(null)} onProcess={handleProcess} processLabel={processing ? "Rotating..." : "Rotate PDF"} disabled={!file || processing} />
    </>
  );
}
