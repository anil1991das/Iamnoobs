"use client";

import { useState } from "react";
import { resizeImage, formatFileSize } from "@/lib/tools/image-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function ImageResizerClient() {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [maintainAspect, setMaintainAspect] = useState(true);
  const [result, setResult] = useState<Blob | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleResize = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      setResult(await resizeImage(file, width, height, maintainAspect));
    } catch { /* ignore */ }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select Image</label>
        <input type="file" accept="image/*" onChange={(e) => { setFile(e.target.files?.[0] || null); setResult(null); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Width (px)</label>
          <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} min={1} className="w-28 rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Height (px)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} min={1} className="w-28 rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" checked={maintainAspect} onChange={(e) => setMaintainAspect(e.target.checked)} className="rounded" />
          Maintain aspect ratio
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleResize} disabled={!file || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Resizing..." : "Resize Image"}</button>
        {result && <button onClick={() => downloadBlob(result, `resized-${file?.name || "image"}`)} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download</button>}
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
