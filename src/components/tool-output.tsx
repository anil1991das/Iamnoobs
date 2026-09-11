"use client";

import { useState } from "react";
import { copyToClipboard, downloadAsFile } from "@/lib/utils";

interface ToolOutputProps {
  label?: string;
  value: string;
  rows?: number;
  downloadFilename?: string;
  className?: string;
}

export default function ToolOutput({
  label,
  value,
  rows = 8,
  downloadFilename,
  className = "",
}: ToolOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (downloadFilename) {
      downloadAsFile(value, downloadFilename);
    }
  };

  return (
    <div className={`rounded-xl border border-card-border bg-card p-4 shadow-sm ${className}`}>
      <div className="mb-2 flex items-center justify-between">
        {label && (
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
        )}
        <div className="flex gap-2 ml-auto">
          <button
            onClick={handleCopy}
            disabled={!value}
            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-40"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          {downloadFilename && (
            <button
              onClick={handleDownload}
              disabled={!value}
              className="rounded-lg border border-card-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-40"
            >
              Download
            </button>
          )}
        </div>
      </div>

      <textarea
        value={value}
        readOnly
        rows={rows}
        className="w-full resize-y rounded-lg border border-card-border bg-muted p-3 font-mono text-sm text-foreground focus:outline-none"
      />
    </div>
  );
}
