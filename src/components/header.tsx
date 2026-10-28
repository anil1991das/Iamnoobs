import Link from "next/link";
import ToolsMenu from "@/components/tools-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          iamnoobs
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm font-medium">
          <ToolsMenu />
          <Link href="/games" className="text-muted-foreground hover:text-foreground">
            Games
          </Link>
          <Link href="/articles" className="text-muted-foreground hover:text-foreground">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
