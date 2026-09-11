"use client";

import { useState } from "react";
import ActionButtons from "@/components/action-buttons";
import { timestampToDate, dateToTimestamp } from "@/lib/tools/dev-helpers";

export default function TimestampConverterClient() {
  const [mode, setMode] = useState<"toDate" | "toTimestamp">("toDate");
  const [timestamp, setTimestamp] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (mode === "toDate") {
      setResult(timestampToDate(Number(timestamp)));
    } else {
      setResult(String(dateToTimestamp(dateStr)));
    }
  };

  const now = () => {
    const t = Math.floor(Date.now() / 1000);
    setTimestamp(String(t));
    setMode("toDate");
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("toDate")} className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "toDate" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Timestamp → Date</button>
          <button onClick={() => setMode("toTimestamp")} className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "toTimestamp" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Date → Timestamp</button>
          <button onClick={now} className="rounded-lg bg-accent px-3 py-2 text-xs font-medium text-foreground ml-auto">Now</button>
        </div>
        {mode === "toDate" ? (
          <div><label className="text-sm font-medium text-foreground">Unix Timestamp</label>
            <input type="number" value={timestamp} onChange={(e) => { setTimestamp(e.target.value); setResult(""); }} placeholder="1700000000" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        ) : (
          <div><label className="text-sm font-medium text-foreground">Date String</label>
            <input type="datetime-local" value={dateStr} onChange={(e) => { setDateStr(e.target.value); setResult(""); }} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        )}
      </div>
      <ActionButtons onClear={() => setResult("")} onProcess={handleConvert} processLabel="Convert" disabled={mode === "toDate" ? !timestamp : !dateStr} />
      {result && (
        <div className="rounded-xl border border-border bg-card p-6">
          <pre className="text-sm font-mono whitespace-pre-wrap text-foreground">{result}</pre>
        </div>
      )}
    </>
  );
}
