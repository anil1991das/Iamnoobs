"use client";
import { useState, useRef } from "react";
import { socialMediaSizes } from "@/lib/tools/css-design-tools";

export default function SocialImageResizerClient() {
  const [platform, setPlatform] = useState("Instagram");
  const [sizeIdx, setSizeIdx] = useState(0);
  const [image, setImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sizes = socialMediaSizes[platform];
  const selected = sizes[sizeIdx];

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const resize = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = selected.width;
    canvas.height = selected.height;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.onload = () => {
      const srcRatio = img.width / img.height;
      const dstRatio = selected.width / selected.height;
      let sx = 0, sy = 0, sw = img.width, sh = img.height;
      if (srcRatio > dstRatio) {
        sw = img.height * dstRatio;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width / dstRatio;
        sy = (img.height - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, selected.width, selected.height);
    };
    img.src = image;
  };

  const download = () => {
    if (!canvasRef.current) return;
    const a = document.createElement("a");
    a.href = canvasRef.current.toDataURL("image/png");
    a.download = `${platform.toLowerCase()}-${selected.label.toLowerCase().replace(/\s+/g, "-")}.png`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">Platform</span>
          <select value={platform} onChange={(e) => { setPlatform(e.target.value); setSizeIdx(0); }} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
            {Object.keys(socialMediaSizes).map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">Size</span>
          <select value={sizeIdx} onChange={(e) => setSizeIdx(Number(e.target.value))} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
            {sizes.map((s, i) => <option key={i} value={i}>{s.label} ({s.width}×{s.height})</option>)}
          </select>
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-sm font-medium">Upload Image</span>
        <input type="file" accept="image/*" onChange={handleFile} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      {image && (
        <div className="flex gap-2">
          <button onClick={resize} className="rounded-lg bg-primary px-6 py-2 text-sm text-white hover:bg-primary/90">Resize</button>
          <button onClick={download} className="rounded-lg bg-accent px-4 py-2 text-sm text-foreground hover:bg-accent/80">Download</button>
        </div>
      )}

      <div className="flex justify-center">
        <canvas ref={canvasRef} className="max-w-full rounded-xl border border-border" style={{ maxHeight: 400 }} />
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <p className="mb-2 text-sm font-medium">All {platform} Sizes</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {sizes.map((s, i) => (
            <div key={i} className="flex justify-between rounded-lg bg-background px-3 py-2">
              <span>{s.label}</span>
              <span className="font-mono text-muted">{s.width}×{s.height}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
