"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ActionButtons from "@/components/action-buttons";
import { validateJSON } from "@/lib/tools/json-formatter";

export default function JsonValidatorClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ valid: boolean; error?: string } | null>(null);

  const handleValidate = () => {
    setResult(validateJSON(input));
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <>
      <ToolInput
        label="Paste your JSON"
        value={input}
        onChange={(v) => { setInput(v); setResult(null); }}
        placeholder='{"key": "value"}'
      />

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleValidate}
          disabled={!input.trim()}
          className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
        >
          Validate JSON
        </button>
        <ActionButtons onClear={handleClear} />
      </div>

      {result && (
        <div className={`rounded-xl border p-4 text-sm ${result.valid ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300" : "border-danger bg-danger/10 text-danger"}`}>
          {result.valid ? (
            <p><strong>✓ Valid JSON</strong> — Your JSON is well-formed.</p>
          ) : (
            <p><strong>✗ Invalid JSON:</strong> {result.error}</p>
          )}
        </div>
      )}
    </>
  );
}
