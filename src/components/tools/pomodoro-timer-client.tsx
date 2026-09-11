"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Phase = "work" | "break" | "longBreak";

export default function PomodoroTimerClient() {
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [longBreakMin, setLongBreakMin] = useState(15);
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>("work");
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getPhaseTime = useCallback((p: Phase) => {
    if (p === "work") return workMin * 60;
    if (p === "break") return breakMin * 60;
    return longBreakMin * 60;
  }, [workMin, breakMin, longBreakMin]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            if (phase === "work") {
              const next = (sessions + 1) % 4 === 0 ? "longBreak" : "break";
              setSessions((c) => c + 1);
              setPhase(next);
              return next === "longBreak" ? longBreakMin * 60 : breakMin * 60;
            }
            setPhase("work");
            return workMin * 60;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, phase, sessions, workMin, breakMin, longBreakMin]);

  const reset = () => { setRunning(false); setPhase("work"); setSeconds(workMin * 60); setSessions(0); };
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const colors: Record<Phase, string> = { work: "text-red-500", break: "text-green-500", longBreak: "text-blue-500" };
  const labels: Record<Phase, string> = { work: "Focus Time", break: "Short Break", longBreak: "Long Break" };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <p className={`text-sm font-semibold uppercase tracking-wider ${colors[phase]}`}>{labels[phase]}</p>
        <p className={`text-7xl font-mono font-bold mt-2 ${colors[phase]}`}>{mm}:{ss}</p>
        <p className="text-xs text-muted mt-2">Sessions completed: {sessions}</p>
      </div>
      <div className="flex gap-3">
        <button onClick={() => { setRunning(!running); if (!running && seconds === getPhaseTime(phase)) setSeconds(getPhaseTime(phase)); }} className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white">{running ? "Pause" : "Start"}</button>
        <button onClick={reset} className="rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-foreground">Reset</button>
      </div>
      {!running && (
        <div className="grid grid-cols-3 gap-3 w-full max-w-md">
          <div><label className="text-xs text-muted">Work (min)</label><input type="number" value={workMin} onChange={(e) => { const v = Number(e.target.value); setWorkMin(v); if (phase === "work") setSeconds(v * 60); }} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-center" /></div>
          <div><label className="text-xs text-muted">Break (min)</label><input type="number" value={breakMin} onChange={(e) => { const v = Number(e.target.value); setBreakMin(v); if (phase === "break") setSeconds(v * 60); }} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-center" /></div>
          <div><label className="text-xs text-muted">Long Break</label><input type="number" value={longBreakMin} onChange={(e) => { const v = Number(e.target.value); setLongBreakMin(v); if (phase === "longBreak") setSeconds(v * 60); }} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-center" /></div>
        </div>
      )}
    </div>
  );
}
