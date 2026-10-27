import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} iamnoobs.com — Free online tools for everyone.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="/articles" className="hover:text-foreground transition-colors">Articles</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
            <Link href="/affiliate-disclosure" className="hover:text-foreground transition-colors">Affiliate Disclosure</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact &amp; Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
