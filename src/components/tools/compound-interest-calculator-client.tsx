"use client";
import { useState, useMemo } from "react";
import { calculateCompoundInterest } from "@/lib/tools/css-design-tools";

export default function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [years, setYears] = useState("10");
  const [compound, setCompound] = useState("12");

  const result = useMemo(() => {
    const p = parseFloat(principal), r = parseFloat(rate), y = parseFloat(years), c = parseInt(compound);
    if (!p || !r || !y || !c || p <= 0 || r <= 0 || y <= 0 || c <= 0) return null;
    return calculateCompoundInterest(p, r, y, c);
  }, [principal, rate, years, compound]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1"><span className="text-sm font-medium">Principal Amount ($)</span><input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Annual Interest Rate (%)</span><input type="number" value={rate} onChange={(e) => setRate(e.target.value)} step="0.1" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Period (Years)</span><input type="number" value={years} onChange={(e) => setYears(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" /></label>
        <label className="space-y-1"><span className="text-sm font-medium">Compound Frequency</span>
          <select value={compound} onChange={(e) => setCompound(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
            <option value="1">Annually</option><option value="2">Semi-annually</option><option value="4">Quarterly</option><option value="12">Monthly</option><option value="365">Daily</option>
          </select>
        </label>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Total Amount</p>
              <p className="text-2xl font-bold text-primary">${result.total.toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Total Interest</p>
              <p className="text-2xl font-bold text-green-500">${result.totalInterest.toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Principal</p>
              <p className="text-2xl font-bold">${parseFloat(principal).toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Year-by-Year Breakdown</h3>
            <div className="max-h-60 overflow-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card"><tr><th className="px-4 py-2 text-left">Year</th><th className="px-4 py-2 text-right">Balance</th><th className="px-4 py-2 text-right">Interest Earned</th></tr></thead>
                <tbody>{result.rows.map((r) => (
                  <tr key={r.year} className="border-t border-border"><td className="px-4 py-2">{r.year}</td><td className="px-4 py-2 text-right">${r.balance.toLocaleString()}</td><td className="px-4 py-2 text-right text-green-500">${r.interest.toLocaleString()}</td></tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
