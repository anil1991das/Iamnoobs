"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { textToBinary } from "@/lib/tools/text-processing";

export default function TextToBinaryClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Text to convert" value={input} onChange={setInput} placeholder="Hello World" />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={() => setOutput(textToBinary(input))} processLabel="Convert to Binary" disabled={!input} />
      <ToolOutput label="Binary Output" value={output} downloadFilename="binary.txt" />
    </>
  );
}
