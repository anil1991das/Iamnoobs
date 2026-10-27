import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          iamnoobs
        </Link>
      </div>
    </header>
  );
}
