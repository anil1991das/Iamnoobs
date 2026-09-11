"use client";

import { useState } from "react";
import { generateFavicon } from "@/lib/tools/image-tools-extended";

export default function FaviconGeneratorClient() {
  const [text, setText] = useState("AB");
  const [bg, setBg] = useState("#3b82f6");
  const [fg, setFg] = useState("#ffffff");
  const [size, setSize] = useState(64);
  const [preview, setPreview] = useState("");

  const handleGenerate = () => setPreview(generateFavicon(text, bg, fg, size));

  const handleDownload = () => {
    if (!preview) return;
    const a = document.createElement("a");
    a.href = preview;
    a.download = "favicon.png";
    a.click();
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Favicon Generator</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div><label className="text-xs text-muted">Text (1-2 chars)</label>
          <input type="text" maxLength={2} value={text} onChange={(e) => setText(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs text-muted">Background</label>
          <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
        <div><label className="text-xs text-muted">Text Color</label>
          <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="w-full h-10 rounded cursor-pointer" /></div>
        <div><label className="text-xs text-muted">Size: {size}px</label>
          <input type="range" min="16" max="256" step="16" value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" /></div>
      </div>
      <div className="flex gap-3">
        <button onClick={handleGenerate} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover">Generate</button>
        {preview && <button onClick={handleDownload} className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">Download</button>}
      </div>
      {preview && (
        <div className="flex items-center gap-4">
          <img src={preview} alt="Favicon preview" className="border border-border rounded" style={{ width: size, height: size }} />
          <span className="text-sm text-muted">{size}×{size}px</span>
        </div>
      )}
    </div>
  );
}
