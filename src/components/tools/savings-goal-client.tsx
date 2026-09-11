"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateSavingsGoal } from "@/lib/tools/business-finance";

export default function SavingsGoalClient() {
  const [goal, setGoal] = useState("");
  const [current, setCurrent] = useState("0");
  const [months, setMonths] = useState("24");
  const [rate, setRate] = useState("8");
  const [result, setResult] = useState<{ monthlyRequired: number; totalContributions: number; interestEarned: number } | null>(null);

  const handleCalculate = () => {
    setResult(calculateSavingsGoal(Number(goal), Number(current), Number(months), Number(rate)));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Goal Amount (₹)</label>
          <input type="number" value={goal} onChange={(e) => { setGoal(e.target.value); setResult(null); }} placeholder="500000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-xs text-muted">Current Savings (₹)</label>
            <input type="number" value={current} onChange={(e) => setCurrent(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Time (Months)</label>
            <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Annual Return (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
        </div>
      </div>
      <ActionButtons onClear={() => { setGoal(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate" disabled={!goal} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="text-xs text-primary">Monthly Required</span><p className="text-2xl font-bold text-primary">₹{result.monthlyRequired.toLocaleString("en-IN")}</p></div>
          <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Total Contributions</span><p className="text-xl font-bold">₹{result.totalContributions.toLocaleString("en-IN")}</p></div>
          <div className="rounded-lg bg-green-500/10 p-4 text-center"><span className="text-xs text-green-600">Interest Earned</span><p className="text-xl font-bold text-green-600">₹{result.interestEarned.toLocaleString("en-IN")}</p></div>
        </div>
      )}
    </>
  );
}
