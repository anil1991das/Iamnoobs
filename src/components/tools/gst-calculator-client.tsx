"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateGst, type GstResult } from "@/lib/tools/business-finance";

export default function GstCalculatorClient() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(18);
  const [type, setType] = useState<"intra" | "inter">("intra");
  const [inclusive, setInclusive] = useState(false);
  const [result, setResult] = useState<GstResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    try {
      setResult(calculateGst(Number(amount), rate, type, inclusive));
    } catch (e) { setError((e as Error).message); }
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Amount (₹)</label>
          <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value); setResult(null); }} placeholder="10000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="flex gap-2 flex-wrap">
          {[5, 12, 18, 28].map((r) => (
            <button key={r} onClick={() => setRate(r)} className={`rounded-lg px-4 py-2 text-sm font-medium ${rate === r ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{r}%</button>
          ))}
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={type === "intra"} onChange={() => setType("intra")} /> Intra-State (CGST + SGST)</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={type === "inter"} onChange={() => setType("inter")} /> Inter-State (IGST)</label>
        </div>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={inclusive} onChange={(e) => setInclusive(e.target.checked)} /> GST Inclusive</label>
      </div>
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}
      <ActionButtons onClear={() => { setAmount(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate GST" disabled={!amount} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-2">
          <h3 className="text-lg font-semibold text-foreground">GST Breakdown</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">Base Amount</span><p className="text-lg font-bold text-foreground">₹{result.baseAmount.toLocaleString("en-IN")}</p></div>
            {result.type === "intra" ? <>
              <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">CGST ({result.gstRate / 2}%)</span><p className="text-lg font-bold text-foreground">₹{result.cgst.toLocaleString("en-IN")}</p></div>
              <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">SGST ({result.gstRate / 2}%)</span><p className="text-lg font-bold text-foreground">₹{result.sgst.toLocaleString("en-IN")}</p></div>
            </> : <div className="rounded-lg bg-accent/50 p-3"><span className="text-xs text-muted">IGST ({result.gstRate}%)</span><p className="text-lg font-bold text-foreground">₹{result.igst.toLocaleString("en-IN")}</p></div>}
            <div className="rounded-lg bg-primary/10 p-3"><span className="text-xs text-primary">Total Amount</span><p className="text-xl font-bold text-primary">₹{result.totalAmount.toLocaleString("en-IN")}</p></div>
          </div>
        </div>
      )}
    </>
  );
}
