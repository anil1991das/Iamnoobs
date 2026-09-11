export function htmlToText(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

export function textToHtml(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const paragraphs = escaped.split(/\n\s*\n/);
  if (paragraphs.length > 1) {
    return paragraphs.map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("\n");
  }
  return escaped.replace(/\n/g, "<br>");
}
