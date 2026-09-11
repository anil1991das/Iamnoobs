"use client";
import { useState, useCallback } from "react";
import CopyButton from "@/components/copy-button";

interface Shadow {
  hOffset: number; vOffset: number; blur: number; spread: number;
  color: string; opacity: number; inset: boolean;
}

const defaultShadow: Shadow = { hOffset: 4, vOffset: 4, blur: 12, spread: 0, color: "#000000", opacity: 0.25, inset: false };

function hexToRgba(hex: string, opacity: number) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function shadowToCss(s: Shadow) {
  return `${s.inset ? "inset " : ""}${s.hOffset}px ${s.vOffset}px ${s.blur}px ${s.spread}px ${hexToRgba(s.color, s.opacity)}`;
}

export default function BoxShadowGeneratorClient() {
  const [shadows, setShadows] = useState<Shadow[]>([{ ...defaultShadow }]);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [borderRadius, setBorderRadius] = useState(8);

  const cssValue = shadows.map(shadowToCss).join(", ");
  const cssCode = `box-shadow: ${cssValue};\nborder-radius: ${borderRadius}px;`;

  const updateShadow = useCallback((idx: number, key: keyof Shadow, val: number | string | boolean) => {
    setShadows((prev) => prev.map((s, i) => (i === idx ? { ...s, [key]: val } : s)));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center rounded-xl border border-border p-12" style={{ backgroundColor: bgColor }}>
        <div className="h-40 w-40 rounded-lg transition-shadow duration-200" style={{ backgroundColor: boxColor, boxShadow: cssValue, borderRadius }} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <label className="space-y-1"><span className="text-sm text-muted">Background</span><input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-10 w-full cursor-pointer rounded-lg border border-border" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Box Color</span><input type="color" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} className="h-10 w-full cursor-pointer rounded-lg border border-border" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Border Radius</span><input type="range" min={0} max={100} value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))} className="w-full" /><span className="text-xs text-muted">{borderRadius}px</span></label>
      </div>

      {shadows.map((s, i) => (
        <div key={i} className="space-y-3 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Shadow {i + 1}</span>
            <div className="flex gap-2">
              <label className="flex items-center gap-1 text-xs"><input type="checkbox" checked={s.inset} onChange={(e) => updateShadow(i, "inset", e.target.checked)} /> Inset</label>
              {shadows.length > 1 && <button onClick={() => setShadows((p) => p.filter((_, j) => j !== i))} className="text-xs text-danger hover:underline">Remove</button>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {([["H-Offset", "hOffset", -50, 50], ["V-Offset", "vOffset", -50, 50], ["Blur", "blur", 0, 100], ["Spread", "spread", -50, 50]] as const).map(([label, key, min, max]) => (
              <label key={key} className="space-y-1"><span className="text-xs text-muted">{label}: {s[key]}px</span><input type="range" min={min} max={max} value={s[key]} onChange={(e) => updateShadow(i, key, Number(e.target.value))} className="w-full" /></label>
            ))}
            <label className="space-y-1"><span className="text-xs text-muted">Opacity: {Math.round(s.opacity * 100)}%</span><input type="range" min={0} max={100} value={Math.round(s.opacity * 100)} onChange={(e) => updateShadow(i, "opacity", Number(e.target.value) / 100)} className="w-full" /></label>
            <label className="space-y-1"><span className="text-xs text-muted">Color</span><input type="color" value={s.color} onChange={(e) => updateShadow(i, "color", e.target.value)} className="h-8 w-full cursor-pointer rounded border border-border" /></label>
          </div>
        </div>
      ))}

      <button onClick={() => setShadows((p) => [...p, { ...defaultShadow }])} className="rounded-lg bg-accent px-4 py-2 text-sm text-foreground hover:bg-accent/80">+ Add Shadow Layer</button>

      <div className="space-y-2">
        <label className="text-sm font-medium">Generated CSS</label>
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">{cssCode}</pre>
        <CopyButton text={cssCode} label="Copy CSS" />
      </div>
    </div>
  );
}
