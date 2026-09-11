import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          iamnoobs
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main navigation">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/#tools" className="text-muted-foreground hover:text-foreground transition-colors">
            Tools
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
