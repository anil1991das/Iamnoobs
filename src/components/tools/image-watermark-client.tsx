"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { addWatermark } from "@/lib/tools/image-tools-extended";

export default function ImageWatermarkClient() {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("WATERMARK");
  const [opacity, setOpacity] = useState(0.3);
  const [fontSize, setFontSize] = useState(24);
  const [result, setResult] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setImage(reader.result as string); setResult(null); };
    reader.readAsDataURL(file);
  };

  const handleApply = async () => {
    if (!image) return;
    const output = await addWatermark(image, text, opacity, fontSize);
    setResult(output);
  };

  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a"); a.href = result; a.download = "watermarked.png"; a.click();
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <input type="file" accept="image/*" onChange={handleFile} className="text-sm" />
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-xs text-muted">Watermark Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Font Size: {fontSize}px</label>
            <input type="range" min="10" max="80" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full" /></div>
        </div>
        <div><label className="text-xs text-muted">Opacity: {opacity}</label>
          <input type="range" min="0.1" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" /></div>
      </div>
      <ActionButtons onClear={() => { setImage(null); setResult(null); }} onProcess={handleApply} processLabel="Apply Watermark" disabled={!image || !text} />
      {result && (
        <div className="space-y-3">
          <img src={result} alt="Watermarked" className="max-h-80 rounded-xl border border-border" />
          <button onClick={handleDownload} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover">Download</button>
        </div>
      )}
    </>
  );
}
