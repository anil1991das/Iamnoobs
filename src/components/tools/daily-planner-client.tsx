"use client";

import { useState, useEffect, useCallback } from "react";

interface Task { id: string; time: string; text: string; done: boolean }

const STORAGE_KEY = "iamnoobs_daily_planner";

export default function DailyPlannerClient() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [tasks, setTasks] = useState<Record<string, Task[]>>({});
  const [time, setTime] = useState("09:00");
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const save = useCallback((t: Record<string, Task[]>) => {
    setTasks(t);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(t));
  }, []);

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
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => { const d = new Date(date); d.setDate(d.getDate() - 1); setDate(d.toISOString().split("T")[0]); }} className="rounded-lg bg-accent px-3 py-2 text-sm">←</button>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
          <button onClick={() => { const d = new Date(date); d.setDate(d.getDate() + 1); setDate(d.toISOString().split("T")[0]); }} className="rounded-lg bg-accent px-3 py-2 text-sm">→</button>
          <span className="text-sm font-medium text-foreground ml-auto">{new Date(date + "T12:00").toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}</span>
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
