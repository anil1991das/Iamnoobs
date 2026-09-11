"use client";

import { useId } from "react";

interface ToolInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  type?: "textarea" | "text" | "number";
  className?: string;
}

export default function ToolInput({
  label,
  value,
  onChange,
  placeholder = "Enter your input...",
  rows = 8,
  type = "textarea",
  className = "",
}: ToolInputProps) {
  const id = useId();

  return (
    <div className={`rounded-xl border border-card-border bg-card p-4 shadow-sm ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-muted-foreground">
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full resize-y rounded-lg border border-card-border bg-muted p-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          spellCheck={false}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-card-border bg-muted p-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      )}
    </div>
  );
}
