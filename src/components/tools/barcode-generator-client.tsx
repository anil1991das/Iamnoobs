"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const CODE128_CHARS = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
const CODE128_PATTERNS = [
  "11011001100","11001101100","11001100110","10010011000","10010001100","10001001100","10011001000","10011000100","10001100100",
  "11001001000","11001000100","11000100100","10110011100","10011011100","10011001110","10111001100","10011101100","10011100110",
  "11001110010","11001011100","11001001110","11011100100","11001110100","11100101100","11100100110","11101100100","11100110100",
  "11100110010","11011011000","11011000110","11000110110","10100011000","10001011000","10001000110","10110001000","10001101000",
  "10001100010","11010001000","11000101000","11000100010","10110111000","10110001110","10001101110","10111011000","10111000110",
  "10001110110","11101110110","11010001110","11000101110","11011101000","11011100010","11011101110","11101011000","11101000110",
  "11100010110","11101101000","11101100010","11100011010","11101111010","11001000010","11110001010","10100110000","10100001100",
  "10010110000","10010000110","10000101100","10000100110","10110010000","10110000100","10011010000","10011000010","10000110100",
  "10000110010","11000010010","11001010000","11110111010","11000010100","10001111010","10100111100","10010111100","10010011110",
  "10111100100","10011110100","10011110010","11110100100","11110010100","11110010010","11011011110","11011110110","11110110110",
  "10101111000","10100011110","10001011110","10111101000","10111100010","11110101000","11110100010","10111011110","10111101110","11101011110","11110101110","11010000100","11010010000","11010011100","1100011101011"
];

function encode128B(text: string): string {
  let encoded = CODE128_PATTERNS[104]; // Start B
  let checksum = 104;
  for (let i = 0; i < text.length; i++) {
    const idx = CODE128_CHARS.indexOf(text[i]);
    if (idx === -1) continue;
    encoded += CODE128_PATTERNS[idx];
    checksum += idx * (i + 1);
  }
  encoded += CODE128_PATTERNS[checksum % 103];
  encoded += CODE128_PATTERNS[106]; // Stop
  return encoded;
}

export default function BarcodeGeneratorClient() {
  const [text, setText] = useState("Hello123");
  const [barWidth, setBarWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !text.trim()) return;
    const bits = encode128B(text);
    const totalWidth = bits.length * barWidth + 20;
    canvas.width = totalWidth;
    canvas.height = height + 30;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    for (let i = 0; i < bits.length; i++) {
      if (bits[i] === "1") ctx.fillRect(10 + i * barWidth, 5, barWidth, height);
    }
    ctx.font = "12px monospace";
    ctx.textAlign = "center";
    ctx.fillText(text, totalWidth / 2, height + 22);
  }, [text, barWidth, height]);

  useEffect(() => { draw(); }, [draw]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "barcode.png";
    a.click();
  };

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Text (ASCII characters)</span>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text to encode..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label className="space-y-1"><span className="text-sm text-muted">Bar Width: {barWidth}px</span><input type="range" min={1} max={4} value={barWidth} onChange={(e) => setBarWidth(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Height: {height}px</span><input type="range" min={50} max={200} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full" /></label>
      </div>

      <div className="flex flex-col items-center gap-4">
        <canvas ref={canvasRef} className="rounded-xl border border-border" />
        <button onClick={download} className="rounded-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90">Download PNG</button>
      </div>
    </div>
  );
}
