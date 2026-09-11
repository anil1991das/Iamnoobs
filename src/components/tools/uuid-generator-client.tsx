"use client";

import { useState, useCallback } from "react";
import { copyToClipboard } from "@/lib/utils";
import { generateMultipleUUIDs } from "@/lib/tools/uuid-generator";

export default function UuidGeneratorClient() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const generate = useCallback(() => {
    setUuids(generateMultipleUUIDs(count));
  }, [count]);

  const handleCopyOne = async (uuid: string, idx: number) => {
    if (await copyToClipboard(uuid)) {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    }
  };

  const handleCopyAll = async () => {
    if (await copyToClipboard(uuids.join("\n"))) {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  return (
    <>
      <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium text-muted-foreground">
              Number of UUIDs
            </label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
              className="w-full rounded-lg border border-card-border bg-muted p-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            onClick={generate}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Generate
          </button>
        </div>
      </div>

      {uuids.length > 0 && (
        <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {uuids.length} UUID{uuids.length > 1 ? "s" : ""} Generated
            </span>
            <button
              onClick={handleCopyAll}
              className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-hover"
            >
              {copiedAll ? "Copied All!" : "Copy All"}
            </button>
          </div>
          <div className="space-y-2">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 rounded-lg bg-muted p-3"
              >
                <code className="font-mono text-sm select-all break-all">{uuid}</code>
                <button
                  onClick={() => handleCopyOne(uuid, i)}
                  className="shrink-0 rounded-md border border-card-border px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copiedIdx === i ? "✓" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
