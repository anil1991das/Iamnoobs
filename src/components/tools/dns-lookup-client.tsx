"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";

export default function DnsLookupClient() {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState<{ type: string; value: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    setError("");
    setLoading(true);
    setResults([]);
    try {
      const response = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`);
      const data = await response.json();
      const entries: { type: string; value: string }[] = [];
      if (data.Answer) {
        data.Answer.forEach((a: { type: number; data: string }) => {
          const typeMap: Record<number, string> = { 1: "A", 5: "CNAME", 28: "AAAA", 15: "MX", 16: "TXT", 2: "NS" };
          entries.push({ type: typeMap[a.type] || `Type ${a.type}`, value: a.data });
        });
      }
      if (entries.length === 0) entries.push({ type: "Info", value: "No records found for this domain" });
      setResults(entries);
    } catch {
      setError("DNS lookup failed. Check the domain and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolInput label="Domain name" value={domain} onChange={(v) => { setDomain(v); setError(""); }} placeholder="example.com" />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setDomain(""); setResults([]); setError(""); }} onProcess={handleLookup} processLabel={loading ? "Looking up..." : "Lookup DNS"} disabled={!domain.trim() || loading} />
      {results.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6 space-y-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">DNS Records</h3>
          {results.map((r, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-accent/50 p-3">
              <span className="min-w-[80px] rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{r.type}</span>
              <span className="text-sm text-foreground font-mono break-all">{r.value}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
