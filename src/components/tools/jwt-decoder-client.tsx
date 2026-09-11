"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { decodeJwt, type JwtParts } from "@/lib/tools/jwt";

export default function JwtDecoderClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<JwtParts | null>(null);
  const [error, setError] = useState("");

  const handleDecode = () => {
    setError("");
    try {
      setResult(decodeJwt(input));
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <>
      <ToolInput label="Paste JWT token" value={input} onChange={(v) => { setInput(v); setError(""); setResult(null); }} placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <div className="flex flex-wrap gap-3">
        <button onClick={handleDecode} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Decode JWT</button>
        <ActionButtons onClear={() => { setInput(""); setResult(null); setError(""); }} />
      </div>

      {result && (
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Header</h3>
            <pre className="overflow-auto rounded-xl border border-border bg-card p-3 text-xs text-foreground">{result.header}</pre>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Payload</h3>
            <pre className="overflow-auto rounded-xl border border-border bg-card p-3 text-xs text-foreground">{result.payload}</pre>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {result.issuedAt && <span className="text-muted">Issued: {result.issuedAt}</span>}
            {result.expiresAt && <span className={result.isExpired ? "text-danger" : "text-green-600"}>Expires: {result.expiresAt} {result.isExpired ? "(EXPIRED)" : "(Valid)"}</span>}
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Signature</h3>
            <code className="break-all text-xs text-muted">{result.signature}</code>
          </div>
        </div>
      )}
    </>
  );
}
