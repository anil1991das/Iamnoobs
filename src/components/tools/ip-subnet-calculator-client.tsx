"use client";
import { useState, useMemo } from "react";
import { calculateSubnet } from "@/lib/tools/css-design-tools";
import CopyButton from "@/components/copy-button";

export default function IpSubnetCalculatorClient() {
  const [ip, setIp] = useState("192.168.1.0");
  const [cidr, setCidr] = useState(24);
  const [error, setError] = useState("");

  const result = useMemo(() => {
    try {
      setError("");
      return calculateSubnet(ip, cidr);
    } catch (e) {
      setError((e as Error).message);
      return null;
    }
  }, [ip, cidr]);

  const fields = result ? [
    ["Network Address", result.networkAddress],
    ["Broadcast Address", result.broadcastAddress],
    ["Subnet Mask", result.subnetMask],
    ["Wildcard Mask", result.wildcardMask],
    ["First Host", result.firstHost],
    ["Last Host", result.lastHost],
    ["Total Usable Hosts", result.totalHosts.toLocaleString()],
    ["CIDR Notation", `/${result.cidr}`],
  ] : [];

  const outputText = fields.map(([k, v]) => `${k}: ${v}`).join("\n");

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium">IP Address</span>
          <input value={ip} onChange={(e) => setIp(e.target.value)} placeholder="192.168.1.0" className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm" />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium">CIDR: /{cidr}</span>
          <input type="range" min={0} max={32} value={cidr} onChange={(e) => setCidr(Number(e.target.value))} className="w-full" />
        </label>
      </div>

      {error && <p className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</p>}

      {result && (
        <div className="space-y-2">
          <div className="overflow-hidden rounded-xl border border-border">
            {fields.map(([label, value], i) => (
              <div key={label} className={`flex justify-between px-4 py-3 text-sm ${i % 2 ? "bg-card" : "bg-background"}`}>
                <span className="text-muted">{label}</span>
                <span className="font-mono font-medium">{value}</span>
              </div>
            ))}
          </div>
          <CopyButton text={outputText} label="Copy All" />
        </div>
      )}
    </div>
  );
}
