export interface RegexPattern {
  name: string;
  pattern: string;
  flags: string;
  description: string;
}

export const commonPatterns: RegexPattern[] = [
  { name: "Email", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", flags: "g", description: "Matches email addresses" },
  { name: "URL", pattern: "https?://[\\w\\-._~:/?#\\[\\]@!$&'()*+,;=%]+", flags: "g", description: "Matches HTTP/HTTPS URLs" },
  { name: "Phone (US)", pattern: "\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}", flags: "g", description: "Matches US phone numbers" },
  { name: "IP Address (v4)", pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b", flags: "g", description: "Matches IPv4 addresses" },
  { name: "Date (YYYY-MM-DD)", pattern: "\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])", flags: "g", description: "Matches ISO date format" },
  { name: "Hex Color", pattern: "#(?:[0-9a-fA-F]{3}){1,2}\\b", flags: "g", description: "Matches hex color codes" },
  { name: "HTML Tag", pattern: "</?[a-zA-Z][^>]*>", flags: "g", description: "Matches HTML/XML tags" },
  { name: "Digits Only", pattern: "^\\d+$", flags: "gm", description: "Matches lines with only digits" },
  { name: "Credit Card", pattern: "\\b(?:\\d[ -]*?){13,16}\\b", flags: "g", description: "Matches credit card numbers" },
  { name: "SSN", pattern: "\\b\\d{3}-\\d{2}-\\d{4}\\b", flags: "g", description: "Matches US Social Security numbers" },
  { name: "ZIP Code (US)", pattern: "\\b\\d{5}(?:-\\d{4})?\\b", flags: "g", description: "Matches US ZIP codes" },
  { name: "Username", pattern: "^[a-zA-Z0-9_]{3,20}$", flags: "gm", description: "Alphanumeric usernames (3-20 chars)" },
];

export function getRegexPattern(name: string): RegexPattern | undefined {
  return commonPatterns.find((p) => p.name === name);
}
