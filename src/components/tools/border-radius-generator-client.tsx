"use client";
import { useState } from "react";
import CopyButton from "@/components/copy-button";

export default function BorderRadiusGeneratorClient() {
  const [tl, setTl] = useState(16);
  const [tr, setTr] = useState(16);
  const [br, setBr] = useState(16);
  const [bl, setBl] = useState(16);
  const [linked, setLinked] = useState(true);
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("#6366f1");

  const setAll = (v: number) => { setTl(v); setTr(v); setBr(v); setBl(v); };
  const borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
  const css = `border-radius: ${tl === tr && tr === br && br === bl ? `${tl}px` : borderRadius};`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center rounded-xl border border-border bg-card p-12">
        <div style={{ width: size, height: size, backgroundColor: bgColor, borderRadius }} className="transition-all duration-200" />
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={linked} onChange={(e) => setLinked(e.target.checked)} /> Link corners</label>
        <label className="space-y-1"><span className="text-xs text-muted">Color</span><input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-8 w-16 cursor-pointer rounded border border-border" /></label>
        <label className="flex-1 space-y-1"><span className="text-xs text-muted">Size: {size}px</span><input type="range" min={50} max={300} value={size} onChange={(e) => setSize(Number(e.target.value))} className="w-full" /></label>
      </div>

      {linked ? (
        <label className="space-y-1"><span className="text-sm text-muted">All Corners: {tl}px</span><input type="range" min={0} max={150} value={tl} onChange={(e) => setAll(Number(e.target.value))} className="w-full" /></label>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <label className="space-y-1"><span className="text-sm text-muted">Top Left: {tl}px</span><input type="range" min={0} max={150} value={tl} onChange={(e) => setTl(Number(e.target.value))} className="w-full" /></label>
          <label className="space-y-1"><span className="text-sm text-muted">Top Right: {tr}px</span><input type="range" min={0} max={150} value={tr} onChange={(e) => setTr(Number(e.target.value))} className="w-full" /></label>
          <label className="space-y-1"><span className="text-sm text-muted">Bottom Left: {bl}px</span><input type="range" min={0} max={150} value={bl} onChange={(e) => setBl(Number(e.target.value))} className="w-full" /></label>
          <label className="space-y-1"><span className="text-sm text-muted">Bottom Right: {br}px</span><input type="range" min={0} max={150} value={br} onChange={(e) => setBr(Number(e.target.value))} className="w-full" /></label>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium">Generated CSS</label>
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">{css}</pre>
        <CopyButton text={css} label="Copy CSS" />
      </div>
    </div>
  );
}
