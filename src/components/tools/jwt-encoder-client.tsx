"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { encodeJwt } from "@/lib/tools/jwt";

export default function JwtEncoderClient() {
  const [header, setHeader] = useState('{\n  "alg": "HS256",\n  "typ": "JWT"\n}');
  const [payload, setPayload] = useState('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    setError("");
    try {
      setOutput(encodeJwt(header, payload));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Header (JSON)</label>
          <textarea value={header} onChange={(e) => setHeader(e.target.value)} rows={5} className="w-full rounded-xl border border-border bg-card p-3 font-mono text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Payload (JSON)</label>
          <textarea value={payload} onChange={(e) => setPayload(e.target.value)} rows={5} className="w-full rounded-xl border border-border bg-card p-3 font-mono text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
      </div>

      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleEncode} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Encode JWT</button>
        <ActionButtons onClear={() => { setOutput(""); setError(""); }} />
      </div>

      <p className="text-xs text-muted">Note: This generates an unsigned JWT for preview. Do not use in production without proper signing.</p>

      <ToolOutput label="JWT Token (Unsigned)" value={output} downloadFilename="jwt-token.txt" />
    </>
  );
}
