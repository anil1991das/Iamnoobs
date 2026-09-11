"use client";

import { useState, useEffect, useCallback } from "react";

interface Note { id: string; title: string; content: string; updatedAt: number }

const STORAGE_KEY = "iamnoobs_notes";

export default function NotesAppClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) { const n = JSON.parse(saved); setNotes(n); if (n.length) setActiveId(n[0].id); }
  }, []);

  const save = useCallback((items: Note[]) => {
    setNotes(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, []);

  const active = notes.find((n) => n.id === activeId);

  const addNote = () => {
    const note: Note = { id: crypto.randomUUID(), title: "Untitled", content: "", updatedAt: Date.now() };
    save([note, ...notes]);
    setActiveId(note.id);
  };

  const update = (field: "title" | "content", value: string) => {
    if (!activeId) return;
    save(notes.map((n) => (n.id === activeId ? { ...n, [field]: value, updatedAt: Date.now() } : n)));
  };

  const deleteNote = (id: string) => {
    const filtered = notes.filter((n) => n.id !== id);
    save(filtered);
    if (activeId === id) setActiveId(filtered.length ? filtered[0].id : null);
  };

  return (
    <div className="grid grid-cols-[250px_1fr] gap-4 min-h-[400px]">
      <div className="rounded-xl border border-border bg-card p-3 space-y-2 overflow-y-auto max-h-[500px]">
        <button onClick={addNote} className="w-full rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white">+ New Note</button>
        {notes.map((n) => (
          <div key={n.id} onClick={() => setActiveId(n.id)} className={`flex items-center justify-between cursor-pointer rounded-lg p-2 text-sm ${activeId === n.id ? "bg-primary/10 text-primary" : "hover:bg-accent text-foreground"}`}>
            <span className="truncate flex-1">{n.title || "Untitled"}</span>
            <button onClick={(e) => { e.stopPropagation(); deleteNote(n.id); }} className="text-danger text-xs ml-2">✕</button>
          </div>
        ))}
        {notes.length === 0 && <p className="text-xs text-muted text-center py-4">No notes yet</p>}
      </div>
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        {active ? (
          <>
            <input type="text" value={active.title} onChange={(e) => update("title", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-lg font-semibold" placeholder="Note title" />
            <textarea value={active.content} onChange={(e) => update("content", e.target.value)} className="w-full flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm min-h-[300px] resize-y" placeholder="Write your note..." />
            <p className="text-xs text-muted">Last updated: {new Date(active.updatedAt).toLocaleString()}</p>
          </>
        ) : <p className="text-sm text-muted text-center py-20">Select or create a note</p>}
      </div>
    </div>
  );
}
