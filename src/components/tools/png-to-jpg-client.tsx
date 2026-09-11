"use client";

import { useState } from "react";
import { convertImage, formatFileSize } from "@/lib/tools/image-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function PngToJpgClient() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<Blob | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      setResult(await convertImage(file, "image/jpeg"));
    } catch { /* ignore */ }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select PNG Image</label>
        <input type="file" accept="image/png" onChange={(e) => { setFile(e.target.files?.[0] || null); setResult(null); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!file || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Converting..." : "Convert to JPG"}</button>
        {result && <button onClick={() => downloadBlob(result, (file?.name || "image").replace(/\.\w+$/, ".jpg"))} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download JPG</button>}
      </div>

      {result && (
        <div className="rounded-xl border border-border bg-card p-4 text-sm">
          <span className="text-muted">Output size: </span>
          <span className="font-semibold text-foreground">{formatFileSize(result.size)}</span>
        </div>
      )}
    </>
  );
}
