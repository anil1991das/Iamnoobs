"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { formatHtml } from "@/lib/tools/html-tools";

export default function HtmlFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Paste your HTML" value={input} onChange={setInput} placeholder="<div><p>Hello</p></div>" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(formatHtml(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Format HTML</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Formatted HTML" value={output} downloadFilename="formatted.html" />
    </>
  );
}
