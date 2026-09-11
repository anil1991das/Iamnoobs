"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { removeDuplicateLines } from "@/lib/tools/text-processing";

export default function RemoveDuplicateLinesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);

  const handleProcess = () => setOutput(removeDuplicateLines(input, caseSensitive));

  return (
    <>
      <ToolInput label="Input text (one item per line)" value={input} onChange={setInput} placeholder="apple&#10;banana&#10;apple&#10;cherry&#10;banana" />
      <label className="flex items-center gap-2 text-sm text-foreground">
        <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="rounded" />
        Case sensitive
      </label>
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={handleProcess} processLabel="Remove Duplicates" disabled={!input.trim()} />
      <ToolOutput label="Unique Lines" value={output} downloadFilename="unique-lines.txt" />
    </>
  );
}
