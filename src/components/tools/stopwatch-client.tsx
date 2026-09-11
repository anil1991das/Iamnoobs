"use client";

import { useState, useRef, useEffect } from "react";

export default function StopwatchClient() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (running) {
      startRef.current = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startRef.current);
      }, 10);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const format = (ms: number) => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${String(centis).padStart(2, "0")}`;
  };

  const reset = () => { setRunning(false); setTime(0); setLaps([]); };
  const lap = () => setLaps([time, ...laps]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="rounded-2xl border border-border bg-card p-10 text-center">
        <p className="text-6xl font-mono font-bold text-foreground tracking-wider">{format(time)}</p>
      </div>
      <div className="flex gap-3">
        <button onClick={() => setRunning(!running)} className={`rounded-xl px-8 py-3 text-sm font-semibold text-white ${running ? "bg-red-500" : "bg-green-500"}`}>{running ? "Stop" : "Start"}</button>
        {running && <button onClick={lap} className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-foreground">Lap</button>}
        {!running && time > 0 && <button onClick={reset} className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-foreground">Reset</button>}
      </div>
      {laps.length > 0 && (
        <div className="w-full max-w-sm space-y-1">
          <h4 className="text-sm font-semibold text-foreground">Laps</h4>
          {laps.map((l, i) => (
            <div key={i} className="flex justify-between rounded-lg bg-accent/50 p-2 text-sm">
              <span className="text-muted">Lap {laps.length - i}</span>
              <span className="font-mono font-medium">{format(l)}</span>
              {i < laps.length - 1 && <span className="font-mono text-xs text-muted">+{format(l - laps[i + 1])}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
