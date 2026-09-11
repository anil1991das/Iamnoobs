"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import CopyButton from "@/components/copy-button";

export default function QrCodeGeneratorClient() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(async () => {
    if (!text.trim()) { setDataUrl(""); return; }
    try {
      const QRCode = (await import("qrcode")).default;
      const canvas = canvasRef.current;
      if (!canvas) return;
      await QRCode.toCanvas(canvas, text, { width: size, color: { dark: fgColor, light: bgColor }, margin: 2 });
      setDataUrl(canvas.toDataURL("image/png"));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  }, [text, size, fgColor, bgColor]);

  useEffect(() => { generate(); }, [generate]);

  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Text or URL</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text or URL to generate QR code..." rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <label className="space-y-1"><span className="text-sm text-muted">Size: {size}px</span><input type="range" min={128} max={512} step={32} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Foreground</span><input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="h-10 w-full cursor-pointer rounded-lg border border-border" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Background</span><input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-10 w-full cursor-pointer rounded-lg border border-border" /></label>
      </div>

      {error && <p className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</p>}

      <div className="flex flex-col items-center gap-4">
        <canvas ref={canvasRef} className="rounded-xl border border-border" />
        {dataUrl && (
          <div className="flex gap-2">
            <button onClick={download} className="rounded-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90">Download PNG</button>
            <CopyButton text={text} label="Copy Text" />
          </div>
        )}
      </div>
    </div>
  );
}
