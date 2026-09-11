"use client";

import { useState, useRef } from "react";
import { compressImage, formatFileSize } from "@/lib/tools/image-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function ImageCompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState<number>(0);
  const [result, setResult] = useState<{ blob: Blob; originalSize: number } | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCompress = async () => {
    if (!file) return;
    setProcessing(true);
    setError("");
    try {
      const blob = await compressImage(file, quality, maxWidth || undefined);
      setResult({ blob, originalSize: file.size });
    } catch (e) {
      setError((e as Error).message);
    }
    setProcessing(false);
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Select Image</label>
          <input ref={inputRef} type="file" accept="image/*" onChange={(e) => { setFile(e.target.files?.[0] || null); setResult(null); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Quality: {quality}%</label>
            <input type="range" min={10} max={100} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-48" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Max Width (px, 0 = no limit)</label>
            <input type="number" value={maxWidth} onChange={(e) => setMaxWidth(Number(e.target.value))} min={0} className="w-32 rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
          </div>
        </div>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleCompress} disabled={!file || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Compressing..." : "Compress Image"}</button>
        {result && <button onClick={() => downloadBlob(result.blob, `compressed-${file?.name || "image"}`)} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download</button>}
      </div>

      {result && (
        <div className="grid gap-3 sm:grid-cols-3 rounded-xl border border-border bg-card p-4">
          <div><span className="text-xs text-muted">Original</span><p className="font-semibold text-foreground">{formatFileSize(result.originalSize)}</p></div>
          <div><span className="text-xs text-muted">Compressed</span><p className="font-semibold text-foreground">{formatFileSize(result.blob.size)}</p></div>
          <div><span className="text-xs text-muted">Saved</span><p className="font-semibold text-green-600">{Math.round((1 - result.blob.size / result.originalSize) * 100)}%</p></div>
        </div>
      )}
    </>
  );
}
