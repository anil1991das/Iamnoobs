"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { formatJSON, validateJSON, minifyJSON } from "@/lib/tools/json-formatter";

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    setError("");
    try {
      setOutput(formatJSON(input));
    } catch {
      const validation = validateJSON(input);
      setError(validation.error || "Invalid JSON");
      setOutput("");
    }
  };

  const handleMinify = () => {
    setError("");
    try {
      setOutput(minifyJSON(input));
    } catch {
      const validation = validateJSON(input);
      setError(validation.error || "Invalid JSON");
      setOutput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <>
      <ToolInput
        label="Paste your JSON"
        value={input}
        onChange={(v) => {
          setInput(v);
          setError("");
        }}
        placeholder='{"key": "value", "numbers": [1, 2, 3]}'
      />

      {error && (
        <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleFormat}
          disabled={!input.trim()}
          className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
        >
          Format JSON
        </button>
        <button
          onClick={handleMinify}
          disabled={!input.trim()}
          className="rounded-xl border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent disabled:opacity-50"
        >
          Minify JSON
        </button>
        <ActionButtons onClear={handleClear} />
      </div>

      <ToolOutput label="Formatted Output" value={output} downloadFilename="formatted.json" />
    </>
  );
}
