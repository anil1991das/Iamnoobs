"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { jsonToYaml } from "@/lib/tools/yaml-json";

export default function JsonToYamlClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      setOutput(jsonToYaml(input));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <>
      <ToolInput label="JSON Input" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder='{"name":"John","age":30}' />
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} onProcess={handleConvert} processLabel="Convert to YAML" disabled={!input.trim()} />
      <ToolOutput label="YAML Output" value={output} downloadFilename="data.yaml" />
    </>
  );
}
