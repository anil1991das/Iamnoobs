"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateChecksum } from "@/lib/tools/security-tools";

export default function ChecksumGeneratorClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [algorithm, setAlgorithm] = useState("SHA-256");

  const algorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];

  const handleGenerateText = async () => {
    const data = new TextEncoder().encode(input);
    const hash = await generateChecksum(data.buffer as ArrayBuffer, algorithm);
    setOutput(hash);
  };

  const handleGenerateFile = async () => {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const hash = await generateChecksum(buffer, algorithm);
    setOutput(`File: ${file.name}\nAlgorithm: ${algorithm}\nChecksum: ${hash}`);
  };

  return (
    <>
      <ToolInput label="Text input" value={input} onChange={setInput} placeholder="Enter text to generate checksum..." />
      <div className="rounded-xl border border-border bg-card p-6">
        <label className="block text-sm font-medium text-foreground mb-2">Or upload a file</label>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
      </div>
      <div className="flex gap-2 flex-wrap">
        {algorithms.map((alg) => (
          <button key={alg} onClick={() => setAlgorithm(alg)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${algorithm === alg ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{alg}</button>
        ))}
      </div>
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setFile(null); }} onProcess={file ? handleGenerateFile : handleGenerateText} processLabel="Generate Checksum" disabled={!input.trim() && !file} />
      <ToolOutput label="Checksum" value={output} downloadFilename="checksum.txt" />
    </>
  );
}
