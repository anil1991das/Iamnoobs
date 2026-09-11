"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { setPdfMetadata } from "@/lib/tools/pdf-file-tools";

export default function PdfProtectClient() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const buffer = await file.arrayBuffer();
      const result = await setPdfMetadata(buffer, { title, author, subject });
      const blob = new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = `protected-${file.name}`; a.click();
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
        <div className="space-y-2">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Document Title" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
        </div>
        <p className="text-xs text-muted">Sets PDF metadata (title, author, subject). For password protection, use dedicated PDF software.</p>
      </div>
      <ActionButtons onClear={() => { setFile(null); setTitle(""); setAuthor(""); setSubject(""); }} onProcess={handleProcess} processLabel={processing ? "Processing..." : "Set Metadata"} disabled={!file || processing} />
    </>
  );
}
