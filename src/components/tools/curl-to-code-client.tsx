"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { parseCurl, toJavaScript, toPython, toPhp } from "@/lib/tools/curl-to-code";

export default function CurlToCodeClient() {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<"javascript" | "python" | "php">("javascript");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      const parsed = parseCurl(input);
      const converters = { javascript: toJavaScript, python: toPython, php: toPhp };
      setOutput(converters[language](parsed));
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const languages = [
    { key: "javascript" as const, label: "JavaScript (fetch)" },
    { key: "python" as const, label: "Python (requests)" },
    { key: "php" as const, label: "PHP (cURL)" },
  ];

  return (
    <>
      <ToolInput label="cURL Command" value={input} onChange={(v) => { setInput(v); setError(""); }} placeholder="curl -X POST https://api.example.com/data -H 'Content-Type: application/json' -d '{&quot;key&quot;:&quot;value&quot;}'" />
      <div className="flex gap-2 flex-wrap">
        {languages.map((l) => (
          <button key={l.key} onClick={() => setLanguage(l.key)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${language === l.key ? "bg-primary text-white" : "bg-accent text-foreground hover:bg-accent/80"}`}>{l.label}</button>
        ))}
      </div>
      {error && <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger"><strong>Error:</strong> {error}</div>}
      <ActionButtons onClear={() => { setInput(""); setOutput(""); setError(""); }} onProcess={handleConvert} processLabel="Convert" disabled={!input.trim()} />
      <ToolOutput label={`${language} Code`} value={output} downloadFilename={`request.${language === "javascript" ? "js" : language === "python" ? "py" : "php"}`} />
    </>
  );
}
