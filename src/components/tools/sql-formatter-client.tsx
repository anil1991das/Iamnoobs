"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { formatSql } from "@/lib/tools/sql-formatter";

export default function SqlFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Paste your SQL" value={input} onChange={setInput} placeholder="SELECT * FROM users WHERE id = 1 AND active = true ORDER BY name" />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setOutput(formatSql(input))} disabled={!input.trim()} className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50">Format SQL</button>
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Formatted SQL" value={output} downloadFilename="query.sql" />
    </>
  );
}
