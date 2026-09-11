"use client";

import { useState } from "react";
import { unitCategories, convert, type UnitCategory, type Unit } from "@/lib/tools/unit-converter";

export default function UnitConverterClient() {
  const [category, setCategory] = useState<UnitCategory>(unitCategories[0]);
  const [fromUnit, setFromUnit] = useState<Unit>(unitCategories[0].units[0]);
  const [toUnit, setToUnit] = useState<Unit>(unitCategories[0].units[1]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleCategoryChange = (cat: UnitCategory) => {
    setCategory(cat);
    setFromUnit(cat.units[0]);
    setToUnit(cat.units[1]);
    setResult("");
  };

  const handleConvert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;
    const r = convert(num, fromUnit, toUnit);
    setResult(`${num} ${fromUnit.symbol} = ${r.toPrecision(10).replace(/\.?0+$/, "")} ${toUnit.symbol}`);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {unitCategories.map((cat) => (
          <button key={cat.name} onClick={() => handleCategoryChange(cat)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${category.name === cat.name ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Value</label>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter value" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">From</label>
          <select value={fromUnit.name} onChange={(e) => setFromUnit(category.units.find((u) => u.name === e.target.value)!)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
            {category.units.map((u) => <option key={u.name} value={u.name}>{u.name} ({u.symbol})</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">To</label>
          <select value={toUnit.name} onChange={(e) => setToUnit(category.units.find((u) => u.name === e.target.value)!)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
            {category.units.map((u) => <option key={u.name} value={u.name}>{u.name} ({u.symbol})</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!value} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Convert</button>
        <button onClick={() => { const t = fromUnit; setFromUnit(toUnit); setToUnit(t); setResult(""); }} className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent">⇄ Swap</button>
      </div>

      {result && (
        <div className="rounded-xl border border-border bg-card p-4 text-center text-lg font-semibold text-foreground">{result}</div>
      )}
    </>
  );
}
