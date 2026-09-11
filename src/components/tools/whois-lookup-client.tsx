"use client";

import { useState } from "react";

export default function WhoisLookupClient() {
  const [domain, setDomain] = useState("");

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div><label className="text-sm font-medium text-foreground">Domain Name</label>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm mt-1" /></div>
        {domain && (
          <div className="flex gap-2 flex-wrap">
            {[
              { name: "WHOIS.com", url: `https://www.whois.com/whois/${encodeURIComponent(domain)}` },
              { name: "ICANN Lookup", url: `https://lookup.icann.org/en/lookup?name=${encodeURIComponent(domain)}` },
              { name: "who.is", url: `https://who.is/whois/${encodeURIComponent(domain)}` },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover">Lookup on {s.name} →</a>
            ))}
          </div>
        )}
      </div>
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted space-y-2">
        <p><strong>What is WHOIS?</strong></p>
        <p>WHOIS is a protocol for querying domain registration data. It can tell you:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Domain registrar and registration date</li>
          <li>Expiry date and nameservers</li>
          <li>Registrant contact info (if not privacy-protected)</li>
          <li>Domain status (active, pending delete, etc.)</li>
        </ul>
        <p>WHOIS queries require server-side access, so we link to trusted lookup services above.</p>
      </div>
    </div>
  );
}
