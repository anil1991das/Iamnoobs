"use client";

import { useState } from "react";
import { calculateAge, type AgeResult } from "@/lib/tools/age-calculator";

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    try {
      setResult(calculateAge(birthDate));
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Date of Birth</label>
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} max={new Date().toISOString().split("T")[0]} className="w-full max-w-xs rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}

      <button onClick={handleCalculate} disabled={!birthDate} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Calculate Age</button>

      {result && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Age" value={`${result.years}y ${result.months}m ${result.days}d`} />
          <StatCard label="Total Days" value={result.totalDays.toLocaleString()} />
          <StatCard label="Total Weeks" value={result.totalWeeks.toLocaleString()} />
          <StatCard label="Total Months" value={result.totalMonths.toLocaleString()} />
          <StatCard label="Born on" value={result.dayOfBirth} />
          <StatCard label="Next Birthday" value={`${result.nextBirthday} (${result.daysUntilBirthday} days)`} />
        </div>
      )}
    </>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}
