"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateSlug } from "@/lib/tools/slug-generator";

export default function SlugGeneratorClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <ToolInput label="Enter text to slugify" value={input} onChange={(v) => { setInput(v); setOutput(generateSlug(v)); }} placeholder="Hello World! This is My Blog Post" />
      <div className="flex flex-wrap gap-3">
        <ActionButtons onClear={() => { setInput(""); setOutput(""); }} />
      </div>
      <ToolOutput label="Generated Slug" value={output} downloadFilename="slug.txt" />
    </>
  );
}
