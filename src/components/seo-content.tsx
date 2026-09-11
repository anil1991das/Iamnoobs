interface FAQ {
  question: string;
  answer: string;
}

interface SeoContentProps {
  content: string[];
  faqs: FAQ[];
}

export default function SeoContent({ content, faqs }: SeoContentProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section aria-label="About this tool">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <article className="max-w-none space-y-4">
        {content.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{paragraph}</p>
        ))}
      </article>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-card-border bg-card p-4">
              <summary className="cursor-pointer font-medium select-none list-none flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium">{faq.question}</h3>
                <svg
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
