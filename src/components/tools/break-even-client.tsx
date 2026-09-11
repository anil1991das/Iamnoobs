"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateBreakEven } from "@/lib/tools/business-finance";

export default function BreakEvenClient() {
  const [fixed, setFixed] = useState("");
  const [price, setPrice] = useState("");
  const [variable, setVariable] = useState("");
  const [result, setResult] = useState<{ units: number; revenue: number; contributionMargin: number } | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    try { setResult(calculateBreakEven(Number(fixed), Number(price), Number(variable))); }
    catch (e) { setError((e as Error).message); setResult(null); }
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Fixed Costs (₹)</label>
          <input type="number" value={fixed} onChange={(e) => { setFixed(e.target.value); setResult(null); }} placeholder="500000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-sm font-medium text-foreground">Selling Price per Unit (₹)</label>
            <input type="number" value={price} onChange={(e) => { setPrice(e.target.value); setResult(null); }} placeholder="100" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
          <div><label className="text-sm font-medium text-foreground">Variable Cost per Unit (₹)</label>
            <input type="number" value={variable} onChange={(e) => { setVariable(e.target.value); setResult(null); }} placeholder="60" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        </div>
      </div>
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}
      <ActionButtons onClear={() => { setFixed(""); setPrice(""); setVariable(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate Break-Even" disabled={!fixed || !price || !variable} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="text-xs text-primary">Break-Even Units</span><p className="text-2xl font-bold text-primary">{result.units.toLocaleString()}</p></div>
          <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Revenue Needed</span><p className="text-xl font-bold">₹{result.revenue.toLocaleString("en-IN")}</p></div>
          <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Contribution Margin</span><p className="text-xl font-bold">₹{result.contributionMargin}</p></div>
        </div>
      )}
    </>
  );
}
