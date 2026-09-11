"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { convertCase, caseOptions, type TextCase } from "@/lib/tools/text-case";

export default function TextCaseConverterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedCase, setSelectedCase] = useState<TextCase>("upper");

  const handleConvert = () => {
    setOutput(convertCase(input, selectedCase));
  };

  return (
    <>
      <ToolInput label="Enter your text" value={input} onChange={setInput} placeholder="Hello World from iamnoobs" />

      <div className="flex flex-wrap gap-2">
        {caseOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setSelectedCase(opt.value)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${selectedCase === opt.value ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleConvert} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Convert Case</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>

      <ToolOutput label="Converted Text" value={output} downloadFilename="converted.txt" />
    </>
  );
}
