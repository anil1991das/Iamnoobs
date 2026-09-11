"use client";

import { useState, useEffect, useCallback } from "react";

interface Habit { id: string; name: string; dates: string[] }

const STORAGE_KEY = "iamnoobs_habits";

const getToday = () => new Date().toISOString().split("T")[0];
const getLast7 = () => {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split("T")[0]);
  }
  return days;
};

export default function HabitTrackerClient() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [input, setInput] = useState("");
  const days = getLast7();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setHabits(JSON.parse(saved));
  }, []);

  const save = useCallback((items: Habit[]) => {
    setHabits(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, []);

  const addHabit = () => {
    if (!input.trim()) return;
    save([...habits, { id: crypto.randomUUID(), name: input.trim(), dates: [] }]);
    setInput("");
  };

  const toggleDay = (habitId: string, date: string) => {
    save(habits.map((h) => h.id === habitId ? { ...h, dates: h.dates.includes(date) ? h.dates.filter((d) => d !== date) : [...h.dates, date] } : h));
  };

  const removeHabit = (id: string) => save(habits.filter((h) => h.id !== id));

  const streaks = (h: Habit) => {
    let streak = 0;
    const today = new Date();
    for (let i = 0; ; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      if (h.dates.includes(d.toISOString().split("T")[0])) streak++;
      else break;
    }
    return streak;
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <form onSubmit={(e) => { e.preventDefault(); addHabit(); }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New habit..." className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
          <button type="submit" className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white">Add</button>
        </form>
      </div>
      {habits.length > 0 && (
        <div className="rounded-xl border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">
              <th className="text-left p-3 font-semibold text-foreground">Habit</th>
              {days.map((d) => <th key={d} className="p-2 text-center text-xs text-muted w-12">{new Date(d + "T12:00").toLocaleDateString("en", { weekday: "short" })}</th>)}
              <th className="p-2 text-center text-xs text-muted">🔥</th>
              <th className="p-2"></th>
            </tr></thead>
            <tbody>
              {habits.map((h) => (
                <tr key={h.id} className="border-b border-border last:border-0">
                  <td className="p-3 font-medium text-foreground">{h.name}</td>
                  {days.map((d) => (
                    <td key={d} className="p-2 text-center">
                      <button onClick={() => toggleDay(h.id, d)} className={`h-8 w-8 rounded-lg text-sm ${h.dates.includes(d) ? "bg-green-500 text-white" : d === getToday() ? "bg-accent hover:bg-primary/20" : "bg-accent/50"}`}>
                        {h.dates.includes(d) ? "✓" : ""}
                      </button>
                    </td>
                  ))}
                  <td className="p-2 text-center font-bold text-orange-500">{streaks(h)}</td>
                  <td className="p-2"><button onClick={() => removeHabit(h.id)} className="text-danger text-xs">✕</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {habits.length === 0 && <p className="text-center text-sm text-muted py-8">Add habits to start tracking</p>}
    </div>
  );
}
