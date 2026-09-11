"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateHash, hashAlgorithms, type HashAlgorithm } from "@/lib/tools/hash-generator";

export default function HashGeneratorClient() {
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA-256");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    try {
      const hash = await generateHash(input, algorithm);
      setOutput(hash);
    } catch (e) {
      setOutput("Error: " + (e as Error).message);
    }
  };

  return (
    <>
      <ToolInput label="Enter text to hash" value={input} onChange={setInput} placeholder="Hello World" />

      <div className="flex flex-wrap gap-2">
        {hashAlgorithms.map((alg) => (
          <button key={alg} onClick={() => setAlgorithm(alg)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${algorithm === alg ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>
            {alg}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleGenerate} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Generate Hash</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>

      <ToolOutput label={`${algorithm} Hash`} value={output} downloadFilename="hash.txt" />
    </>
  );
}
