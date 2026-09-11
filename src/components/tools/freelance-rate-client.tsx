"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateFreelanceRate } from "@/lib/tools/business-finance";

export default function FreelanceRateClient() {
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");
  const [hours, setHours] = useState("30");
  const [weeksOff, setWeeksOff] = useState("4");
  const [result, setResult] = useState<{ hourlyRate: number; dailyRate: number; monthlyTarget: number } | null>(null);

  const handleCalculate = () => {
    setResult(calculateFreelanceRate(Number(expenses), Number(savings), Number(hours), Number(weeksOff)));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Annual Expenses (₹)</label>
          <input type="number" value={expenses} onChange={(e) => { setExpenses(e.target.value); setResult(null); }} placeholder="600000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">Annual Savings Goal (₹)</label>
          <input type="number" value={savings} onChange={(e) => { setSavings(e.target.value); setResult(null); }} placeholder="200000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-xs text-muted">Billable Hours/Week</label>
            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Weeks Off/Year</label>
            <input type="number" value={weeksOff} onChange={(e) => setWeeksOff(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
        </div>
      </div>
      <ActionButtons onClear={() => { setExpenses(""); setSavings(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate Rate" disabled={!expenses || !savings} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="text-xs text-primary">Hourly Rate</span><p className="text-2xl font-bold text-primary">₹{result.hourlyRate.toLocaleString("en-IN")}</p></div>
          <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Daily Rate (8h)</span><p className="text-xl font-bold">₹{result.dailyRate.toLocaleString("en-IN")}</p></div>
          <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Monthly Target</span><p className="text-xl font-bold">₹{result.monthlyTarget.toLocaleString("en-IN")}</p></div>
        </div>
      )}
      <p className="text-xs text-muted">Includes 30% buffer for taxes. Adjust based on your actual tax situation.</p>
    </>
  );
}
