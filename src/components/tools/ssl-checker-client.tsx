"use client";

import { useState } from "react";

export default function SslCheckerClient() {
  const [domain, setDomain] = useState("");
  const [info, setInfo] = useState("");

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">SSL Certificate Checker</h3>
      <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm" />
      <button onClick={() => setInfo(`SSL checking for "${domain}" requires a server-side API. In a static site, you can use browser DevTools > Security tab to check SSL status, or visit https://www.ssllabs.com/ssltest/ for a detailed SSL report.`)} disabled={!domain.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Check SSL</button>
      {info && (
        <div className="rounded-xl bg-accent/50 p-4 space-y-2">
          <p className="text-sm text-foreground">{info}</p>
          <a href={`https://www.ssllabs.com/ssltest/analyze.html?d=${encodeURIComponent(domain)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Check on SSL Labs →</a>
        </div>
      )}
    </div>
  );
}
