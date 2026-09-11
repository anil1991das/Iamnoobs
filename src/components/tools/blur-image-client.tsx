"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { blurImage } from "@/lib/tools/image-tools-extended";

export default function BlurImageClient() {
  const [image, setImage] = useState<string | null>(null);
  const [radius, setRadius] = useState(5);
  const [result, setResult] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setImage(reader.result as string); setResult(null); };
    reader.readAsDataURL(file);
  };

  const handleBlur = async () => {
    if (!image) return;
    setResult(await blurImage(image, radius));
  };

  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a"); a.href = result; a.download = "blurred.png"; a.click();
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <input type="file" accept="image/*" onChange={handleFile} className="text-sm" />
        <div><label className="text-xs text-muted">Blur Radius: {radius}px</label>
          <input type="range" min="1" max="50" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full" /></div>
      </div>
      <ActionButtons onClear={() => { setImage(null); setResult(null); }} onProcess={handleBlur} processLabel="Apply Blur" disabled={!image} />
      {result && (
        <div className="space-y-3">
          <img src={result} alt="Blurred" className="max-h-80 rounded-xl border border-border" />
          <button onClick={handleDownload} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover">Download</button>
        </div>
      )}
    </>
  );
}
