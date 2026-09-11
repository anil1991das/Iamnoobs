import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
      <p className="mt-2 text-muted-foreground">
        The tool or page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        Browse All Tools
      </Link>
    </main>
  );
}
