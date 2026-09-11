"use client";

import { useState } from "react";

export default function GraphqlTesterClient() {
  const [endpoint, setEndpoint] = useState("");
  const [query, setQuery] = useState(`{
  __schema {
    types {
      name
    }
  }
}`);
  const [variables, setVariables] = useState("");
  const [headerStr, setHeaderStr] = useState("Content-Type: application/json");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [time, setTime] = useState(0);

  const handleSend = async () => {
    if (!endpoint || !query) return;
    setLoading(true);
    setError("");
    setResponse("");
    const start = performance.now();
    try {
      const headerObj: Record<string, string> = {};
      headerStr.split("\n").forEach((l) => {
        const [k, ...v] = l.split(":");
        if (k?.trim() && v.length) headerObj[k.trim()] = v.join(":").trim();
      });
      let vars = undefined;
      if (variables.trim()) vars = JSON.parse(variables);
      const res = await fetch(endpoint, { method: "POST", headers: headerObj, body: JSON.stringify({ query, variables: vars }) });
      const json = await res.json();
      setResponse(JSON.stringify(json, null, 2));
      setTime(Math.round(performance.now() - start));
    } catch (e) { setError((e as Error).message); }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div><label className="text-sm font-medium text-foreground">GraphQL Endpoint</label>
          <input type="text" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} placeholder="https://api.example.com/graphql" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" /></div>
        <div><label className="text-sm font-medium text-foreground">Query</label>
          <textarea value={query} onChange={(e) => setQuery(e.target.value)} rows={8} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono" /></div>
        <div><label className="text-xs text-muted">Variables (JSON, optional)</label>
          <textarea value={variables} onChange={(e) => setVariables(e.target.value)} rows={3} placeholder='{"id": "1"}' className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono" /></div>
        <div><label className="text-xs text-muted">Headers (one per line)</label>
          <textarea value={headerStr} onChange={(e) => setHeaderStr(e.target.value)} rows={2} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono" /></div>
        <button onClick={handleSend} disabled={loading || !endpoint} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{loading ? "Sending..." : "Execute Query"}</button>
      </div>
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}
      {response && (
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 mb-2"><span className="text-xs text-muted">{time}ms</span></div>
          <pre className="rounded-lg bg-accent/30 p-3 text-xs font-mono max-h-96 overflow-auto whitespace-pre-wrap">{response}</pre>
        </div>
      )}
      <p className="text-xs text-muted">Requests are made from your browser. CORS restrictions may apply.</p>
    </div>
  );
}
