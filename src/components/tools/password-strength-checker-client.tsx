"use client";

import { useState } from "react";
import { checkPasswordStrength, type PasswordAnalysis } from "@/lib/tools/security-tools";

export default function PasswordStrengthCheckerClient() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<PasswordAnalysis | null>(null);

  const handleCheck = (val: string) => {
    setPassword(val);
    if (val) setResult(checkPasswordStrength(val));
    else setResult(null);
  };

  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#16a34a", "#15803d"];

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-foreground">Enter password to check</label>
        <input type="text" value={password} onChange={(e) => handleCheck(e.target.value)} placeholder="Enter password..." className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono" />
      </div>
      {result && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-accent rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${(result.score / 5) * 100}%`, backgroundColor: colors[result.score] }} />
            </div>
            <span className="text-sm font-semibold" style={{ color: colors[result.score] }}>{result.label}</span>
          </div>
          <div className="rounded-lg bg-accent/50 p-3">
            <span className="text-sm text-muted">Entropy: </span>
            <span className="text-sm font-medium text-foreground">{result.entropy} bits</span>
          </div>
          {result.feedback.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Suggestions:</h4>
              {result.feedback.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-danger">•</span> {f}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
