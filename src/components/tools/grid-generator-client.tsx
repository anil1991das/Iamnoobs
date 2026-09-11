"use client";
import { useState } from "react";
import CopyButton from "@/components/copy-button";

export default function GridGeneratorClient() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(10);
  const [colTemplate, setColTemplate] = useState("1fr");
  const [rowTemplate, setRowTemplate] = useState("1fr");

  const gridTemplateCols = Array(cols).fill(colTemplate).join(" ");
  const gridTemplateRows = Array(rows).fill(rowTemplate).join(" ");
  const css = `display: grid;\ngrid-template-columns: ${gridTemplateCols};\ngrid-template-rows: ${gridTemplateRows};\ngap: ${gap}px;`;

  const style: React.CSSProperties = { display: "grid", gridTemplateColumns: gridTemplateCols, gridTemplateRows: gridTemplateRows, gap };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-4" style={style}>
        {Array.from({ length: cols * rows }, (_, i) => (
          <div key={i} className="flex min-h-[60px] items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">{i + 1}</div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <label className="space-y-1"><span className="text-sm text-muted">Columns: {cols}</span><input type="range" min={1} max={12} value={cols} onChange={(e) => setCols(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Rows: {rows}</span><input type="range" min={1} max={8} value={rows} onChange={(e) => setRows(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Gap: {gap}px</span><input type="range" min={0} max={50} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full" /></label>
        <label className="space-y-1"><span className="text-sm text-muted">Column Size</span><select value={colTemplate} onChange={(e) => setColTemplate(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"><option value="1fr">1fr</option><option value="auto">auto</option><option value="100px">100px</option><option value="minmax(100px, 1fr)">minmax(100px, 1fr)</option></select></label>
        <label className="space-y-1"><span className="text-sm text-muted">Row Size</span><select value={rowTemplate} onChange={(e) => setRowTemplate(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"><option value="1fr">1fr</option><option value="auto">auto</option><option value="100px">100px</option><option value="minmax(50px, auto)">minmax(50px, auto)</option></select></label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Generated CSS</label>
        <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">{css}</pre>
        <CopyButton text={css} label="Copy CSS" />
      </div>
    </div>
  );
}
