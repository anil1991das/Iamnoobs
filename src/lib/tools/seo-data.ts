interface ToolSeoData {
  content: string[];
  faqs: { question: string; answer: string }[];
}

export const seoData: Record<string, ToolSeoData> = {
  "json-formatter": {
    content: [
      "JSON (JavaScript Object Notation) is the most widely used data interchange format on the web. Whether you are working with REST APIs, configuration files, or data storage, JSON is everywhere. Our free online JSON Formatter and Beautifier lets you instantly format, validate, and beautify your raw JSON data with proper indentation, making it easy to read and debug.",
      "When developers work with APIs and databases, the JSON responses are often minified — compressed into a single line with no whitespace. While this is efficient for data transfer, it makes the data nearly impossible to read or debug manually. A JSON formatter solves this by adding line breaks and indentation, transforming dense JSON into a clean, hierarchical structure.",
      "Our JSON Formatter is built entirely in your browser. Your data never leaves your device — no server calls, no uploads, complete privacy. Simply paste your JSON into the input field, click 'Format JSON', and get beautifully indented output instantly. You can also minify formatted JSON to save space when needed.",
      "The tool validates your JSON as it formats. If your input contains syntax errors like missing commas, unmatched brackets, or invalid escape sequences, you will see a clear error message pointing to the issue. This makes it invaluable as a JSON debugger as well.",
      "Use cases for JSON formatting are extensive: debugging API responses, cleaning up configuration files, preparing data for documentation, validating webhook payloads, reviewing database exports, and formatting log output. Developers, QA engineers, technical writers, and data analysts all benefit from a reliable JSON formatting tool.",
      "Our tool supports all valid JSON types: objects, arrays, strings, numbers, booleans, and null values. It handles deeply nested structures, large files, and Unicode characters without any issues. The output preserves all data exactly as it was — only the formatting changes.",
      "Beyond formatting, you can copy the result to your clipboard with one click or download it as a .json file. The tool is mobile-friendly, works offline once loaded, and requires no installation or signup. It is built with performance in mind and can handle large JSON documents without lag.",
    ],
    faqs: [
      {
        question: "What is JSON formatting?",
        answer: "JSON formatting (also called beautifying or pretty-printing) is the process of adding whitespace, line breaks, and indentation to minified JSON data to make it human-readable. The actual data remains unchanged — only the presentation is improved.",
      },
      {
        question: "Is my JSON data safe when using this tool?",
        answer: "Yes, completely. Our JSON Formatter runs entirely in your browser using client-side JavaScript. Your data is never sent to any server. You can even use this tool offline once the page has loaded.",
      },
      {
        question: "What happens if my JSON has errors?",
        answer: "The tool will display a clear error message describing the syntax issue found in your JSON. Common errors include missing commas, unmatched brackets, trailing commas, and single quotes instead of double quotes.",
      },
      {
        question: "Can I minify JSON with this tool?",
        answer: "Yes. In addition to formatting, you can minify your JSON to remove all unnecessary whitespace, producing the most compact representation. This is useful when you need to reduce payload size for APIs or storage.",
      },
      {
        question: "What is the maximum JSON size this tool can handle?",
        answer: "Since the tool runs in your browser, it can handle JSON data up to several megabytes depending on your device's memory. For typical use cases like API responses and config files, there are no practical limits.",
      },
    ],
  },

  "password-generator": {
    content: [
      "In today's digital world, using strong, unique passwords for every account is one of the most important steps you can take to protect your online security. Our Password Generator creates cryptographically secure random passwords instantly, right in your browser, with complete control over length and character types.",
      "Weak passwords are the number one cause of security breaches. Common passwords like '123456', 'password', or 'qwerty' can be cracked in milliseconds by modern brute-force tools. Even seemingly complex passwords based on personal information (birthdays, pet names, favorite sports) are vulnerable to dictionary attacks and social engineering.",
      "Our generator uses the Web Crypto API — the same cryptographic random number generator used by banking and security applications. This ensures true randomness, not the pseudo-random numbers produced by simple Math.random() calls. Every password generated is unpredictable and secure.",
      "You have full control over your password's composition. Choose the length (from 4 to 128 characters), and toggle uppercase letters, lowercase letters, numbers, and special symbols independently. The strength meter provides instant feedback on how secure your generated password is, based on length and character variety.",
      "Security experts recommend passwords of at least 12-16 characters with a mix of all character types. For high-security accounts like email, banking, and cloud services, consider using 20+ character passwords. With a password manager, you never need to remember these complex passwords — just generate and store them securely.",
      "All password generation happens locally in your browser. We never see, store, or transmit your passwords. There are no server calls, no analytics on generated passwords, and no logging. Your generated passwords exist only in your browser's memory until you close the tab.",
      "Beyond personal use, this tool is valuable for IT administrators setting up initial passwords for user accounts, developers generating test credentials and API keys, and anyone who needs random secure strings for tokens, encryption keys, or other security-sensitive applications.",
    ],
    faqs: [
      {
        question: "How secure are the generated passwords?",
        answer: "Extremely secure. The passwords are generated using the Web Crypto API (crypto.getRandomValues), which provides cryptographically strong random values. This is the same level of randomness used in SSL/TLS encryption and other security-critical applications.",
      },
      {
        question: "Are my generated passwords stored anywhere?",
        answer: "No. Password generation happens entirely in your browser. No passwords are sent to any server, stored in any database, or logged in any way. Once you close the tab, the generated passwords are gone from memory.",
      },
      {
        question: "What password length should I use?",
        answer: "For most accounts, 16 characters with a mix of uppercase, lowercase, numbers, and symbols provides excellent security. For high-value accounts (email, banking), consider 20+ characters. Never use passwords shorter than 8 characters.",
      },
      {
        question: "Why should I use random passwords instead of memorable ones?",
        answer: "Random passwords are exponentially harder to crack than human-created passwords. Humans tend to follow predictable patterns that attackers exploit. Combined with a password manager, random passwords provide the best balance of security and convenience.",
      },
      {
        question: "Can I use this for generating API keys or tokens?",
        answer: "Yes. The generator produces cryptographically random strings suitable for API keys, tokens, secrets, and other security-sensitive uses. Just set the desired length and character types for your requirements.",
      },
    ],
  },

  "word-counter": {
    content: [
      "Whether you are writing a blog post, an essay, a social media caption, or professional documentation, knowing your word count is essential. Our free online Word Counter gives you instant, real-time statistics about your text — including word count, character count, sentence count, paragraph count, and estimated reading time.",
      "Word count is a fundamental metric in writing. Academic institutions set word limits for essays and dissertations, publishers have guidelines for articles and blog posts, social media platforms impose character limits, and SEO experts recommend specific content lengths for different page types. Having an accurate, instant word counter saves time and helps you meet these requirements.",
      "Our tool counts in real-time as you type or paste text. There is no need to click a button — the statistics update instantly with every keystroke. This live feedback helps you write to target lengths without constantly checking manually. You can see at a glance whether your content meets the minimum or maximum requirements.",
      "Beyond basic word counting, the tool provides character count (with and without spaces), which is crucial for social media posts, meta descriptions, and SMS messages. Twitter, Instagram, and LinkedIn all have character limits that you need to track. Our tool shows both counts simultaneously.",
      "The sentence and paragraph counters help with structural analysis of your writing. Good writing typically has varied sentence lengths and well-organized paragraphs. Monitoring these metrics can help you improve readability and flow. The reading time estimate, based on an average reading speed of 200 words per minute, is valuable for blog posts and articles.",
      "Writers, students, journalists, content marketers, SEO specialists, translators, and social media managers all rely on word counting tools daily. Our tool handles all languages and character sets, including Unicode, emoji, and special characters. It works with any text content you can paste into a browser.",
      "The tool runs entirely in your browser — your text is never uploaded to any server. This makes it safe for counting words in confidential documents, unpublished manuscripts, legal texts, and other sensitive content. It works offline once loaded and requires no account or signup.",
    ],
    faqs: [
      {
        question: "How does the word counter calculate words?",
        answer: "Words are counted by splitting the text on whitespace (spaces, tabs, line breaks) and counting the resulting non-empty segments. This method accurately handles multiple spaces, varied punctuation, and different text formatting styles.",
      },
      {
        question: "Does it count words in real-time?",
        answer: "Yes, all statistics update instantly as you type or paste text. There is no need to click any button — the counts are always current with your latest input.",
      },
      {
        question: "How is reading time calculated?",
        answer: "Reading time is estimated based on an average reading speed of 200 words per minute, which is the standard for adult English readers. The minimum displayed time is 1 minute. Actual reading time may vary based on content complexity and reader proficiency.",
      },
      {
        question: "Can I use this for languages other than English?",
        answer: "Yes, the word counter works with all languages that use space-separated words, including European languages, Hindi, Arabic, and more. For character-based languages like Chinese or Japanese, the character count is more meaningful than word count.",
      },
      {
        question: "Is my text stored or shared?",
        answer: "No. The word counter runs entirely in your browser. Your text is never sent to any server, never stored, and never shared. It is completely private and safe for confidential content.",
      },
    ],
  },

  "base64-encoder": {
    content: [
      "Base64 encoding is a method of converting binary data or text into a set of 64 printable ASCII characters. It is one of the most widely used encoding schemes in computing, found in email attachments (MIME), data URIs in HTML/CSS, API authentication tokens, and countless other applications. Our free Base64 Encoder converts any text to Base64 format instantly.",
      "The Base64 alphabet consists of uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and two additional characters (+ and /), with = used for padding. This encoding guarantees that the output contains only characters that are safe to transmit through systems that might corrupt raw binary data — such as email protocols, URL parameters, and XML documents.",
      "How does Base64 encoding work? The input is processed 3 bytes (24 bits) at a time. These 24 bits are split into four 6-bit groups, and each group is mapped to one of the 64 characters in the Base64 alphabet. If the input length is not a multiple of 3, padding characters (=) are added to the output. This process is deterministic — the same input always produces the same output.",
      "Common use cases for Base64 encoding include embedding images directly in HTML or CSS using data URIs, encoding binary data for JSON payloads, transmitting files through text-only protocols, encoding authentication credentials for HTTP Basic Auth, and storing binary data in databases that only support text.",
      "Our encoder handles full Unicode text, including non-Latin characters, emoji, and special symbols. It uses UTF-8 encoding internally before applying Base64, ensuring that all characters are preserved correctly when decoded. This is important because the original Base64 standard only handles ASCII characters directly.",
      "The tool processes everything in your browser — no server calls, no data uploads. Your text stays private on your device. The encoded output can be copied to your clipboard with one click or downloaded as a text file. The tool handles both small strings and large text blocks efficiently.",
      "Developers frequently use Base64 encoding when working with APIs, embedding resources in web pages, handling file uploads in JavaScript, and creating data URIs. Understanding Base64 is fundamental knowledge for web developers, and having a reliable encoder tool saves time during development and debugging.",
    ],
    faqs: [
      {
        question: "What is Base64 encoding used for?",
        answer: "Base64 encoding is used to convert binary or text data into a format that can be safely transmitted through text-only systems. Common uses include email attachments, data URIs in HTML/CSS, HTTP authentication, and embedding binary data in JSON or XML.",
      },
      {
        question: "Is Base64 encoding the same as encryption?",
        answer: "No. Base64 is an encoding scheme, not encryption. It does not provide any security — anyone can decode Base64 data. It is designed for data transport, not data protection. Never use Base64 as a substitute for encryption.",
      },
      {
        question: "Does Base64 encoding increase the data size?",
        answer: "Yes. Base64 encoding increases the data size by approximately 33%. Every 3 bytes of input become 4 bytes of output. This overhead is the trade-off for having a text-safe representation of binary data.",
      },
      {
        question: "Can I encode non-English text?",
        answer: "Yes. Our encoder handles all Unicode text, including characters from all languages, emoji, and special symbols. It uses UTF-8 encoding internally to properly handle multi-byte characters before applying Base64 encoding.",
      },
      {
        question: "Is my data safe when using this tool?",
        answer: "Yes. The encoding happens entirely in your browser using JavaScript. Your text is never sent to any server or stored anywhere. You can verify this by using the tool with your network disconnected.",
      },
    ],
  },

  "uuid-generator": {
    content: [
      "A UUID (Universally Unique Identifier) is a 128-bit identifier that is practically guaranteed to be unique across all space and time. Our UUID Generator creates version 4 UUIDs — the most commonly used type — using cryptographically secure random number generation directly in your browser.",
      "UUIDs follow the format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, where each x is a hexadecimal digit and the 4 indicates version 4. The y position is restricted to 8, 9, a, or b. This standardized format (defined in RFC 4122) is recognized and supported by virtually all programming languages, databases, and systems.",
      "Why use UUIDs instead of sequential IDs? In distributed systems, microservices, or applications that need to generate IDs without coordinating with a central authority, UUIDs solve the collision problem. Each UUID generated independently has an astronomically low probability of duplicating any other UUID. The total number of possible v4 UUIDs is approximately 5.3 × 10^36.",
      "Common use cases for UUIDs include database primary keys (especially in distributed databases like Cassandra), API resource identifiers, session tokens, correlation IDs for distributed tracing, file naming to avoid collisions, and device or installation identifiers. Major systems like Windows, macOS, and all modern web frameworks use UUIDs extensively.",
      "Our generator uses the Web Crypto API's crypto.randomUUID() function when available, falling back to crypto.getRandomValues() for maximum browser compatibility. Both methods provide cryptographically secure random numbers, ensuring each UUID is truly unpredictable and suitable for security-sensitive applications.",
      "You can generate between 1 and 100 UUIDs at once, making it easy to prepare batches of identifiers for testing, seeding databases, or setting up configuration files. Each UUID can be copied individually, or you can copy all generated UUIDs at once. The tool works offline and requires no server communication.",
      "Developers, database administrators, DevOps engineers, QA testers, and system architects regularly need UUID generators. Whether you are setting up a new database schema, writing unit tests, configuring microservices, or creating unique identifiers for any purpose, this tool provides instant, reliable UUID generation.",
    ],
    faqs: [
      {
        question: "What is a UUID v4?",
        answer: "UUID v4 is a version of UUID that is generated using random or pseudo-random numbers. It is the most commonly used UUID version. The '4' in the third group of the UUID identifies it as version 4. These UUIDs are suitable for most identifier needs.",
      },
      {
        question: "Can two UUIDs ever be the same?",
        answer: "While theoretically possible, the probability is astronomically low. There are approximately 5.3 × 10^36 possible v4 UUIDs. You would need to generate 1 billion UUIDs per second for 85 years to have a 50% chance of a single collision. For all practical purposes, UUIDs are unique.",
      },
      {
        question: "Are generated UUIDs cryptographically secure?",
        answer: "Yes. Our generator uses the Web Crypto API (crypto.randomUUID or crypto.getRandomValues), which provides cryptographically secure random numbers. The generated UUIDs are suitable for security-sensitive applications like session tokens.",
      },
      {
        question: "Can I use UUIDs as database primary keys?",
        answer: "Yes, UUIDs are commonly used as primary keys, especially in distributed databases. However, be aware that random UUIDs can cause index fragmentation in B-tree indexes. Some databases offer UUID v7 or ULID alternatives that maintain sort order.",
      },
      {
        question: "What is the difference between UUID v1 and v4?",
        answer: "UUID v1 is based on the current timestamp and the machine's MAC address, making it partially predictable but time-sortable. UUID v4 is entirely random, providing better privacy and unpredictability but no time-ordering. Most applications prefer v4 for its simplicity and privacy.",
      },
    ],
  },

  "json-validator": {
    content: [
      "JSON validation is the process of checking whether a given string is valid JSON according to the specification. Our free online JSON Validator instantly checks your data for syntax errors, highlights the exact location of issues, and confirms when your JSON is well-formed.",
      "Common JSON errors include missing commas between properties, trailing commas after the last element, unquoted keys, single quotes instead of double quotes, and mismatched brackets or braces. Our validator catches all of these and provides clear error messages.",
      "The tool runs entirely in your browser — your data never leaves your device. Simply paste your JSON, and the validator will immediately tell you whether it is valid or highlight exactly where the problem lies.",
    ],
    faqs: [
      { question: "What makes JSON invalid?", answer: "Common issues include trailing commas, single quotes instead of double quotes, unquoted property names, missing colons between keys and values, and mismatched brackets or braces." },
      { question: "Is this the same as JSON Schema validation?", answer: "No. This tool validates JSON syntax (whether the string is valid JSON). JSON Schema validation checks whether valid JSON conforms to a specific structure, which is a separate concern." },
      { question: "Does it modify my JSON?", answer: "No. The validator only checks your JSON for errors — it never modifies or reformats the data." },
    ],
  },

  "json-to-xml": {
    content: [
      "Converting JSON to XML is a common task when integrating modern web APIs with legacy systems that expect XML input. Our free JSON to XML converter transforms your JSON data into well-formed XML instantly in your browser.",
      "The converter handles nested objects, arrays, primitive types, and special characters. Objects become XML elements, arrays create repeated child elements, and special characters are properly escaped in the output.",
      "Whether you are working with SOAP APIs, RSS feeds, or enterprise systems that require XML, this tool handles the conversion automatically without any server-side processing.",
    ],
    faqs: [
      { question: "How are JSON arrays converted to XML?", answer: "Array items are wrapped in repeated child elements. Each item becomes a separate XML element within the parent, maintaining the correct order." },
      { question: "Are special characters handled?", answer: "Yes. Characters like <, >, &, and quotes are properly escaped in the XML output to ensure well-formed XML." },
      { question: "Can I customize the root element name?", answer: "The converter uses 'root' as the default root element. You can modify the output after conversion if you need a different root element name." },
    ],
  },

  "xml-to-json": {
    content: [
      "Converting XML to JSON is essential when migrating from XML-based services to modern JSON APIs or when consuming XML data in JavaScript applications. Our free XML to JSON converter parses your XML and produces clean JSON output instantly.",
      "The converter uses the browser's native DOMParser for accurate XML parsing. It handles nested elements, attributes, text content, CDATA sections, and mixed content nodes reliably.",
      "This tool runs entirely client-side — your XML data is never sent to any server. It is ideal for converting API responses, configuration files, and data exports from XML to JSON format.",
    ],
    faqs: [
      { question: "How are XML attributes handled?", answer: "XML attributes are typically converted to JSON properties prefixed with '@' to distinguish them from child elements, preserving all the information from the original XML." },
      { question: "Does it handle namespaces?", answer: "The converter processes namespaced elements but does not perform namespace-aware parsing. Namespace prefixes are preserved in the element names." },
      { question: "What about CDATA sections?", answer: "CDATA sections are treated as text content and included in the JSON output as string values." },
    ],
  },

  "html-formatter": {
    content: [
      "Messy HTML is difficult to read, debug, and maintain. Our free online HTML Formatter beautifies your HTML code with proper indentation, consistent formatting, and clean structure — making it easy to understand at a glance.",
      "The formatter handles standard HTML elements, void tags (like <br>, <img>, <input>), nested structures, and inline content. It adds appropriate indentation levels for nested elements while keeping inline content readable.",
      "Perfect for cleaning up minified HTML, formatting code generated by CMS platforms, or preparing HTML for documentation and code reviews. Everything runs in your browser — no data is sent to any server.",
    ],
    faqs: [
      { question: "Does it change my HTML semantics?", answer: "No. The formatter only adds whitespace and indentation — it never changes element names, attributes, content, or structure. Your HTML renders identically before and after formatting." },
      { question: "Can it handle partial HTML?", answer: "Yes. You can format complete documents or HTML fragments. The tool processes whatever HTML you provide without requiring a full document structure." },
      { question: "How does it handle inline elements?", answer: "Inline content within block elements is kept on the same line when possible. Block-level elements get their own lines with proper indentation." },
    ],
  },

  "html-minifier": {
    content: [
      "Minifying HTML removes unnecessary whitespace, comments, and redundant characters to reduce file size. Our free HTML Minifier compresses your HTML for faster page loads and reduced bandwidth usage.",
      "The tool strips comments, collapses whitespace between elements, and removes unnecessary characters while preserving the structure and rendering of your HTML. This can reduce HTML file sizes by 10-30% depending on the original formatting.",
      "Use this tool to prepare HTML for production deployment, optimize email templates, or reduce the size of HTML embedded in other formats. Everything runs in your browser for complete privacy.",
    ],
    faqs: [
      { question: "Will minification break my HTML?", answer: "No. The minifier only removes unnecessary whitespace and comments. All elements, attributes, and content are preserved, and the minified HTML renders identically." },
      { question: "How much size reduction can I expect?", answer: "Typically 10-30% reduction, depending on how much whitespace and comments are in the original. Heavily indented or commented HTML sees the greatest reduction." },
      { question: "Does it remove conditional comments?", answer: "The tool removes standard HTML comments. If you need to preserve specific comments, you can add them back after minification." },
    ],
  },

  "css-minifier": {
    content: [
      "CSS minification removes comments, whitespace, and unnecessary characters from your stylesheets to reduce file size and improve page load times. Our free CSS Minifier processes your CSS instantly in your browser.",
      "The tool removes all comments, collapses whitespace, eliminates unnecessary semicolons before closing braces, and produces the most compact CSS possible while maintaining identical rendering.",
      "Whether you are optimizing a production build, reducing the size of inline styles, or preparing CSS for email templates, this tool handles the minification efficiently with no server processing required.",
    ],
    faqs: [
      { question: "Will minification affect how my CSS renders?", answer: "No. CSS minification only removes whitespace and comments that have no effect on rendering. Your styles will apply identically after minification." },
      { question: "Does it combine or optimize CSS rules?", answer: "No. This tool performs whitespace and comment removal only. It does not merge selectors, remove duplicate rules, or perform other CSS optimizations." },
      { question: "Can I minify SCSS or LESS?", answer: "This tool works with plain CSS only. SCSS and LESS files should be compiled to CSS first, then minified." },
    ],
  },

  "javascript-minifier": {
    content: [
      "JavaScript minification removes comments, whitespace, and unnecessary characters to reduce script file sizes and improve page performance. Our free JavaScript Minifier processes your code instantly in your browser.",
      "The tool removes single-line and multi-line comments, collapses whitespace, and strips unnecessary characters while preserving JavaScript functionality. It handles string literals carefully to avoid breaking your code.",
      "Ideal for quick minification of scripts, inline JavaScript, and code snippets. For production applications, consider dedicated build tools like Terser that also handle variable renaming and dead code elimination.",
    ],
    faqs: [
      { question: "Is this suitable for production use?", answer: "For quick minification, yes. For production builds, consider build tools like Terser or webpack that also perform variable renaming, tree shaking, and other advanced optimizations." },
      { question: "Does it handle ES6+ syntax?", answer: "The tool handles basic whitespace and comment removal for all JavaScript versions. It does not parse or transform syntax, so it works with any JavaScript version." },
      { question: "Will it break my code?", answer: "The minifier is conservative — it only removes whitespace and comments. String literals and regex patterns are handled carefully. However, always test minified code before deployment." },
    ],
  },

  "sql-formatter": {
    content: [
      "Messy SQL queries are hard to read, debug, and maintain. Our free SQL Formatter beautifies your SQL statements with proper indentation, uppercase keywords, and clean alignment — making complex queries easy to understand.",
      "The formatter handles SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, and other common SQL statements. Keywords are uppercased, clauses get their own lines, and nested subqueries are properly indented.",
      "Perfect for cleaning up queries from ORMs, formatting stored procedures, preparing SQL for documentation, or simply making a complex query readable. Everything runs in your browser.",
    ],
    faqs: [
      { question: "Which SQL dialects are supported?", answer: "The formatter handles standard SQL syntax that is common across MySQL, PostgreSQL, SQL Server, Oracle, and SQLite. Dialect-specific extensions are preserved but may not receive special formatting." },
      { question: "Does it validate my SQL?", answer: "No. The formatter only reformats the visual layout of your SQL. It does not check for syntax errors, missing tables, or logical issues." },
      { question: "Will it change my query results?", answer: "No. The formatter only changes whitespace and keyword casing. It never modifies table names, column names, values, or query logic." },
    ],
  },

  "base64-decoder": {
    content: [
      "Base64 decoding converts Base64-encoded text back into its original form. Our free Base64 Decoder instantly reverses Base64 encoding, revealing the original text content right in your browser.",
      "Base64 is used extensively in web development for data URIs, email attachments, API tokens, and more. When you encounter Base64-encoded data, this tool helps you quickly decode it to see the original content.",
      "The decoder handles standard Base64 with proper UTF-8 support, meaning non-ASCII characters like accented letters, CJK characters, and emoji are decoded correctly. Everything runs locally — no data is sent to any server.",
    ],
    faqs: [
      { question: "Can I decode binary data like images?", answer: "This tool decodes Base64 to text. For Base64-encoded images, use our Base64 to Image converter which properly handles binary image data." },
      { question: "What if my Base64 string is invalid?", answer: "The tool will display an error message if the input is not valid Base64. Common issues include incorrect padding, invalid characters, or corrupted data." },
      { question: "Does it support URL-safe Base64?", answer: "The tool handles standard Base64. URL-safe Base64 (using - and _ instead of + and /) may need the characters replaced before decoding." },
    ],
  },

  "url-encoder": {
    content: [
      "URL encoding (percent-encoding) converts special characters in URLs into safe representations using percent signs followed by hex values. Our free URL Encoder ensures your URLs and query parameters are properly encoded.",
      "Special characters like spaces, ampersands, question marks, and non-ASCII characters must be encoded when used in URLs. Without proper encoding, URLs may break, cause errors, or create security vulnerabilities.",
      "Use this tool when building API queries, constructing redirect URLs, encoding form data, or ensuring URLs with special characters work correctly across all browsers and servers.",
    ],
    faqs: [
      { question: "Why do URLs need encoding?", answer: "URLs can only contain a limited set of ASCII characters. Special characters like spaces, &, ?, =, and non-ASCII characters must be percent-encoded to be safely included in URLs." },
      { question: "What characters are encoded?", answer: "All characters except letters (A-Z, a-z), digits (0-9), and a few special characters (-, _, ., ~) are encoded. This ensures maximum compatibility across systems." },
      { question: "Is this the same as HTML encoding?", answer: "No. URL encoding (percent-encoding) is for URLs and uses %XX format. HTML encoding uses named entities like &amp; and is for HTML content." },
    ],
  },

  "url-decoder": {
    content: [
      "URL decoding reverses percent-encoding, converting sequences like %20 back to their original characters (e.g. spaces). Our free URL Decoder instantly reveals the readable text behind encoded URLs.",
      "Encoded URLs are common in browser address bars, server logs, API responses, and redirects. This tool helps you quickly understand what an encoded URL actually says without manually converting percent-encoded characters.",
      "The decoder handles all standard percent-encoded characters, including multi-byte UTF-8 sequences for international characters. Everything runs in your browser — no data is sent to any server.",
    ],
    faqs: [
      { question: "What does %20 mean in a URL?", answer: "%20 is the URL-encoded representation of a space character. Similarly, %3D is =, %26 is &, and %3F is ?. URL decoding converts these back to their original characters." },
      { question: "Can I decode full URLs?", answer: "Yes. Paste an entire URL and the tool will decode all percent-encoded sequences within it, making the URL human-readable." },
      { question: "What if the encoded string is invalid?", answer: "The tool will decode what it can and display an error for malformed percent-encoded sequences." },
    ],
  },

  "text-case-converter": {
    content: [
      "Our free Text Case Converter transforms text between 11 different case styles instantly. Convert to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, aLtErNaTiNg CaSe, and iNVERSE cASE.",
      "Whether you are normalizing text for a database, formatting variable names for code, creating consistent headings for documents, or just having fun with alternating case, this tool handles it all with one click.",
      "The converter handles full Unicode text, preserving special characters and whitespace while transforming only the relevant letters. It runs entirely in your browser with no data sent to any server.",
    ],
    faqs: [
      { question: "What case styles are supported?", answer: "11 styles: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, aLtErNaTiNg CaSe, and iNVERSE cASE." },
      { question: "Does it work with non-English text?", answer: "Yes. The converter works with any language that has uppercase/lowercase letter forms, including European languages with accented characters." },
      { question: "What is the difference between camelCase and PascalCase?", answer: "camelCase starts with a lowercase letter (myVariableName), while PascalCase starts with an uppercase letter (MyVariableName). Both capitalize the first letter of each subsequent word." },
    ],
  },

  "text-diff-checker": {
    content: [
      "Our free Text Diff Checker compares two pieces of text and highlights the differences line by line. See exactly what was added, removed, or modified between two versions of any text content.",
      "The tool uses a Longest Common Subsequence (LCS) algorithm to accurately identify differences. Added lines are highlighted in green, removed lines in red, and unchanged lines provide context around the changes.",
      "Perfect for comparing code versions, reviewing document changes, checking configuration file differences, or verifying data transformations. Everything runs locally in your browser.",
    ],
    faqs: [
      { question: "How does the diff algorithm work?", answer: "The tool uses a Longest Common Subsequence algorithm to find the optimal alignment between two texts, then marks lines as added, removed, or unchanged based on the comparison." },
      { question: "Can it compare binary files?", answer: "No. This tool compares plain text only. For binary file comparison, you would need specialized diff tools." },
      { question: "Is there a size limit?", answer: "Since it runs in your browser, it can handle texts up to tens of thousands of lines. Very large files may be slower on older devices." },
    ],
  },

  "lorem-ipsum-generator": {
    content: [
      "Lorem Ipsum is placeholder text used in design and publishing to fill spaces where real content will eventually go. Our free Lorem Ipsum Generator creates paragraphs, sentences, or words of classic Latin placeholder text instantly.",
      "Designers, developers, and content creators use Lorem Ipsum to visualize layouts without being distracted by the actual content. It has been the industry-standard placeholder text since the 1500s when a printer scrambled type to make a specimen book.",
      "Choose the number of paragraphs, sentences, or words you need, and the generator creates natural-looking Latin text instantly. Everything runs in your browser with no external API calls required.",
    ],
    faqs: [
      { question: "Why not use real text as a placeholder?", answer: "Real text can distract from the design. Lorem Ipsum resembles natural language structure without being readable, keeping focus on visual layout, typography, and spacing." },
      { question: "Can I generate specific amounts?", answer: "Yes. Specify the number of paragraphs, sentences, or words you need and the generator will produce exactly that amount." },
      { question: "Is this the standard Lorem Ipsum text?", answer: "The generator uses a pool of approximately 100 Latin words to create randomized placeholder text that resembles classical Lorem Ipsum." },
    ],
  },

  "slug-generator": {
    content: [
      "A URL slug is the human-readable, URL-safe part of a web address that identifies a specific page. Our free Slug Generator converts any text into a clean, SEO-friendly URL slug instantly.",
      "Good URL slugs improve both user experience and search engine rankings. They should be lowercase, use hyphens to separate words, contain no special characters, and be concise and descriptive. Our generator handles all of this automatically.",
      "The generator uses Unicode NFD normalization to handle accented characters, strips all non-alphanumeric characters, collapses consecutive hyphens, and trims hyphens from the start and end. Perfect for blog posts, product pages, and any web content.",
    ],
    faqs: [
      { question: "What makes a good URL slug?", answer: "A good slug is lowercase, uses hyphens between words, avoids special characters, and is concise while being descriptive. It should give users and search engines a clear idea of the page content." },
      { question: "How does it handle special characters?", answer: "Accented characters are normalized (é becomes e), non-alphanumeric characters are removed, spaces become hyphens, and consecutive hyphens are collapsed into one." },
      { question: "Are slugs important for SEO?", answer: "Yes. Search engines use URL slugs as a ranking signal. Descriptive, keyword-rich slugs can slightly improve rankings and significantly improve click-through rates in search results." },
    ],
  },

  "hash-generator": {
    content: [
      "Cryptographic hash functions convert data of any size into a fixed-length string of characters. Our free Hash Generator supports SHA-1, SHA-256, SHA-384, and SHA-512 algorithms, using the Web Crypto API for secure, browser-based hashing.",
      "Hash functions are one-way — you cannot reverse a hash to find the original input. They are used for data integrity verification, password storage, digital signatures, and content-addressable storage. Even a tiny change in input produces a completely different hash.",
      "You can hash both text and files directly in your browser. The Web Crypto API provides hardware-accelerated hashing that is fast even for large files. No data is ever sent to any server.",
    ],
    faqs: [
      { question: "Which hash algorithm should I use?", answer: "For most purposes, SHA-256 provides an excellent balance of security and performance. SHA-512 offers higher security for sensitive applications. SHA-1 is considered weak and should only be used for non-security purposes like checksums." },
      { question: "Can I reverse a hash to get the original input?", answer: "No. Cryptographic hash functions are one-way by design. You cannot derive the original data from a hash value. This is what makes them useful for password storage and integrity verification." },
      { question: "What is the difference between SHA-256 and SHA-512?", answer: "SHA-256 produces a 256-bit (64 character hex) hash, while SHA-512 produces a 512-bit (128 character hex) hash. SHA-512 provides more security bits but SHA-256 is sufficient for virtually all current applications." },
    ],
  },

  "hmac-generator": {
    content: [
      "HMAC (Hash-based Message Authentication Code) combines a cryptographic hash function with a secret key to verify both data integrity and authenticity. Our free HMAC Generator creates HMAC signatures using the Web Crypto API.",
      "While a regular hash only verifies that data has not been modified, an HMAC also proves that the data came from someone who knows the secret key. This is essential for API authentication, webhook verification, and secure message signing.",
      "Supports HMAC with SHA-1, SHA-256, SHA-384, and SHA-512. Enter your message and secret key, and get the HMAC output instantly. Everything runs in your browser using the Web Crypto API — your key and data are never transmitted.",
    ],
    faqs: [
      { question: "What is the difference between a hash and an HMAC?", answer: "A hash only ensures data integrity (data has not changed). An HMAC additionally ensures authenticity — it proves the data was created by someone with the secret key. Without the key, an attacker cannot forge a valid HMAC." },
      { question: "Which HMAC algorithm should I use?", answer: "HMAC-SHA256 is the most commonly used and recommended for most applications. It is used by AWS, Stripe, GitHub webhooks, and many other major APIs." },
      { question: "Is my secret key safe?", answer: "Yes. The HMAC computation runs entirely in your browser using the Web Crypto API. Your secret key is never sent to any server or stored anywhere." },
    ],
  },

  "jwt-decoder": {
    content: [
      "JSON Web Tokens (JWTs) are commonly used for API authentication and authorization. Our free JWT Decoder splits a JWT into its three parts — header, payload, and signature — and displays the decoded JSON content.",
      "JWTs consist of three Base64url-encoded parts separated by dots: the header (algorithm and type), the payload (claims like user ID, expiration, permissions), and the signature (verifies the token has not been tampered with).",
      "The decoder also checks token timing — showing whether the token has expired based on the 'exp' claim and when it was issued based on the 'iat' claim. Everything runs in your browser for complete privacy.",
    ],
    faqs: [
      { question: "Can this tool verify JWT signatures?", answer: "This tool decodes and displays JWT contents but does not verify the cryptographic signature. Signature verification requires the correct secret key or public key, which should be done server-side." },
      { question: "Is it safe to paste my JWT here?", answer: "Yes. The decoding runs entirely in your browser. However, JWTs often contain sensitive claims, so avoid sharing tokens publicly and always use HTTPS in production." },
      { question: "What do the exp and iat claims mean?", answer: "'exp' is the expiration time (when the token becomes invalid) and 'iat' is the issued-at time (when the token was created). Both are Unix timestamps that the tool converts to human-readable dates." },
    ],
  },

  "jwt-encoder": {
    content: [
      "Our JWT Encoder creates unsigned JSON Web Tokens from your custom header and payload data. This is useful for testing, prototyping, and understanding JWT structure without needing a full authentication setup.",
      "Enter your header and payload as JSON objects, and the tool produces a properly Base64url-encoded JWT string. The generated tokens use the 'none' algorithm, indicating they are unsigned.",
      "Important: Unsigned JWTs should never be used in production for authentication or authorization. This tool is for educational purposes, testing API integrations, and understanding JWT format.",
    ],
    faqs: [
      { question: "Can I use these tokens in production?", answer: "No. This tool creates unsigned tokens (alg: none) which provide no security guarantees. Production JWTs must be signed with a secret key (HS256) or public/private key pair (RS256)." },
      { question: "What should I put in the payload?", answer: "Common claims include 'sub' (subject/user ID), 'name', 'iat' (issued at), 'exp' (expiration), and custom claims for your application. All values should be JSON-serializable." },
      { question: "Why would I create unsigned tokens?", answer: "Unsigned tokens are useful for testing API endpoints, learning about JWT structure, creating mock authentication during development, and prototyping applications." },
    ],
  },

  "regex-tester": {
    content: [
      "Regular expressions (regex) are powerful pattern-matching tools used in programming, text processing, and data validation. Our free Regex Tester lets you write a regex pattern and instantly see all matches highlighted in your test string.",
      "The tool shows every match with its position, matched text, and any captured groups. It supports all JavaScript regex flags including global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u).",
      "Whether you are developing validation patterns, parsing log files, extracting data, or learning regex, this tool provides instant, visual feedback on how your patterns work. Everything runs in your browser.",
    ],
    faqs: [
      { question: "Which regex flavor does this use?", answer: "The tool uses JavaScript's native RegExp engine, which supports all standard regex features including lookahead, lookbehind, named groups, and Unicode properties." },
      { question: "What do the flags mean?", answer: "g (global) finds all matches, i (case-insensitive) ignores case, m (multiline) changes ^ and $ to match line starts/ends, s (dotAll) makes . match newlines, u (unicode) enables Unicode mode." },
      { question: "Can I see captured groups?", answer: "Yes. The tool displays all captured groups for each match, including named groups if you use the (?<name>...) syntax." },
    ],
  },

  "regex-generator": {
    content: [
      "Writing regex patterns from scratch can be time-consuming and error-prone. Our Regex Pattern Generator provides a library of common, tested regex patterns for typical validation and matching tasks.",
      "Browse patterns for email addresses, URLs, phone numbers, IP addresses, dates, hex colors, HTML tags, credit card numbers, social security numbers, zip codes, usernames, and strong passwords. Each pattern is ready to copy and use.",
      "Each pattern includes the regex string, a description of what it matches, and example matches. You can copy any pattern directly to your clipboard or test it with our Regex Tester tool.",
    ],
    faqs: [
      { question: "Are these patterns production-ready?", answer: "These patterns are good starting points for common validation tasks. For production use, always test thoroughly with your specific requirements and edge cases." },
      { question: "Can I modify the patterns?", answer: "Absolutely. Copy a pattern and adjust it to fit your exact needs. Regex patterns often need tweaking for specific use cases." },
      { question: "Why are email regex patterns so complex?", answer: "Email addresses have complex rules defined in RFC 5322. A simple regex covers most cases, but a fully compliant pattern would be extremely long. The provided pattern balances accuracy with readability." },
    ],
  },

  "image-compressor": {
    content: [
      "Large image files slow down websites, increase bandwidth costs, and frustrate users. Our free Image Compressor reduces image file sizes while maintaining acceptable visual quality — all processing happens right in your browser.",
      "The tool uses the HTML5 Canvas API to re-encode images at your chosen quality level (1-100%). Lower quality values produce smaller files with more compression artifacts. For web use, 60-80% quality typically provides an excellent balance.",
      "Supports JPEG, PNG, and WebP images. Upload your image, adjust the quality slider, and download the compressed version instantly. No file uploads to any server — your images stay completely private.",
    ],
    faqs: [
      { question: "How much can images be compressed?", answer: "Compression results vary by image content. Photos typically compress well (50-80% reduction at 70% quality), while images with text or sharp edges may show artifacts at lower quality settings." },
      { question: "Is there a file size limit?", answer: "Since processing happens in your browser, limits depend on your device's memory. Most devices handle images up to 20-30 megapixels without issues." },
      { question: "Does compression reduce image dimensions?", answer: "No. Compression only reduces file size by adjusting encoding quality. Use our Image Resizer tool if you want to change the pixel dimensions." },
    ],
  },

  "jpg-to-png": {
    content: [
      "JPEG and PNG are the two most common image formats on the web, each with different strengths. Our free JPG to PNG converter transforms your JPEG images to PNG format instantly in your browser.",
      "PNG uses lossless compression and supports transparency, making it ideal for logos, icons, graphics with text, and images that need an alpha channel. Converting from JPG to PNG preserves the current quality without further degradation.",
      "Upload your JPEG image and download the PNG version instantly. No file size limits, no watermarks, no account required. Everything runs locally in your browser using the Canvas API.",
    ],
    faqs: [
      { question: "Will converting to PNG improve image quality?", answer: "No. Converting from JPG to PNG preserves the current quality but cannot recover detail lost during JPEG compression. However, it prevents further quality loss from re-saving as JPEG." },
      { question: "Why is the PNG file larger than the JPG?", answer: "PNG uses lossless compression while JPG uses lossy compression. PNG files are typically 2-10x larger than equivalent JPGs because they preserve every pixel exactly." },
      { question: "Does the conversion add transparency?", answer: "The conversion creates a PNG with a solid background (no transparency). To add transparency, you would need an image editor to remove the background." },
    ],
  },

  "png-to-jpg": {
    content: [
      "PNG images can be significantly larger than necessary for photographs and non-transparent images. Our free PNG to JPG converter transforms your PNG files to JPEG format with adjustable quality, reducing file sizes dramatically.",
      "JPEG compression is ideal for photographs and complex images where small quality losses are imperceptible. Converting a PNG photo to JPG can reduce file size by 60-90% while maintaining excellent visual quality.",
      "Upload your PNG, choose the quality level, and download the JPG version instantly. The Canvas API handles the conversion entirely in your browser — no uploads, no waiting, no privacy concerns.",
    ],
    faqs: [
      { question: "What happens to transparency?", answer: "JPEG does not support transparency. Any transparent areas in your PNG will be replaced with a white background in the converted JPG." },
      { question: "What quality setting should I use?", answer: "For photos, 80-90% quality is typically imperceptible from the original. For web thumbnails, 60-70% provides good quality at much smaller file sizes." },
      { question: "Will I lose image quality?", answer: "JPEG is a lossy format, so there is some quality loss. At 80%+ quality, the loss is usually imperceptible for photographs. For graphics with text or sharp edges, PNG is generally better." },
    ],
  },

  "webp-converter": {
    content: [
      "WebP is a modern image format developed by Google that provides superior compression for both lossy and lossless images. Our free WebP Converter transforms your JPEG and PNG images to WebP format for smaller file sizes.",
      "WebP images are typically 25-35% smaller than equivalent JPEGs and PNGs at the same quality level. Major browsers including Chrome, Firefox, Safari, and Edge all support WebP, making it an excellent choice for web performance.",
      "Upload any image, adjust the quality setting, and download the WebP version. The conversion runs entirely in your browser using the Canvas API — no server processing required.",
    ],
    faqs: [
      { question: "Do all browsers support WebP?", answer: "Yes. All major modern browsers (Chrome, Firefox, Safari 14+, Edge) support WebP. For legacy browser support, use the HTML <picture> element to provide JPEG/PNG fallbacks." },
      { question: "How much smaller will my images be?", answer: "WebP typically produces files 25-35% smaller than JPEG and significantly smaller than PNG for photos. Results vary based on image content and quality settings." },
      { question: "Should I convert all my images to WebP?", answer: "For web use, WebP is generally recommended for its size savings. However, ensure your deployment supports WebP and provides fallbacks for older clients that may not support it." },
    ],
  },

  "image-resizer": {
    content: [
      "Resizing images to specific dimensions is a common task for web development, social media, email, and print. Our free Image Resizer lets you change image dimensions with optional aspect ratio locking — all in your browser.",
      "Enter your desired width and height in pixels, and the Canvas API resizes your image instantly. Lock the aspect ratio to prevent distortion, or unlock it for custom proportions. The tool handles any image dimension.",
      "Perfect for creating thumbnails, preparing images for social media profiles and posts, resizing for email attachments, or meeting specific dimension requirements. No data leaves your browser.",
    ],
    faqs: [
      { question: "Will resizing reduce quality?", answer: "Enlarging images always reduces apparent quality because the browser must interpolate new pixels. Downsizing generally maintains or improves perceived quality. For best results, start with the largest version." },
      { question: "What is aspect ratio locking?", answer: "When aspect ratio is locked, changing the width automatically adjusts the height (and vice versa) to maintain the image's original proportions, preventing stretching or squishing." },
      { question: "Can I resize to exact dimensions?", answer: "Yes. Unlock the aspect ratio to set exact width and height values independently. This may distort the image if the proportions differ from the original." },
    ],
  },

  "image-to-base64": {
    content: [
      "Converting images to Base64 creates text strings that can be embedded directly in HTML, CSS, JSON, and other text-based formats. Our free Image to Base64 converter encodes any image as a data URI in your browser.",
      "Data URIs eliminate the need for separate image file requests, which can improve performance for small images like icons, logos, and UI elements. The encoded string includes the MIME type and Base64 data, ready to use in src attributes.",
      "Upload your image and get the Base64 data URI instantly. Copy the full data URI for HTML img tags, or just the Base64 string for other uses. Everything runs locally — your images are never uploaded.",
    ],
    faqs: [
      { question: "When should I use Base64-encoded images?", answer: "Base64 is best for small images (under 10KB) like icons and sprites where eliminating an HTTP request is more beneficial than the ~33% size increase. For larger images, regular files are more efficient." },
      { question: "Why does the Base64 string seem so long?", answer: "Base64 encoding increases data size by approximately 33%. A 10KB image becomes about 13.3KB of text. This is why Base64 is recommended mainly for small images." },
      { question: "Can I use data URIs in CSS?", answer: "Yes. Data URIs work in CSS background-image properties: background-image: url(data:image/png;base64,...). This is common for small UI graphics and icons." },
    ],
  },

  "base64-to-image": {
    content: [
      "Our free Base64 to Image converter decodes Base64-encoded image data and displays the resulting image, ready for download. Paste any Base64 image string or data URI and see the image instantly.",
      "This tool is useful for debugging API responses that contain Base64-encoded images, extracting images from data URIs, and converting stored Base64 strings back into downloadable image files.",
      "Supports all common image formats including JPEG, PNG, GIF, and WebP. The tool automatically detects the image format from the data URI prefix or displays the raw decoded data. Everything runs in your browser.",
    ],
    faqs: [
      { question: "What format should the input be?", answer: "You can paste a full data URI (data:image/png;base64,...) or just the raw Base64 string. If you provide just the Base64 string, the tool will attempt to determine the image format automatically." },
      { question: "What image formats are supported?", answer: "Any format your browser supports, including JPEG, PNG, GIF, WebP, SVG, and BMP. The format is determined by the data URI prefix or the actual image data." },
      { question: "Can I save the decoded image?", answer: "Yes. Once the image is decoded and displayed, you can download it as a file with one click." },
    ],
  },

  "pdf-merger": {
    content: [
      "Merging multiple PDF files into a single document is a common task for business, academic, and personal use. Our free PDF Merger combines multiple PDF files in your specified order — all processing happens in your browser.",
      "The tool uses the pdf-lib library to read, merge, and create PDF files entirely client-side. Your documents are never uploaded to any server, making it safe for confidential, legal, and personal documents.",
      "Simply upload two or more PDF files, arrange them in the desired order, and merge. The result is a single PDF containing all pages from all files. Download the merged PDF instantly.",
    ],
    faqs: [
      { question: "Is there a limit on the number of files?", answer: "There is no hard limit, but merging many large PDFs may be slow on devices with limited memory. For typical use (2-10 files), the tool works smoothly." },
      { question: "Are my PDFs uploaded to a server?", answer: "No. All processing happens in your browser using the pdf-lib JavaScript library. Your files never leave your device." },
      { question: "Does it preserve bookmarks and links?", answer: "The tool merges page content reliably. Some advanced PDF features like bookmarks, form fields, and internal links may not be preserved in the merged output." },
    ],
  },

  "pdf-splitter": {
    content: [
      "Splitting a PDF into individual pages or specific page ranges is useful for extracting sections, creating handouts, or reducing file sizes. Our free PDF Splitter separates your PDF pages — all processing in your browser.",
      "Upload a PDF file, and the tool extracts each page as a separate PDF document. You can download individual pages or all split pages. The pdf-lib library handles the processing entirely client-side.",
      "Perfect for extracting specific pages from reports, separating scanned documents, or creating single-page handouts from multi-page PDFs. Your documents are never uploaded to any server.",
    ],
    faqs: [
      { question: "Can I select specific pages to extract?", answer: "The tool splits the PDF into all individual pages. You can then download only the pages you need." },
      { question: "Does splitting preserve page formatting?", answer: "Yes. Each split page is an exact copy of the original page, preserving all text, images, formatting, and layout." },
      { question: "Is there a page limit?", answer: "There is no hard limit. PDFs with hundreds of pages can be split, though very large files may take longer to process in the browser." },
    ],
  },

  "pdf-compressor": {
    content: [
      "Large PDF files are difficult to share via email, slow to upload, and consume storage space. Our free PDF Compressor reduces PDF file sizes by re-serializing the document, removing redundant data and optimizing the internal structure.",
      "The tool uses pdf-lib to parse and re-create the PDF, which can eliminate redundant objects, unused resources, and other bloat that accumulates in PDFs. Compression results vary based on the original file's structure.",
      "Processing happens entirely in your browser. Your PDF files are never uploaded to any server, making this tool safe for confidential documents, legal files, and personal records.",
    ],
    faqs: [
      { question: "How much compression can I expect?", answer: "Results vary widely. PDFs with lots of metadata, duplicate objects, or inefficient encoding may see 10-50% reduction. Already-optimized PDFs may see minimal improvement." },
      { question: "Does compression reduce image quality?", answer: "This tool optimizes PDF structure without modifying image data. Images retain their original quality. For more aggressive compression, dedicated tools may re-encode embedded images." },
      { question: "Is it safe for important documents?", answer: "Yes. The tool processes files entirely in your browser. Always verify the compressed output to ensure all content is preserved correctly." },
    ],
  },

  "pdf-to-word": {
    content: [
      "Extracting text from PDF files allows you to repurpose content for word processors, spreadsheets, and other text-based applications. Our free PDF Text Extractor pulls all text content from your PDF files directly in your browser.",
      "The tool uses pdf-lib to parse the PDF structure and extract embedded text content. It works best with digitally-created PDFs (not scanned images). The extracted text can be copied or downloaded as a text file.",
      "All processing happens locally in your browser — your PDF is never uploaded to any server. This makes it safe for extracting text from confidential documents, contracts, and personal files.",
    ],
    faqs: [
      { question: "Can it extract text from scanned PDFs?", answer: "No. This tool extracts embedded text from digitally-created PDFs. Scanned PDFs contain images, not text, and require OCR (Optical Character Recognition) which is not supported by this tool." },
      { question: "Will the formatting be preserved?", answer: "The tool extracts raw text content. Complex formatting, tables, and layouts may not be perfectly preserved. The output is plain text suitable for further editing." },
      { question: "What about password-protected PDFs?", answer: "Password-protected PDFs cannot be processed by this tool. You would need to remove the protection first using the PDF's password." },
    ],
  },

  "word-to-pdf": {
    content: [
      "Creating PDF documents from text content is useful for sharing formatted documents, creating printable files, and archiving content. Our free Text to PDF Creator converts your text into a well-formatted PDF document.",
      "Enter or paste your text, and the tool creates a professional PDF with proper formatting, page breaks, and readable typography using the pdf-lib library. The entire process runs in your browser.",
      "Perfect for creating quick PDF documents from notes, converting text content for sharing, or creating printable versions of text-based content. No server uploads required.",
    ],
    faqs: [
      { question: "Can I format the text with headings and bold?", answer: "The current tool creates PDFs from plain text content. Rich text formatting like headings, bold, and italic is not supported in this version." },
      { question: "Does it support multiple pages?", answer: "Yes. The tool automatically creates new pages when the content exceeds a single page, with proper page breaks and consistent formatting throughout." },
      { question: "What paper size is used?", answer: "The tool uses standard US Letter size (8.5 x 11 inches / 612 x 792 points). This is compatible with both US and international printing." },
    ],
  },

  "unit-converter": {
    content: [
      "Unit conversion is essential for science, engineering, cooking, fitness, and daily life. Our free Unit Converter handles 7 categories — Length, Weight, Temperature, Area, Volume, Speed, and Data — with instant, accurate conversions.",
      "Each category includes the most commonly used units. Length covers millimeters to miles, Weight handles milligrams to tons, Temperature converts between Celsius, Fahrenheit, and Kelvin, and Data handles bytes to terabytes.",
      "Simply select a category, choose the from and to units, enter a value, and get the result instantly. The converter uses precise conversion factors for accurate results. Everything runs in your browser.",
    ],
    faqs: [
      { question: "How accurate are the conversions?", answer: "Conversions use standard conversion factors and are accurate to JavaScript's floating-point precision (about 15-17 significant digits). This is more than sufficient for all practical purposes." },
      { question: "Which unit categories are available?", answer: "Seven categories: Length (mm to mi), Weight (mg to t), Temperature (°C, °F, K), Area (mm² to km²), Volume (mL to gal), Speed (m/s to knots), and Data (B to TB)." },
      { question: "Can I convert temperature?", answer: "Yes. Temperature conversion between Celsius, Fahrenheit, and Kelvin uses the correct formulas (not simple multiplication), so results are always accurate." },
    ],
  },

  "currency-converter": {
    content: [
      "Our free Currency Converter supports 40 major world currencies with instant conversion. Whether you are traveling, shopping internationally, or working with multi-currency finances, get quick estimates of exchange values.",
      "The converter includes USD, EUR, GBP, JPY, CNY, INR, and 34 other major currencies. Enter an amount, select your currencies, and see the converted value instantly.",
      "Note: Exchange rates are reference rates for estimation purposes. For actual transactions, always check with your bank or financial institution for current live rates. The tool runs entirely in your browser.",
    ],
    faqs: [
      { question: "Are the exchange rates live?", answer: "The tool uses reference exchange rates for estimation. These rates provide reasonable approximations but may not reflect real-time market rates. Always verify with your bank for actual transactions." },
      { question: "How many currencies are supported?", answer: "40 major world currencies including USD, EUR, GBP, JPY, CNY, INR, AUD, CAD, CHF, KRW, BRL, MXN, and more." },
      { question: "Can I use this for financial transactions?", answer: "This tool provides estimates only. Actual exchange rates vary by provider and include fees and spreads. Always use official rates from your bank or currency exchange service for transactions." },
    ],
  },

  "timezone-converter": {
    content: [
      "Scheduling across time zones is a common challenge for remote teams, international business, and travel planning. Our free Timezone Converter shows the equivalent time across 34 major time zones instantly.",
      "Select a date and time, choose your source timezone, and see the target timezone equivalent. The tool uses the browser's Intl API for accurate timezone calculations including daylight saving time adjustments.",
      "Whether you are scheduling a meeting with colleagues in different countries, planning travel, or coordinating events, this tool eliminates timezone confusion. Everything runs in your browser.",
    ],
    faqs: [
      { question: "Does it handle daylight saving time?", answer: "Yes. The tool uses the browser's Intl.DateTimeFormat API, which automatically accounts for daylight saving time rules for each timezone." },
      { question: "How many timezones are available?", answer: "34 major timezones covering all inhabited regions, from UTC-12 to UTC+14, including major cities like New York, London, Tokyo, Sydney, and more." },
      { question: "Can I compare multiple timezones at once?", answer: "The tool converts between two timezones at a time. For comparing multiple zones, run multiple conversions with the same source time." },
    ],
  },

  "age-calculator": {
    content: [
      "Our free Age Calculator computes your exact age in years, months, and days from your date of birth. It also shows total days lived, total weeks, your day of birth, and when your next birthday falls.",
      "Simply enter your date of birth and the tool calculates your precise age accounting for varying month lengths, leap years, and calendar rules. The result includes a detailed breakdown of your age in multiple formats.",
      "Useful for filling out official forms, calculating eligibility for age-restricted services, planning birthday celebrations, or simply satisfying curiosity about exactly how many days you have been alive.",
    ],
    faqs: [
      { question: "Does it account for leap years?", answer: "Yes. The calculator correctly handles leap years, varying month lengths, and all calendar rules for precise age calculation." },
      { question: "What information does it show?", answer: "Your age in years, months, and days; total days lived; total weeks; the day of the week you were born on; and the date and countdown to your next birthday." },
      { question: "Can I calculate the age from any date?", answer: "The tool calculates age from the specified date to today. Any valid date can be entered as the birth date." },
    ],
  },

  "percentage-calculator": {
    content: [
      "Percentage calculations appear everywhere — grades, discounts, tips, statistics, finance, and more. Our free Percentage Calculator handles all common percentage operations with instant results.",
      "Calculate what percentage one number is of another, find the percentage of a value, compute percentage increase or decrease, and add or subtract a percentage from a number. All five operations are available in one tool.",
      "Enter your values and see results instantly. The tool handles decimal numbers, large values, and negative numbers correctly. Everything runs in your browser with no data sent anywhere.",
    ],
    faqs: [
      { question: "What calculations are available?", answer: "Five operations: (1) X% of Y, (2) X is what % of Y, (3) percentage change from X to Y, (4) add X% to Y, and (5) subtract X% from Y." },
      { question: "Can it handle decimal percentages?", answer: "Yes. The tool works with any decimal values for both the percentage and the base number, providing precise results." },
      { question: "How is percentage change calculated?", answer: "Percentage change = ((new - old) / |old|) × 100. A positive result means an increase, a negative result means a decrease." },
    ],
  },

  "emi-calculator": {
    content: [
      "Planning a loan? Our free EMI Calculator computes your Equated Monthly Installment using standard financial formulas. See your monthly payment, total interest, total payment amount, and a complete amortization schedule.",
      "Enter the loan amount, annual interest rate, and loan tenure in months. The tool calculates your EMI using the standard reducing-balance formula used by banks worldwide, giving you an accurate estimate of your monthly obligation.",
      "The amortization schedule shows the breakdown of each monthly payment into principal and interest components, plus the remaining balance after each payment. Perfect for planning home loans, car loans, personal loans, and education loans.",
    ],
    faqs: [
      { question: "How is EMI calculated?", answer: "EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate, and n is the number of months. This is the standard reducing-balance formula used by banks." },
      { question: "Is this the same formula banks use?", answer: "Yes. This is the standard EMI formula. However, actual bank EMIs may vary slightly due to processing fees, insurance, and other charges not included in the basic calculation." },
      { question: "What is an amortization schedule?", answer: "An amortization schedule shows how each monthly payment is split between principal repayment and interest, and the remaining loan balance after each payment. Earlier payments have more interest; later payments have more principal." },
    ],
  },

  "discount-calculator": {
    content: [
      "Shopping deals are everywhere, but calculating the actual savings can be confusing with multiple discounts and percentages. Our free Discount Calculator handles all common discount scenarios instantly.",
      "Calculate the final price after a percentage discount, find what discount percentage was applied, or determine the original price before a discount. Three calculation modes cover all common shopping and business scenarios.",
      "Perfect for comparing deals, verifying sale prices, calculating wholesale discounts, and making informed purchasing decisions. The tool shows the exact discount amount and final price clearly.",
    ],
    faqs: [
      { question: "What calculations are available?", answer: "Three modes: (1) calculate sale price from original price and discount %, (2) find the discount % from original and sale prices, (3) find the original price from sale price and discount %." },
      { question: "Can I calculate stacked discounts?", answer: "For stacked discounts (e.g., 20% off then additional 10% off), apply the first discount, then use the result as the new original price for the second discount calculation." },
      { question: "How are discounts different from markdowns?", answer: "Mathematically they are the same — both reduce price by a percentage. The difference is context: discounts are typically temporary promotions, while markdowns are permanent price reductions." },
    ],
  },

  "meta-tag-generator": {
    content: [
      "Meta tags tell search engines and social media platforms about your web page. Our free Meta Tag Generator creates a complete set of HTML meta tags for your pages, including title, description, keywords, viewport, robots, and author tags.",
      "Well-crafted meta tags improve search engine visibility, control how your pages appear in search results, and enhance social media sharing. The generator outputs valid HTML that you can copy directly into your page's <head> section.",
      "Fill in your page details and get optimized meta tag HTML instantly. The tool handles proper HTML escaping to prevent XSS vulnerabilities. Everything runs in your browser.",
    ],
    faqs: [
      { question: "Which meta tags are most important for SEO?", answer: "The title tag and meta description are the most impactful. The title appears in search results and browser tabs, while the description appears below the title in search results. Both significantly affect click-through rates." },
      { question: "What length should my meta description be?", answer: "Google typically displays up to 155-160 characters. Aim for 120-155 characters that accurately describe the page and include relevant keywords." },
      { question: "Are meta keywords still useful?", answer: "Google has not used the keywords meta tag for ranking since 2009. However, some other search engines may still consider them. Including a few relevant keywords does not hurt." },
    ],
  },

  "open-graph-generator": {
    content: [
      "Open Graph meta tags control how your web pages appear when shared on Facebook, LinkedIn, Twitter, and other social platforms. Our free Open Graph Generator creates the complete set of OG tags for professional social media previews.",
      "Without Open Graph tags, social platforms will guess how to display your shared link — often with poor results. With proper OG tags, you control the title, description, image, and other properties that appear in social media cards.",
      "Fill in your page details including title, description, image URL, and site name. The generator creates valid Open Graph HTML meta tags ready to paste into your page's <head> section.",
    ],
    faqs: [
      { question: "What are Open Graph tags?", answer: "Open Graph is a protocol created by Facebook that allows web pages to control how they appear when shared on social media. The tags define the title, description, image, and type of the shared content." },
      { question: "What image size works best for OG?", answer: "Facebook recommends 1200×630 pixels for shared link images. This size works well on all platforms including LinkedIn, Twitter, and messaging apps. Use high-quality images under 8MB." },
      { question: "Do I need separate tags for Twitter?", answer: "Twitter has its own card system but falls back to Open Graph tags when Twitter-specific tags are not present. For basic sharing, OG tags alone are sufficient." },
    ],
  },

  "keyword-density-checker": {
    content: [
      "Keyword density analysis helps you understand how frequently specific terms appear in your content. Our free Keyword Density Checker analyzes both single words and multi-word phrases to help you optimize content for SEO.",
      "The tool counts every word's frequency and calculates its percentage of total words. It also analyzes 2-word and 3-word phrases to identify frequently used term combinations. Results are sorted by frequency for easy review.",
      "Balanced keyword usage is important for SEO — too few mentions may signal irrelevance to search engines, while too many (keyword stuffing) can trigger penalties. Aim for natural keyword density of 1-3% for target terms.",
    ],
    faqs: [
      { question: "What is a good keyword density?", answer: "For SEO purposes, 1-3% density for your main keyword is generally recommended. More important than exact percentages is that keywords are used naturally and the content reads well for humans." },
      { question: "Does it analyze phrases too?", answer: "Yes. The tool analyzes single words, 2-word phrases, and 3-word phrases, showing frequency counts and density percentages for each." },
      { question: "What is keyword stuffing?", answer: "Keyword stuffing is the practice of unnaturally overusing keywords to manipulate search rankings. Search engines penalize this practice. Natural, reader-friendly content performs better." },
    ],
  },

  "html-to-text": {
    content: [
      "Converting HTML to plain text strips all markup, leaving only the readable content. Our free HTML to Text converter removes all HTML tags, decodes entities, and produces clean plain text from any HTML input.",
      "The tool uses the browser's native HTML parser (DOMParser) for accurate conversion. It handles all HTML elements, character entities, nested structures, and edge cases reliably.",
      "Useful for extracting text from web pages, cleaning up HTML email content, preparing text for analysis, or converting HTML content for plain-text email versions. Everything runs in your browser.",
    ],
    faqs: [
      { question: "Does it preserve line breaks?", answer: "Block-level elements like paragraphs, divs, and headings produce line breaks in the output. Inline elements are rendered as continuous text, matching how a browser would display the content." },
      { question: "Are HTML entities decoded?", answer: "Yes. All HTML entities like &amp;, &lt;, &gt;, &nbsp;, and numeric character references are properly decoded to their plain text equivalents." },
      { question: "Does it handle malformed HTML?", answer: "Yes. The browser's DOMParser handles malformed HTML gracefully, recovering from common issues just as web browsers do when rendering pages." },
    ],
  },

  "text-to-html": {
    content: [
      "Converting plain text to HTML preserves your text structure for web display. Our free Text to HTML converter wraps paragraphs in <p> tags and handles line breaks, producing valid HTML from plain text input.",
      "The tool splits your text on double line breaks to identify paragraphs, wrapping each in a <p> element. Single line breaks within paragraphs are preserved. Special characters are properly escaped for HTML safety.",
      "Useful for preparing text content for web publishing, converting emails or documents to HTML format, and creating HTML from plain text data sources. Everything runs in your browser.",
    ],
    faqs: [
      { question: "How does it identify paragraphs?", answer: "Paragraphs are identified by double line breaks (blank lines between text blocks). Each paragraph is wrapped in a <p> tag. Single line breaks within a paragraph are preserved." },
      { question: "Are special characters escaped?", answer: "Yes. Characters like <, >, &, and quotes are properly HTML-escaped to prevent rendering issues and XSS vulnerabilities." },
      { question: "Does it add any styling?", answer: "No. The tool produces clean, semantic HTML with <p> tags only. No inline styles, classes, or other attributes are added. You can style the output with your own CSS." },
    ],
  },

  // ADVANCED DEV & ENCODING
  "json-to-csv-converter": {
    content: [
      "Convert JSON arrays to CSV format instantly with our free online JSON to CSV converter. Perfect for transforming API data into spreadsheet-compatible format for analysis in Excel, Google Sheets, or other tools.",
      "The converter automatically detects all keys from your JSON objects and creates CSV column headers. Values are properly escaped with quotes when they contain commas, line breaks, or special characters.",
    ],
    faqs: [
      { question: "What JSON format is supported?", answer: "The tool expects a JSON array of objects. Each object becomes a CSV row, and each unique key becomes a column header." },
      { question: "Are nested objects handled?", answer: "Nested objects are converted to their JSON string representation in the CSV cell. For deeply nested data, consider flattening your JSON first." },
    ],
  },
  "csv-to-json-converter": {
    content: [
      "Convert CSV data to JSON format with our free online CSV to JSON converter. Transform spreadsheet data into structured JSON arrays ready for APIs, databases, and web applications.",
      "The converter uses the first row as column headers and creates JSON objects for each subsequent row. It handles quoted fields, commas within values, and various CSV formats correctly.",
    ],
    faqs: [
      { question: "Does the first row need to be headers?", answer: "Yes, the tool uses the first row as property names for the JSON objects. Each subsequent row becomes a JSON object with those properties." },
      { question: "Can it handle large CSV files?", answer: "Since the tool runs in your browser, it can handle CSV files up to several megabytes depending on your device's available memory." },
    ],
  },
  "yaml-to-json": {
    content: [
      "Convert YAML to JSON instantly with our free online converter. YAML (YAML Ain't Markup Language) is widely used in configuration files, Docker Compose, Kubernetes manifests, and CI/CD pipelines. Converting to JSON makes it compatible with APIs and JavaScript applications.",
      "Our converter handles all common YAML features including nested objects, arrays, multiline strings, and various data types. The conversion runs entirely in your browser — your data never leaves your device.",
    ],
    faqs: [
      { question: "What YAML features are supported?", answer: "The converter handles nested objects, arrays (both block and flow style), strings, numbers, booleans, null values, and comments." },
      { question: "Is my YAML data secure?", answer: "Yes, all conversion happens in your browser. No data is sent to any server." },
    ],
  },
  "json-to-yaml": {
    content: [
      "Convert JSON to YAML format with our free online tool. YAML is more human-readable than JSON and is the preferred format for Kubernetes, Docker Compose, Ansible playbooks, and many other DevOps tools.",
      "The converter produces clean, properly indented YAML output from any valid JSON input. It handles nested structures, arrays, and all JSON data types correctly.",
    ],
    faqs: [
      { question: "Why convert JSON to YAML?", answer: "YAML is more readable for configuration files, supports comments, and is required by many DevOps tools like Kubernetes, Ansible, and GitHub Actions." },
      { question: "Does the output include comments?", answer: "No, since JSON doesn't support comments, the converted YAML output won't contain any comments. You can add them manually after conversion." },
    ],
  },
  "url-parser": {
    content: [
      "Parse and analyze URLs with our free URL Parser tool. Break down any URL into its components: protocol, hostname, port, path, query parameters, hash, and more. Essential for debugging web applications and understanding URL structures.",
      "Understanding URL components is crucial for web development, SEO, and debugging. Our parser extracts every part of a URL and displays query parameters in an easy-to-read table format.",
    ],
    faqs: [
      { question: "What URL components are shown?", answer: "The parser shows protocol, hostname, port, pathname, search string, hash, origin, and all individual query parameters with their values." },
      { question: "Can it handle encoded URLs?", answer: "Yes, the parser works with encoded URLs and displays both the raw and decoded values of query parameters." },
    ],
  },
  "user-agent-parser": {
    content: [
      "Parse and analyze User Agent strings with our free online tool. Identify browser name and version, operating system, device type, and rendering engine from any user agent string. Essential for web analytics and debugging.",
      "User agent strings contain valuable information about the client making HTTP requests. Our parser uses pattern matching to extract browser, OS, and device details from these complex strings.",
    ],
    faqs: [
      { question: "What information can be extracted?", answer: "The parser identifies browser name and version, operating system, device type (desktop, mobile, tablet), and whether the user agent is a bot or crawler." },
      { question: "How accurate is the detection?", answer: "The parser covers all major browsers (Chrome, Firefox, Safari, Edge, Opera) and operating systems. Some niche or spoofed user agents may not be fully recognized." },
    ],
  },
  "http-header-viewer": {
    content: [
      "Browse and learn about HTTP headers with our comprehensive HTTP Header Reference tool. View common request and response headers, HTTP status codes with descriptions, and understand what each header does.",
      "HTTP headers are key-value pairs sent between client and server in every web request. Understanding them is essential for web development, API design, security configuration, and performance optimization.",
    ],
    faqs: [
      { question: "What headers are included?", answer: "The reference covers all common request headers (Accept, Authorization, Content-Type, etc.) and response headers (Cache-Control, Content-Security-Policy, etc.) with descriptions." },
      { question: "Does it show my actual headers?", answer: "This is a reference tool that displays standard HTTP header information. Due to browser security restrictions, a static site cannot read actual response headers from external requests." },
    ],
  },
  "ip-lookup": {
    content: [
      "Find your public IP address instantly with our free IP Lookup tool. See your IPv4 address as detected from the internet, useful for network configuration, firewall rules, and troubleshooting connectivity issues.",
      "Your public IP address is assigned by your Internet Service Provider and is visible to every website and service you connect to. Knowing your public IP is essential for remote access setup, VPN configuration, and network diagnostics.",
    ],
    faqs: [
      { question: "Is this my real IP address?", answer: "Yes, the tool shows your public IP address as seen from the internet. If you're using a VPN, it will show the VPN's IP address instead." },
      { question: "What's the difference between public and private IP?", answer: "Your public IP is assigned by your ISP and is visible on the internet. Private IPs (like 192.168.x.x) are used within your local network and are not directly accessible from the internet." },
    ],
  },
  "curl-to-code": {
    content: [
      "Convert cURL commands to code in JavaScript, Python, and PHP. Paste any cURL command and instantly get equivalent code using fetch, requests, or cURL PHP library. Perfect for translating API documentation examples.",
      "Many API docs provide examples as cURL commands. Our converter parses the cURL syntax and generates idiomatic code in your preferred language, handling headers, request body, authentication, and HTTP methods.",
    ],
    faqs: [
      { question: "What cURL options are supported?", answer: "The converter handles -X (method), -H (headers), -d (data/body), --data-raw, and URL parsing. Most common cURL patterns from API docs are supported." },
      { question: "Which languages are supported?", answer: "Currently JavaScript (fetch API), Python (requests library), and PHP (cURL extension). Each generates idiomatic code for that language." },
    ],
  },

  // TEXT PROCESSING
  "remove-duplicate-lines": {
    content: [
      "Remove duplicate lines from text instantly with our free online tool. Perfect for cleaning up lists, log files, CSV data, and any text with repeated lines. Keeps only unique entries while preserving the original order.",
      "Duplicate data wastes space and causes confusion. Our tool efficiently identifies and removes duplicate lines, with options to be case-sensitive or case-insensitive. Everything processes in your browser.",
    ],
    faqs: [
      { question: "Is the comparison case-sensitive?", answer: "By default, yes. Lines are compared exactly as they appear. The tool treats 'Hello' and 'hello' as different lines." },
      { question: "Is the original order preserved?", answer: "Yes, the tool keeps the first occurrence of each line and removes subsequent duplicates while maintaining the original order." },
    ],
  },
  "sort-text-lines": {
    content: [
      "Sort text lines alphabetically with our free online tool. Sort in ascending or descending order, with options for case-sensitive or natural sorting. Perfect for organizing lists, data files, and code.",
      "Alphabetical sorting is one of the most common text operations. Our tool provides instant sorting with multiple options to handle various use cases from simple word lists to complex data files.",
    ],
    faqs: [
      { question: "How does natural sort work?", answer: "Natural sort orders numbers within text as humans expect: 'item2' comes before 'item10', unlike alphabetical sort which would place 'item10' before 'item2'." },
      { question: "Can I sort in reverse order?", answer: "Yes, you can choose between ascending (A-Z) and descending (Z-A) sort order." },
    ],
  },
  "reverse-text": {
    content: [
      "Reverse text instantly with our free online tool. Flip your text character by character or word by word. Fun for creating mirror text, solving puzzles, or just experimenting with text transformations.",
      "Text reversal has practical applications in programming (string manipulation algorithms), puzzles, encoding, and creative writing. Our tool handles all Unicode characters correctly.",
    ],
    faqs: [
      { question: "Does it handle emoji and special characters?", answer: "Yes, the tool properly handles Unicode characters including emoji, accented characters, and various scripts." },
      { question: "Can I reverse by words instead of characters?", answer: "The tool reverses the entire text character by character. To reverse word order, you can copy the text and manually rearrange, or reverse line by line." },
    ],
  },
  "random-string-generator": {
    content: [
      "Generate random strings with custom length and character sets. Choose from uppercase letters, lowercase letters, numbers, and special characters. Perfect for generating test data, temporary passwords, and placeholder text.",
      "Random string generation is useful in many scenarios: creating test data, generating temporary identifiers, producing sample content, and more. Customize the length and included character types to match your needs.",
    ],
    faqs: [
      { question: "Are the generated strings truly random?", answer: "The tool uses JavaScript's Math.random() which provides pseudo-random numbers. For cryptographic use, consider the Secure Token Generator tool instead." },
      { question: "What's the maximum length?", answer: "You can generate strings up to 1000 characters long. For most use cases, this is more than sufficient." },
    ],
  },
  "text-shuffle": {
    content: [
      "Shuffle and randomize text with our free online tool. Randomly rearrange characters or words in your text. Useful for creating word scrambles, randomized test data, or just having fun with text.",
      "Text shuffling randomly reorders the characters in your text. Each shuffle produces a different result. Great for games, puzzles, testing, and creative applications.",
    ],
    faqs: [
      { question: "Is each shuffle different?", answer: "Yes, the tool uses random shuffling each time you click, producing a different result with every use." },
      { question: "Can I shuffle words instead of characters?", answer: "The tool shuffles individual characters. The words and spaces are treated as characters and get randomly redistributed." },
    ],
  },
  "remove-extra-spaces": {
    content: [
      "Clean up text by removing extra spaces, tabs, and whitespace with our free online tool. Normalize spacing to single spaces between words and clean up messy formatting from copy-paste operations.",
      "Extra whitespace is a common problem with copy-pasted text, OCR output, and formatted documents. Our tool normalizes all whitespace to single spaces and trims leading/trailing spaces from each line.",
    ],
    faqs: [
      { question: "What types of whitespace are removed?", answer: "The tool removes extra spaces, tabs, and other whitespace characters, normalizing them to single spaces. Leading and trailing whitespace on each line is also trimmed." },
      { question: "Are line breaks preserved?", answer: "Yes, line breaks are preserved. Only horizontal whitespace (spaces and tabs) within lines is normalized." },
    ],
  },
  "character-counter": {
    content: [
      "Count characters, words, sentences, and paragraphs with our advanced character counter. Get detailed text statistics including reading time, speaking time, and character frequency analysis.",
      "Essential for content writers, social media managers, and students who need to meet specific character or word count requirements. Our counter provides real-time statistics as you type or paste text.",
    ],
    faqs: [
      { question: "How is reading time calculated?", answer: "Reading time is estimated at 200 words per minute, which is the average adult reading speed. Actual reading time varies based on content complexity and reader ability." },
      { question: "Does it count spaces?", answer: "The tool shows both 'characters with spaces' and 'characters without spaces' counts, so you can use whichever metric you need." },
    ],
  },
  "text-to-binary": {
    content: [
      "Convert text to binary code with our free online converter. Each character is converted to its 8-bit binary representation. Educational tool for understanding how computers store text data.",
      "Computers store all data as binary — sequences of 0s and 1s. Our tool shows you the binary representation of each character in your text using ASCII/UTF-8 encoding.",
    ],
    faqs: [
      { question: "What encoding is used?", answer: "Characters are converted to their UTF-8 character codes, then represented as 8-bit binary numbers. Standard ASCII characters use a single byte." },
      { question: "Can I convert binary back to text?", answer: "Yes, use our Binary to Text tool to convert binary code back to readable text." },
    ],
  },
  "binary-to-text": {
    content: [
      "Convert binary code to readable text with our free online converter. Enter space-separated binary bytes and get the decoded text output. Perfect complement to our Text to Binary converter.",
      "Binary-to-text conversion decodes sequences of 0s and 1s back into human-readable characters. Enter binary values separated by spaces (e.g., 01001000 01101001) to decode them.",
    ],
    faqs: [
      { question: "How should I format the input?", answer: "Enter binary bytes separated by spaces. Each byte should be 8 digits of 0s and 1s. For example: 01001000 01101001 decodes to 'Hi'." },
      { question: "What if my binary isn't 8 bits?", answer: "The tool works best with standard 8-bit bytes. Shorter sequences will be padded or may produce unexpected characters." },
    ],
  },
  "morse-code": {
    content: [
      "Convert text to Morse code and vice versa with our free online tool. Supports all letters (A-Z), numbers (0-9), and common punctuation. Educational and fun tool for encoding messages.",
      "Morse code represents characters as combinations of dots (.) and dashes (-). Developed in the 1830s for telegraph communication, it remains relevant in amateur radio, aviation, and military applications.",
    ],
    faqs: [
      { question: "What characters are supported?", answer: "The tool supports all English letters (A-Z), numbers (0-9), and common punctuation marks including period, comma, question mark, and more." },
      { question: "How are words separated?", answer: "In Morse code, letters are separated by spaces and words are separated by forward slashes (/) or triple spaces." },
    ],
  },

  // SECURITY TOOLS
  "rot13": {
    content: [
      "Encode and decode text using ROT13 cipher with our free online tool. ROT13 replaces each letter with the letter 13 positions after it in the alphabet. Applying ROT13 twice returns the original text.",
      "ROT13 is a simple letter substitution cipher that shifts each letter by 13 places. Since there are 26 letters in the English alphabet, applying ROT13 twice recovers the original text, making it its own inverse.",
    ],
    faqs: [
      { question: "Is ROT13 secure?", answer: "No. ROT13 provides no real security — it's trivially easy to decode. It's mainly used to hide spoilers, puzzle answers, or mildly obscure text, not for any security purpose." },
      { question: "Does it affect numbers and special characters?", answer: "No, ROT13 only rotates letters A-Z and a-z. Numbers, spaces, punctuation, and other characters remain unchanged." },
    ],
  },
  "password-strength-checker": {
    content: [
      "Check the strength of your passwords with our free Password Strength Checker. Get instant analysis of password length, character variety, common patterns, and estimated crack time.",
      "A strong password is your first line of defense against unauthorized access. Our checker analyzes multiple factors: length, uppercase/lowercase letters, numbers, special characters, and common patterns like dictionary words and sequences.",
    ],
    faqs: [
      { question: "Is my password stored or sent anywhere?", answer: "Absolutely not. The password analysis runs entirely in your browser. Your password is never transmitted over the network or stored anywhere." },
      { question: "What makes a strong password?", answer: "A strong password is at least 12 characters long, uses a mix of uppercase, lowercase, numbers, and special characters, and avoids common words, patterns, or personal information." },
    ],
  },
  "credit-card-validator": {
    content: [
      "Validate credit card numbers using the Luhn algorithm with our free online tool. Check if a card number is syntactically valid and identify the card type (Visa, Mastercard, Amex, etc.). No actual transactions are made.",
      "The Luhn algorithm (mod-10 algorithm) is used by all major credit card companies to validate card numbers. Our tool performs this mathematical check and identifies the card network from the number prefix.",
    ],
    faqs: [
      { question: "Does this check if the card is active?", answer: "No. This tool only validates the mathematical structure of the card number using the Luhn algorithm. It does not verify if the card exists, is active, or has funds." },
      { question: "Is it safe to enter my card number?", answer: "The validation runs entirely in your browser — no data is sent anywhere. However, we recommend using test card numbers rather than real card numbers." },
    ],
  },
  "secure-token-generator": {
    content: [
      "Generate cryptographically secure tokens with our free online tool. Create random tokens in hex, base64, or alphanumeric format with custom lengths. Uses the Web Crypto API for true randomness.",
      "Secure tokens are essential for API keys, session IDs, CSRF tokens, and password reset links. Our generator uses the browser's Web Crypto API (crypto.getRandomValues) for cryptographic-quality randomness.",
    ],
    faqs: [
      { question: "How random are the generated tokens?", answer: "The tool uses the Web Crypto API (crypto.getRandomValues) which provides cryptographically strong random values suitable for security-sensitive applications." },
      { question: "What format should I use?", answer: "Hex is common for tokens and API keys. Base64 is more compact for the same entropy. Alphanumeric is easiest to type and share." },
    ],
  },
  "checksum-generator": {
    content: [
      "Generate checksums for text using SHA-256, SHA-384, SHA-512, and SHA-1 algorithms. Verify data integrity by comparing hash values. Uses the Web Crypto API for standard-compliant hashing.",
      "Checksums are fixed-length hash values computed from input data. Any change to the input produces a completely different hash, making them ideal for verifying data integrity during transfer or storage.",
    ],
    faqs: [
      { question: "Which algorithm should I use?", answer: "SHA-256 is the most widely used and recommended. SHA-1 is considered weak for security purposes but is still used for non-security checksums. SHA-512 provides the highest security margin." },
      { question: "Can I verify file checksums?", answer: "This tool generates checksums for text input. For file checksums, use our File Hash Checker tool which processes file data directly." },
    ],
  },
  "ssl-checker": {
    content: [
      "Check SSL/TLS certificate status for any website. Our SSL Checker provides links to trusted SSL analysis services that verify certificate validity, expiration, chain of trust, and protocol support.",
      "SSL/TLS certificates are essential for secure web communication. They encrypt data between browsers and servers, verify website identity, and are a key ranking factor for search engines.",
    ],
    faqs: [
      { question: "Why link to external services?", answer: "Comprehensive SSL checks require server-side connections that can't be made from a static website. We link to trusted services like SSL Labs that provide thorough analysis." },
      { question: "How often should I check my SSL?", answer: "Check your SSL certificate at least monthly and before expiration. Set up monitoring alerts to be notified before certificates expire." },
    ],
  },
  "http-status-checker": {
    content: [
      "Browse and understand HTTP status codes with our comprehensive reference. Search through all standard HTTP status codes organized by category: 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, and 5xx Server Error.",
      "HTTP status codes are three-digit numbers returned by web servers to indicate the result of a request. Understanding these codes is essential for web development, API design, and troubleshooting.",
    ],
    faqs: [
      { question: "What are the most common status codes?", answer: "200 (OK), 301 (Moved Permanently), 404 (Not Found), and 500 (Internal Server Error) are the most frequently encountered HTTP status codes." },
      { question: "What's the difference between 301 and 302?", answer: "301 is a permanent redirect (search engines update their index), while 302 is a temporary redirect (search engines keep the original URL)." },
    ],
  },
  "file-hash-checker": {
    content: [
      "Calculate file hashes using SHA-256, SHA-384, SHA-512, and SHA-1. Upload any file and get its cryptographic hash for integrity verification. All processing happens in your browser — files are never uploaded.",
      "File hashing is used to verify file integrity after downloads, detect file modifications, and ensure data hasn't been corrupted during transfer. Our tool processes files locally in your browser.",
    ],
    faqs: [
      { question: "How large of files can I hash?", answer: "The tool can handle files up to several hundred megabytes depending on your device's available memory. Processing time increases with file size." },
      { question: "Is my file uploaded anywhere?", answer: "No. The file is processed entirely in your browser using the Web Crypto API. Your file never leaves your device." },
    ],
  },

  // IMAGE TOOLS EXTENDED
  "image-color-picker": {
    content: [
      "Pick colors from any image with our free online color picker. Upload an image and click anywhere to get the exact color in HEX, RGB, and HSL formats. Perfect for designers and developers.",
      "Color picking from images is essential for creating matching color palettes, identifying brand colors, or extracting colors from inspiration photos. Our tool uses Canvas API for precise color detection.",
    ],
    faqs: [
      { question: "How accurate is the color detection?", answer: "The tool reads exact pixel color values from the image using the Canvas API, providing 100% accurate color values for the clicked pixel." },
      { question: "What image formats are supported?", answer: "All common image formats are supported: JPEG, PNG, GIF, WebP, BMP, and SVG." },
    ],
  },
  "hex-rgb-converter": {
    content: [
      "Convert between HEX and RGB color formats instantly. Enter a HEX color code to get RGB values, or input RGB values to get the HEX code. Essential tool for web designers and CSS developers.",
      "HEX and RGB are the two most common color formats in web development. HEX codes are compact (#FF5733) while RGB values are more intuitive (rgb(255, 87, 51)). Our converter handles both directions instantly.",
    ],
    faqs: [
      { question: "What's the difference between HEX and RGB?", answer: "Both represent the same colors. HEX uses hexadecimal notation (#RRGGBB) while RGB uses decimal values (0-255 for each channel). They're interchangeable." },
      { question: "Does it support alpha/transparency?", answer: "The current converter handles standard 6-digit HEX and 3-value RGB. For alpha values, add the alpha channel manually (rgba or #RRGGBBAA)." },
    ],
  },
  "gradient-generator": {
    content: [
      "Create beautiful CSS gradients with our visual gradient generator. Choose colors, direction, and gradient type to generate CSS code you can copy directly into your stylesheets.",
      "CSS gradients eliminate the need for gradient images, improving page performance. Our generator creates linear and radial gradients with live preview and ready-to-use CSS code.",
    ],
    faqs: [
      { question: "Can I add more than two colors?", answer: "The current tool generates two-color gradients. For multi-stop gradients, you can modify the generated CSS code to add additional color stops." },
      { question: "Are the gradients cross-browser compatible?", answer: "Yes, the generated CSS uses the standard gradient syntax supported by all modern browsers without vendor prefixes." },
    ],
  },
  "favicon-generator": {
    content: [
      "Generate favicons from text, emoji, or custom settings with our free favicon generator. Create PNG favicons in standard 32x32 and 16x16 sizes with custom colors and fonts. Download ready-to-use favicon files.",
      "Favicons are small icons displayed in browser tabs, bookmarks, and search results. A good favicon helps users identify your website quickly. Our tool creates clean, professional favicons without any design software.",
    ],
    faqs: [
      { question: "What size favicons are generated?", answer: "The tool generates 32x32 pixel PNG favicons, which is the standard size for browser tabs. You can also create 16x16 size versions." },
      { question: "Can I use emoji as favicons?", answer: "Yes! Enter any emoji character and the tool will render it as a favicon. This is a quick way to get a recognizable icon without any design work." },
    ],
  },
  "image-metadata-viewer": {
    content: [
      "View image metadata including dimensions, file size, format, and more. Upload any image to see its properties without modifying the file. Useful for photographers and developers working with images.",
      "Image metadata contains information about the image file: dimensions, format, file size, and more. Understanding this data helps optimize images for web use and verify image properties.",
    ],
    faqs: [
      { question: "What metadata is shown?", answer: "The viewer shows image dimensions (width x height), file format, file size, and basic properties. EXIF data from cameras may require specialized tools." },
      { question: "Does viewing metadata modify the image?", answer: "No. The tool only reads the image properties. The original file is never modified." },
    ],
  },
  "gif-maker": {
    content: [
      "Create simple animated GIFs from multiple images with our free online tool. Upload frames, set delay timing, and generate GIF animations directly in your browser. No software installation needed.",
      "GIF animations are perfect for tutorials, social media, product demos, and fun messaging. Our tool combines multiple images into an animated sequence with customizable frame timing.",
    ],
    faqs: [
      { question: "How many frames can I add?", answer: "You can add as many frames as your device's memory allows. For smooth animations, 10-30 frames is typical." },
      { question: "What input formats are accepted?", answer: "You can use JPEG, PNG, WebP, or GIF images as frames. All images should ideally be the same dimensions for best results." },
    ],
  },
  "image-watermark": {
    content: [
      "Add text watermarks to images with our free online tool. Customize text, font size, color, opacity, and position. Protect your images from unauthorized use without expensive software.",
      "Watermarking is essential for photographers, designers, and content creators who share their work online. Our tool adds customizable text watermarks entirely in your browser.",
    ],
    faqs: [
      { question: "Can I adjust watermark opacity?", answer: "Yes, you can set the watermark opacity from fully transparent to fully opaque, allowing the underlying image to show through the watermark text." },
      { question: "Is the watermark removable?", answer: "The watermark is burned into the output image. While no watermark is 100% removal-proof, semi-transparent watermarks placed over important areas provide good protection." },
    ],
  },
  "blur-image": {
    content: [
      "Blur images online for free. Apply Gaussian blur with adjustable intensity to any image. Perfect for creating backgrounds, hiding sensitive information, or adding artistic effects.",
      "Image blurring has many uses: creating soft backgrounds, anonymizing faces or sensitive data in screenshots, and adding depth-of-field effects. Adjust the blur radius to control the intensity.",
    ],
    faqs: [
      { question: "Can I blur specific areas only?", answer: "The current tool applies blur to the entire image. For selective blurring, you would need an image editor like Photoshop or GIMP." },
      { question: "What blur levels are available?", answer: "You can adjust the blur radius from subtle (1-5px) to heavy (20-50px). Higher values create a stronger blur effect." },
    ],
  },
  "crop-image": {
    content: [
      "Crop images online with our free tool. Enter custom dimensions or aspect ratios to crop your images precisely. Download the cropped result in high quality. No software installation required.",
      "Image cropping removes unwanted areas from your photos and images. Set exact pixel dimensions for the crop area to get precisely sized output for social media, websites, or print.",
    ],
    faqs: [
      { question: "Can I crop to specific aspect ratios?", answer: "Yes, you can enter custom width and height values. For specific aspect ratios like 16:9 or 1:1, set the dimensions accordingly." },
      { question: "Is the quality preserved?", answer: "The tool maintains the original image quality within the cropped area. PNG images remain lossless, while JPEG quality is maximized." },
    ],
  },

  // PDF & FILE TOOLS
  "pdf-page-number": {
    content: [
      "Add page numbers to PDF files with our free online tool. Choose position (top or bottom, left/center/right) and customize the format. All processing happens in your browser using pdf-lib.",
      "Page numbers are essential for professional documents, reports, and manuscripts. Our tool adds sequential page numbers to every page of your PDF without altering the original content.",
    ],
    faqs: [
      { question: "Can I choose where page numbers appear?", answer: "Yes, you can position page numbers at the top or bottom of each page, aligned to the left, center, or right." },
      { question: "Is my PDF uploaded to a server?", answer: "No. All PDF processing happens entirely in your browser using the pdf-lib library. Your documents never leave your device." },
    ],
  },
  "pdf-rotate": {
    content: [
      "Rotate PDF pages by 90°, 180°, or 270° with our free online tool. Fix incorrectly oriented scans, rotate landscape to portrait, or correct upside-down pages. Processing happens in your browser.",
      "Scanned documents and photos often end up with incorrect page orientation. Our tool lets you rotate all pages in a PDF to the correct orientation quickly and easily.",
    ],
    faqs: [
      { question: "Can I rotate individual pages?", answer: "The current tool rotates all pages by the same amount. For selective page rotation, you would need a full PDF editor." },
      { question: "Does rotation affect the content?", answer: "No, rotation only changes the orientation of the pages. All text, images, and formatting remain intact." },
    ],
  },
  "pdf-unlock": {
    content: [
      "Learn about PDF password removal with our informational guide. Understand the difference between user passwords and owner passwords, and find legitimate tools for unlocking your own PDFs.",
      "PDFs can be protected with two types of passwords: user passwords (required to open the file) and owner passwords (restricting printing, copying, and editing). Removing passwords requires proper authorization.",
    ],
    faqs: [
      { question: "Can this tool crack PDF passwords?", answer: "No. This is an informational page about PDF security. Cracking passwords without authorization is unethical and potentially illegal." },
      { question: "What if I forgot my own PDF password?", answer: "Owner passwords can sometimes be removed with specialized tools. User passwords (open passwords) cannot be removed without the password itself." },
    ],
  },
  "pdf-protect": {
    content: [
      "Add metadata and properties to your PDF files with our free online tool. Set the title, author, and subject fields to organize and identify your documents professionally.",
      "PDF metadata helps organize documents, improves searchability, and adds professional touches to your files. Our tool lets you set standard metadata fields using the pdf-lib library.",
    ],
    faqs: [
      { question: "Does this add password protection?", answer: "The current tool adds metadata (title, author, subject) to PDFs. Full password protection requires server-side PDF processing which isn't available in a static site." },
      { question: "Is my PDF processed securely?", answer: "Yes, all processing happens in your browser. Your PDF is never uploaded to any server." },
    ],
  },
  "text-to-pdf": {
    content: [
      "Convert plain text to PDF documents with our free online tool. Enter or paste your text and get a professionally formatted PDF file. Uses the pdf-lib library for reliable PDF generation.",
      "Converting text to PDF preserves your document across all devices and platforms. PDFs maintain consistent formatting regardless of the viewing software or operating system.",
    ],
    faqs: [
      { question: "Can I set a custom title?", answer: "Yes, you can set a title for your PDF document. The title appears in the PDF metadata and may be shown in the title bar." },
      { question: "What font is used?", answer: "The tool uses Helvetica, a standard PDF font that's available on all systems without embedding additional font files." },
    ],
  },
  "markdown-to-pdf": {
    content: [
      "Convert Markdown text to PDF documents with our free online tool. Write in Markdown format and generate a formatted PDF with headings, bold, italic, lists, and code blocks.",
      "Markdown is a popular lightweight markup language. Our converter transforms Markdown syntax into a formatted PDF document, making it easy to share formatted documents without a word processor.",
    ],
    faqs: [
      { question: "What Markdown features are supported?", answer: "The converter supports headings (# to ####), bold (**text**), italic (*text*), lists, code blocks, and paragraphs." },
      { question: "Can I customize the PDF appearance?", answer: "The tool uses standard formatting with reasonable defaults. For full customization, consider a dedicated Markdown editor with PDF export." },
    ],
  },
  "mime-type-checker": {
    content: [
      "Look up MIME types for any file extension with our comprehensive MIME Type reference. Search through 60+ common file types or browse the complete list. Essential for web developers configuring Content-Type headers.",
      "MIME types (Multipurpose Internet Mail Extensions) tell browsers and servers how to handle different file types. Correct MIME type configuration is crucial for proper file serving and download behavior.",
    ],
    faqs: [
      { question: "What's a MIME type?", answer: "A MIME type is a label that identifies the type and format of a file, like 'text/html' for HTML files or 'image/jpeg' for JPEG images. Web servers use them in Content-Type headers." },
      { question: "How many MIME types are included?", answer: "The reference includes 60+ common MIME types covering documents, images, audio, video, archives, and web-specific formats." },
    ],
  },
  "filename-generator": {
    content: [
      "Generate random, clean filenames with our free tool. Create unique filenames with custom extensions and formats. Perfect for batch file renaming, test data, and avoiding naming conflicts.",
      "Good filenames are URL-safe, unique, and descriptive. Our generator creates clean filenames using timestamps, random strings, or descriptive patterns with your chosen file extension.",
    ],
    faqs: [
      { question: "How are filenames generated?", answer: "Filenames are created using a combination of random adjectives, nouns, and timestamps to ensure uniqueness while remaining readable." },
      { question: "Can I customize the file extension?", answer: "Yes, you can choose from common file extensions or enter a custom one. The extension doesn't affect the actual file — it's just part of the generated name." },
    ],
  },

  // BUSINESS & FINANCE (India-focused)
  "gst-calculator": {
    content: [
      "Calculate GST (Goods and Services Tax) for India with our free online calculator. Supports all GST rates (5%, 12%, 18%, 28%) with automatic CGST/SGST and IGST split. Works for both GST-inclusive and exclusive amounts.",
      "GST is India's indirect tax system that replaced multiple state and central taxes. Our calculator handles intra-state (CGST + SGST) and inter-state (IGST) calculations with complete breakdown.",
    ],
    faqs: [
      { question: "What's the difference between CGST, SGST, and IGST?", answer: "CGST (Central GST) and SGST (State GST) apply to intra-state transactions and split the rate equally. IGST (Integrated GST) applies to inter-state transactions at the full rate." },
      { question: "How does GST-inclusive calculation work?", answer: "For GST-inclusive prices, the tool calculates the base amount by dividing the total by (1 + GST rate). The difference is the GST component." },
    ],
  },
  "income-tax-calculator": {
    content: [
      "Calculate Indian Income Tax for FY 2024-25 under both Old and New tax regimes. Get detailed slab-wise breakdown, cess calculation, and effective tax rate. Compare regimes to choose the most beneficial one.",
      "India offers two income tax regimes: the Old Regime with deductions (80C, 80D, HRA) and the New Regime with lower rates but no deductions. Our calculator helps you compare both options.",
    ],
    faqs: [
      { question: "Which regime is better for me?", answer: "If your total deductions exceed ₹1.5-2 lakhs, the Old Regime may be better. Otherwise, the New Regime's lower rates often result in less tax. Use both calculations to compare." },
      { question: "Is the 4% cess included?", answer: "Yes, Health and Education Cess at 4% is automatically calculated on the tax amount and included in the total tax figure." },
    ],
  },
  "sip-calculator": {
    content: [
      "Calculate SIP (Systematic Investment Plan) returns with our free mutual fund calculator. See how monthly investments grow over time with compound interest. Plan your financial goals effectively.",
      "SIP is a popular investment method in India where you invest a fixed amount monthly in mutual funds. Our calculator shows the power of compounding — how small regular investments grow significantly over time.",
    ],
    faqs: [
      { question: "How accurate are the projections?", answer: "The calculator uses the expected return rate you provide. Actual mutual fund returns vary based on market conditions. Historical average returns for equity mutual funds in India have been around 12-15% per annum." },
      { question: "Does it account for inflation?", answer: "The calculated returns are nominal. For real (inflation-adjusted) returns, subtract the expected inflation rate (typically 5-6% in India) from your expected return rate." },
    ],
  },
  "loan-eligibility": {
    content: [
      "Check your home or personal loan eligibility based on income, existing EMIs, and loan parameters. Our calculator uses the standard FOIR (Fixed Obligation to Income Ratio) method used by Indian banks.",
      "Banks in India typically use 40-50% FOIR to determine loan eligibility. This means your total EMIs (including the new loan) should not exceed 50% of your monthly income.",
    ],
    faqs: [
      { question: "What is FOIR?", answer: "FOIR (Fixed Obligation to Income Ratio) is the percentage of your income going toward loan EMIs. Banks typically cap this at 40-50% when evaluating loan applications." },
      { question: "Is this the actual amount a bank will approve?", answer: "This is an estimate. Actual approval depends on additional factors like credit score (CIBIL), employment stability, property valuation, and the bank's specific policies." },
    ],
  },
  "profit-margin": {
    content: [
      "Calculate profit margin and markup percentages with our free business calculator. Enter revenue and cost to get gross profit, profit margin percentage, and markup percentage instantly.",
      "Understanding profit margins is crucial for pricing decisions and business health assessment. Our calculator shows both margin (profit/revenue) and markup (profit/cost) — two related but different metrics.",
    ],
    faqs: [
      { question: "What's the difference between margin and markup?", answer: "Margin is profit divided by revenue (selling price). Markup is profit divided by cost. A 50% markup results in only a 33.3% margin — they're not the same." },
      { question: "Which metric should I use?", answer: "Margin is more useful for financial statements and performance comparison. Markup is more intuitive for pricing — if your cost is ₹100 and you want 50% markup, sell at ₹150." },
    ],
  },
  "break-even": {
    content: [
      "Calculate your break-even point with our free business tool. Determine how many units you need to sell to cover your fixed and variable costs. Essential for business planning and pricing strategy.",
      "The break-even point is where total revenue equals total costs — the point at which you start making profit. It depends on your fixed costs, selling price, and variable cost per unit.",
    ],
    faqs: [
      { question: "What are fixed vs variable costs?", answer: "Fixed costs don't change with output (rent, salaries, insurance). Variable costs change per unit produced (materials, packaging, shipping). The break-even formula uses both to find the profit threshold." },
      { question: "How can I lower my break-even point?", answer: "Reduce fixed costs, increase selling price, decrease variable costs per unit, or a combination. Even small changes in pricing can significantly impact break-even volume." },
    ],
  },
  "invoice-generator": {
    content: [
      "Create professional GST invoices with our free online invoice generator. Add business details, line items, and GST calculations. Preview and print your invoice directly from the browser. India-focused with full GST support.",
      "Proper invoicing is essential for business compliance and professional image. Our tool generates formatted invoices with automatic calculations, GST breakdown, and a clean print-friendly layout.",
    ],
    faqs: [
      { question: "Does it support GST?", answer: "Yes, the invoice generator includes GST rate selection (0%, 5%, 12%, 18%, 28%) and automatically calculates the GST amount on the subtotal." },
      { question: "Can I save invoices?", answer: "You can print or save as PDF using your browser's print dialog (Ctrl+P). The preview opens in a new window with a print-optimized layout." },
    ],
  },
  "salary-calculator": {
    content: [
      "Calculate monthly in-hand salary from CTC (Cost to Company) with our India-focused salary calculator. See detailed breakup of basic salary, HRA, PF, professional tax, and special allowance.",
      "Understanding your CTC breakup is essential for salary negotiation and financial planning. Our calculator uses standard Indian salary structure with PF, HRA, and professional tax deductions.",
    ],
    faqs: [
      { question: "What deductions are included?", answer: "The calculator deducts Employee PF (12% of basic) and Professional Tax (₹2,400/year standard) from the gross salary to arrive at the monthly in-hand amount." },
      { question: "What is the basic salary percentage?", answer: "The calculator uses 40% of CTC as basic salary, which is the most common structure in Indian companies. HRA is set at 50% of basic." },
    ],
  },
  "freelance-rate": {
    content: [
      "Calculate your ideal freelance hourly and daily rate based on your expenses, savings goals, and billable hours. Includes a 30% tax buffer for Indian freelancers and self-employed professionals.",
      "Pricing your freelance services correctly is crucial for sustainability. Our calculator factors in annual expenses, savings goals, available working weeks, and tax obligations to determine your minimum rates.",
    ],
    faqs: [
      { question: "Why is there a 30% tax buffer?", answer: "Freelancers in India need to pay income tax plus GST (if applicable). The 30% buffer covers estimated tax obligations. Adjust based on your actual tax bracket." },
      { question: "How do billable hours work?", answer: "Not all working hours are billable — some time goes to admin, marketing, and learning. We use your estimated billable hours per week, not total working hours." },
    ],
  },
  "savings-goal": {
    content: [
      "Plan your savings with our goal calculator. Enter your target amount, current savings, time frame, and expected return rate to find out how much you need to save each month to reach your goal.",
      "Whether saving for a vacation, emergency fund, or major purchase, our calculator tells you the exact monthly saving needed. It accounts for compound interest on your savings to show realistic projections.",
    ],
    faqs: [
      { question: "What return rate should I use?", answer: "For savings accounts, use 3-4%. For fixed deposits, 6-7%. For mutual fund SIPs, 10-12%. Use a conservative estimate for more reliable planning." },
      { question: "Does it account for existing savings?", answer: "Yes, enter your current savings and the calculator subtracts the future value of your existing savings from the goal amount before calculating monthly requirements." },
    ],
  },

  // PRODUCTIVITY
  "todo-list": {
    content: [
      "Stay organized with our free online Todo List app. Add, complete, and manage tasks with a clean, distraction-free interface. Your tasks are saved in your browser's localStorage — no signup required.",
      "A simple todo list is one of the most effective productivity tools. Our app lets you focus on task management without account creation, subscriptions, or unnecessary features.",
    ],
    faqs: [
      { question: "Are my tasks saved?", answer: "Yes, tasks are saved in your browser's localStorage. They persist across page refreshes but are specific to this browser and device." },
      { question: "Can I sync tasks across devices?", answer: "Tasks are stored locally in your browser and don't sync across devices. For cross-device sync, consider exporting your task list." },
    ],
  },
  "notes-app": {
    content: [
      "Take notes with our free browser-based notes app. Create, edit, and organize notes with a simple interface. All notes are saved in localStorage — no account needed. Perfect for quick notes and ideas.",
      "Sometimes you just need a simple place to jot down thoughts. Our notes app provides a clean writing space with automatic saving, without the overhead of signing up for yet another service.",
    ],
    faqs: [
      { question: "Are my notes private?", answer: "Yes, notes are stored only in your browser's localStorage. They never leave your device and are not accessible by anyone else." },
      { question: "Can I format my notes?", answer: "The notes app provides a plain text editor. For formatted notes with Markdown support, check out our Markdown Editor tool." },
    ],
  },
  "pomodoro-timer": {
    content: [
      "Boost productivity with the Pomodoro Technique using our free online timer. Work in focused 25-minute sessions followed by 5-minute breaks. Every 4 sessions, take a longer 15-minute break.",
      "The Pomodoro Technique is a time management method developed by Francesco Cirillo. It uses timed intervals to improve focus and prevent burnout. Our timer handles session tracking and break scheduling automatically.",
    ],
    faqs: [
      { question: "Can I customize the timer durations?", answer: "Yes, you can adjust work time, short break, and long break durations to match your preferences. The defaults are 25/5/15 minutes." },
      { question: "Does it track my sessions?", answer: "The timer counts completed work sessions. After every 4 work sessions, it automatically switches to a long break instead of a short one." },
    ],
  },
  "random-decision-wheel": {
    content: [
      "Can't decide? Spin the wheel! Our Random Decision Wheel lets you add options and spin to make random selections. Great for choosing restaurants, picking team members, settling debates, or any random choice.",
      "Decision fatigue is real. Sometimes the best decision is a random one. Add your options, spin the colorful wheel, and let fate decide. It's fun, fair, and removes the stress of choosing.",
    ],
    faqs: [
      { question: "Is the spin truly random?", answer: "Yes, the landing position is determined by a random rotation angle generated by JavaScript's Math.random(). Each option has an equal probability of being selected." },
      { question: "How many options can I add?", answer: "You can add as many options as you want. The wheel segments automatically resize to accommodate all options. For best readability, 3-12 options work well." },
    ],
  },
  "habit-tracker": {
    content: [
      "Build better habits with our free visual habit tracker. Track daily habits over the past 7 days with a clean grid interface. See streaks build up and stay motivated. Data saved in localStorage.",
      "Habit tracking is proven to increase consistency. Visual tracking — seeing a chain of completed days — creates powerful motivation to maintain your streak. Our tracker makes it simple and visual.",
    ],
    faqs: [
      { question: "How far back can I track?", answer: "The tracker shows the last 7 days at a glance. Your completion history is saved in localStorage, so streak calculations go beyond the visible week." },
      { question: "What are streaks?", answer: "A streak is the number of consecutive days you've completed a habit. The fire emoji shows your current streak count for each habit." },
    ],
  },
  "daily-planner": {
    content: [
      "Plan your day with our free daily planner tool. Schedule tasks with specific times, mark them complete, and navigate between days. All plans are saved in your browser — no signup needed.",
      "Time blocking — assigning specific time slots to tasks — is one of the most effective productivity strategies. Our daily planner lets you schedule your day with drag-and-drop simplicity.",
    ],
    faqs: [
      { question: "Can I plan ahead?", answer: "Yes, you can navigate to any future or past date using the date picker or arrow buttons. Each day maintains its own task list." },
      { question: "Are completed tasks saved?", answer: "Yes, task status and all plans are saved in localStorage. You can review past days to see what was accomplished." },
    ],
  },
  "meeting-time-finder": {
    content: [
      "Find the best meeting time across multiple time zones with our free tool. See at a glance when it's working hours, available time, or sleeping time for participants in different countries.",
      "Scheduling international meetings is challenging. Our tool shows you the local time in each participant's timezone and indicates whether it falls during work hours (9-6), available hours, or sleeping time.",
    ],
    faqs: [
      { question: "What timezones are supported?", answer: "The tool includes major timezones: IST, EST, CST, PST, GMT, CET, JST, AEST, SGT, and CST (China). These cover most global business locations." },
      { question: "How are work hours defined?", answer: "Work hours are 9 AM to 6 PM, available hours are 6 AM to 10 PM, and sleeping time is 10 PM to 6 AM in each timezone." },
    ],
  },
  "countdown-timer": {
    content: [
      "Create countdown timers for any event with our free online tool. Set a target date and time, optionally name your event, and watch the days, hours, minutes, and seconds tick down in real-time.",
      "Counting down to an important event builds anticipation and helps with planning. Our timer runs in real-time and shows the remaining time in days, hours, minutes, and seconds.",
    ],
    faqs: [
      { question: "Does the timer work if I close the page?", answer: "The countdown calculates remaining time based on the target date, so it will show the correct time whenever you open the page, even after days or weeks." },
      { question: "Can I set presets?", answer: "Yes, the tool includes preset buttons for common countdowns like New Year, 1 hour from now, and tomorrow." },
    ],
  },
  "stopwatch": {
    content: [
      "Simple, accurate online stopwatch with lap timing. Start, stop, and record lap times with millisecond precision. Perfect for timing exercises, cooking, games, and any activity that needs precise timing.",
      "Our stopwatch provides clean, distraction-free timing with large, easy-to-read numbers. Record lap times to track splits, and review all laps with individual and cumulative times.",
    ],
    faqs: [
      { question: "How accurate is it?", answer: "The stopwatch updates every 10 milliseconds and uses performance.now() for high-precision timing. For most practical purposes, it's accurate to within a few milliseconds." },
      { question: "Can I record laps?", answer: "Yes, click the Lap button during timing to record a lap. Each lap shows the cumulative time and the split (difference from previous lap)." },
    ],
  },
  "random-number": {
    content: [
      "Generate random numbers within any range with our free online tool. Set minimum and maximum values, generate multiple numbers at once, and optionally ensure all numbers are unique.",
      "Random number generation is used for games, raffles, sampling, and decision making. Our tool provides clean random numbers with customizable range and count options.",
    ],
    faqs: [
      { question: "Are the numbers truly random?", answer: "The tool uses JavaScript's Math.random() which provides pseudo-random numbers. For most purposes this is sufficient, but it's not suitable for cryptographic applications." },
      { question: "Can I generate unique numbers?", answer: "Yes, enable the 'Unique numbers only' option to ensure no duplicates. Note that the count can't exceed the range size when unique mode is enabled." },
    ],
  },

  // SEO TOOLS
  "sitemap-generator": {
    content: [
      "Generate XML sitemaps for your website with our free online tool. Enter your domain and URL paths to create a properly formatted sitemap.xml file that helps search engines discover and index your pages.",
      "An XML sitemap tells search engines which pages on your site are important and how often they change. It's a fundamental SEO tool that improves crawl efficiency and indexation.",
    ],
    faqs: [
      { question: "How do I submit my sitemap?", answer: "Submit your sitemap through Google Search Console and Bing Webmaster Tools. You can also add a reference to it in your robots.txt file." },
      { question: "How often should I update my sitemap?", answer: "Update your sitemap whenever you add, remove, or significantly modify pages. For dynamic sites, automate sitemap generation as part of your build process." },
    ],
  },
  "robots-txt-generator": {
    content: [
      "Generate robots.txt files for your website with our free tool. Control which pages search engine crawlers can and cannot access. Include your sitemap URL for better indexation.",
      "The robots.txt file tells search engine crawlers which parts of your site they can and cannot visit. It's placed in your site's root directory and is one of the first files crawlers check.",
    ],
    faqs: [
      { question: "Can robots.txt block all crawling?", answer: "Yes, using 'Disallow: /' blocks all crawlers from your entire site. However, it's a directive, not a security measure — well-behaved crawlers obey it, but malicious ones may ignore it." },
      { question: "Should I include my sitemap?", answer: "Yes, adding a Sitemap directive in robots.txt helps crawlers discover your sitemap automatically, improving indexation of your pages." },
    ],
  },
  "canonical-tag-generator": {
    content: [
      "Generate canonical tags for your web pages to prevent duplicate content issues. Enter your preferred URL and get the HTML link tag ready to paste into your page's head section.",
      "Canonical tags tell search engines which version of a page is the 'master' copy when similar or identical content exists at multiple URLs. They're essential for consolidating SEO signals.",
    ],
    faqs: [
      { question: "When should I use canonical tags?", answer: "Use them when the same content is accessible via multiple URLs (www vs non-www, HTTP vs HTTPS, with/without trailing slashes, or with query parameters)." },
      { question: "Can I use canonical tags across domains?", answer: "Yes, cross-domain canonicals are supported. If content is syndicated or duplicated across domains, point the canonical to the original source." },
    ],
  },
  "htaccess-redirect-generator": {
    content: [
      "Generate .htaccess redirect and rewrite rules for Apache web servers. Create 301 permanent redirects, 302 temporary redirects, and URL rewrite rules with our free tool.",
      "URL redirection is essential when restructuring your website, changing domains, or consolidating pages. Proper redirects preserve SEO value and ensure users reach the correct pages.",
    ],
    faqs: [
      { question: "What's the difference between redirect and rewrite?", answer: "A redirect (301/302) sends the browser to a new URL (the URL bar changes). A rewrite serves different content but the URL bar stays the same — it's transparent to the user." },
      { question: "Do I need an .htaccess file?", answer: "This syntax is for Apache web servers only. For Nginx, use the 'return' or 'rewrite' directives in your nginx.conf. For Vercel or Netlify, use their configuration files." },
    ],
  },
  "keyword-suggestion": {
    content: [
      "Generate keyword ideas from a seed keyword with our free suggestion tool. Get long-tail keyword variations, question-based keywords, and related phrases to expand your SEO content strategy.",
      "Keyword research is the foundation of SEO. Our tool generates pattern-based suggestions including question keywords (how, what, why), comparison keywords, and location-based variations.",
    ],
    faqs: [
      { question: "Are these keywords based on search volume?", answer: "These are pattern-based suggestions, not search volume data. Use Google Keyword Planner, Ahrefs, or SEMrush to check actual search volumes for the suggested keywords." },
      { question: "How should I use these suggestions?", answer: "Use them as inspiration for blog topics, content ideas, and long-tail keywords. Each suggestion represents a potential search query people might use." },
    ],
  },
  "broken-link-checker": {
    content: [
      "Find and fix broken links on your website using our curated list of free broken link checker tools. Broken links harm user experience and SEO rankings — regular checking is essential.",
      "Broken links (404 errors) frustrate users and signal poor site maintenance to search engines. Regular link checking helps maintain a healthy website and preserve your SEO rankings.",
    ],
    faqs: [
      { question: "Why can't you check links directly?", answer: "Link checking requires crawling websites and making HTTP requests, which requires server-side processing. As a static site, we link to trusted tools that can perform these checks." },
      { question: "How often should I check for broken links?", answer: "Check monthly for small sites and weekly for large sites. Set up monitoring tools for continuous checking of critical pages." },
    ],
  },
  "website-screenshot": {
    content: [
      "Capture website screenshots using our recommended free tools. Take full-page screenshots, create browser mockups, and generate preview images of any website for documentation or design purposes.",
      "Website screenshots are useful for documentation, design reviews, bug reports, and social media sharing. We've curated the best free tools for different screenshot needs.",
    ],
    faqs: [
      { question: "Why link to external tools?", answer: "Taking website screenshots requires server-side rendering (loading the page in a real browser), which can't be done from a client-side application." },
      { question: "How can I take screenshots without external tools?", answer: "Use your browser's DevTools: F12 → Ctrl+Shift+P → type 'screenshot' → choose 'Capture full size screenshot' to capture the entire page." },
    ],
  },
  "whois-lookup": {
    content: [
      "Look up domain registration information (WHOIS) for any domain name. Find registrar details, registration and expiry dates, nameservers, and registrant contact information through trusted lookup services.",
      "WHOIS data provides transparency about domain ownership and registration. It's useful for verifying domain legitimacy, checking availability, finding domain expiry dates, and contacting site owners.",
    ],
    faqs: [
      { question: "Why are some WHOIS records hidden?", answer: "Many registrars offer WHOIS privacy protection (also called domain privacy) that replaces the registrant's personal information with the privacy service's details." },
      { question: "Is WHOIS data always accurate?", answer: "ICANN requires accurate WHOIS data, but privacy services mask personal details. The registrar and technical information is typically always accurate." },
    ],
  },

  // DEV HELPERS
  "cron-generator": {
    content: [
      "Generate and understand cron expressions with our free visual tool. Build cron schedules using dropdowns and presets, then get a human-readable explanation of what your cron expression does.",
      "Cron is the standard job scheduler for Unix/Linux systems. Cron expressions define when scheduled tasks run using five fields: minute, hour, day of month, month, and day of week.",
    ],
    faqs: [
      { question: "What does each field mean?", answer: "The five fields are: minute (0-59), hour (0-23), day of month (1-31), month (1-12), and day of week (0-6, where 0 is Sunday). Use * for 'every'." },
      { question: "What are common presets?", answer: "Common presets include: every minute (* * * * *), hourly (0 * * * *), daily midnight (0 0 * * *), and weekly Monday (0 0 * * 1)." },
    ],
  },
  "timestamp-converter": {
    content: [
      "Convert between Unix timestamps and human-readable dates with our free tool. Enter a Unix timestamp to see the date, or enter a date to get the timestamp. Supports both seconds and milliseconds.",
      "Unix timestamps represent time as the number of seconds since January 1, 1970 (the Unix epoch). They're used widely in programming, databases, and APIs for unambiguous time representation.",
    ],
    faqs: [
      { question: "What's the difference between seconds and milliseconds timestamps?", answer: "Unix timestamps in seconds are 10 digits (e.g., 1700000000). Millisecond timestamps are 13 digits (e.g., 1700000000000). Most APIs use seconds, while JavaScript uses milliseconds." },
      { question: "Does it handle timezone conversion?", answer: "The tool shows both UTC and your local timezone when converting from timestamp to date. Timestamps themselves are always in UTC." },
    ],
  },
  "color-converter": {
    content: [
      "Convert colors between HEX, RGB, and HSL formats with live preview. Pick a color or enter values in any format and see the equivalent values in all other formats instantly. Essential for web designers.",
      "Web designers need to work with multiple color formats: HEX for CSS, RGB for JavaScript, and HSL for intuitive color adjustment. Our converter handles all three formats with a visual color picker.",
    ],
    faqs: [
      { question: "Why use HSL instead of RGB?", answer: "HSL (Hue, Saturation, Lightness) is more intuitive for color manipulation. Adjusting lightness or saturation is straightforward in HSL, while achieving the same in RGB requires changing all three values." },
      { question: "Does it support CSS named colors?", answer: "Currently the tool works with HEX, RGB, and HSL values. For named color lookup, you can search for CSS named colors and their hex values online." },
    ],
  },
  "html-entities": {
    content: [
      "Encode and decode HTML entities with our free online tool. Convert special characters to their HTML entity equivalents (&amp;, &lt;, &gt;, etc.) or decode entities back to characters.",
      "HTML entities are used to display special characters that would otherwise be interpreted as HTML code. Proper encoding prevents XSS vulnerabilities and ensures correct display of special characters.",
    ],
    faqs: [
      { question: "When should I encode HTML entities?", answer: "Encode user-generated content before displaying it in HTML to prevent XSS attacks. Also encode special characters in HTML attributes and element content." },
      { question: "What characters are encoded?", answer: "The tool encodes characters that have special meaning in HTML: & (ampersand), < (less than), > (greater than), \" (double quote), and ' (single quote)." },
    ],
  },
  "js-obfuscator": {
    content: [
      "Obfuscate JavaScript code to make it harder to read and understand. Our tool converts your code to a character-code-based representation using eval and String.fromCharCode.",
      "JavaScript obfuscation makes your code difficult to read, understand, and copy. While basic obfuscation isn't unbreakable, it raises the barrier for casual code theft.",
    ],
    faqs: [
      { question: "Is obfuscated code secure?", answer: "No. Obfuscation makes code harder to read but not impossible to reverse-engineer. For true security, keep sensitive logic on the server. Obfuscation is a deterrent, not a security measure." },
      { question: "Does obfuscation affect performance?", answer: "Basic eval-based obfuscation adds minimal overhead (the eval call). For production-grade obfuscation with minimal performance impact, use tools like javascript-obfuscator." },
    ],
  },
  "js-deobfuscator": {
    content: [
      "Deobfuscate basic JavaScript code that uses eval-based obfuscation. If code was obfuscated using eval(String.fromCharCode(...)), this tool can reverse it to readable code.",
      "Need to understand obfuscated JavaScript? Our deobfuscator handles the common eval(String.fromCharCode(...)) pattern. For more complex obfuscation, specialized tools are recommended.",
    ],
    faqs: [
      { question: "What types of obfuscation can it decode?", answer: "This tool specifically handles eval(String.fromCharCode(...)) style obfuscation. Other techniques like variable renaming, control flow flattening, or packer-style obfuscation require more advanced tools." },
      { question: "Is it safe to deobfuscate unknown code?", answer: "This tool extracts the code string without executing it, making it safe. Never run unknown deobfuscated code directly — review it first to ensure it's not malicious." },
    ],
  },
  "markdown-editor": {
    content: [
      "Write and preview Markdown with our free online editor. See your formatted output in real-time as you type. Supports headings, bold, italic, links, lists, code blocks, and blockquotes.",
      "Markdown is the preferred writing format for developers, bloggers, and documentation. Our split-pane editor shows your source on the left and rendered preview on the right, updating in real-time.",
    ],
    faqs: [
      { question: "What Markdown syntax is supported?", answer: "The editor supports headings (#-####), bold (**text**), italic (*text*), links, unordered and ordered lists, code blocks, inline code, blockquotes, and horizontal rules." },
      { question: "Can I export to HTML?", answer: "The rendered preview is HTML. You can inspect the preview output or copy it for use in web pages. For PDF export, use our Markdown to PDF tool." },
    ],
  },
  "api-tester": {
    content: [
      "Test REST APIs directly from your browser with our free API tester. Send GET, POST, PUT, PATCH, and DELETE requests with custom headers and body. View response status, headers, and body with formatting.",
      "API testing is essential for development and debugging. Our tool lets you send HTTP requests and inspect responses without installing Postman or similar software. JSON responses are automatically formatted.",
    ],
    faqs: [
      { question: "Will all APIs work?", answer: "Requests are made from your browser, so CORS restrictions apply. APIs that don't include appropriate CORS headers won't respond. For unrestricted testing, you'd need a desktop tool or proxy." },
      { question: "Can I send authentication headers?", answer: "Yes, add any headers in the headers section, including Authorization, Bearer tokens, API keys, and custom headers." },
    ],
  },
  "graphql-tester": {
    content: [
      "Test GraphQL APIs from your browser with our free query tester. Execute queries and mutations with variables, custom headers, and formatted response output. Perfect for quick GraphQL exploration.",
      "GraphQL is a query language for APIs that lets you request exactly the data you need. Our tester provides a simple interface for sending GraphQL queries with variables and viewing structured responses.",
    ],
    faqs: [
      { question: "How do I use variables?", answer: "Enter your variables as a JSON object in the Variables field. Reference them in your query with $variableName syntax and declare types in the query definition." },
      { question: "Does it support mutations?", answer: "Yes, you can execute both queries and mutations. Enter your mutation as you would in any GraphQL client, along with any required variables." },
    ],
  },

  "box-shadow-generator": {
    content: ["Create beautiful CSS box shadows with our visual generator. Preview shadows in real-time, add multiple layers, customize colors, blur, spread, and offset values. Copy the generated CSS code instantly."],
    faqs: [
      { question: "Can I add multiple shadow layers?", answer: "Yes, click 'Add Shadow Layer' to stack multiple shadows. Each layer can have independent settings for offset, blur, spread, color, and opacity." },
      { question: "What is the inset option?", answer: "Inset creates an inner shadow instead of an outer drop shadow. It makes the element appear pressed or recessed." },
    ],
  },
  "flexbox-generator": {
    content: ["Generate CSS Flexbox layouts visually. Adjust direction, wrap, justify-content, align-items, and gap in real-time. See how items rearrange as you tweak each property and copy the CSS code."],
    faqs: [
      { question: "What is flex-direction?", answer: "It defines the main axis direction — row (horizontal) or column (vertical). Use row-reverse or column-reverse to flip the order." },
      { question: "What does gap do?", answer: "Gap sets the spacing between flex items. It replaces the need for margin on individual items." },
    ],
  },
  "grid-generator": {
    content: ["Build CSS Grid layouts interactively. Set the number of columns and rows, adjust gap spacing, and choose between fr, auto, and fixed units. Preview your grid and copy the generated code."],
    faqs: [
      { question: "What is the fr unit?", answer: "The fr (fraction) unit distributes available space proportionally. '1fr 2fr' gives the second column twice the width of the first." },
      { question: "How do I make responsive grids?", answer: "Use minmax() for column sizes, like minmax(200px, 1fr), so columns shrink but never below 200px." },
    ],
  },
  "border-radius-generator": {
    content: ["Design custom border radius styles with a visual editor. Link or unlink corners, adjust individual values, preview live, and copy the CSS. Create circles, pills, and organic shapes effortlessly."],
    faqs: [
      { question: "How do I make a circle?", answer: "Set border-radius to 50% (or use a value equal to half the element's width/height). The element must be square for a perfect circle." },
      { question: "Can I set different values per corner?", answer: "Yes, unlink corners to set top-left, top-right, bottom-right, and bottom-left independently." },
    ],
  },
  "css-animation-generator": {
    content: ["Create CSS animations and keyframes visually. Choose from presets like bounce, fade, slide, pulse, and spin, or write custom keyframes. Adjust timing, duration, delay, and iteration count."],
    faqs: [
      { question: "What animation presets are available?", answer: "We include Bounce, Fade In, Slide In Left, Pulse, Shake, Spin, and Flip presets. You can customize the keyframes for any of them." },
      { question: "Can I use custom keyframes?", answer: "Yes, edit the keyframes textarea to write any CSS keyframe animation you need." },
    ],
  },
  "color-palette-generator": {
    content: ["Generate harmonious color palettes from any base color. Get complementary, analogous, triadic, split-complementary, shades, and tints. Click any color to copy its hex value. Export as CSS variables."],
    faqs: [
      { question: "What color harmonies are generated?", answer: "We generate Complementary, Analogous, Triadic, Split-Complementary, Shades, and Tints palettes from your chosen base color." },
      { question: "Can I export the colors?", answer: "Yes, copy the generated CSS custom properties (variables) to use in your stylesheets." },
    ],
  },
  "qr-code-generator": {
    content: ["Generate QR codes from text or URLs instantly. Customize size, foreground and background colors. Download as PNG. Works entirely in your browser — no data is sent to any server."],
    faqs: [
      { question: "What can I encode in a QR code?", answer: "You can encode any text, URL, email address, phone number, or WiFi credentials. Most QR scanners will recognize and act on the content type." },
      { question: "Is my data safe?", answer: "Yes, QR codes are generated entirely in your browser using the qrcode library. No data leaves your device." },
    ],
  },
  "barcode-generator": {
    content: ["Generate Code 128 barcodes from text. Customize bar width and height. Download as PNG image. Perfect for inventory labels, product codes, and asset tracking."],
    faqs: [
      { question: "What barcode format is used?", answer: "We use Code 128 (B variant), which supports the full ASCII character set including letters, numbers, and symbols." },
      { question: "Can I scan the generated barcode?", answer: "Yes, the generated barcode is a standard Code 128 barcode compatible with any barcode scanner." },
    ],
  },
  "bmi-calculator": {
    content: ["Calculate your Body Mass Index instantly. Supports both metric (kg/cm) and imperial (lbs/ft-in) units. See your BMI category with a color-coded visual scale."],
    faqs: [
      { question: "How accurate is BMI?", answer: "BMI is a screening tool, not a diagnostic measure. It doesn't account for muscle mass, bone density, or body composition. Consult a healthcare provider for personalized health assessment." },
      { question: "What are the BMI categories?", answer: "Underweight (< 18.5), Normal (18.5–24.9), Overweight (25–29.9), and Obese (≥ 30)." },
    ],
  },
  "compound-interest-calculator": {
    content: ["Calculate compound interest with principal, rate, time, and compounding frequency. View year-by-year breakdown of balance and interest earned. Plan your investments and savings effectively."],
    faqs: [
      { question: "What compounding frequencies are available?", answer: "Annual, semi-annual, quarterly, monthly, and daily compounding options are available." },
      { question: "How does compound interest work?", answer: "Interest is calculated on the initial principal plus accumulated interest from previous periods, causing your money to grow exponentially over time." },
    ],
  },
  "number-base-converter": {
    content: ["Convert numbers between binary, octal, decimal, and hexadecimal bases instantly. See all conversions side by side. Also shows the Unicode/ASCII character for valid code points."],
    faqs: [
      { question: "What number bases are supported?", answer: "Binary (base 2), Octal (base 8), Decimal (base 10), and Hexadecimal (base 16)." },
      { question: "How do I enter a hex number?", answer: "Select 'Hexadecimal (16)' as the input base, then type your hex value using digits 0-9 and letters A-F." },
    ],
  },
  "text-to-speech": {
    content: ["Convert text to speech using the Web Speech API built into your browser. Choose from available voices, adjust speaking rate and pitch. No server required — everything runs locally."],
    faqs: [
      { question: "Does this work offline?", answer: "Yes, it uses your browser's built-in speech synthesis. Available voices depend on your operating system and browser." },
      { question: "Can I control the speed?", answer: "Yes, adjust the Rate slider (0.1x to 3x) and Pitch slider (0 to 2) to customize the speech output." },
    ],
  },
  "chmod-calculator": {
    content: ["Calculate Unix/Linux file permissions with an interactive visual editor. Toggle read, write, and execute for owner, group, and others. Get both numeric (755) and symbolic (-rwxr-xr-x) output."],
    faqs: [
      { question: "What does 755 mean?", answer: "Owner can read, write, and execute (7). Group can read and execute (5). Others can read and execute (5). Common for scripts and directories." },
      { question: "Can I enter a numeric value?", answer: "Yes, type a 3-digit octal number (like 644) and the permission checkboxes will update automatically." },
    ],
  },
  "git-command-generator": {
    content: ["Find and customize common Git commands quickly. Search for operations like branching, merging, rebasing, stashing, and more. Fill in variables and copy the ready-to-use command."],
    faqs: [
      { question: "Can I fill in my own branch names?", answer: "Yes, each command with variables (like branch name, commit hash) has input fields that you can customize before copying." },
      { question: "What Git commands are included?", answer: "We cover branching, merging, rebasing, stashing, cherry-picking, resetting, tagging, cloning, remoting, and more common Git workflows." },
    ],
  },
  "json-schema-validator": {
    content: ["Validate JSON data against a JSON Schema. Checks types, required fields, minimum/maximum values, string lengths, enums, and nested structures. See detailed error messages for mismatches."],
    faqs: [
      { question: "What JSON Schema features are supported?", answer: "Type checking (object, array, string, number, integer, boolean), required properties, nested object/array validation, min/max, minLength/maxLength, and enum constraints." },
      { question: "Is this a complete JSON Schema validator?", answer: "This is a lightweight validator covering the most commonly used features. For full JSON Schema Draft 7+ compliance, consider dedicated libraries like Ajv." },
    ],
  },
  "gitignore-generator": {
    content: ["Generate .gitignore files for your projects. Select from templates for Node.js, Python, Java, Go, Rust, C/C++, .NET, and common IDE/OS patterns. Combine multiple templates."],
    faqs: [
      { question: "Can I select multiple templates?", answer: "Yes, click on multiple technology buttons to combine their ignore patterns into a single .gitignore file." },
      { question: "What templates are available?", answer: "Node.js, Python, Java, Go, Rust, C/C++, .NET, macOS, Windows, Linux, and common IDEs (VS Code, IntelliJ, Sublime, etc.)." },
    ],
  },
  "package-json-generator": {
    content: ["Generate a complete package.json file for your Node.js project. Fill in name, version, scripts, dependencies, and more. Get properly formatted JSON output ready to use."],
    faqs: [
      { question: "How do I add dependencies?", answer: "Enter dependencies one per line in the format 'package-name: version'. For example: 'express: ^4.18.0'." },
      { question: "Does it support ESM?", answer: "Yes, you can select 'module (ESM)' or 'commonjs (CJS)' for the type field." },
    ],
  },
  "ip-subnet-calculator": {
    content: ["Calculate IP subnet details from an IP address and CIDR notation. Get network address, broadcast address, subnet mask, wildcard mask, host range, and total usable hosts."],
    faqs: [
      { question: "What is CIDR notation?", answer: "CIDR (Classless Inter-Domain Routing) notation like /24 specifies the number of bits in the subnet mask. /24 means 255.255.255.0 with 254 usable hosts." },
      { question: "Does it support IPv6?", answer: "Currently this tool supports IPv4 addresses only. IPv6 subnetting requires different calculations." },
    ],
  },
  "aes-encrypt-decrypt": {
    content: ["Encrypt and decrypt text using AES-256-GCM, the gold standard in symmetric encryption. Uses PBKDF2 key derivation with 100,000 iterations for maximum security. All processing is done in your browser."],
    faqs: [
      { question: "Is this encryption secure?", answer: "Yes, it uses AES-256-GCM with PBKDF2 key derivation (100,000 iterations, SHA-256). Random salt and IV are generated for each encryption operation." },
      { question: "Can someone decrypt without the password?", answer: "No, the password is required for decryption. The encryption is performed entirely in your browser and no data is sent to any server." },
    ],
  },
  "caesar-cipher": {
    content: ["Encrypt and decrypt text using the classic Caesar cipher. Shift letters by a customizable amount. View all 25 possible shift values to brute-force decode unknown ciphertexts."],
    faqs: [
      { question: "What is Caesar cipher?", answer: "It's a substitution cipher where each letter is shifted by a fixed number. With shift=3, A becomes D, B becomes E, etc. Named after Julius Caesar." },
      { question: "Is it secure?", answer: "No, Caesar cipher is trivially breakable. It's educational and fun, but should never be used for actual security. Use AES for real encryption." },
    ],
  },
  "typing-speed-test": {
    content: ["Test your typing speed with real-time WPM (words per minute), CPM (characters per minute), and accuracy tracking. Random text samples for each test. See character-level highlighting."],
    faqs: [
      { question: "How is WPM calculated?", answer: "WPM = (total words typed / elapsed time in seconds) × 60. A 'word' is defined as any whitespace-separated token." },
      { question: "What is a good typing speed?", answer: "Average is 40-50 WPM. Professional typists reach 65-75 WPM. Elite typists exceed 100 WPM." },
    ],
  },
  "ascii-art-generator": {
    content: ["Convert text into ASCII art using block characters. Supports A-Z, 0-9, spaces, and basic punctuation. Copy the generated art for READMEs, comments, or creative projects."],
    faqs: [
      { question: "What characters are supported?", answer: "All uppercase letters (A-Z), digits (0-9), spaces, and basic punctuation (!, ., ?). Input is automatically converted to uppercase." },
      { question: "How long can the text be?", answer: "Up to 20 characters to keep the output manageable. Longer text would be very wide in ASCII art format." },
    ],
  },
  "readability-checker": {
    content: ["Analyze text readability with Flesch Reading Ease and Flesch-Kincaid Grade Level scores. Get word count, sentence count, syllable analysis, and reading level assessment."],
    faqs: [
      { question: "What is a good Flesch Reading Ease score?", answer: "60-70 is ideal for general audiences. 70+ is easy to read, 50-60 is fairly difficult (college level), and below 30 is very difficult (graduate level)." },
      { question: "What is the Flesch-Kincaid Grade Level?", answer: "It estimates the U.S. school grade level needed to understand the text. A score of 8.0 means an 8th grader can understand it." },
    ],
  },
  "social-image-resizer": {
    content: ["Resize images to exact dimensions for Instagram, Twitter/X, Facebook, LinkedIn, and YouTube. Crop and scale automatically. Download optimized images ready to upload."],
    faqs: [
      { question: "What platforms are supported?", answer: "Instagram (post, story, profile), Twitter/X (post, header, profile), Facebook (post, cover, profile), LinkedIn (post, banner, profile), and YouTube (thumbnail, channel art, profile)." },
      { question: "How does cropping work?", answer: "The tool center-crops your image to match the selected aspect ratio, then scales to the exact pixel dimensions. No stretching or distortion." },
    ],
  },
  "twitter-character-counter": {
    content: ["Count characters for Twitter/X posts with smart URL detection. URLs are counted as 23 characters regardless of length. Track hashtags, mentions, and remaining character count."],
    faqs: [
      { question: "Why are URLs counted as 23 characters?", answer: "Twitter wraps all URLs with its t.co shortener, which always uses 23 characters regardless of the original URL length." },
      { question: "What is the character limit?", answer: "Standard tweets have a 280-character limit. Twitter Blue subscribers may have higher limits." },
    ],
  },
  "youtube-thumbnail-preview": {
    content: ["Preview how your YouTube thumbnail will look on desktop, mobile, and sidebar views. Upload your image and customize mock video title, channel name, and view count for realistic previews."],
    faqs: [
      { question: "What size should my thumbnail be?", answer: "YouTube recommends 1280×720 pixels with a 16:9 aspect ratio. Minimum width is 640 pixels. Use JPG, PNG, or GIF under 2MB." },
      { question: "Can I download the preview?", answer: "The preview is for visualization only. Your original uploaded image is what you'd use as the actual YouTube thumbnail." },
    ],
  },
};
