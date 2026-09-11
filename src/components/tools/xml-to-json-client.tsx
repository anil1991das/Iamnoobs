"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { xmlToJson } from "@/lib/tools/json-xml";

export default function XmlToJsonClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      setOutput(xmlToJson(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="Paste your XML" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder='<root><name>John</name></root>' />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Convert to JSON</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} />
      </div>
      <ToolOutput label="JSON Output" value={output} downloadFilename="output.json" />
    </>
  );
}
