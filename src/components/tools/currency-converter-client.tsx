"use client";

import { useState } from "react";
import { currencies, convertCurrency, getRate } from "@/lib/tools/currency-converter";

export default function CurrencyConverterClient() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const num = parseFloat(amount);
    if (isNaN(num)) return;
    const converted = convertCurrency(num, from, to);
    const rate = getRate(from, to);
    setResult(`${num.toLocaleString()} ${from} = ${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} ${to}\n\nRate: 1 ${from} = ${rate.toFixed(4)} ${to}`);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={0} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
            {currencies.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
            {currencies.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!amount} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Convert</button>
        <button onClick={() => { setFrom(to); setTo(from); setResult(""); }} className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent">⇄ Swap</button>
      </div>

      {result && <div className="whitespace-pre-line rounded-xl border border-border bg-card p-4 text-center text-lg font-semibold text-foreground">{result}</div>}
      <p className="text-xs text-muted">Rates are approximate and may not reflect real-time market rates.</p>
    </>
  );
}
