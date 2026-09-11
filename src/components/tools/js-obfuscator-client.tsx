"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { basicObfuscate } from "@/lib/tools/dev-helpers";

export default function JsObfuscatorClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleObfuscate = () => setOutput(basicObfuscate(input));

  return (
    <>
      <ToolInput value={input} onChange={setInput} placeholder='console.log("Hello World");' label="JavaScript Code" rows={8} />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={handleObfuscate} processLabel="Obfuscate" disabled={!input} />
      {output && <ToolOutput value={output} />}
      <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted">
        <p><strong>Note:</strong> This uses basic eval-based obfuscation (encoding to character codes). For production-grade obfuscation, use <a href="https://obfuscator.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">javascript-obfuscator</a>.</p>
      </div>
    </>
  );
}
