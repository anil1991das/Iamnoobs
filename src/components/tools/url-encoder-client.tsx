"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { encodeUrl } from "@/lib/tools/url-codec";

export default function UrlEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Enter text to encode" value={input} onChange={setInput} placeholder="Hello World! How are you?" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(encodeUrl(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Encode URL</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Encoded URL" value={output} downloadFilename="encoded.txt" />
    </>
  );
}
