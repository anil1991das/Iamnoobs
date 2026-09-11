export function generateCronExpression(minute: string, hour: string, dayOfMonth: string, month: string, dayOfWeek: string): string {
  return `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
}

export function explainCron(expression: string): string {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) return "Invalid cron expression (requires 5 fields)";
  const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;

  const desc: string[] = [];
  if (minute === "*") desc.push("Every minute");
  else if (minute.includes("/")) desc.push(`Every ${minute.split("/")[1]} minutes`);
  else if (minute.includes(",")) desc.push(`At minutes ${minute}`);
  else desc.push(`At minute ${minute}`);

  if (hour === "*") desc.push("of every hour");
  else if (hour.includes("/")) desc.push(`every ${hour.split("/")[1]} hours`);
  else if (hour.includes(",")) desc.push(`at hours ${hour}`);
  else desc.push(`at ${hour}:00`);

  if (dayOfMonth !== "*") desc.push(`on day ${dayOfMonth} of the month`);
  if (month !== "*") {
    const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    desc.push(`in ${month.split(",").map((m) => monthNames[parseInt(m)] || m).join(", ")}`);
  }
  if (dayOfWeek !== "*") {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    desc.push(`on ${dayOfWeek.split(",").map((d) => dayNames[parseInt(d)] || d).join(", ")}`);
  }

  return desc.join(" ");
}

export const cronPresets = [
  { label: "Every minute", value: "* * * * *" },
  { label: "Every 5 minutes", value: "*/5 * * * *" },
  { label: "Every 15 minutes", value: "*/15 * * * *" },
  { label: "Every hour", value: "0 * * * *" },
  { label: "Every day at midnight", value: "0 0 * * *" },
  { label: "Every day at 9 AM", value: "0 9 * * *" },
  { label: "Every Monday at 9 AM", value: "0 9 * * 1" },
  { label: "Every weekday at 9 AM", value: "0 9 * * 1-5" },
  { label: "Every 1st of month", value: "0 0 1 * *" },
  { label: "Every Sunday at midnight", value: "0 0 * * 0" },
];

export function timestampToDate(timestamp: number): string {
  const ms = timestamp > 9999999999 ? timestamp : timestamp * 1000;
  return new Date(ms).toISOString();
}

export function dateToTimestamp(dateStr: string): { seconds: number; milliseconds: number } {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) throw new Error("Invalid date");
  return { seconds: Math.floor(d.getTime() / 1000), milliseconds: d.getTime() };
}

export function htmlEncode(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    "©": "&copy;", "®": "&reg;", "™": "&trade;", "€": "&euro;", "£": "&pound;",
    "¥": "&yen;", "°": "&deg;", "±": "&plusmn;", "×": "&times;", "÷": "&divide;",
    "¶": "&para;", "§": "&sect;", "†": "&dagger;", "‡": "&Dagger;", "•": "&bull;",
    "…": "&hellip;", "—": "&mdash;", "–": "&ndash;", " ": "&nbsp;",
  };
  return [...text].map((ch) => map[ch] ?? (ch.charCodeAt(0) > 127 ? `&#${ch.charCodeAt(0)};` : ch)).join("");
}

export function htmlDecode(text: string): string {
  const textarea = typeof document !== "undefined" ? document.createElement("textarea") : null;
  if (textarea) { textarea.innerHTML = text; return textarea.value; }
  return text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

export function basicObfuscate(code: string): string {
  // Hex encode strings, add wrapping
  const encoded = code.replace(/'([^']*)'/g, (_m, s: string) => {
    const hex = [...s].map((c) => "\\x" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
    return `'${hex}'`;
  }).replace(/"([^"]*)"/g, (_m, s: string) => {
    const hex = [...s].map((c) => "\\x" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("");
    return `"${hex}"`;
  });
  return `(function(){${encoded}})();`;
}

export function basicDeobfuscate(code: string): string {
  // Unwrap IIFE
  let result = code.replace(/^\(function\(\)\{/, "").replace(/\}\)\(\);?\s*$/, "");
  // Decode hex strings
  result = result.replace(/\\x([0-9a-f]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  // Pretty print
  let indent = 0;
  const lines: string[] = [];
  let current = "";
  for (const ch of result) {
    if (ch === "{") { current += " {"; lines.push("  ".repeat(indent) + current.trim()); current = ""; indent++; }
    else if (ch === "}") { if (current.trim()) lines.push("  ".repeat(indent) + current.trim()); current = ""; indent = Math.max(0, indent - 1); lines.push("  ".repeat(indent) + "}"); }
    else if (ch === ";") { current += ";"; lines.push("  ".repeat(indent) + current.trim()); current = ""; }
    else current += ch;
  }
  if (current.trim()) lines.push("  ".repeat(indent) + current.trim());
  return lines.join("\n");
}

export function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/^\- (.*$)/gm, "<li>$1</li>")
    .replace(/^\* (.*$)/gm, "<li>$1</li>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^(?!<[hlu])(.*\S.*)$/gm, "<p>$1</p>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n{2,}/g, "\n");
}
