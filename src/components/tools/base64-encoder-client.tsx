"use client";

import { useState } from "react";
import ToolInput from "@/components/tool-input";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { encodeBase64 } from "@/lib/tools/base64";

export default function Base64EncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = () => {
    setError("");
    try {
      setOutput(encodeBase64(input));
    } catch {
      setError("Failed to encode input. Make sure it contains valid characters.");
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
        label="Text to encode"
        value={input}
        onChange={(v) => {
          setInput(v);
          setError("");
        }}
        placeholder="Enter text to encode to Base64..."
      />

      {error && (
        <div className="rounded-xl border border-danger bg-danger/10 p-4 text-sm text-danger">
          <strong>Error:</strong> {error}
        </div>
      )}

      <ActionButtons
        onClear={handleClear}
        onProcess={handleEncode}
        processLabel="Encode to Base64"
        disabled={!input.trim()}
      />

      <ToolOutput label="Base64 Output" value={output} downloadFilename="base64-encoded.txt" />
    </>
  );
}
