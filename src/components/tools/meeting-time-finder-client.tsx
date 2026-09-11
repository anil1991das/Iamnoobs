"use client";

import { useState } from "react";

const zones = [
  { label: "IST (India)", tz: "Asia/Kolkata" },
  { label: "EST (US East)", tz: "America/New_York" },
  { label: "CST (US Central)", tz: "America/Chicago" },
  { label: "PST (US West)", tz: "America/Los_Angeles" },
  { label: "GMT/UTC", tz: "Europe/London" },
  { label: "CET (Central EU)", tz: "Europe/Berlin" },
  { label: "JST (Japan)", tz: "Asia/Tokyo" },
  { label: "AEST (Australia)", tz: "Australia/Sydney" },
  { label: "SGT (Singapore)", tz: "Asia/Singapore" },
  { label: "CST (China)", tz: "Asia/Shanghai" },
];

export default function MeetingTimeFinderClient() {
  const [selected, setSelected] = useState(["Asia/Kolkata", "America/New_York"]);
  const [baseTime, setBaseTime] = useState("10:00");
  const [baseZone, setBaseZone] = useState("Asia/Kolkata");

  const toggle = (tz: string) => {
    setSelected((s) => s.includes(tz) ? s.filter((t) => t !== tz) : [...s, tz]);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  const getTime = (hour: number, min: number, fromTz: string, toTz: string) => {
    const d = new Date();
    d.setHours(hour, min, 0, 0);
    const fromStr = d.toLocaleString("en-US", { timeZone: fromTz });
    const fromDate = new Date(fromStr);
    const toStr = new Date(fromDate).toLocaleString("en-US", { timeZone: toTz });
    return new Date(toStr);
  };

  const baseHour = parseInt(baseTime.split(":")[0]);
  const baseMin = parseInt(baseTime.split(":")[1]);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div><label className="text-xs text-muted">Meeting Time</label><input type="time" value={baseTime} onChange={(e) => setBaseTime(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs text-muted">Your Timezone</label>
            <select value={baseZone} onChange={(e) => setBaseZone(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
              {zones.map((z) => <option key={z.tz} value={z.tz}>{z.label}</option>)}
            </select></div>
        </div>
        <div><label className="text-xs text-muted block mb-1">Select Timezones</label>
          <div className="flex flex-wrap gap-2">
            {zones.map((z) => (
              <button key={z.tz} onClick={() => toggle(z.tz)} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${selected.includes(z.tz) ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{z.label}</button>
            ))}
          </div>
        </div>
      </div>
      {selected.length > 0 && (
        <div className="rounded-xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left p-3 font-semibold">Timezone</th>
              <th className="p-3 font-semibold">Local Time</th>
              <th className="p-3 font-semibold">Status</th>
            </tr></thead>
            <tbody>
              {selected.map((tz) => {
                const time = getTime(baseHour, baseMin, baseZone, tz);
                const h = time.getHours();
                const isWork = h >= 9 && h < 18;
                return (
                  <tr key={tz} className="border-b border-border last:border-0">
                    <td className="p-3 font-medium">{zones.find((z) => z.tz === tz)?.label || tz}</td>
                    <td className="p-3 text-center font-mono">{time.toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit", hour12: true })}</td>
                    <td className="p-3 text-center"><span className={`rounded-full px-2 py-1 text-xs font-medium ${isWork ? "bg-green-500/10 text-green-600" : h >= 6 && h < 22 ? "bg-yellow-500/10 text-yellow-600" : "bg-red-500/10 text-red-600"}`}>{isWork ? "Work hours" : h >= 6 && h < 22 ? "Available" : "Sleeping"}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
