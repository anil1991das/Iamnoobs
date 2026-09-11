"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { binaryToText } from "@/lib/tools/text-processing";

export default function BinaryToTextClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Binary code" value={input} onChange={setInput} placeholder="01001000 01100101 01101100 01101100 01101111" />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={() => setOutput(binaryToText(input))} processLabel="Convert to Text" disabled={!input.trim()} />
      <ToolOutput label="Text Output" value={output} downloadFilename="decoded.txt" />
    </>
  );
}
