"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateProfitMargin } from "@/lib/tools/business-finance";

export default function ProfitMarginClient() {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");
  const [result, setResult] = useState<{ grossProfit: number; grossMargin: number; markup: number } | null>(null);

  const handleCalculate = () => {
    setResult(calculateProfitMargin(Number(revenue), Number(cost)));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Revenue / Selling Price (₹)</label>
          <input type="number" value={revenue} onChange={(e) => { setRevenue(e.target.value); setResult(null); }} placeholder="1000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">Cost (₹)</label>
          <input type="number" value={cost} onChange={(e) => { setCost(e.target.value); setResult(null); }} placeholder="700" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
      </div>
      <ActionButtons onClear={() => { setRevenue(""); setCost(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate" disabled={!revenue || !cost} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-green-500/10 p-4 text-center"><span className="text-xs text-green-600">Gross Profit</span><p className="text-xl font-bold text-green-600">₹{result.grossProfit.toLocaleString("en-IN")}</p></div>
          <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="text-xs text-primary">Profit Margin</span><p className="text-xl font-bold text-primary">{result.grossMargin}%</p></div>
          <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Markup</span><p className="text-xl font-bold">{result.markup}%</p></div>
        </div>
      )}
    </>
  );
}
