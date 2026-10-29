"use client";

import { useState, useEffect, useCallback } from "react";
import { formatLocalDate } from "@/lib/utils/date";

interface Task { id: string; time: string; text: string; done: boolean }

const STORAGE_KEY = "iamnoobs_daily_planner";

function isTask(value: unknown): value is Task {
  if (!value || typeof value !== "object") return false;
  const task = value as Record<string, unknown>;
  return (
    typeof task.id === "string" &&
    typeof task.time === "string" &&
    typeof task.text === "string" &&
    typeof task.done === "boolean"
  );
}

function isTaskSchedule(value: unknown): value is Record<string, Task[]> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every(
      (tasks) => Array.isArray(tasks) && tasks.every(isTask),
    )
  );
}

export default function DailyPlannerClient() {
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState<Record<string, Task[]>>({});
  const [time, setTime] = useState("09:00");
  const [text, setText] = useState("");
  const [storageError, setStorageError] = useState("");
  const [storageAvailable, setStorageAvailable] = useState(false);

  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (!active) return;
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (!isTaskSchedule(parsed)) {
            throw new Error("Saved planner data has an unexpected format.");
          }
          setTasks(parsed);
        }
        setStorageAvailable(true);
      } catch {
        setStorageError(
          "Saved planner data could not be read. New tasks are available for this visit only.",
        );
      }
      setDate(formatLocalDate(new Date()));
    });
    return () => {
      active = false;
    };
  }, []);

  const save = useCallback((t: Record<string, Task[]>) => {
    setTasks(t);
    if (!storageAvailable) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(t));
      setStorageError("");
    } catch {
      setStorageAvailable(false);
      setStorageError(
        "Planner changes could not be saved in this browser. They will remain available for this visit.",
      );
    }
  }, [storageAvailable]);

  const addTask = () => {
    if (!text.trim()) return;
    const dayTasks = tasks[date] || [];
    const updated = { ...tasks, [date]: [...dayTasks, { id: crypto.randomUUID(), time, text: text.trim(), done: false }].sort((a, b) => a.time.localeCompare(b.time)) };
    save(updated);
    setText("");
  };

  const toggle = (id: string) => {
    const updated = { ...tasks, [date]: (tasks[date] || []).map((t) => (t.id === id ? { ...t, done: !t.done } : t)) };
    save(updated);
  };

  const remove = (id: string) => {
    const updated = { ...tasks, [date]: (tasks[date] || []).filter((t) => t.id !== id) };
    save(updated);
  };

  const dayTasks = tasks[date] || [];

  return (
    <div className="space-y-4">
      {storageError && <p role="status" className="rounded-lg bg-danger/10 p-3 text-sm text-danger">{storageError}</p>}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-3 mb-4">
          <button type="button" disabled={!date} onClick={() => { const d = new Date(`${date}T12:00:00`); d.setDate(d.getDate() - 1); setDate(formatLocalDate(d)); }} className="rounded-lg bg-accent px-3 py-2 text-sm disabled:opacity-50">←</button>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <button type="button" disabled={!date} onClick={() => { const d = new Date(`${date}T12:00:00`); d.setDate(d.getDate() + 1); setDate(formatLocalDate(d)); }} className="rounded-lg bg-accent px-3 py-2 text-sm disabled:opacity-50">→</button>
          <span className="text-sm font-medium text-foreground ml-auto">{date ? new Date(`${date}T12:00:00`).toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" }) : "Loading date…"}</span>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); addTask(); }} className="flex gap-2">
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Task description..." className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">Add</button>
        </form>
      </div>
      <div className="space-y-2">
        {dayTasks.length === 0 && <p className="text-center text-sm text-muted py-8">No tasks planned for this day</p>}
        {dayTasks.map((t) => (
          <div key={t.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} className="h-5 w-5 accent-primary" />
            <span className="text-xs font-mono text-muted bg-accent px-2 py-1 rounded">{t.time}</span>
            <span className={`flex-1 text-sm ${t.done ? "line-through text-muted" : "text-foreground"}`}>{t.text}</span>
            <button onClick={() => remove(t.id)} className="text-danger text-xs">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}
