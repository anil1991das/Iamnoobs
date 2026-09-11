"use client";
import { useState } from "react";
import CopyButton from "@/components/copy-button";

const alignItems = ["stretch", "flex-start", "flex-end", "center", "baseline"];
const justifyContent = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
const flexDirections = ["row", "row-reverse", "column", "column-reverse"];
const flexWraps = ["nowrap", "wrap", "wrap-reverse"];

export default function FlexboxGeneratorClient() {
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [gap, setGap] = useState(10);
  const [items, setItems] = useState(5);

  const css = `display: flex;\nflex-direction: ${direction};\nflex-wrap: ${wrap};\njustify-content: ${justify};\nalign-items: ${align};\ngap: ${gap}px;`;

  const style: React.CSSProperties = { display: "flex", flexDirection: direction as "row", flexWrap: wrap as "nowrap", justifyContent: justify, alignItems: align, gap };

  return (
    <div className="space-y-6">
      <div className="min-h-[200px] rounded-xl border border-border bg-card p-4" style={style}>
        {Array.from({ length: items }, (_, i) => (
          <div key={i} className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">{i + 1}</div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <label className="space-y-1"><span className="text-sm text-muted">Direction</span><select value={direction} onChange={(e) => setDirection(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">{flexDirections.map((d) => <option key={d} value={d}>{d}</option>)}</select></label>
        <label className="space-y-1"><span className="text-sm text-muted">Wrap</span><select value={wrap} onChange={(e) => setWrap(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">{flexWraps.map((w) => <option key={w} value={w}>{w}</option>)}</select></label>
        <label className="space-y-1"><span className="text-sm text-muted">Justify Content</span><select value={justify} onChange={(e) => setJustify(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">{justifyContent.map((j) => <option key={j} value={j}>{j}</option>)}</select></label>
        <label className="space-y-1"><span className="text-sm text-muted">Align Items</span><select value={align} onChange={(e) => setAlign(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">{alignItems.map((a) => <option key={a} value={a}>{a}</option>)}</select></label>
        <label className="space-y-1"><span className="text-sm text-muted">Gap: {gap}px</span><input type="range" min={0} max={50} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Items: {items}</span><input type="range" min={1} max={12} value={items} onChange={(e) => setItems(Number(e.target.value))} className="w-full" /></label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Generated CSS</label>
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">{css}</pre>
        <CopyButton text={css} label="Copy CSS" />
      </div>
    </div>
  );
}
