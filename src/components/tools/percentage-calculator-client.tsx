"use client";

import { useState } from "react";
import { calculatePercentage, whatPercent, percentChange, addPercent, subtractPercent } from "@/lib/tools/percentage-calculator";

type Mode = "of" | "what" | "change" | "add" | "subtract";

export default function PercentageCalculatorClient() {
  const [mode, setMode] = useState<Mode>("of");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    try {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      if (isNaN(numA) || isNaN(numB)) throw new Error("Enter valid numbers");
      let r: number;
      switch (mode) {
        case "of": r = calculatePercentage(numB, numA); setResult(`${numA}% of ${numB} = ${r}`); break;
        case "what": r = whatPercent(numA, numB); setResult(`${numA} is ${r.toFixed(2)}% of ${numB}`); break;
        case "change": r = percentChange(numA, numB); setResult(`Change from ${numA} to ${numB} = ${r.toFixed(2)}%`); break;
        case "add": r = addPercent(numA, numB); setResult(`${numA} + ${numB}% = ${r}`); break;
        case "subtract": r = subtractPercent(numA, numB); setResult(`${numA} - ${numB}% = ${r}`); break;
      }
    } catch (e) {
      setError((e as Error).message);
      setResult("");
    }
  };

  const labels: Record<Mode, [string, string]> = {
    of: ["Percentage (%)", "Of Value"],
    what: ["Part", "Total"],
    change: ["Old Value", "New Value"],
    add: ["Value", "Percentage (%)"],
    subtract: ["Value", "Percentage (%)"],
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {([
          ["of", "X% of Y"],
          ["what", "X is what % of Y"],
          ["change", "% Change"],
          ["add", "Add %"],
          ["subtract", "Subtract %"],
        ] as [Mode, string][]).map(([m, label]) => (
          <button key={m} onClick={() => { setMode(m); setResult(""); }} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${mode === m ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{label}</button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{labels[mode][0]}</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{labels[mode][1]}</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <button onClick={handleCalculate} disabled={!a || !b} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Calculate</button>

      {result && <div className="rounded-xl border border-border bg-card p-4 text-center text-lg font-semibold text-foreground">{result}</div>}
    </>
  );
}
