"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { validateCreditCard } from "@/lib/tools/security-tools";

export default function CreditCardValidatorClient() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<{ valid: boolean; type: string } | null>(null);

  const handleValidate = () => setResult(validateCreditCard(number));

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-2">
        <label className="block text-sm font-medium text-foreground">Credit Card Number</label>
        <input type="text" value={number} onChange={(e) => { setNumber(e.target.value.replace(/[^\d\s-]/g, "")); setResult(null); }} placeholder="4111 1111 1111 1111" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono tracking-wider" maxLength={23} />
      </div>
      <ActionButtons onClear={() => { setNumber(""); setResult(null); }} onProcess={handleValidate} processLabel="Validate" disabled={!number.trim()} />
      {result && (
        <div className={`rounded-xl border p-6 space-y-2 ${result.valid ? "border-green-500 bg-green-500/10" : "border-danger bg-danger/10"}`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{result.valid ? "✅" : "❌"}</span>
            <span className="text-lg font-semibold">{result.valid ? "Valid" : "Invalid"} Card Number</span>
          </div>
          <p className="text-sm text-muted">Card Type: <strong>{result.type}</strong></p>
          <p className="text-xs text-muted">Uses Luhn algorithm for validation. This only checks the number format, not whether the card is active.</p>
        </div>
      )}
    </>
  );
}
