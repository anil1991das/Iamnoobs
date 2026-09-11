interface ComingSoonProps {
  toolName: string;
}

export default function ComingSoon({ toolName }: ComingSoonProps) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-12 text-center shadow-sm">
      <div className="text-4xl mb-4">🚧</div>
      <h2 className="text-xl font-bold mb-2">{toolName}</h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        This tool is coming soon. We&apos;re building it to be fast, free, and
        work entirely in your browser. Check back shortly!
      </p>
    </div>
  );
}
