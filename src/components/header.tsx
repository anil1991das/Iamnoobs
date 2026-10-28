import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          iamnoobs
        </Link>
        <nav
          aria-label="Main"
          className="flex min-w-0 items-center gap-3 overflow-x-auto text-xs font-medium sm:gap-4 sm:text-sm lg:gap-5"
        >
          <Link href="/tools" className="text-muted-foreground hover:text-foreground">
            Tools
          </Link>
          <Link href="/games" className="text-muted-foreground hover:text-foreground">
            Games
          </Link>
          <Link href="/activities" className="text-muted-foreground hover:text-foreground">
            Activities
          </Link>
          <Link href="/courses" className="text-muted-foreground hover:text-foreground">
            Courses
          </Link>
          <Link href="/articles" className="text-muted-foreground hover:text-foreground">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
