"use client";

import { useState, useRef, useCallback } from "react";

export default function ImageColorPickerClient() {
  const [image, setImage] = useState<string | null>(null);
  const [color, setColor] = useState<{ hex: string; rgb: string } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      setImage(src);
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext("2d")!.drawImage(img, 0, 0);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    const ctx = canvas.getContext("2d")!;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = "#" + [pixel[0], pixel[1], pixel[2]].map((c) => c.toString(16).padStart(2, "0")).join("");
    setColor({ hex, rgb: `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})` });
  }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="block text-sm font-medium text-foreground mb-2">Upload an image</label>
        <input type="file" accept="image/*" onChange={handleFile} className="text-sm" />
      </div>
      {image && (
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm text-muted mb-2">Click on the image to pick a color</p>
          <canvas ref={canvasRef} onClick={handleClick} className="max-w-full cursor-crosshair rounded-lg" style={{ maxHeight: "500px" }} />
        </div>
      )}
      {color && (
        <div className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg border border-border" style={{ backgroundColor: color.hex }} />
          <div className="space-y-1">
            <p className="text-sm"><span className="text-muted">HEX:</span> <code className="font-mono text-primary">{color.hex}</code> <button onClick={() => navigator.clipboard.writeText(color.hex)} className="text-xs text-primary hover:underline ml-2">Copy</button></p>
            <p className="text-sm"><span className="text-muted">RGB:</span> <code className="font-mono">{color.rgb}</code> <button onClick={() => navigator.clipboard.writeText(color.rgb)} className="text-xs text-primary hover:underline ml-2">Copy</button></p>
          </div>
        </div>
      )}
    </div>
  );
}
