export function formatHtml(html: string): string {
  const voidTags = new Set(["br","hr","img","input","meta","link","area","base","col","embed","source","track","wbr"]);
  let result = "";
  let indent = 0;
  const tokens = html.match(/<!--[\s\S]*?-->|<\/[^>]+>|<[^>]+\/?>|[^<]+/g) || [];

  for (const token of tokens) {
    const trimmed = token.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("</")) {
      indent = Math.max(0, indent - 1);
      result += "  ".repeat(indent) + trimmed + "\n";
    } else if (trimmed.startsWith("<") && !trimmed.startsWith("<!--")) {
      result += "  ".repeat(indent) + trimmed + "\n";
      const tagMatch = trimmed.match(/^<([a-zA-Z][a-zA-Z0-9]*)/);
      const tag = tagMatch?.[1]?.toLowerCase();
      if (tag && !voidTags.has(tag) && !trimmed.endsWith("/>")) {
        indent++;
      }
    } else {
      result += "  ".repeat(indent) + trimmed + "\n";
    }
  }
  return result.trimEnd();
}

export function minifyHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/\s*\/>/g, "/>")
    .trim();
}
