"use client";
import { useState, useMemo } from "react";
import { gitignoreTemplates } from "@/lib/tools/css-design-tools";
import ToolOutput from "@/components/tool-output";
import CopyButton from "@/components/copy-button";

export default function GitignoreGeneratorClient() {
  const [selected, setSelected] = useState<string[]>(["Node.js"]);

  const output = useMemo(() => {
    return selected.map((name) => {
      const entries = gitignoreTemplates[name] || [];
      return `# ${name}\n${entries.join("\n")}`;
    }).join("\n\n");
  }, [selected]);

  const toggle = (name: string) => {
    setSelected((prev) => prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium">Select Technologies</p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(gitignoreTemplates).map((name) => (
            <button key={name} onClick={() => toggle(name)} className={`rounded-lg px-3 py-1.5 text-sm ${selected.includes(name) ? "bg-primary text-white" : "bg-accent text-foreground"}`}>{name}</button>
          ))}
        </div>
      </div>

      <ToolOutput value={output} label=".gitignore" rows={15} downloadFilename=".gitignore" />
      <CopyButton text={output} label="Copy .gitignore" />
    </div>
  );
}
