"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { base64ToImageBlob } from "@/lib/tools/image-utils";
import { downloadBlob } from "@/lib/utils/download";

export default function Base64ToImageClient() {
  const [input, setInput] = useState("");
  const [preview, setPreview] = useState("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      const b = base64ToImageBlob(input);
      setBlob(b);
      setPreview(URL.createObjectURL(b));
    } catch {
      setError("Invalid Base64 image data");
      setPreview("");
      setBlob(null);
    }
  };

  return (
    <>
      <ToolInput label="Paste Base64 image string" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="data:image/png;base64,iVBOR..." />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Convert to Image</button>
        {blob && <button onClick={() => downloadBlob(blob, "decoded-image.png")} className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent">Download Image</button>}
        <ActionButtons onClear={() => { setInput(""); setPreview(""); setBlob(null); setError(""); }} />
      </div>

      {preview && (
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-2 text-sm font-medium text-foreground">Preview:</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="Decoded" className="max-h-96 max-w-full rounded-lg" />
        </div>
      )}
    </>
  );
}
