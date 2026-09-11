"use client";

import { useState } from "react";
import { compressPdf, formatBytes } from "@/lib/tools/pdf-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function PdfCompressorClient() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ data: Uint8Array; originalSize: number } | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleCompress = async () => {
    if (!file) return;
    setProcessing(true);
    setError("");
    try {
      const buffer = await file.arrayBuffer();
      const data = await compressPdf(buffer);
      setResult({ data, originalSize: file.size });
    } catch (e) {
      setError((e as Error).message);
    }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select PDF File</label>
        <input type="file" accept=".pdf" onChange={(e) => { setFile(e.target.files?.[0] || null); setResult(null); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
        {file && <p className="mt-1 text-xs text-muted">{file.name} ({formatBytes(file.size)})</p>}
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleCompress} disabled={!file || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Compressing..." : "Compress PDF"}</button>
        {result && <button onClick={() => downloadBlob(new Blob([result.data.buffer as ArrayBuffer], { type: "application/pdf" }), `compressed-${file?.name || "file.pdf"}`)} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download</button>}
      </div>

      {result && (
        <div className="grid gap-3 sm:grid-cols-3 rounded-xl border border-border bg-card p-4">
          <div><span className="text-xs text-muted">Original</span><p className="font-semibold text-foreground">{formatBytes(result.originalSize)}</p></div>
          <div><span className="text-xs text-muted">Compressed</span><p className="font-semibold text-foreground">{formatBytes(result.data.length)}</p></div>
          <div><span className="text-xs text-muted">Reduction</span><p className="font-semibold text-green-600">{Math.max(0, Math.round((1 - result.data.length / result.originalSize) * 100))}%</p></div>
        </div>
      )}
    </>
  );
}
