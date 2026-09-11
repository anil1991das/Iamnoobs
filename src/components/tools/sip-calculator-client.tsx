"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateSip, type SipResult } from "@/lib/tools/business-finance";

export default function SipCalculatorClient() {
  const [monthly, setMonthly] = useState("");
  const [years, setYears] = useState("10");
  const [rate, setRate] = useState("12");
  const [result, setResult] = useState<SipResult | null>(null);

  const handleCalculate = () => {
    setResult(calculateSip(Number(monthly), Number(years), Number(rate)));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Monthly Investment (₹)</label>
          <input type="number" value={monthly} onChange={(e) => { setMonthly(e.target.value); setResult(null); }} placeholder="5000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-sm font-medium text-foreground">Time Period (Years)</label>
            <input type="number" value={years} onChange={(e) => { setYears(e.target.value); setResult(null); }} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
          <div><label className="text-sm font-medium text-foreground">Expected Return Rate (%)</label>
            <input type="number" value={rate} onChange={(e) => { setRate(e.target.value); setResult(null); }} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        </div>
      </div>
      <ActionButtons onClear={() => { setMonthly(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate SIP" disabled={!monthly} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">SIP Returns</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-accent/50 p-3 text-center"><span className="text-xs text-muted">Invested</span><p className="text-lg font-bold">₹{result.investedAmount.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-green-500/10 p-3 text-center"><span className="text-xs text-green-600">Returns</span><p className="text-lg font-bold text-green-600">₹{result.estimatedReturns.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-primary/10 p-3 text-center"><span className="text-xs text-primary">Total Value</span><p className="text-xl font-bold text-primary">₹{result.totalValue.toLocaleString("en-IN")}</p></div>
          </div>
        </div>
      )}
    </>
  );
}
