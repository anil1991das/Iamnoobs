import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Feedback",
  description: "Contact iamnoobs to report an issue, share feedback, or suggest a tool.",
  alternates: { canonical: "https://iamnoobs.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 text-foreground">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Contact &amp; Feedback</h1>
        <p className="text-muted-foreground">
          Report a problem, share feedback, or suggest a tool.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Email us</h2>
        <p>
          Send your message to{" "}
          <a
            className="text-primary underline"
            href="mailto:apicjero@gmail.com?subject=iamnoobs%20feedback"
          >
            apicjero@gmail.com
          </a>
          . For bug reports, include the tool name, what you expected, and what
          happened. Please do not include passwords, API keys, or other
          sensitive information.
        </p>
      </section>
    </main>
  );
}