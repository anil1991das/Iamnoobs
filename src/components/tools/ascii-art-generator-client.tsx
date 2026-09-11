"use client";
import { useState, useMemo } from "react";
import CopyButton from "@/components/copy-button";

const ASCII_CHARS = " .:-=+*#%@";

function textToAscii(text: string, width: number = 60): string {
  const lines: string[] = [];
  const chars = text.toUpperCase().split("");
  const charMap: Record<string, string[]> = {
    A: ["  #  ", " # # ", "#####", "#   #", "#   #"],
    B: ["#### ", "#   #", "#### ", "#   #", "#### "],
    C: [" ####", "#    ", "#    ", "#    ", " ####"],
    D: ["#### ", "#   #", "#   #", "#   #", "#### "],
    E: ["#####", "#    ", "###  ", "#    ", "#####"],
    F: ["#####", "#    ", "###  ", "#    ", "#    "],
    G: [" ####", "#    ", "# ###", "#   #", " ####"],
    H: ["#   #", "#   #", "#####", "#   #", "#   #"],
    I: ["#####", "  #  ", "  #  ", "  #  ", "#####"],
    J: ["#####", "   # ", "   # ", "#  # ", " ##  "],
    K: ["#   #", "#  # ", "###  ", "#  # ", "#   #"],
    L: ["#    ", "#    ", "#    ", "#    ", "#####"],
    M: ["#   #", "## ##", "# # #", "#   #", "#   #"],
    N: ["#   #", "##  #", "# # #", "#  ##", "#   #"],
    O: [" ### ", "#   #", "#   #", "#   #", " ### "],
    P: ["#### ", "#   #", "#### ", "#    ", "#    "],
    Q: [" ### ", "#   #", "# # #", "#  ##", " ####"],
    R: ["#### ", "#   #", "#### ", "#  # ", "#   #"],
    S: [" ####", "#    ", " ### ", "    #", "#### "],
    T: ["#####", "  #  ", "  #  ", "  #  ", "  #  "],
    U: ["#   #", "#   #", "#   #", "#   #", " ### "],
    V: ["#   #", "#   #", " # # ", " # # ", "  #  "],
    W: ["#   #", "#   #", "# # #", "## ##", "#   #"],
    X: ["#   #", " # # ", "  #  ", " # # ", "#   #"],
    Y: ["#   #", " # # ", "  #  ", "  #  ", "  #  "],
    Z: ["#####", "   # ", "  #  ", " #   ", "#####"],
    " ": ["     ", "     ", "     ", "     ", "     "],
    "0": [" ### ", "#   #", "#   #", "#   #", " ### "],
    "1": ["  #  ", " ##  ", "  #  ", "  #  ", "#####"],
    "2": [" ### ", "#   #", "  ## ", " #   ", "#####"],
    "3": [" ### ", "#   #", "  ## ", "#   #", " ### "],
    "4": ["#   #", "#   #", "#####", "    #", "    #"],
    "5": ["#####", "#    ", "#### ", "    #", "#### "],
    "6": [" ### ", "#    ", "#### ", "#   #", " ### "],
    "7": ["#####", "   # ", "  #  ", " #   ", "#    "],
    "8": [" ### ", "#   #", " ### ", "#   #", " ### "],
    "9": [" ### ", "#   #", " ####", "    #", " ### "],
    "!": ["  #  ", "  #  ", "  #  ", "     ", "  #  "],
    ".": ["     ", "     ", "     ", "     ", "  #  "],
    "?": [" ### ", "#   #", "  ## ", "     ", "  #  "],
  };

  for (let row = 0; row < 5; row++) {
    let line = "";
    for (const c of chars) {
      const pattern = charMap[c] || charMap[" "] || ["     ", "     ", "     ", "     ", "     "];
      line += pattern[row] + " ";
    }
    lines.push(line);
  }
  return lines.join("\n");
}

export default function AsciiArtGeneratorClient() {
  const [text, setText] = useState("HELLO");
  const [mode, setMode] = useState<"text" | "image">("text");

  const output = useMemo(() => (mode === "text" && text.trim() ? textToAscii(text) : ""), [text, mode]);

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button onClick={() => setMode("text")} className={`rounded-lg px-4 py-2 text-sm ${mode === "text" ? "bg-primary text-white" : "bg-accent text-foreground"}`}>Text to ASCII</button>
      </div>

      {mode === "text" && (
        <label className="space-y-1">
          <span className="text-sm font-medium">Enter Text</span>
          <input value={text} onChange={(e) => setText(e.target.value.slice(0, 20))} placeholder="Enter text (max 20 chars)..." className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
          <p className="text-xs text-muted">Supports A-Z, 0-9, spaces, and basic punctuation</p>
        </label>
      )}

      {output && (
        <div className="space-y-2">
          <label className="text-sm font-medium">ASCII Art</label>
          <pre className="overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-xs leading-tight">{output}</pre>
          <CopyButton text={output} label="Copy ASCII Art" />
        </div>
      )}
    </div>
  );
}
