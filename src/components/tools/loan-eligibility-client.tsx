"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateLoanEligibility, type LoanEligibility } from "@/lib/tools/business-finance";

export default function LoanEligibilityClient() {
  const [income, setIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("0");
  const [interestRate, setInterestRate] = useState("8.5");
  const [tenure, setTenure] = useState("20");
  const [result, setResult] = useState<LoanEligibility | null>(null);

  const handleCalculate = () => {
    setResult(calculateLoanEligibility(Number(income), Number(existingEmi), Number(interestRate), Number(tenure)));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Monthly Income (₹)</label>
          <input type="number" value={income} onChange={(e) => { setIncome(e.target.value); setResult(null); }} placeholder="80000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-xs text-muted">Existing EMIs (₹)</label>
            <input type="number" value={existingEmi} onChange={(e) => setExistingEmi(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Interest Rate (%)</label>
            <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Tenure (Years)</label>
            <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
        </div>
      </div>
      <ActionButtons onClear={() => { setIncome(""); setResult(null); }} onProcess={handleCalculate} processLabel="Check Eligibility" disabled={!income} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Loan Eligibility</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-primary/10 p-4 text-center"><span className="text-xs text-primary">Max Loan Amount</span><p className="text-2xl font-bold text-primary">₹{result.maxLoanAmount.toLocaleString("en-IN")}</p></div>
            <div className="rounded-lg bg-accent/50 p-4 text-center"><span className="text-xs text-muted">Max EMI</span><p className="text-xl font-bold">₹{result.maxEmi.toLocaleString("en-IN")}</p></div>
          </div>
          <p className="text-xs text-muted">Based on 50% FOIR (Fixed Obligation to Income Ratio). Actual eligibility may vary by lender.</p>
        </div>
      )}
    </>
  );
}
