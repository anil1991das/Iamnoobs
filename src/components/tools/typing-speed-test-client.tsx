"use client";
import { useState, useCallback, useEffect, useRef } from "react";

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog. Programming is the art of telling another human being what one wants the computer to do.",
  "In the beginning, there was nothing. Then, someone decided to write some code. And lo, bugs were created alongside features.",
  "Technology is best when it brings people together. Great things in business are never done by one person; they are done by a team of people.",
  "The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle.",
];

export default function TypingSpeedTestClient() {
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [text, setText] = useState(sampleTexts[0]);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [errors, setErrors] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const start = useCallback(() => {
    setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
    setTyped("");
    setErrors(0);
    setState("running");
    setStartTime(Date.now());
    setElapsed(0);
    inputRef.current?.focus();
    timerRef.current = setInterval(() => setElapsed(Date.now()), 100);
  }, []);

  const handleType = (value: string) => {
    if (state !== "running") return;
    setTyped(value);
    let errs = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== text[i]) errs++;
    }
    setErrors(errs);
    if (value.length >= text.length) {
      setState("done");
      clearInterval(timerRef.current);
      setElapsed(Date.now());
    }
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const timeSec = state === "idle" ? 0 : ((state === "running" ? elapsed || Date.now() : elapsed) - startTime) / 1000;
  const words = typed.trim().split(/\s+/).filter(Boolean).length;
  const wpm = timeSec > 0 ? Math.round((words / timeSec) * 60) : 0;
  const accuracy = typed.length > 0 ? Math.round(((typed.length - errors) / typed.length) * 100) : 100;
  const cpm = timeSec > 0 ? Math.round((typed.length / timeSec) * 60) : 0;

  return (
    <div className="space-y-6">
      {state !== "running" && (
        <button onClick={start} className="rounded-lg bg-primary px-6 py-2 text-sm text-white hover:bg-primary/90">
          {state === "idle" ? "Start Test" : "Try Again"}
        </button>
      )}

      <div className="rounded-xl border border-border bg-card p-4 font-mono text-sm leading-relaxed">
        {text.split("").map((char, i) => {
          let color = "text-muted";
          if (i < typed.length) color = typed[i] === char ? "text-green-500" : "text-red-500 bg-red-500/10";
          if (i === typed.length) color = "bg-primary/20 text-foreground";
          return <span key={i} className={color}>{char}</span>;
        })}
      </div>

      {state === "running" && (
        <textarea ref={inputRef} value={typed} onChange={(e) => handleType(e.target.value)} autoFocus className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" rows={3} placeholder="Start typing..." />
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-xs text-muted">WPM</p>
          <p className="text-3xl font-bold text-primary">{wpm}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-xs text-muted">CPM</p>
          <p className="text-3xl font-bold">{cpm}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-xs text-muted">Accuracy</p>
          <p className={`text-3xl font-bold ${accuracy >= 90 ? "text-green-500" : accuracy >= 70 ? "text-yellow-500" : "text-red-500"}`}>{accuracy}%</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-xs text-muted">Time</p>
          <p className="text-3xl font-bold">{Math.round(timeSec)}s</p>
        </div>
      </div>
    </div>
  );
}
