"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { jsonToCsv } from "@/lib/tools/json-csv";

export default function JsonToCsvClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      setOutput(jsonToCsv(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="JSON Array" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder='[{"name":"John","age":30},{"name":"Jane","age":25}]' />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} onProcess={handleConvert} processLabel="Convert to CSV" disabled={!input.trim()} />
      <ToolOutput label="CSV Output" value={output} downloadFilename="data.csv" />
    </>
  );
}
