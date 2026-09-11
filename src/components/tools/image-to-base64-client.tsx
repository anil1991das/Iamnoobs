"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import { imageToBase64 } from "@/lib/tools/image-utils";
import { formatFileSize } from "@/lib/tools/image-utils";

export default function ImageToBase64Client() {
  const [file, setFile] = useState<File | null>(null);
  const [output, setOutput] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      setOutput(await imageToBase64(file));
    } catch { /* ignore */ }
    setProcessing(false);
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Select Image</label>
        <input type="file" accept="image/*" onChange={(e) => { setFile(e.target.files?.[0] || null); setOutput(""); }} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-3 file:py-1 file:text-sm file:font-medium file:text-white" />
        {file && <p className="mt-1 text-xs text-muted">{file.name} ({formatFileSize(file.size)})</p>}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!file || processing} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{processing ? "Converting..." : "Convert to Base64"}</button>
      </div>

      <ToolOutput label="Base64 Output" value={output} downloadFilename="image-base64.txt" />
      {output && <p className="text-xs text-muted">Base64 string length: {output.length.toLocaleString()} characters</p>}
    </>
  );
}
