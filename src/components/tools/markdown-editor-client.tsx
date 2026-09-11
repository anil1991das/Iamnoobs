"use client";

import { useState } from "react";
import { markdownToHtml } from "@/lib/tools/dev-helpers";

export default function MarkdownEditorClient() {
  const [md, setMd] = useState(`# Hello World

This is a **Markdown** editor with live preview.

## Features
- Bold, italic, links
- Lists and headings
- Code blocks
- Blockquotes

> This is a blockquote

\`\`\`javascript
console.log("Hello!");
\`\`\`

[Visit iamnoobs.com](https://iamnoobs.com)
`);

  const html = markdownToHtml(md);

  return (
    <div className="grid grid-cols-2 gap-4 min-h-[500px]">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">Markdown</label>
        <textarea value={md} onChange={(e) => setMd(e.target.value)} className="w-full h-[480px] rounded-xl border border-border bg-background px-4 py-3 text-sm font-mono resize-none" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">Preview</label>
        <div className="h-[480px] overflow-y-auto rounded-xl border border-border bg-card px-6 py-4 prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
