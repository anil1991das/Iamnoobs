export type TextCase =
  | "upper"
  | "lower"
  | "title"
  | "sentence"
  | "camel"
  | "pascal"
  | "snake"
  | "kebab"
  | "dot"
  | "alternating"
  | "inverse";

export function convertCase(text: string, target: TextCase): string {
  switch (target) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return text.replace(/\b\w/g, (c) => c.toUpperCase());
    case "sentence":
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
    case "camel": {
      const words = extractWords(text);
      return words
        .map((w, i) =>
          i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join("");
    }
    case "pascal": {
      const words = extractWords(text);
      return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
    }
    case "snake":
      return extractWords(text).join("_").toLowerCase();
    case "kebab":
      return extractWords(text).join("-").toLowerCase();
    case "dot":
      return extractWords(text).join(".").toLowerCase();
    case "alternating":
      return [...text].map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase())).join("");
    case "inverse":
      return [...text].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("");
    default:
      return text;
  }
}

function extractWords(text: string): string[] {
  return text.match(/[a-zA-Z0-9]+/g) || [];
}

export const caseOptions: { value: TextCase; label: string }[] = [
  { value: "upper", label: "UPPERCASE" },
  { value: "lower", label: "lowercase" },
  { value: "title", label: "Title Case" },
  { value: "sentence", label: "Sentence case" },
  { value: "camel", label: "camelCase" },
  { value: "pascal", label: "PascalCase" },
  { value: "snake", label: "snake_case" },
  { value: "kebab", label: "kebab-case" },
  { value: "dot", label: "dot.case" },
  { value: "alternating", label: "aLtErNaTiNg" },
  { value: "inverse", label: "iNVERSE" },
];
