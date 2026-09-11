"use client";

import { useState } from "react";
import { extractPdfText, formatBytes } from "@/lib/tools/pdf-utils";
import ToolOutput from "@/components/tool-output";

export default function PdfToWordClient() {
  const [file, setFile] = useState<File | null>(null);
  const [output, setOutput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!file) return;
    setProcessing(true);
    setError("");
    try {
      const buffer = await file.arrayBuffer();
      const text = await extractPdfText(buffer);
      setOutput(text);
    } catch (e) {
      setError((e as Error).message);
    }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select PDF File</label>
        <input type="file" accept=".pdf" onChange={(e) => { setFile(e.target.files?.[0] || null); setOutput(""); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
        {file && <p className="mt-1 text-xs text-muted">{file.name} ({formatBytes(file.size)})</p>}
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!file || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Extracting..." : "Extract PDF Info"}</button>
      </div>

      <p className="text-xs text-muted">Extracts page information from PDF. Full text extraction requires server-side processing.</p>
      <ToolOutput label="PDF Information" value={output} downloadFilename="pdf-info.txt" />
    </>
  );
}
