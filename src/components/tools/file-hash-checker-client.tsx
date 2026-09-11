"use client";

import { useState } from "react";
import ToolOutput from "@/components/tool-output";
import ActionButtons from "@/components/action-buttons";
import { generateChecksum } from "@/lib/tools/security-tools";

export default function FileHashCheckerClient() {
  const [file, setFile] = useState<File | null>(null);
  const [output, setOutput] = useState("");
  const [verifyHash, setVerifyHash] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!file) return;
    setLoading(true);
    const buffer = await file.arrayBuffer();
    const algorithms = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
    const results: string[] = [`File: ${file.name}`, `Size: ${(file.size / 1024).toFixed(1)} KB`, ""];
    for (const alg of algorithms) {
      const hash = await generateChecksum(buffer, alg);
      results.push(`${alg}: ${hash}`);
      if (verifyHash && hash.toLowerCase() === verifyHash.toLowerCase().trim()) {
        results.push(`  ✅ Matches provided hash!`);
      }
    }
    if (verifyHash && !results.some((r) => r.includes("Matches"))) {
      results.push("", "❌ Provided hash does not match any algorithm");
    }
    setOutput(results.join("\n"));
    setLoading(false);
  };

  return (
    <>
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <label className="block text-sm font-medium text-foreground">Select a file</label>
        <input type="file" onChange={(e) => { setFile(e.target.files?.[0] || null); setOutput(""); }} className="text-sm" />
      </div>
      <div className="rounded-xl border border-border bg-card p-6 space-y-2">
        <label className="block text-sm font-medium text-foreground">Hash to verify (optional)</label>
        <input type="text" value={verifyHash} onChange={(e) => setVerifyHash(e.target.value)} placeholder="Paste expected hash to verify..." className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono" />
      </div>
      <ActionButtons onClear={() => { setFile(null); setOutput(""); setVerifyHash(""); }} onProcess={handleGenerate} processLabel={loading ? "Computing..." : "Generate Hashes"} disabled={!file || loading} />
      <ToolOutput label="File Hashes" value={output} downloadFilename="file-hashes.txt" />
    </>
  );
}
