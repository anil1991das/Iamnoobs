"use client";

import { useState, useEffect, useRef } from "react";
import { formatLocalDateTime } from "@/lib/utils/date";

export default function CountdownTimerClient() {
  const [target, setTarget] = useState("");
  const [label, setLabel] = useState("");
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!target) return;
    const update = () => {
      const ms = new Date(target).getTime() - Date.now();
      if (ms <= 0) { setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }); return; }
      setDiff({
        days: Math.floor(ms / 86400000),
        hours: Math.floor((ms % 86400000) / 3600000),
        minutes: Math.floor((ms % 3600000) / 60000),
        seconds: Math.floor((ms % 60000) / 1000),
        total: ms,
      });
    };
    update();
    intervalRef.current = setInterval(update, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [target]);

  const presets = ["New Year", "1 Hour", "Tomorrow"] as const;

  function setPreset(preset: (typeof presets)[number]) {
    const date = new Date();
    if (preset === "New Year") {
      date.setFullYear(date.getFullYear() + 1, 0, 1);
      date.setHours(0, 0, 0, 0);
    } else if (preset === "1 Hour") {
      date.setTime(date.getTime() + 60 * 60 * 1000);
    } else {
      date.setDate(date.getDate() + 1);
      date.setHours(0, 0, 0, 0);
    }
    setTarget(formatLocalDateTime(date));
    setLabel(preset);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6 space-y-3">
        <div><label className="text-sm font-medium text-foreground">Event Name</label>
          <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="My Event" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">Target Date & Time</label>
          <input type="datetime-local" value={target} onChange={(e) => setTarget(e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div className="flex gap-2">{presets.map((preset) => <button key={preset} type="button" onClick={() => setPreset(preset)} className="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent/80">{preset}</button>)}</div>
      </div>
      {target && (
        <div className="text-center space-y-4">
          {label && <p className="text-lg font-semibold text-foreground">{label}</p>}
          {diff.total > 0 ? (
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: "Days", value: diff.days },
                { label: "Hours", value: diff.hours },
                { label: "Minutes", value: diff.minutes },
                { label: "Seconds", value: diff.seconds },
              ].map((u) => (
                <div key={u.label} className="rounded-2xl border border-border bg-card p-4">
                  <p className="text-4xl font-mono font-bold text-primary">{String(u.value).padStart(2, "0")}</p>
                  <p className="text-xs text-muted mt-1">{u.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-primary/10 p-6"><p className="text-2xl font-bold text-primary">🎉 Time&apos;s up!</p></div>
          )}
        </div>
      )}
    </div>
  );
}
