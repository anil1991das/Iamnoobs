"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { shuffleText } from "@/lib/tools/text-processing";

export default function TextShuffleClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"characters" | "words" | "lines">("words");

  const modes = [
    { key: "characters" as const, label: "Characters" },
    { key: "words" as const, label: "Words" },
    { key: "lines" as const, label: "Lines" },
  ];

  return (
    <>
      <ToolInput label="Text to shuffle" value={input} onChange={setInput} placeholder="The quick brown fox jumps over the lazy dog" />
      <div className="flex gap-2 flex-wrap">
        {modes.map((m) => (
          <button key={m.key} onClick={() => setMode(m.key)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${mode === m.key ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{m.label}</button>
        ))}
      </div>
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={() => setOutput(shuffleText(input, mode))} processLabel="Shuffle" disabled={!input.trim()} />
      <ToolOutput label="Shuffled Text" value={output} downloadFilename="shuffled.txt" />
    </>
  );
}
