import Link from "next/link";
import { tools } from "@/lib/tools/registry";

const toolGroups = [
  {
    title: "Developer Tools",
    categories: ["text-dev", "dev-helpers"],
  },
  {
    title: "Image Tools",
    categories: ["image"],
  },
  {
    title: "PDF & Documents",
    categories: ["document"],
  },
  {
    title: "Everyday Tools",
    categories: ["daily-use", "text-processing", "productivity", "business-finance"],
  },
];

const companyLinks = [
  { href: "/games", label: "Games" },
  { href: "/activities", label: "Activities" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact & Feedback" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const footerToolGroups = toolGroups.map((group) => ({
  ...group,
  tools: tools
    .filter((tool) => group.categories.includes(tool.category))
    .slice(0, 5),
}));

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))] lg:gap-x-8">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="inline-flex text-xl font-bold tracking-tight text-primary"
            >
              iamnoobs
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Practical tools and clear guides for development, documents,
              productivity, and everyday digital tasks.
            </p>
            <Link
              href="/tools"
              className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Browse all tools
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>

          {footerToolGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.tools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/${tool.slug}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Explore and company">
            <h2 className="text-sm font-semibold text-foreground">Explore &amp; company</h2>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-card-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} iamnoobs.com. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
