"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { calculateSalary, type SalaryBreakup } from "@/lib/tools/business-finance";

export default function SalaryCalculatorClient() {
  const [ctc, setCtc] = useState("");
  const [result, setResult] = useState<SalaryBreakup | null>(null);

  const handleCalculate = () => setResult(calculateSalary(Number(ctc)));

  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="text-sm font-medium text-foreground">Annual CTC (₹)</label>
        <input type="number" value={ctc} onChange={(e) => { setCtc(e.target.value); setResult(null); }} placeholder="1200000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm mt-1" />
      </div>
      <ActionButtons onClear={() => { setCtc(""); setResult(null); }} onProcess={handleCalculate} processLabel="Calculate Salary" disabled={!ctc} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Salary Breakup (Annual)</h3>
          <div className="space-y-2">
            {[
              { label: "Basic Salary", value: result.basic },
              { label: "HRA", value: result.hra },
              { label: "Special Allowance", value: result.specialAllowance },
              { label: "Employer PF", value: result.employerPf },
            ].map((item) => (
              <div key={item.label} className="flex justify-between rounded-lg bg-accent/30 p-3">
                <span className="text-sm text-muted">{item.label}</span>
                <span className="text-sm font-medium">{fmt(item.value)}</span>
              </div>
            ))}
            <hr className="border-border" />
            {[
              { label: "Employee PF", value: result.employeePf },
              { label: "Professional Tax", value: result.professionalTax },
            ].map((item) => (
              <div key={item.label} className="flex justify-between rounded-lg bg-red-50 dark:bg-red-500/10 p-3">
                <span className="text-sm text-danger">(-) {item.label}</span>
                <span className="text-sm font-medium text-danger">{fmt(item.value)}</span>
              </div>
            ))}
            <hr className="border-border" />
            <div className="flex justify-between rounded-lg bg-primary/10 p-4">
              <span className="text-primary font-semibold">Monthly In-Hand</span>
              <span className="text-xl font-bold text-primary">{fmt(result.monthlyInHand)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
