"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { decodeUrl } from "@/lib/tools/url-codec";

export default function UrlDecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleDecode = () => {
    setError("");
    try {
      setOutput(decodeUrl(input));
    } catch {
      setError("Invalid URL-encoded string");
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="Paste URL-encoded text" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="Hello%20World%21" />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <div className="flex flex-wrap gap-3">
        <button onClick={handleDecode} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Decode URL</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} />
      </div>
      <ToolOutput label="Decoded Text" value={output} downloadFilename="decoded.txt" />
    </>
  );
}
