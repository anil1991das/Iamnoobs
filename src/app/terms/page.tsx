import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using iamnoobs online tools.",
  alternates: { canonical: "https://iamnoobs.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 text-foreground">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
        <p className="text-sm text-muted-foreground">Last updated: October 27, 2026</p>
      </header>

      <section className="space-y-3">
        <p>
          By using iamnoobs, you agree to use this website and its tools
          lawfully and responsibly. If you do not agree with these terms, do not
          use the website.
        </p>
        <h2 className="text-xl font-semibold">Tools and results</h2>
        <p>
          Tools are provided for general informational and productivity
          purposes. Review outputs before relying on them, especially for
          financial, security, legal, medical, or other consequential decisions.
          The website is provided as available, without a guarantee that every
          tool will be uninterrupted, error-free, or suitable for a particular
          purpose.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Your content and external services</h2>
        <p>
          Some tools store data in your browser. DNS Lookup, IP Lookup, API
          Tester, and GraphQL Tester interact with external services or
          destinations as described in our{" "}
          <Link className="text-primary underline" href="/privacy">
            Privacy Policy
          </Link>
          . You are responsible for the content you enter, the endpoints you
          contact, and ensuring you have permission to send them requests or
          data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Acceptable use</h2>
        <p>
          Do not use the tools to violate laws, infringe others&apos; rights,
          disrupt services, or access systems without authorization. Do not
          attempt to interfere with the security or availability of the website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Changes and contact</h2>
        <p>
          Tools and these terms may change as the website evolves. Questions
          about these terms can be sent to{" "}
          <a className="text-primary underline" href="mailto:apicjero@gmail.com">
            apicjero@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}