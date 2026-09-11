"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { csvToJson } from "@/lib/tools/json-csv";

export default function CsvToJsonClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      setOutput(csvToJson(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="CSV Data" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="name,age&#10;John,30&#10;Jane,25" />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} onProcess={handleConvert} processLabel="Convert to JSON" disabled={!input.trim()} />
      <ToolOutput label="JSON Output" value={output} downloadFilename="data.json" />
    </>
  );
}
