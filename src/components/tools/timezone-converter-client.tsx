"use client";

import { useState, useEffect } from "react";
import { timezones, convertTimezone, getCurrentTimeInZone } from "@/lib/tools/timezone-converter";

export default function TimezoneConverterClient() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fromTz, setFromTz] = useState("America/New_York");
  const [toTz, setToTz] = useState("Asia/Kolkata");
  const [result, setResult] = useState("");
  const [fromCurrent, setFromCurrent] = useState("");
  const [toCurrent, setToCurrent] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split("T")[0]);
    setTime(now.toTimeString().slice(0, 5));
  }, []);

  useEffect(() => {
    const update = () => {
      setFromCurrent(getCurrentTimeInZone(fromTz));
      setToCurrent(getCurrentTimeInZone(toTz));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [fromTz, toTz]);

  const handleConvert = () => {
    try {
      setResult(convertTimezone(date, time, fromTz, toTz));
    } catch {
      setResult("Invalid input");
    }
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">From Timezone</label>
          <select value={fromTz} onChange={(e) => setFromTz(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
            {timezones.map((tz) => <option key={tz} value={tz}>{tz}</option>)}
          </select>
          <p className="mt-1 text-xs text-muted">{fromCurrent}</p>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">To Timezone</label>
          <select value={toTz} onChange={(e) => setToTz(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
            {timezones.map((tz) => <option key={tz} value={tz}>{tz}</option>)}
          </select>
          <p className="mt-1 text-xs text-muted">{toCurrent}</p>
        </div>
      </div>

      <button onClick={handleConvert} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Convert</button>

      {result && <div className="rounded-xl border border-border bg-card p-4 text-center text-lg font-semibold text-foreground">{result}</div>}
    </>
  );
}
