"use client";

interface ActionButtonsProps {
  onClear: () => void;
  onProcess?: () => void;
  processLabel?: string;
  processing?: boolean;
  disabled?: boolean;
}

export default function ActionButtons({
  onClear,
  onProcess,
  processLabel = "Process",
  processing = false,
  disabled = false,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {onProcess && (
        <button
          onClick={onProcess}
          disabled={disabled || processing}
          className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-50"
        >
          {processing ? "Processing..." : processLabel}
        </button>
      )}
      <button
        onClick={onClear}
        className="rounded-xl border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        Clear
      </button>
    </div>
  );
}
