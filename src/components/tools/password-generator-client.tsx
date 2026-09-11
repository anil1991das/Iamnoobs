"use client";

import { useState, useCallback } from "react";
import { copyToClipboard } from "@/lib/utils";
import {
  generatePassword,
  estimateStrength,
  type PasswordOptions,
} from "@/lib/tools/password-generator";

const strengthColors: Record<string, string> = {
  weak: "bg-danger",
  fair: "bg-yellow-500",
  strong: "bg-success",
  "very-strong": "bg-emerald-600",
};

export default function PasswordGeneratorClient() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    try {
      setPassword(generatePassword(options));
    } catch (e) {
      setPassword((e as Error).message);
    }
  }, [options]);

  const handleCopy = async () => {
    if (await copyToClipboard(password)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const strength = password ? estimateStrength(password) : null;

  return (
    <>
      <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
        <div className="space-y-5">
          {/* Length slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-foreground">
                Password Length
              </label>
              <span className="text-sm font-bold text-primary">{options.length}</span>
            </div>
            <input
              type="range"
              min={4}
              max={128}
              value={options.length}
              onChange={(e) =>
                setOptions({ ...options, length: Number(e.target.value) })
              }
              className="w-full accent-primary"
            />
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                ["uppercase", "Uppercase (A-Z)"],
                ["lowercase", "Lowercase (a-z)"],
                ["numbers", "Numbers (0-9)"],
                ["symbols", "Symbols (!@#$)"],
              ] as const
            ).map(([key, label]) => (
              <label
                key={key}
                className="flex items-center gap-3 rounded-lg border border-card-border p-3 cursor-pointer hover:bg-muted transition-colors"
              >
                <input
                  type="checkbox"
                  checked={options[key]}
                  onChange={(e) =>
                    setOptions({ ...options, [key]: e.target.checked })
                  }
                  className="h-4 w-4 accent-primary"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={generate}
        className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        Generate Password
      </button>

      {password && (
        <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Generated Password</span>
            <button
              onClick={handleCopy}
              className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-hover"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="break-all rounded-lg bg-muted p-4 font-mono text-lg select-all">
            {password}
          </div>
          {strength && (
            <div className="mt-3 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${strengthColors[strength]}`}
                  style={{
                    width:
                      strength === "weak"
                        ? "25%"
                        : strength === "fair"
                        ? "50%"
                        : strength === "strong"
                        ? "75%"
                        : "100%",
                  }}
                />
              </div>
              <span className="text-xs font-medium capitalize text-muted-foreground">
                {strength.replace("-", " ")}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
