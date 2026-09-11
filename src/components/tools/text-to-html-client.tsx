"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { textToHtml } from "@/lib/tools/html-text";

export default function TextToHtmlClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Enter plain text" value={input} onChange={setInput} placeholder="Line one&#10;&#10;Line two with a second paragraph" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(textToHtml(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Convert to HTML</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="HTML Output" value={output} downloadFilename="output.html" />
    </>
  );
}
