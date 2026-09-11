"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function RandomDecisionWheelClient() {
  const [items, setItems] = useState<string[]>(["Option 1", "Option 2", "Option 3"]);
  const [input, setInput] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"];

  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || items.length === 0) return;
    const ctx = canvas.getContext("2d")!;
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;
    const arc = (2 * Math.PI) / items.length;
    ctx.clearRect(0, 0, size, size);
    items.forEach((item, i) => {
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, i * arc, (i + 1) * arc);
      ctx.fill();
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(i * arc + arc / 2);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.slice(0, 12), radius / 2, 5);
      ctx.restore();
    });
    // Arrow
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(size - 5, center - 10);
    ctx.lineTo(size - 5, center + 10);
    ctx.lineTo(size - 25, center);
    ctx.fill();
  }, [items]);

  useEffect(() => { drawWheel(); }, [drawWheel]);

  const spin = () => {
    if (items.length < 2 || spinning) return;
    setSpinning(true);
    setResult("");
    const spins = 5 + Math.random() * 5;
    const newRotation = rotation + spins * 360;
    setRotation(newRotation);
    setTimeout(() => {
      const normalizedAngle = newRotation % 360;
      const arc = 360 / items.length;
      const idx = Math.floor(((360 - normalizedAngle + 90) % 360) / arc) % items.length;
      setResult(items[idx] || items[0]);
      setSpinning(false);
    }, 3000);
  };

  const addItem = () => { if (input.trim()) { setItems([...items, input.trim()]); setInput(""); } };
  const removeItem = (i: number) => setItems(items.filter((_, j) => j !== i));

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="relative">
          <canvas ref={canvasRef} width={300} height={300} style={{ transform: `rotate(${rotation}deg)`, transition: spinning ? "transform 3s cubic-bezier(0.17,0.67,0.12,0.99)" : "none" }} className="rounded-full" />
        </div>
      </div>
      {result && <div className="text-center rounded-xl border border-primary bg-primary/10 p-4"><p className="text-sm text-muted">Winner:</p><p className="text-2xl font-bold text-primary">{result}</p></div>}
      <div className="flex justify-center"><button onClick={spin} disabled={spinning || items.length < 2} className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white disabled:opacity-50">{spinning ? "Spinning..." : "Spin!"}</button></div>
      <div className="rounded-xl border border-border bg-card p-4 space-y-2">
        <form onSubmit={(e) => { e.preventDefault(); addItem(); }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add option..." className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <button type="submit" className="rounded-lg bg-accent px-4 py-2 text-sm font-medium">Add</button>
        </form>
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white" style={{ backgroundColor: colors[i % colors.length] }}>
              {item} <button onClick={() => removeItem(i)} className="ml-1">✕</button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
