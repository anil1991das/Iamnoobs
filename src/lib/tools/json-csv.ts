export function jsonToCsv(jsonStr: string): string {
  const data = JSON.parse(jsonStr);
  if (!Array.isArray(data) || data.length === 0) throw new Error("Input must be a non-empty JSON array of objects");
  const headers = Array.from(new Set(data.flatMap((row: Record<string, unknown>) => Object.keys(row))));
  const escape = (val: unknown): string => {
    const s = val == null ? "" : String(val);
    return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = data.map((row: Record<string, unknown>) => headers.map((h) => escape(row[h])).join(","));
  return [headers.join(","), ...rows].join("\n");
}

export function csvToJson(csv: string): string {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) throw new Error("CSV must have at least a header row and one data row");
  const parseRow = (line: string): string[] => {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQuotes) {
        if (ch === '"' && line[i + 1] === '"') { current += '"'; i++; }
        else if (ch === '"') inQuotes = false;
        else current += ch;
      } else {
        if (ch === '"') inQuotes = true;
        else if (ch === ",") { result.push(current); current = ""; }
        else current += ch;
      }
    }
    result.push(current);
    return result;
  };
  const headers = parseRow(lines[0]);
  const data = lines.slice(1).filter((l) => l.trim()).map((line) => {
    const values = parseRow(line);
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => { obj[h] = values[i] ?? ""; });
    return obj;
  });
  return JSON.stringify(data, null, 2);
}
