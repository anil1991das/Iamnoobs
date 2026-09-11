"use client";
import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button onClick={handleCopy} className="rounded-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90">
      {copied ? "Copied!" : label}
    </button>
  );
}
