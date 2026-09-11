"use client";

import { useState } from "react";
import { calculateDiscount, findDiscountPercent, findOriginalPrice, type DiscountResult } from "@/lib/tools/discount-calculator";

type Mode = "calculate" | "findPercent" | "findOriginal";

export default function DiscountCalculatorClient() {
  const [mode, setMode] = useState<Mode>("calculate");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<DiscountResult | null>(null);
  const [singleResult, setSingleResult] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError(""); setResult(null); setSingleResult("");
    try {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      if (isNaN(numA) || isNaN(numB)) throw new Error("Enter valid numbers");
      switch (mode) {
        case "calculate": setResult(calculateDiscount(numA, numB)); break;
        case "findPercent": setSingleResult(`Discount: ${findDiscountPercent(numA, numB)}%`); break;
        case "findOriginal": setSingleResult(`Original Price: ${findOriginalPrice(numA, numB)}`); break;
      }
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const labels: Record<Mode, [string, string, string]> = {
    calculate: ["Original Price", "Discount (%)", "Calculate Discount"],
    findPercent: ["Original Price", "Sale Price", "Find Discount %"],
    findOriginal: ["Sale Price", "Discount (%)", "Find Original Price"],
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {([["calculate", "Price after discount"], ["findPercent", "Find discount %"], ["findOriginal", "Find original price"]] as [Mode, string][]).map(([m, label]) => (
          <button key={m} onClick={() => { setMode(m); setResult(null); setSingleResult(""); }} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${mode === m ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{label}</button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{labels[mode][0]}</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} min={0} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{labels[mode][1]}</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} min={0} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <button onClick={handleCalculate} disabled={!a || !b} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">{labels[mode][2]}</button>

      {result && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 rounded-xl border border-border bg-card p-4">
          <div><span className="text-xs text-muted">Original Price</span><p className="font-semibold text-foreground">{result.originalPrice}</p></div>
          <div><span className="text-xs text-muted">Discount</span><p className="font-semibold text-danger">-{result.discountAmount} ({result.discountPercent}%)</p></div>
          <div><span className="text-xs text-muted">Final Price</span><p className="text-lg font-bold text-green-600">{result.finalPrice}</p></div>
          <div><span className="text-xs text-muted">You Save</span><p className="font-semibold text-primary">{result.discountAmount}</p></div>
        </div>
      )}

      {singleResult && <div className="rounded-xl border border-border bg-card p-4 text-center text-lg font-semibold text-foreground">{singleResult}</div>}
    </>
  );
}
