"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { removeExtraSpaces } from "@/lib/tools/text-processing";

export default function RemoveExtraSpacesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Text with extra spaces" value={input} onChange={setInput} placeholder="Hello    World   !    How   are   you?" />
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={() => setOutput(removeExtraSpaces(input))} processLabel="Clean Spaces" disabled={!input.trim()} />
      <ToolOutput label="Cleaned Text" value={output} downloadFilename="cleaned.txt" />
    </>
  );
}
