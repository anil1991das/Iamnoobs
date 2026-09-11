"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { hexToRgb, rgbToHex, rgbToHsl } from "@/lib/tools/image-tools-extended";

export default function HexRgbConverterClient() {
  const [hex, setHex] = useState("#3b82f6");
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  const updateFromHex = (val: string) => {
    setHex(val);
    const rgb = hexToRgb(val);
    if (rgb) {
      setR(rgb.r); setG(rgb.g); setB(rgb.b);
      setHsl(rgbToHsl(rgb.r, rgb.g, rgb.b));
    }
  };

  const updateFromRgb = (nr: number, ng: number, nb: number) => {
    setR(nr); setG(ng); setB(nb);
    setHex(rgbToHex(nr, ng, nb));
    setHsl(rgbToHsl(nr, ng, nb));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-lg border border-border" style={{ backgroundColor: hex }} />
          <div className="flex-1 space-y-3">
            <div>
              <label className="text-sm font-medium text-foreground">HEX</label>
              <input type="text" value={hex} onChange={(e) => updateFromHex(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[{ label: "R", value: r, set: (v: number) => updateFromRgb(v, g, b) },
                { label: "G", value: g, set: (v: number) => updateFromRgb(r, v, b) },
                { label: "B", value: b, set: (v: number) => updateFromRgb(r, g, v) }].map((c) => (
                <div key={c.label}>
                  <label className="text-xs text-muted">{c.label}</label>
                  <input type="number" min="0" max="255" value={c.value} onChange={(e) => c.set(Number(e.target.value))} className="w-full rounded-lg border border-border bg-background px-2 py-1 text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-accent/50 p-3 text-center"><span className="text-xs text-muted">HSL</span><p className="font-mono text-sm">{hsl.h}°, {hsl.s}%, {hsl.l}%</p></div>
          <div className="rounded-lg bg-accent/50 p-3 text-center"><span className="text-xs text-muted">RGB</span><p className="font-mono text-sm">{r}, {g}, {b}</p></div>
          <div className="rounded-lg bg-accent/50 p-3 text-center"><span className="text-xs text-muted">HEX</span><p className="font-mono text-sm">{hex}</p></div>
        </div>
      </div>
      <ActionButtons onClear={() => updateFromHex("#000000")} />
    </>
  );
}
