"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { cropImage } from "@/lib/tools/image-tools-extended";

export default function CropImageClient() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [dims, setDims] = useState({ x: 0, y: 0, w: 200, h: 200 });
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setImage(reader.result as string); setResult(null); };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!image) return;
    const img = new Image();
    img.onload = () => { setImgSize({ w: img.width, h: img.height }); setDims({ x: 0, y: 0, w: Math.min(200, img.width), h: Math.min(200, img.height) }); };
    img.src = image;
  }, [image]);

  const handleCrop = useCallback(async () => {
    if (!image) return;
    setResult(await cropImage(image, dims.x, dims.y, dims.w, dims.h));
  }, [image, dims]);

  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a"); a.href = result; a.download = "cropped.png"; a.click();
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6">
        <input type="file" accept="image/*" onChange={handleFile} className="text-sm" />
      </div>
      {image && (
        <>
          <div className="rounded-xl border border-border bg-card p-6 space-y-3">
            <img ref={imgRef} src={image} alt="Source" className="max-h-60 rounded-lg border border-border" />
            <p className="text-xs text-muted">Original: {imgSize.w}×{imgSize.h}px</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(["x", "y", "w", "h"] as const).map((k) => (
                <div key={k}><label className="text-xs text-muted">{k === "w" ? "Width" : k === "h" ? "Height" : k.toUpperCase()}</label>
                  <input type="number" min="0" max={k === "x" || k === "w" ? imgSize.w : imgSize.h} value={dims[k]} onChange={(e) => setDims({ ...dims, [k]: Number(e.target.value) })} className="w-full rounded-lg border border-border bg-background px-2 py-1 text-sm" /></div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleCrop} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover">Crop</button>
            {result && <button onClick={handleDownload} className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">Download</button>}
          </div>
          {result && <img src={result} alt="Cropped" className="max-h-60 rounded-xl border border-border" />}
        </>
      )}
    </div>
  );
}
