"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { rot13 } from "@/lib/tools/security-tools";

export default function Rot13Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Text to encode/decode (ROT13 is its own inverse)" value={input} onChange={setInput} placeholder="Hello World" />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={() => setOutput(rot13(input))} processLabel="Apply ROT13" disabled={!input} />
      <ToolOutput label="ROT13 Output" value={output} downloadFilename="rot13.txt" />
    </>
  );
}
