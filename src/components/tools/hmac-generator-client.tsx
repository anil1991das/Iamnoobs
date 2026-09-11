"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateHmac, hmacAlgorithms, type HmacAlgorithm } from "@/lib/tools/hmac-generator";

export default function HmacGeneratorClient() {
  const [message, setMessage] = useState("");
  const [secret, setSecret] = useState("");
  const [algorithm, setAlgorithm] = useState<HmacAlgorithm>("SHA-256");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    try {
      const hmac = await generateHmac(message, secret, algorithm);
      setOutput(hmac);
    } catch (e) {
      setOutput("Error: " + (e as Error).message);
    }
  };

  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full rounded-xl border border-border bg-card p-3 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter message..." />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Secret Key</label>
          <input type="text" value={secret} onChange={(e) => setSecret(e.target.value)} className="w-full rounded-xl border border-border bg-card p-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter secret key..." />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {hmacAlgorithms.map((alg) => (
          <button key={alg} onClick={() => setAlgorithm(alg)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${algorithm === alg ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>
            {alg}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleGenerate} disabled={!message.trim() || !secret.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Generate HMAC</button>
        <ActionButtons onClear={() => { setMessage(""); setSecret(""); setOutput(""); }} />
      </div>

      <ToolOutput label={`HMAC-${algorithm}`} value={output} downloadFilename="hmac.txt" />
    </>
  );
}
