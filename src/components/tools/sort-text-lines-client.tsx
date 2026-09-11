"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { sortLines } from "@/lib/tools/text-processing";

export default function SortTextLinesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [order, setOrder] = useState<"asc" | "desc" | "numeric-asc" | "numeric-desc">("asc");

  const orders = [
    { key: "asc" as const, label: "A → Z" },
    { key: "desc" as const, label: "Z → A" },
    { key: "numeric-asc" as const, label: "0 → 9" },
    { key: "numeric-desc" as const, label: "9 → 0" },
  ];

  return (
    <>
      <ToolInput label="Text lines to sort" value={input} onChange={setInput} placeholder="banana&#10;apple&#10;cherry&#10;date" />
      <div className="flex gap-2 flex-wrap">
        {orders.map((o) => (
          <button key={o.key} onClick={() => setOrder(o.key)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${order === o.key ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{o.label}</button>
        ))}
      </div>
      <ActionButtons onClear={() => { setInput(""); setOutput(""); }} onProcess={() => setOutput(sortLines(input, order))} processLabel="Sort Lines" disabled={!input.trim()} />
      <ToolOutput label="Sorted Lines" value={output} downloadFilename="sorted-lines.txt" />
    </>
  );
}
