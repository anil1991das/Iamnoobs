"use client";
import { useState, useMemo } from "react";

export default function TwitterCharacterCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const maxChars = 280;
    const urlRegex = /https?:\/\/[^\s]+/g;
    const urls = text.match(urlRegex) || [];
    const urlChars = urls.reduce((sum, url) => sum + url.length, 0);
    const tcoLength = urls.length * 23; // Twitter wraps URLs to 23 chars
    const effectiveLength = text.length - urlChars + tcoLength;
    const remaining = maxChars - effectiveLength;
    const hashtags = (text.match(/#\w+/g) || []).length;
    const mentions = (text.match(/@\w+/g) || []).length;
    return { effectiveLength, remaining, hashtags, mentions, urls: urls.length, maxChars };
  }, [text]);

  const pct = Math.min((stats.effectiveLength / stats.maxChars) * 100, 100);
  const color = stats.remaining < 0 ? "text-red-500" : stats.remaining < 20 ? "text-yellow-500" : "text-green-500";

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Compose Tweet</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} placeholder="What's happening?" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <div className="flex items-center gap-4">
        <div className="relative h-10 w-10">
          <svg className="h-10 w-10 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-border" strokeWidth="3" />
            <circle cx="18" cy="18" r="16" fill="none" className={`${stats.remaining < 0 ? "stroke-red-500" : stats.remaining < 20 ? "stroke-yellow-500" : "stroke-primary"}`} strokeWidth="3" strokeDasharray={`${pct} 100`} strokeLinecap="round" />
          </svg>
        </div>
        <span className={`text-2xl font-bold ${color}`}>{stats.remaining}</span>
        <span className="text-sm text-muted">characters remaining</span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-3 text-center">
          <p className="text-xs text-muted">Characters</p>
          <p className="text-xl font-bold">{stats.effectiveLength}/{stats.maxChars}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3 text-center">
          <p className="text-xs text-muted">Hashtags</p>
          <p className="text-xl font-bold">{stats.hashtags}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3 text-center">
          <p className="text-xs text-muted">Mentions</p>
          <p className="text-xl font-bold">{stats.mentions}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-3 text-center">
          <p className="text-xs text-muted">URLs</p>
          <p className="text-xl font-bold">{stats.urls}</p>
        </div>
      </div>

      {stats.remaining < 0 && (
        <p className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">Tweet exceeds the 280 character limit by {Math.abs(stats.remaining)} characters.</p>
      )}
    </div>
  );
}
