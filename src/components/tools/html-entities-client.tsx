"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { htmlEncode, htmlDecode } from "@/lib/tools/dev-helpers";

export default function HtmlEntitiesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleProcess = () => {
    setOutput(mode === "encode" ? htmlEncode(input) : htmlDecode(input));
  };

  return (
    <>
      <div className="flex gap-2 mb-2">
        <button onClick={() => setMode("encode")} className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "encode" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Encode</button>
        <button onClick={() => setMode("decode")} className={`rounded-lg px-4 py-2 text-sm font-medium ${mode === "decode" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Decode</button>
      </div>
      <ToolInput value={input} onChange={setInput} placeholder={mode === "encode" ? '<p>Hello "World" & Friends</p>' : '&lt;p&gt;Hello &amp; World&lt;/p&gt;'} />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={handleProcess} processLabel={mode === "encode" ? "Encode" : "Decode"} disabled={!input} />
      {output && <ToolOutput value={output} />}
    </>
  );
}
