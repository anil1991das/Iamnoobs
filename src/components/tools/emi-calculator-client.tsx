"use client";

import { useState } from "react";
import { calculateEmi, type EmiResult } from "@/lib/tools/emi-calculator";

export default function EmiCalculatorClient() {
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("8.5");
  const [tenure, setTenure] = useState("12");
  const [result, setResult] = useState<EmiResult | null>(null);
  const [error, setError] = useState("");
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCalculate = () => {
    setError("");
    try {
      setResult(calculateEmi(parseFloat(principal), parseFloat(rate), parseInt(tenure)));
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Loan Amount</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} min={0} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Annual Rate (%)</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} min={0} step={0.1} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Tenure (months)</label>
          <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} min={1} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <button onClick={handleCalculate} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Calculate EMI</button>

      {result && (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Monthly EMI</p>
              <p className="text-2xl font-bold text-primary">{result.emi.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Total Interest</p>
              <p className="text-2xl font-bold text-danger">{result.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-xs text-muted">Total Payment</p>
              <p className="text-2xl font-bold text-foreground">{result.totalPayment.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            </div>
          </div>

          <button onClick={() => setShowSchedule(!showSchedule)} className="text-sm font-medium text-primary hover:underline">
            {showSchedule ? "Hide" : "Show"} Amortization Schedule
          </button>

          {showSchedule && (
            <div className="max-h-96 overflow-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-accent">
                  <tr>
                    <th className="p-2 text-left text-muted">Month</th>
                    <th className="p-2 text-right text-muted">EMI</th>
                    <th className="p-2 text-right text-muted">Principal</th>
                    <th className="p-2 text-right text-muted">Interest</th>
                    <th className="p-2 text-right text-muted">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row) => (
                    <tr key={row.month} className="border-t border-border">
                      <td className="p-2 text-foreground">{row.month}</td>
                      <td className="p-2 text-right text-foreground">{row.emi.toFixed(2)}</td>
                      <td className="p-2 text-right text-foreground">{row.principal.toFixed(2)}</td>
                      <td className="p-2 text-right text-foreground">{row.interest.toFixed(2)}</td>
                      <td className="p-2 text-right text-foreground">{row.balance.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </>
  );
}
