import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How iamnoobs tools, games, activities, and courses handle information and browser storage.",
  alternates: { canonical: "https://iamnoobs.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12 text-foreground">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: October 29, 2026</p>
      </header>

      <section className="space-y-3">
        <p>
          This policy describes how iamnoobs handles information when you use
          this website. Tools do not all handle information the same way, so
          avoid entering sensitive information unless you understand where it
          will be sent or stored.
        </p>
        <h2 className="text-xl font-semibold">Requests to external services</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            DNS Lookup sends the domain you enter to Google Public DNS to
            retrieve DNS records.
          </li>
          <li>
            IP Lookup contacts ipify to detect your public IP address. That
            service receives your connection information.
          </li>
          <li>
            API Tester and GraphQL Tester send the endpoint, request data, and
            headers you provide from your browser to the destination you choose.
            Do not include passwords, API keys, or other secrets unless you
            understand and trust that destination.
          </li>
        </ul>
        <p>
          These requests are made by your browser, not proxied through an
          iamnoobs application server. External services and endpoints have
          their own privacy practices and may process request data, including
          your IP address.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Information stored in your browser</h2>
        <p>
          Daily Planner, Habit Tracker, Notes, and Todo List save their data in
          your browser&apos;s local storage. Bug Hunt saves completed level
          progress, and the Python and C courses save lesson completion, quest
          progress, XP, badges, and optional streak settings in your browser&apos;s
          local storage. This information is not synced to an iamnoobs account
          or sent to an iamnoobs application server. Clearing this site&apos;s
          browser storage removes it. Progress may not persist if browser
          storage is unavailable or blocked.
        </p>
        <p>
          The interactive activities do not require an account. Pixel Playground
          keeps your drawing in the current page and does not upload it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Site operation and analytics</h2>
        <p>
          The application source currently contains no analytics or advertising
          SDK. The hosting provider may process standard connection and
          diagnostic information to deliver and secure the website; see the
          provider&apos;s privacy information for its processing and retention
          practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Your choices and contact</h2>
        <p>
          You can avoid tools that contact external services, avoid entering
          sensitive data, and clear locally stored data through your browser
          settings. For privacy questions, email{" "}
          <a className="text-primary underline" href="mailto:apicjero@gmail.com">
            apicjero@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}