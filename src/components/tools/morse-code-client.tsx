"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { textToMorse, morseToText } from "@/lib/tools/text-processing";

export default function MorseCodeClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleConvert = () => {
    setOutput(mode === "encode" ? textToMorse(input) : morseToText(input));
  };

  return (
    <>
      <div className="flex gap-2">
        <button onClick={() => setMode("encode")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === "encode" ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>Text → Morse</button>
        <button onClick={() => setMode("decode")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${mode === "decode" ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>Morse → Text</button>
      </div>
      <ToolInput label={mode === "encode" ? "Text to encode" : "Morse code (use / for word separator)"} value={input} onChange={setInput} placeholder={mode === "encode" ? "Hello World" : ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."} />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={handleConvert} processLabel="Convert" disabled={!input.trim()} />
      <ToolOutput label={mode === "encode" ? "Morse Code" : "Decoded Text"} value={output} downloadFilename="morse.txt" />
    </>
  );
}
