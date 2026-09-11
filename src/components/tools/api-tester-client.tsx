"use client";

import { useState } from "react";

interface ApiResponse { status: number; statusText: string; headers: Record<string, string>; body: string; time: number }

export default function ApiTesterClient() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState("Content-Type: application/json");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!url) return;
    setLoading(true);
    setError("");
    setResponse(null);
    const start = performance.now();
    try {
      const headerObj: Record<string, string> = {};
      headers.split("\n").forEach((l) => {
        const [k, ...v] = l.split(":");
        if (k?.trim() && v.length) headerObj[k.trim()] = v.join(":").trim();
      });
      const opts: RequestInit = { method, headers: headerObj };
      if (method !== "GET" && method !== "HEAD" && body) opts.body = body;
      const res = await fetch(url, opts);
      const resHeaders: Record<string, string> = {};
      res.headers.forEach((v, k) => { resHeaders[k] = v; });
      const text = await res.text();
      setResponse({ status: res.status, statusText: res.statusText, headers: resHeaders, body: text, time: Math.round(performance.now() - start) });
    } catch (e) { setError((e as Error).message); }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div className="flex gap-2">
          {["GET", "POST", "PUT", "PATCH", "DELETE"].map((m) => (
            <button key={m} onClick={() => setMethod(m)} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${method === m ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{m}</button>
          ))}
        </div>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://api.example.com/endpoint" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
        <div><label className="text-xs text-muted">Headers (one per line, Key: Value)</label>
          <textarea value={headers} onChange={(e) => setHeaders(e.target.value)} rows={3} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono" /></div>
        {method !== "GET" && method !== "HEAD" && (
          <div><label className="text-xs text-muted">Body</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4} placeholder='{"key": "value"}' className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono" /></div>
        )}
        <button onClick={handleSend} disabled={loading || !url} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{loading ? "Sending..." : "Send Request"}</button>
      </div>
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}
      {response && (
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-sm font-bold ${response.status < 300 ? "bg-green-500/10 text-green-600" : response.status < 400 ? "bg-yellow-500/10 text-yellow-600" : "bg-red-500/10 text-red-600"}`}>{response.status} {response.statusText}</span>
            <span className="text-xs text-muted">{response.time}ms</span>
          </div>
          <div><h4 className="text-xs font-semibold text-muted mb-1">Response Headers</h4>
            <div className="rounded-lg bg-accent/30 p-2 text-xs font-mono max-h-24 overflow-y-auto">{Object.entries(response.headers).map(([k, v]) => <div key={k}><span className="text-primary">{k}:</span> {v}</div>)}</div></div>
          <div><h4 className="text-xs font-semibold text-muted mb-1">Response Body</h4>
            <pre className="rounded-lg bg-accent/30 p-3 text-xs font-mono max-h-64 overflow-auto whitespace-pre-wrap">{(() => { try { return JSON.stringify(JSON.parse(response.body), null, 2); } catch { return response.body; } })()}</pre></div>
        </div>
      )}
      <p className="text-xs text-muted">Note: Requests are made from your browser. CORS restrictions may prevent some APIs from responding.</p>
    </div>
  );
}
