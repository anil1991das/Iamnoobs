"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateRandomString } from "@/lib/tools/text-processing";

export default function RandomStringGeneratorClient() {
  const [length, setLength] = useState(32);
  const [output, setOutput] = useState("");
  const [options, setOptions] = useState({ upper: true, lower: true, digits: true, special: false });

  const getCharset = () => {
    let cs = "";
    if (options.upper) cs += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lower) cs += "abcdefghijklmnopqrstuvwxyz";
    if (options.digits) cs += "0123456789";
    if (options.special) cs += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    return cs || "abcdefghijklmnopqrstuvwxyz";
  };

  return (
    <>
      <div className="space-y-4 rounded-xl border border-border bg-card p-6">
        <div><label className="block text-sm font-medium text-foreground mb-1">Length: {length}</label>
          <input type="range" min="1" max="256" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full" />
        </div>
        <div className="flex gap-4 flex-wrap">
          {(["upper", "lower", "digits", "special"] as const).map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-foreground">
              <input type="checkbox" checked={options[opt]} onChange={(e) => setOptions({ ...options, [opt]: e.target.checked })} className="rounded" />
              {opt === "upper" ? "Uppercase (A-Z)" : opt === "lower" ? "Lowercase (a-z)" : opt === "digits" ? "Digits (0-9)" : "Special (!@#$...)"}
            </label>
          ))}
        </div>
      </div>
      <ActionButtons onClear={() => setOutput("")} onProcess={() => setOutput(generateRandomString(length, getCharset()))} processLabel="Generate" />
      <ToolOutput label="Random String" value={output} downloadFilename="random-string.txt" />
    </>
  );
}
