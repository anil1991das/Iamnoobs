export default function ToolSkeleton() {
  return (
    <div className="space-y-6 animate-pulse" aria-label="Loading tool...">
      {/* Input skeleton */}
      <div className="rounded-xl border border-card-border bg-card p-4 shadow-sm">
        <div className="mb-2 h-4 w-28 rounded bg-muted" />
        <div className="h-40 rounded-lg bg-muted" />
      </div>

      {/* Button skeleton */}
      <div className="flex gap-3">
        <div className="h-10 w-32 rounded-xl bg-muted" />
        <div className="h-10 w-20 rounded-xl bg-muted" />
      </div>

      {/* Output skeleton */}
      <div className="rounded-xl border border-card-border bg-card p-4 shadow-sm">
        <div className="mb-2 flex justify-between">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-7 w-16 rounded-lg bg-muted" />
        </div>
        <div className="h-40 rounded-lg bg-muted" />
      </div>
    </div>
  );
}
