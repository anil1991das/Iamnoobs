"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateCronExpression, explainCron, cronPresets } from "@/lib/tools/dev-helpers";

export default function CronGeneratorClient() {
  const [minute, setMinute] = useState("*");
  const [hour, setHour] = useState("*");
  const [day, setDay] = useState("*");
  const [month, setMonth] = useState("*");
  const [weekday, setWeekday] = useState("*");
  const [expression, setExpression] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleGenerate = () => {
    const expr = generateCronExpression(minute, hour, day, month, weekday);
    setExpression(expr);
    setExplanation(explainCron(expr));
  };

  const applyPreset = (preset: typeof cronPresets[0]) => {
    const [m, h, d, mo, w] = preset.value.split(" ");
    setMinute(m); setHour(h); setDay(d); setMonth(mo); setWeekday(w);
    setExpression(preset.value);
    setExplanation(explainCron(preset.value));
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {cronPresets.map((p) => (
            <button key={p.label} onClick={() => applyPreset(p)} className="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-foreground hover:bg-primary/10">{p.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: "Minute", value: minute, set: setMinute, hint: "0-59" },
            { label: "Hour", value: hour, set: setHour, hint: "0-23" },
            { label: "Day", value: day, set: setDay, hint: "1-31" },
            { label: "Month", value: month, set: setMonth, hint: "1-12" },
            { label: "Weekday", value: weekday, set: setWeekday, hint: "0-6" },
          ].map((f) => (
            <div key={f.label}><label className="text-xs text-muted">{f.label} ({f.hint})</label>
              <input type="text" value={f.value} onChange={(e) => f.set(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-center" /></div>
          ))}
        </div>
      </div>
      <ActionButtons onClear={() => { setExpression(""); setExplanation(""); }} onProcess={handleGenerate} processLabel="Generate" />
      {expression && (
        <>
          <ToolOutput value={expression} />
          {explanation && <div className="rounded-xl border border-border bg-card p-4"><p className="text-sm text-foreground">{explanation}</p></div>}
        </>
      )}
    </>
  );
}
