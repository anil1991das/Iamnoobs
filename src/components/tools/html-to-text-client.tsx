"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { htmlToText } from "@/lib/tools/html-text";

export default function HtmlToTextClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Paste your HTML" value={input} onChange={setInput} placeholder="<h1>Hello</h1><p>This is a <strong>paragraph</strong>.</p>" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(htmlToText(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Extract Text</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Plain Text" value={output} downloadFilename="extracted-text.txt" />
    </>
  );
}
