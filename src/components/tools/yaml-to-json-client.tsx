"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { yamlToJson } from "@/lib/tools/yaml-json";

export default function YamlToJsonClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      setOutput(yamlToJson(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="YAML Input" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="name: John&#10;age: 30&#10;hobbies:&#10;  - reading&#10;  - coding" />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} onProcess={handleConvert} processLabel="Convert to JSON" disabled={!input.trim()} />
      <ToolOutput label="JSON Output" value={output} downloadFilename="data.json" />
    </>
  );
}
