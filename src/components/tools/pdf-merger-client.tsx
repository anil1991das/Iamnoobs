"use client";

import { useState } from "react";
import { mergePdfs, formatBytes } from "@/lib/tools/pdf-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function PdfMergerClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleMerge = async () => {
    if (files.length < 2) return;
    setProcessing(true);
    setError("");
    try {
      const buffers = await Promise.all(files.map((f) => f.arrayBuffer()));
      setResult(await mergePdfs(buffers));
    } catch (e) {
      setError((e as Error).message);
    }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select PDF Files (2 or more)</label>
        <input type="file" accept=".pdf" multiple onChange={(e) => { setFiles(Array.from(e.target.files || [])); setResult(null); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
      </div>

      {files.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-3 text-sm">
          <p className="mb-2 font-medium text-foreground">{files.length} file(s) selected:</p>
          {files.map((f, i) => (
            <p key={i} className="text-xs text-muted">{f.name} ({formatBytes(f.size)})</p>
          ))}
        </div>
      )}

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleMerge} disabled={files.length < 2 || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Merging..." : "Merge PDFs"}</button>
        {result && <button onClick={() => downloadBlob(new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" }), "merged.pdf")} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download Merged PDF ({formatBytes(result.length)})</button>}
      </div>
    </>
  );
}
