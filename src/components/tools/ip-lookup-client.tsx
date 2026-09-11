"use client";

import { useState, useEffect } from "react";

export default function IpLookupClient() {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((data) => { setIp(data.ip); setLoading(false); })
      .catch(() => { setError("Could not detect your IP address"); setLoading(false); });
  }, []);

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Your Public IP Address</h3>
      {loading && <p className="text-muted text-sm">Detecting your IP address...</p>}
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}
      {ip && (
        <div className="space-y-4">
          <div className="rounded-xl bg-accent/50 p-6 text-center">
            <p className="text-3xl font-bold text-primary font-mono">{ip}</p>
          </div>
          <button onClick={() => navigator.clipboard.writeText(ip)} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">Copy IP</button>
          <p className="text-xs text-muted">Note: This is your public IP as seen by external services. For detailed geolocation, check an IP geolocation service.</p>
        </div>
      )}
    </div>
  );
}
