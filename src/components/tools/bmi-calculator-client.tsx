"use client";
import { useState, useMemo } from "react";
import { calculateBmi } from "@/lib/tools/css-design-tools";

export default function BmiCalculatorClient() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");

  const result = useMemo(() => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return null;
    let hCm: number;
    if (unit === "metric") {
      hCm = parseFloat(height);
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      hCm = (ft * 12 + inches) * 2.54;
    }
    if (!hCm || hCm <= 0) return null;
    const wKg = unit === "imperial" ? w * 0.453592 : w;
    return calculateBmi(wKg, hCm);
  }, [weight, height, heightFt, heightIn, unit]);

  const bmiCategories = [
    { range: "< 18.5", label: "Underweight", color: "bg-blue-500" },
    { range: "18.5 – 24.9", label: "Normal", color: "bg-green-500" },
    { range: "25 – 29.9", label: "Overweight", color: "bg-yellow-500" },
    { range: "≥ 30", label: "Obese", color: "bg-red-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button onClick={() => setUnit("metric")} className={`rounded-lg px-4 py-2 text-sm ${unit === "metric" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Metric (kg/cm)</button>
        <button onClick={() => setUnit("imperial")} className={`rounded-lg px-4 py-2 text-sm ${unit === "imperial" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Imperial (lbs/ft)</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">Weight ({unit === "metric" ? "kg" : "lbs"})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "70" : "154"} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
        </label>
        {unit === "metric" ? (
          <label className="space-y-1">
            <span className="text-sm font-medium">Height (cm)</span>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
          </label>
        ) : (
          <div className="space-y-1">
            <span className="text-sm font-medium">Height</span>
            <div className="flex gap-2">
              <input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="ft" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
              <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="in" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
          </div>
        )}
      </div>

      {result && (
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted">Your BMI</p>
          <p className={`text-5xl font-bold ${result.color}`}>{result.bmi}</p>
          <p className={`mt-2 text-lg font-medium ${result.color}`}>{result.category}</p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-2">
        {bmiCategories.map((c) => (
          <div key={c.label} className="space-y-1 text-center">
            <div className={`h-2 rounded-full ${c.color}`} />
            <p className="text-xs font-medium">{c.label}</p>
            <p className="text-xs text-muted">{c.range}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
