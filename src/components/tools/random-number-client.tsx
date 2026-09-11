"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";

export default function RandomNumberClient() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(false);
  const [results, setResults] = useState<number[]>([]);

  const generate = () => {
    const lo = parseInt(min);
    const hi = parseInt(max);
    const n = parseInt(count);
    if (isNaN(lo) || isNaN(hi) || isNaN(n) || lo > hi || n < 1) return;
    if (unique && n > hi - lo + 1) return;

    if (unique) {
      const pool: number[] = [];
      for (let i = lo; i <= hi; i++) pool.push(i);
      const res: number[] = [];
      for (let i = 0; i < n; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        res.push(pool[idx]);
        pool.splice(idx, 1);
      }
      setResults(res);
    } else {
      setResults(Array.from({ length: n }, () => Math.floor(Math.random() * (hi - lo + 1)) + lo));
    }
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-sm font-medium text-foreground">Min</label>
            <input type="number" value={min} onChange={(e) => setMin(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
          <div><label className="text-sm font-medium text-foreground">Max</label>
            <input type="number" value={max} onChange={(e) => setMax(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
          <div><label className="text-sm font-medium text-foreground">Count</label>
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)} min="1" max="1000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        </div>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} /> Unique numbers only</label>
      </div>
      <ActionButtons onClear={() => setResults([])} onProcess={generate} processLabel="Generate" disabled={!min || !max} />
      {results.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex flex-wrap gap-2">
            {results.map((n, i) => (
              <span key={i} className="rounded-lg bg-primary/10 px-4 py-2 text-lg font-mono font-bold text-primary">{n}</span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
