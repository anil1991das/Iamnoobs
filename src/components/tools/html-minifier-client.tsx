"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { minifyHtml } from "@/lib/tools/html-tools";

export default function HtmlMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Paste your HTML" value={input} onChange={setInput} placeholder="<div>  <p>Hello World</p>  </div>" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(minifyHtml(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Minify HTML</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Minified HTML" value={output} downloadFilename="minified.html" />
    </>
  );
}
