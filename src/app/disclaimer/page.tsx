import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important limitations and external-service notes for iamnoobs tools.",
  alternates: { canonical: "https://iamnoobs.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 text-foreground">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Disclaimer</h1>
        <p className="text-sm text-muted-foreground">Last updated: October 27, 2026</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">General information</h2>
        <p>
          iamnoobs tools are provided for general informational and
          productivity purposes. Results may be incomplete or inaccurate and
          are not a substitute for professional advice. Independently verify
          any result before relying on it, especially for financial, legal,
          medical, security, or other consequential decisions.
        </p>
        <p>
          The tools are provided as available. We do not guarantee that every
          tool will be uninterrupted, error-free, current, or suitable for a
          particular purpose.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">External services</h2>
        <p>
          Some tools contact third-party services or endpoints you choose.
          Those services operate independently and have their own terms,
          availability, and privacy practices. Review the destination before
          sending it data, and do not send sensitive information unless you
          trust the service.
        </p>
        <p>
          More information about data handling is available in our{" "}
          <Link className="text-primary underline" href="/privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Questions about this disclaimer can be sent to{" "}
          <a className="text-primary underline" href="mailto:apicjero@gmail.com">
            apicjero@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}