"use client";
import { useState, useMemo } from "react";
import { generateColorPalette } from "@/lib/tools/css-design-tools";
import CopyButton from "@/components/copy-button";

export default function ColorPaletteGeneratorClient() {
  const [baseColor, setBaseColor] = useState("#6366f1");
  const palettes = useMemo(() => generateColorPalette(baseColor), [baseColor]);

  const allCss = palettes.map((p) => `/* ${p.name} */\n${p.colors.map((c, i) => `--${p.name.toLowerCase().replace(/[^a-z]/g, "-")}-${i + 1}: ${c};`).join("\n")}`).join("\n\n");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <label className="space-y-1">
          <span className="text-sm font-medium">Base Color</span>
          <div className="flex items-center gap-2">
            <input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="h-10 w-16 cursor-pointer rounded-lg border border-border" />
            <input type="text" value={baseColor} onChange={(e) => /^#[0-9a-fA-F]{0,6}$/.test(e.target.value) ? setBaseColor(e.target.value) : null} className="w-28 rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono" />
          </div>
        </label>
      </div>

      <div className="space-y-6">
        {palettes.map((palette) => (
          <div key={palette.name} className="space-y-2">
            <h3 className="text-sm font-medium">{palette.name}</h3>
            <div className="flex gap-2">
              {palette.colors.map((color, i) => (
                <button key={i} onClick={() => navigator.clipboard?.writeText(color)} title={`Click to copy ${color}`} className="group flex-1 space-y-1">
                  <div className="h-16 rounded-xl transition-transform group-hover:scale-105" style={{ backgroundColor: color }} />
                  <p className="text-center font-mono text-xs text-muted">{color}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">CSS Variables</label>
        <pre className="max-h-60 overflow-auto rounded-xl border border-border bg-card p-4 text-sm">{allCss}</pre>
        <CopyButton text={allCss} label="Copy CSS Variables" />
      </div>
    </div>
  );
}
