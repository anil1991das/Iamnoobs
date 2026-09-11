"use client";
import { useState } from "react";
import { gitCommandTemplates } from "@/lib/tools/css-design-tools";
import CopyButton from "@/components/copy-button";

export default function GitCommandGeneratorClient() {
  const [search, setSearch] = useState("");
  const [vars, setVars] = useState<Record<string, string>>({});

  const filtered = gitCommandTemplates.filter((t) => t.label.toLowerCase().includes(search.toLowerCase()));

  const replaceVars = (cmd: string) => {
    return cmd.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `<${key}>`);
  };

  return (
    <div className="space-y-6">
      <label className="space-y-1">
        <span className="text-sm font-medium">Search Commands</span>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="e.g. branch, merge, stash..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
      </label>

      <div className="space-y-3">
        {filtered.map((t, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-4 space-y-2">
            <p className="text-sm font-medium">{t.label}</p>
            {t.vars.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {t.vars.map((v) => (
                  <input key={v} value={vars[v] || ""} onChange={(e) => setVars((p) => ({ ...p, [v]: e.target.value }))} placeholder={v} className="w-32 rounded-lg border border-border bg-background px-2 py-1 font-mono text-xs" />
                ))}
              </div>
            )}
            <div className="flex items-center gap-2">
              <code className="flex-1 rounded-lg bg-background px-3 py-2 font-mono text-sm">{replaceVars(t.command)}</code>
              <CopyButton text={replaceVars(t.command)} label="Copy" />
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center text-sm text-muted">No matching commands found.</p>}
    </div>
  );
}
