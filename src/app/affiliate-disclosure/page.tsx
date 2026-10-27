import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How iamnoobs identifies affiliate links and handles product recommendations.",
  alternates: { canonical: "https://iamnoobs.com/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Affiliate Disclosure</h1>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How affiliate links may work</h2>
        <p>
          Some iamnoobs articles may include affiliate links to products or
          services. If you choose to purchase through one of these links, we
          may earn a commission at no additional cost to you. We will identify
          affiliate links or explain the relationship near the relevant
          recommendation.
        </p>
        <p>
          Affiliate relationships do not guarantee a positive review or
          recommendation. We aim to make recommendations relevant to the
          article and to describe material limitations honestly. Product
          features, prices, and terms can change, so check the provider’s
          current information before making a decision.
        </p>
        <p>
          For questions about an article or recommendation, please use our{" "}
          <Link className="text-primary underline" href="/contact">contact page</Link>.
          See also our general <Link className="text-primary underline" href="/disclaimer">disclaimer</Link>.
        </p>
      </section>
    </main>
  );
}
