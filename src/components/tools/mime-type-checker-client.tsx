"use client";

import { useState } from "react";
import { getMimeType, mimeTypes } from "@/lib/tools/pdf-file-tools";

export default function MimeTypeCheckerClient() {
  const [search, setSearch] = useState("");

  const result = search.trim() ? getMimeType(search) : "";
  const allTypes = Object.entries(mimeTypes).filter(([ext, mime]) =>
    ext.includes(search.toLowerCase()) || mime.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">MIME Type Checker</h3>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter file extension (e.g., .pdf) or search..." className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
      {search && result && (
        <div className="rounded-xl bg-accent/50 p-4">
          <span className="text-sm text-muted">MIME Type: </span>
          <code className="text-sm font-mono text-primary">{result}</code>
        </div>
      )}
      <div className="space-y-1 max-h-[400px] overflow-y-auto">
        {allTypes.map(([ext, mime]) => (
          <div key={ext} className="flex items-center gap-3 rounded-lg bg-accent/30 p-2">
            <code className="min-w-[60px] text-sm font-medium text-primary">{ext}</code>
            <span className="text-sm text-muted font-mono">{mime}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
