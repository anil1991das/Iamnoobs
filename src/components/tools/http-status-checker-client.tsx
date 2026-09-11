"use client";

import { useState } from "react";
import { httpStatusCodes, getStatusDescription } from "@/lib/tools/http-tools";

export default function HttpStatusCheckerClient() {
  const [search, setSearch] = useState("");

  const filtered = Object.entries(httpStatusCodes).filter(
    ([code, desc]) => code.includes(search) || desc.toLowerCase().includes(search.toLowerCase())
  );

  const getColor = (code: string) => {
    const n = parseInt(code);
    if (n < 200) return "text-blue-400";
    if (n < 300) return "text-green-500";
    if (n < 400) return "text-yellow-500";
    if (n < 500) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">HTTP Status Codes Reference</h3>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by code or description..." className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
      <div className="space-y-2 max-h-[500px] overflow-y-auto">
        {filtered.map(([code, desc]) => (
          <div key={code} className="flex items-center gap-3 rounded-lg bg-accent/50 p-3">
            <span className={`font-mono font-bold text-lg min-w-[50px] ${getColor(code)}`}>{code}</span>
            <span className="text-sm text-foreground">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
