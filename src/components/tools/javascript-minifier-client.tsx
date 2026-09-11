"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { minifyJs } from "@/lib/tools/js-minifier";

export default function JavascriptMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Paste your JavaScript" value={input} onChange={setInput} placeholder="function hello() { console.log('Hello World'); }" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(minifyJs(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Minify JS</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Minified JavaScript" value={output} downloadFilename="script.min.js" />
    </>
  );
}
