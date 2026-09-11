"use client";

import { useState } from "react";
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from "@/lib/tools/image-tools-extended";

export default function ColorConverterClient() {
  const [hex, setHex] = useState("#3b82f6");
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);
  const [h, setH] = useState(217);
  const [s, setS] = useState(91);
  const [l, setL] = useState(60);

  const updateFromHex = (val: string) => {
    setHex(val);
    const rgb = hexToRgb(val);
    if (rgb) { setR(rgb.r); setG(rgb.g); setB(rgb.b); const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b); setH(hsl.h); setS(hsl.s); setL(hsl.l); }
  };

  const updateFromRgb = (nr: number, ng: number, nb: number) => {
    setR(nr); setG(ng); setB(nb);
    setHex(rgbToHex(nr, ng, nb));
    const hsl = rgbToHsl(nr, ng, nb);
    setH(hsl.h); setS(hsl.s); setL(hsl.l);
  };

  const updateFromHsl = (nh: number, ns: number, nl: number) => {
    setH(nh); setS(ns); setL(nl);
    const rgb = hslToRgb(nh, ns, nl);
    setR(rgb.r); setG(rgb.g); setB(rgb.b);
    setHex(rgbToHex(rgb.r, rgb.g, rgb.b));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-[120px_1fr] gap-4">
        <div className="rounded-xl border border-border" style={{ backgroundColor: hex, minHeight: 120 }} />
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            <label className="text-sm font-semibold text-foreground">HEX</label>
            <div className="flex gap-2">
              <input type="color" value={hex} onChange={(e) => updateFromHex(e.target.value)} className="h-10 w-10 rounded cursor-pointer" />
              <input type="text" value={hex} onChange={(e) => updateFromHex(e.target.value)} className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono" />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            <label className="text-sm font-semibold text-foreground">RGB</label>
            <div className="grid grid-cols-3 gap-2">
              {[{ label: "R", value: r, set: (v: number) => updateFromRgb(v, g, b), max: 255 },
                { label: "G", value: g, set: (v: number) => updateFromRgb(r, v, b), max: 255 },
                { label: "B", value: b, set: (v: number) => updateFromRgb(r, g, v), max: 255 }].map((c) => (
                <div key={c.label}><label className="text-xs text-muted">{c.label}</label>
                  <input type="number" value={c.value} min={0} max={c.max} onChange={(e) => c.set(Number(e.target.value))} className="w-full rounded-lg border border-border bg-background px-2 py-2 text-sm text-center" /></div>
              ))}
            </div>
            <p className="text-xs font-mono text-muted">rgb({r}, {g}, {b})</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            <label className="text-sm font-semibold text-foreground">HSL</label>
            <div className="grid grid-cols-3 gap-2">
              {[{ label: "H", value: h, set: (v: number) => updateFromHsl(v, s, l), max: 360 },
                { label: "S", value: s, set: (v: number) => updateFromHsl(h, v, l), max: 100 },
                { label: "L", value: l, set: (v: number) => updateFromHsl(h, s, v), max: 100 }].map((c) => (
                <div key={c.label}><label className="text-xs text-muted">{c.label}</label>
                  <input type="number" value={c.value} min={0} max={c.max} onChange={(e) => c.set(Number(e.target.value))} className="w-full rounded-lg border border-border bg-background px-2 py-2 text-sm text-center" /></div>
              ))}
            </div>
            <p className="text-xs font-mono text-muted">hsl({h}, {s}%, {l}%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
