"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateIncomeTax, type IncomeTaxResult } from "@/lib/tools/business-finance";

export default function IncomeTaxCalculatorClient() {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [regime, setRegime] = useState<"old" | "new">("new");
  const [result, setResult] = useState<IncomeTaxResult | null>(null);

  const handleCalculate = () => {
    setResult(calculateIncomeTax(Number(income), regime, Number(deductions) || 0));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Annual Income (₹)</label>
          <input type="number" value={income} onChange={(e) => { setIncome(e.target.value); setResult(null); }} placeholder="1200000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="flex gap-2">
          <button onClick={() => setRegime("new")} className={`rounded-lg px-4 py-2 text-sm font-medium ${regime === "new" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>New Regime (FY 2024-25)</button>
          <button onClick={() => setRegime("old")} className={`rounded-lg px-4 py-2 text-sm font-medium ${regime === "old" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Old Regime</button>
        </div>
        {regime === "old" && (
          <div><label className="text-sm font-medium text-foreground">Total Deductions (₹) (80C, 80D, HRA etc.)</label>
            <input type="number" value={deductions} onChange={(e) => { setDeductions(e.target.value); setResult(null); }} placeholder="150000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        )}
      </div>
      <ActionButtons onClear={() => { setIncome(""); setDeductions(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate Tax" disabled={!income} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Tax Calculation ({result.regime === "new" ? "New" : "Old"} Regime)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">Taxable Income</span><p className="text-lg font-bold">₹{result.taxableIncome.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">Tax</span><p className="text-lg font-bold">₹{result.tax.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">Cess (4%)</span><p className="text-lg font-bold">₹{result.cess.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-primary/10 p-3"><span className="text-xs text-primary">Total Tax</span><p className="text-xl font-bold text-primary">₹{result.totalTax.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">Effective Rate</span><p className="text-lg font-bold">{result.effectiveRate}%</p></div>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Slab Breakdown</h4>
            {result.slabs.map((s, i) => (
              <div key={i} className="flex justify-between text-sm bg-accent/30 rounded-lg p-2">
                <span className="text-muted">{s.range} @ {s.rate}%</span>
                <span className="font-medium">₹{s.tax.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
