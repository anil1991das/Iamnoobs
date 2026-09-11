"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { basicDeobfuscate } from "@/lib/tools/dev-helpers";

export default function JsDeobfuscatorClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleDeobfuscate = () => {
    setError("");
    try { setOutput(basicDeobfuscate(input)); }
    catch { setError("Could not deobfuscate. Only eval-based obfuscation is supported."); }
  };

  return (
    <>
      <ToolInput value={input} onChange={setInput} placeholder="eval(String.fromCharCode(...))" label="Obfuscated JavaScript" rows={6} />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">{error}</div>}
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} onProcess={handleDeobfuscate} processLabel="Deobfuscate" disabled={!input} />
      {output && <ToolOutput value={output} />}
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted">
        <p><strong>Note:</strong> This tool can only reverse basic eval(String.fromCharCode(...)) obfuscation. Advanced obfuscation techniques require specialized tools.</p>
      </div>
    </>
  );
}
