import dynamic from "next/dynamic";
import { ComponentType } from "react";
import ToolSkeleton from "@/components/tool-skeleton";

const toolComponents: Record<string, ComponentType> = {
  // TEXT & DEV TOOLS
  "json-formatter": dynamic(() => import("@/components/tools/json-formatter-client"), { loading: ToolSkeleton }),
  "json-validator": dynamic(() => import("@/components/tools/json-validator-client"), { loading: ToolSkeleton }),
  "json-to-xml": dynamic(() => import("@/components/tools/json-to-xml-client"), { loading: ToolSkeleton }),
  "xml-to-json": dynamic(() => import("@/components/tools/xml-to-json-client"), { loading: ToolSkeleton }),
  "html-formatter": dynamic(() => import("@/components/tools/html-formatter-client"), { loading: ToolSkeleton }),
  "html-minifier": dynamic(() => import("@/components/tools/html-minifier-client"), { loading: ToolSkeleton }),
  "css-minifier": dynamic(() => import("@/components/tools/css-minifier-client"), { loading: ToolSkeleton }),
  "javascript-minifier": dynamic(() => import("@/components/tools/javascript-minifier-client"), { loading: ToolSkeleton }),
  "sql-formatter": dynamic(() => import("@/components/tools/sql-formatter-client"), { loading: ToolSkeleton }),
  "base64-encoder": dynamic(() => import("@/components/tools/base64-encoder-client"), { loading: ToolSkeleton }),
  "base64-decoder": dynamic(() => import("@/components/tools/base64-decoder-client"), { loading: ToolSkeleton }),
  "url-encoder": dynamic(() => import("@/components/tools/url-encoder-client"), { loading: ToolSkeleton }),
  "url-decoder": dynamic(() => import("@/components/tools/url-decoder-client"), { loading: ToolSkeleton }),
  "text-case-converter": dynamic(() => import("@/components/tools/text-case-converter-client"), { loading: ToolSkeleton }),
  "text-diff-checker": dynamic(() => import("@/components/tools/text-diff-checker-client"), { loading: ToolSkeleton }),
  "word-counter": dynamic(() => import("@/components/tools/word-counter-client"), { loading: ToolSkeleton }),

  // GENERATORS & SECURITY
  "password-generator": dynamic(() => import("@/components/tools/password-generator-client"), { loading: ToolSkeleton }),
  "uuid-generator": dynamic(() => import("@/components/tools/uuid-generator-client"), { loading: ToolSkeleton }),
  "lorem-ipsum-generator": dynamic(() => import("@/components/tools/lorem-ipsum-generator-client"), { loading: ToolSkeleton }),
  "slug-generator": dynamic(() => import("@/components/tools/slug-generator-client"), { loading: ToolSkeleton }),
  "hash-generator": dynamic(() => import("@/components/tools/hash-generator-client"), { loading: ToolSkeleton }),
  "hmac-generator": dynamic(() => import("@/components/tools/hmac-generator-client"), { loading: ToolSkeleton }),
  "jwt-decoder": dynamic(() => import("@/components/tools/jwt-decoder-client"), { loading: ToolSkeleton }),
  "jwt-encoder": dynamic(() => import("@/components/tools/jwt-encoder-client"), { loading: ToolSkeleton }),
  "regex-tester": dynamic(() => import("@/components/tools/regex-tester-client"), { loading: ToolSkeleton }),
  "regex-generator": dynamic(() => import("@/components/tools/regex-generator-client"), { loading: ToolSkeleton }),

  // IMAGE TOOLS
  "image-compressor": dynamic(() => import("@/components/tools/image-compressor-client"), { loading: ToolSkeleton }),
  "jpg-to-png": dynamic(() => import("@/components/tools/jpg-to-png-client"), { loading: ToolSkeleton }),
  "png-to-jpg": dynamic(() => import("@/components/tools/png-to-jpg-client"), { loading: ToolSkeleton }),
  "webp-converter": dynamic(() => import("@/components/tools/webp-converter-client"), { loading: ToolSkeleton }),
  "image-resizer": dynamic(() => import("@/components/tools/image-resizer-client"), { loading: ToolSkeleton }),
  "image-to-base64": dynamic(() => import("@/components/tools/image-to-base64-client"), { loading: ToolSkeleton }),
  "base64-to-image": dynamic(() => import("@/components/tools/base64-to-image-client"), { loading: ToolSkeleton }),

  // DOCUMENT TOOLS
  "pdf-to-word": dynamic(() => import("@/components/tools/pdf-to-word-client"), { loading: ToolSkeleton }),
  "word-to-pdf": dynamic(() => import("@/components/tools/word-to-pdf-client"), { loading: ToolSkeleton }),
  "pdf-compressor": dynamic(() => import("@/components/tools/pdf-compressor-client"), { loading: ToolSkeleton }),
  "pdf-merger": dynamic(() => import("@/components/tools/pdf-merger-client"), { loading: ToolSkeleton }),
  "pdf-splitter": dynamic(() => import("@/components/tools/pdf-splitter-client"), { loading: ToolSkeleton }),

  // DAILY USE TOOLS
  "unit-converter": dynamic(() => import("@/components/tools/unit-converter-client"), { loading: ToolSkeleton }),
  "currency-converter": dynamic(() => import("@/components/tools/currency-converter-client"), { loading: ToolSkeleton }),
  "timezone-converter": dynamic(() => import("@/components/tools/timezone-converter-client"), { loading: ToolSkeleton }),
  "age-calculator": dynamic(() => import("@/components/tools/age-calculator-client"), { loading: ToolSkeleton }),
  "percentage-calculator": dynamic(() => import("@/components/tools/percentage-calculator-client"), { loading: ToolSkeleton }),
  "emi-calculator": dynamic(() => import("@/components/tools/emi-calculator-client"), { loading: ToolSkeleton }),
  "discount-calculator": dynamic(() => import("@/components/tools/discount-calculator-client"), { loading: ToolSkeleton }),

  // SEO & CONTENT TOOLS
  "meta-tag-generator": dynamic(() => import("@/components/tools/meta-tag-generator-client"), { loading: ToolSkeleton }),
  "open-graph-generator": dynamic(() => import("@/components/tools/open-graph-generator-client"), { loading: ToolSkeleton }),
  "keyword-density-checker": dynamic(() => import("@/components/tools/keyword-density-checker-client"), { loading: ToolSkeleton }),
  "html-to-text": dynamic(() => import("@/components/tools/html-to-text-client"), { loading: ToolSkeleton }),
  "text-to-html": dynamic(() => import("@/components/tools/text-to-html-client"), { loading: ToolSkeleton }),

  // ADVANCED DEV & ENCODING
  "json-to-csv-converter": dynamic(() => import("@/components/tools/json-to-csv-converter-client"), { loading: ToolSkeleton }),
  "csv-to-json-converter": dynamic(() => import("@/components/tools/csv-to-json-converter-client"), { loading: ToolSkeleton }),
  "yaml-to-json": dynamic(() => import("@/components/tools/yaml-to-json-client"), { loading: ToolSkeleton }),
  "json-to-yaml": dynamic(() => import("@/components/tools/json-to-yaml-client"), { loading: ToolSkeleton }),
  "url-parser": dynamic(() => import("@/components/tools/url-parser-client"), { loading: ToolSkeleton }),
  "user-agent-parser": dynamic(() => import("@/components/tools/user-agent-parser-client"), { loading: ToolSkeleton }),
  "http-header-viewer": dynamic(() => import("@/components/tools/http-header-viewer-client"), { loading: ToolSkeleton }),
  "ip-lookup": dynamic(() => import("@/components/tools/ip-lookup-client"), { loading: ToolSkeleton }),
  "curl-to-code": dynamic(() => import("@/components/tools/curl-to-code-client"), { loading: ToolSkeleton }),

  // TEXT PROCESSING
  "remove-duplicate-lines": dynamic(() => import("@/components/tools/remove-duplicate-lines-client"), { loading: ToolSkeleton }),
  "sort-text-lines": dynamic(() => import("@/components/tools/sort-text-lines-client"), { loading: ToolSkeleton }),
  "reverse-text": dynamic(() => import("@/components/tools/reverse-text-client"), { loading: ToolSkeleton }),
  "random-string-generator": dynamic(() => import("@/components/tools/random-string-generator-client"), { loading: ToolSkeleton }),
  "text-shuffle": dynamic(() => import("@/components/tools/text-shuffle-client"), { loading: ToolSkeleton }),
  "remove-extra-spaces": dynamic(() => import("@/components/tools/remove-extra-spaces-client"), { loading: ToolSkeleton }),
  "character-counter": dynamic(() => import("@/components/tools/character-counter-client"), { loading: ToolSkeleton }),
  "text-to-binary": dynamic(() => import("@/components/tools/text-to-binary-client"), { loading: ToolSkeleton }),
  "binary-to-text": dynamic(() => import("@/components/tools/binary-to-text-client"), { loading: ToolSkeleton }),
  "morse-code": dynamic(() => import("@/components/tools/morse-code-client"), { loading: ToolSkeleton }),

  // SECURITY TOOLS
  "rot13": dynamic(() => import("@/components/tools/rot13-client"), { loading: ToolSkeleton }),
  "password-strength-checker": dynamic(() => import("@/components/tools/password-strength-checker-client"), { loading: ToolSkeleton }),
  "credit-card-validator": dynamic(() => import("@/components/tools/credit-card-validator-client"), { loading: ToolSkeleton }),
  "secure-token-generator": dynamic(() => import("@/components/tools/secure-token-generator-client"), { loading: ToolSkeleton }),
  "checksum-generator": dynamic(() => import("@/components/tools/checksum-generator-client"), { loading: ToolSkeleton }),
  "ssl-checker": dynamic(() => import("@/components/tools/ssl-checker-client"), { loading: ToolSkeleton }),
  "http-status-checker": dynamic(() => import("@/components/tools/http-status-checker-client"), { loading: ToolSkeleton }),
  "file-hash-checker": dynamic(() => import("@/components/tools/file-hash-checker-client"), { loading: ToolSkeleton }),

  // IMAGE TOOLS EXTENDED
  "image-color-picker": dynamic(() => import("@/components/tools/image-color-picker-client"), { loading: ToolSkeleton }),
  "hex-rgb-converter": dynamic(() => import("@/components/tools/hex-rgb-converter-client"), { loading: ToolSkeleton }),
  "gradient-generator": dynamic(() => import("@/components/tools/gradient-generator-client"), { loading: ToolSkeleton }),
  "favicon-generator": dynamic(() => import("@/components/tools/favicon-generator-client"), { loading: ToolSkeleton }),
  "image-metadata-viewer": dynamic(() => import("@/components/tools/image-metadata-viewer-client"), { loading: ToolSkeleton }),
  "gif-maker": dynamic(() => import("@/components/tools/gif-maker-client"), { loading: ToolSkeleton }),
  "image-watermark": dynamic(() => import("@/components/tools/image-watermark-client"), { loading: ToolSkeleton }),
  "blur-image": dynamic(() => import("@/components/tools/blur-image-client"), { loading: ToolSkeleton }),
  "crop-image": dynamic(() => import("@/components/tools/crop-image-client"), { loading: ToolSkeleton }),

  // PDF & FILE TOOLS
  "pdf-page-number": dynamic(() => import("@/components/tools/pdf-page-number-client"), { loading: ToolSkeleton }),
  "pdf-rotate": dynamic(() => import("@/components/tools/pdf-rotate-client"), { loading: ToolSkeleton }),
  "pdf-unlock": dynamic(() => import("@/components/tools/pdf-unlock-client"), { loading: ToolSkeleton }),
  "pdf-protect": dynamic(() => import("@/components/tools/pdf-protect-client"), { loading: ToolSkeleton }),
  "text-to-pdf": dynamic(() => import("@/components/tools/text-to-pdf-client"), { loading: ToolSkeleton }),
  "markdown-to-pdf": dynamic(() => import("@/components/tools/markdown-to-pdf-client"), { loading: ToolSkeleton }),
  "mime-type-checker": dynamic(() => import("@/components/tools/mime-type-checker-client"), { loading: ToolSkeleton }),
  "filename-generator": dynamic(() => import("@/components/tools/filename-generator-client"), { loading: ToolSkeleton }),

  // BUSINESS & FINANCE (India-focused)
  "gst-calculator": dynamic(() => import("@/components/tools/gst-calculator-client"), { loading: ToolSkeleton }),
  "income-tax-calculator": dynamic(() => import("@/components/tools/income-tax-calculator-client"), { loading: ToolSkeleton }),
  "sip-calculator": dynamic(() => import("@/components/tools/sip-calculator-client"), { loading: ToolSkeleton }),
  "loan-eligibility": dynamic(() => import("@/components/tools/loan-eligibility-client"), { loading: ToolSkeleton }),
  "profit-margin": dynamic(() => import("@/components/tools/profit-margin-client"), { loading: ToolSkeleton }),
  "break-even": dynamic(() => import("@/components/tools/break-even-client"), { loading: ToolSkeleton }),
  "invoice-generator": dynamic(() => import("@/components/tools/invoice-generator-client"), { loading: ToolSkeleton }),
  "salary-calculator": dynamic(() => import("@/components/tools/salary-calculator-client"), { loading: ToolSkeleton }),
  "freelance-rate": dynamic(() => import("@/components/tools/freelance-rate-client"), { loading: ToolSkeleton }),
  "savings-goal": dynamic(() => import("@/components/tools/savings-goal-client"), { loading: ToolSkeleton }),

  // PRODUCTIVITY
  "todo-list": dynamic(() => import("@/components/tools/todo-list-client"), { loading: ToolSkeleton }),
  "notes-app": dynamic(() => import("@/components/tools/notes-app-client"), { loading: ToolSkeleton }),
  "pomodoro-timer": dynamic(() => import("@/components/tools/pomodoro-timer-client"), { loading: ToolSkeleton }),
  "random-decision-wheel": dynamic(() => import("@/components/tools/random-decision-wheel-client"), { loading: ToolSkeleton }),
  "habit-tracker": dynamic(() => import("@/components/tools/habit-tracker-client"), { loading: ToolSkeleton }),
  "daily-planner": dynamic(() => import("@/components/tools/daily-planner-client"), { loading: ToolSkeleton }),
  "meeting-time-finder": dynamic(() => import("@/components/tools/meeting-time-finder-client"), { loading: ToolSkeleton }),
  "countdown-timer": dynamic(() => import("@/components/tools/countdown-timer-client"), { loading: ToolSkeleton }),
  "stopwatch": dynamic(() => import("@/components/tools/stopwatch-client"), { loading: ToolSkeleton }),
  "random-number": dynamic(() => import("@/components/tools/random-number-client"), { loading: ToolSkeleton }),

  // SEO TOOLS
  "sitemap-generator": dynamic(() => import("@/components/tools/sitemap-generator-client"), { loading: ToolSkeleton }),
  "robots-txt-generator": dynamic(() => import("@/components/tools/robots-txt-generator-client"), { loading: ToolSkeleton }),
  "canonical-tag-generator": dynamic(() => import("@/components/tools/canonical-tag-generator-client"), { loading: ToolSkeleton }),
  "htaccess-redirect-generator": dynamic(() => import("@/components/tools/htaccess-redirect-generator-client"), { loading: ToolSkeleton }),
  "keyword-suggestion": dynamic(() => import("@/components/tools/keyword-suggestion-client"), { loading: ToolSkeleton }),
  "broken-link-checker": dynamic(() => import("@/components/tools/broken-link-checker-client"), { loading: ToolSkeleton }),
  "website-screenshot": dynamic(() => import("@/components/tools/website-screenshot-client"), { loading: ToolSkeleton }),
  "whois-lookup": dynamic(() => import("@/components/tools/whois-lookup-client"), { loading: ToolSkeleton }),

  // DEV HELPERS
  "cron-generator": dynamic(() => import("@/components/tools/cron-generator-client"), { loading: ToolSkeleton }),
  "timestamp-converter": dynamic(() => import("@/components/tools/timestamp-converter-client"), { loading: ToolSkeleton }),
  "color-converter": dynamic(() => import("@/components/tools/color-converter-client"), { loading: ToolSkeleton }),
  "html-entities": dynamic(() => import("@/components/tools/html-entities-client"), { loading: ToolSkeleton }),
  "js-obfuscator": dynamic(() => import("@/components/tools/js-obfuscator-client"), { loading: ToolSkeleton }),
  "js-deobfuscator": dynamic(() => import("@/components/tools/js-deobfuscator-client"), { loading: ToolSkeleton }),
  "markdown-editor": dynamic(() => import("@/components/tools/markdown-editor-client"), { loading: ToolSkeleton }),
  "api-tester": dynamic(() => import("@/components/tools/api-tester-client"), { loading: ToolSkeleton }),
  "graphql-tester": dynamic(() => import("@/components/tools/graphql-tester-client"), { loading: ToolSkeleton }),

  // CSS & DESIGN
  "box-shadow-generator": dynamic(() => import("@/components/tools/box-shadow-generator-client"), { loading: ToolSkeleton }),
  "flexbox-generator": dynamic(() => import("@/components/tools/flexbox-generator-client"), { loading: ToolSkeleton }),
  "grid-generator": dynamic(() => import("@/components/tools/grid-generator-client"), { loading: ToolSkeleton }),
  "border-radius-generator": dynamic(() => import("@/components/tools/border-radius-generator-client"), { loading: ToolSkeleton }),
  "css-animation-generator": dynamic(() => import("@/components/tools/css-animation-generator-client"), { loading: ToolSkeleton }),
  "color-palette-generator": dynamic(() => import("@/components/tools/color-palette-generator-client"), { loading: ToolSkeleton }),

  // GENERATORS & SECURITY
  "qr-code-generator": dynamic(() => import("@/components/tools/qr-code-generator-client"), { loading: ToolSkeleton }),
  "barcode-generator": dynamic(() => import("@/components/tools/barcode-generator-client"), { loading: ToolSkeleton }),
  "aes-encrypt-decrypt": dynamic(() => import("@/components/tools/aes-encrypt-decrypt-client"), { loading: ToolSkeleton }),
  "caesar-cipher": dynamic(() => import("@/components/tools/caesar-cipher-client"), { loading: ToolSkeleton }),

  // DAILY USE
  "bmi-calculator": dynamic(() => import("@/components/tools/bmi-calculator-client"), { loading: ToolSkeleton }),
  "compound-interest-calculator": dynamic(() => import("@/components/tools/compound-interest-calculator-client"), { loading: ToolSkeleton }),
  "number-base-converter": dynamic(() => import("@/components/tools/number-base-converter-client"), { loading: ToolSkeleton }),
  "text-to-speech": dynamic(() => import("@/components/tools/text-to-speech-client"), { loading: ToolSkeleton }),

  // DEV HELPERS
  "chmod-calculator": dynamic(() => import("@/components/tools/chmod-calculator-client"), { loading: ToolSkeleton }),
  "git-command-generator": dynamic(() => import("@/components/tools/git-command-generator-client"), { loading: ToolSkeleton }),
  "json-schema-validator": dynamic(() => import("@/components/tools/json-schema-validator-client"), { loading: ToolSkeleton }),
  "gitignore-generator": dynamic(() => import("@/components/tools/gitignore-generator-client"), { loading: ToolSkeleton }),
  "package-json-generator": dynamic(() => import("@/components/tools/package-json-generator-client"), { loading: ToolSkeleton }),
  "ip-subnet-calculator": dynamic(() => import("@/components/tools/ip-subnet-calculator-client"), { loading: ToolSkeleton }),

  // FUN & SOCIAL
  "typing-speed-test": dynamic(() => import("@/components/tools/typing-speed-test-client"), { loading: ToolSkeleton }),
  "ascii-art-generator": dynamic(() => import("@/components/tools/ascii-art-generator-client"), { loading: ToolSkeleton }),
  "readability-checker": dynamic(() => import("@/components/tools/readability-checker-client"), { loading: ToolSkeleton }),
  "social-image-resizer": dynamic(() => import("@/components/tools/social-image-resizer-client"), { loading: ToolSkeleton }),
  "twitter-character-counter": dynamic(() => import("@/components/tools/twitter-character-counter-client"), { loading: ToolSkeleton }),
  "youtube-thumbnail-preview": dynamic(() => import("@/components/tools/youtube-thumbnail-preview-client"), { loading: ToolSkeleton }),
};

export function getToolComponent(slug: string): ComponentType | null {
  return toolComponents[slug] ?? null;
}

export function hasToolComponent(slug: string): boolean {
  return slug in toolComponents;
}
