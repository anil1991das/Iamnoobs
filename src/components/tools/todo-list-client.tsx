"use client";

import { useState, useEffect, useCallback } from "react";

interface TodoItem { id: string; text: string; done: boolean; createdAt: number }

const STORAGE_KEY = "iamnoobs_todo_list";

export default function TodoListClient() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  const save = useCallback((items: TodoItem[]) => {
    setTodos(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, []);

  const add = () => {
    if (!input.trim()) return;
    save([...todos, { id: crypto.randomUUID(), text: input.trim(), done: false, createdAt: Date.now() }]);
    setInput("");
  };

  const toggle = (id: string) => save(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id: string) => save(todos.filter((t) => t.id !== id));
  const clearDone = () => save(todos.filter((t) => !t.done));

  const filtered = todos.filter((t) => filter === "all" ? true : filter === "active" ? !t.done : t.done);
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4">
        <form onSubmit={(e) => { e.preventDefault(); add(); }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task..." className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
          <button type="submit" className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white">Add</button>
        </form>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {(["all", "active", "completed"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize ${filter === f ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{f}</button>
          ))}
        </div>
        <span className="text-xs text-muted">{doneCount}/{todos.length} done</span>
        {doneCount > 0 && <button onClick={clearDone} className="text-xs text-danger hover:underline">Clear completed</button>}
      </div>
      <div className="space-y-2">
        {filtered.length === 0 && <p className="text-center text-sm text-muted py-8">{todos.length === 0 ? "No tasks yet" : "No matching tasks"}</p>}
        {filtered.map((t) => (
          <div key={t.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} className="h-5 w-5 rounded accent-primary" />
            <span className={`flex-1 text-sm ${t.done ? "line-through text-muted" : "text-foreground"}`}>{t.text}</span>
            <button onClick={() => remove(t.id)} className="text-danger text-xs hover:underline">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
