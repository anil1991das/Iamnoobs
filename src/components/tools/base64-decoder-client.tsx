"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { decodeBase64 } from "@/lib/tools/base64";

export default function Base64DecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleDecode = () => {
    setError("");
    try {
      setOutput(decodeBase64(input));
    } catch {
      setError("Invalid Base64 string");
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="Paste Base64 string" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="SGVsbG8gV29ybGQ=" />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <div className="flex flex-wrap gap-3">
        <button onClick={handleDecode} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Decode Base64</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} />
      </div>
      <ToolOutput label="Decoded Text" value={output} downloadFilename="decoded.txt" />
    </>
  );
}
