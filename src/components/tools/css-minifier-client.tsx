"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { minifyCss } from "@/lib/tools/css-minifier";

export default function CssMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleMinify = () => {
    setOutput(minifyCss(input));
  };

  return (
    <>
      <ToolInput label="Paste your CSS" value={input} onChange={setInput} placeholder=".container { margin: 0 auto; padding: 20px; }" />
      <div className="flex flex-wrap gap-3">
        <button onClick={handleMinify} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Minify CSS</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Minified CSS" value={output} downloadFilename="styles.min.css" />
    </>
  );
}
