"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { markdownToPdf } from "@/lib/tools/pdf-file-tools";

export default function MarkdownToPdfClient() {
  const [markdown, setMarkdown] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    setProcessing(true);
    try {
      const result = await markdownToPdf(markdown);
      const blob = new Blob([result.buffer as ArrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = "document.pdf"; a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Error: " + (e as Error).message);
    } finally { setProcessing(false); }
  };

  return (
    <>
      <ToolInput label="Markdown content" value={markdown} onChange={setMarkdown} placeholder="# Heading&#10;&#10;Some **bold** and *italic* text.&#10;&#10;- List item 1&#10;- List item 2" />
      <ActionButtons onClear={() => setMarkdown("")} onProcess={handleConvert} processLabel={processing ? "Converting..." : "Convert to PDF"} disabled={!markdown.trim() || processing} />
    </>
  );
}
