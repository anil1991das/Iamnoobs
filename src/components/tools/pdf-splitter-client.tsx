"use client";

import { useState } from "react";
import { splitPdf, getPdfPageCount, formatBytes } from "@/lib/tools/pdf-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function PdfSplitterClient() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [rangeText, setRangeText] = useState("");
  const [results, setResults] = useState<Uint8Array[]>([]);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (f: File | null) => {
    setFile(f);
    setResults([]);
    setError("");
    if (f) {
      try {
        const buffer = await f.arrayBuffer();
        setPageCount(await getPdfPageCount(buffer));
      } catch {
        setPageCount(0);
      }
    }
  };

  const handleSplit = async () => {
    if (!file) return;
    setProcessing(true);
    setError("");
    try {
      const ranges = parseRanges(rangeText, pageCount);
      if (ranges.length === 0) throw new Error("Enter valid page ranges (e.g., 1-3, 5-7)");
      const buffer = await file.arrayBuffer();
      setResults(await splitPdf(buffer, ranges));
    } catch (e) {
      setError((e as Error).message);
    }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select PDF File</label>
        <input type="file" accept=".pdf" onChange={(e) => handleFileChange(e.target.files?.[0] || null)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
        {pageCount > 0 && <p className="mt-1 text-xs text-muted">Total pages: {pageCount}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Page Ranges</label>
        <input type="text" value={rangeText} onChange={(e) => setRangeText(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g., 1-3, 5-7, 10-10" />
        <p className="mt-1 text-xs text-muted">Separate ranges with commas. Each range creates a separate PDF.</p>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleSplit} disabled={!file || !rangeText.trim() || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Splitting..." : "Split PDF"}</button>
      </div>

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((data, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
              <span className="text-sm text-foreground">Part {i + 1} ({formatBytes(data.length)})</span>
              <button onClick={() => downloadBlob(new Blob([data.buffer as ArrayBuffer], { type: "application/pdf" }), `split-part-${i + 1}.pdf`)} className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white hover:bg-primary-hover">Download</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function parseRanges(text: string, max: number): [number, number][] {
  return text.split(",").map((s) => s.trim()).filter(Boolean).map((s) => {
    const parts = s.split("-").map((p) => parseInt(p.trim()));
    const start = parts[0];
    const end = parts.length > 1 ? parts[1] : start;
    if (isNaN(start) || isNaN(end) || start < 1 || end > max || start > end) {
      throw new Error(`Invalid range: ${s} (pages: 1-${max})`);
    }
    return [start, end] as [number, number];
  });
}
