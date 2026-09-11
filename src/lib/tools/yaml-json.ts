export function yamlToJson(yaml: string): string {
  const result = parseYaml(yaml.trim());
  return JSON.stringify(result, null, 2);
}

export function jsonToYaml(jsonStr: string): string {
  const data = JSON.parse(jsonStr);
  return toYaml(data, 0);
}

function parseYaml(text: string): unknown {
  const lines = text.split("\n");
  return parseLines(lines, 0).value;
}

function parseLines(lines: string[], baseIndent: number): { value: unknown; consumed: number } {
  const result: Record<string, unknown> = {};
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "" || line.trim().startsWith("#")) { i++; continue; }
    const indent = line.search(/\S/);
    if (indent < baseIndent) break;
    if (line.trim().startsWith("- ")) {
      const arr: unknown[] = [];
      while (i < lines.length) {
        const l = lines[i];
        if (l.trim() === "" || l.trim().startsWith("#")) { i++; continue; }
        const ind = l.search(/\S/);
        if (ind < baseIndent) break;
        if (!l.trim().startsWith("- ")) break;
        arr.push(parseValue(l.trim().slice(2).trim()));
        i++;
      }
      return { value: arr, consumed: i };
    }
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) { i++; continue; }
    const key = line.slice(indent, colonIdx).trim();
    const afterColon = line.slice(colonIdx + 1).trim();
    if (afterColon) {
      result[key] = parseValue(afterColon);
      i++;
    } else {
      const nextIndent = i + 1 < lines.length ? lines[i + 1].search(/\S/) : indent;
      if (nextIndent > indent) {
        const sub = parseLines(lines.slice(i + 1), nextIndent);
        result[key] = sub.value;
        i += 1 + sub.consumed;
      } else {
        result[key] = null;
        i++;
      }
    }
  }
  return { value: result, consumed: i };
}

function parseValue(s: string): unknown {
  if (s === "true") return true;
  if (s === "false") return false;
  if (s === "null" || s === "~") return null;
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) return s.slice(1, -1);
  return s;
}

function toYaml(data: unknown, indent: number): string {
  const pad = "  ".repeat(indent);
  if (data === null || data === undefined) return pad + "null\n";
  if (typeof data === "boolean" || typeof data === "number") return pad + String(data) + "\n";
  if (typeof data === "string") return pad + (data.includes(":") || data.includes("#") ? `"${data}"` : data) + "\n";
  if (Array.isArray(data)) {
    if (data.length === 0) return pad + "[]\n";
    return data.map((item) => {
      if (typeof item === "object" && item !== null) {
        const inner = toYaml(item, indent + 1).trimStart();
        return pad + "- " + inner;
      }
      return pad + "- " + String(item) + "\n";
    }).join("");
  }
  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    if (entries.length === 0) return pad + "{}\n";
    return entries.map(([key, val]) => {
      if (typeof val === "object" && val !== null) {
        return pad + key + ":\n" + toYaml(val, indent + 1);
      }
      return pad + key + ": " + (val === null ? "null" : typeof val === "string" && (val.includes(":") || val.includes("#")) ? `"${val}"` : String(val)) + "\n";
    }).join("");
  }
  return pad + String(data) + "\n";
}
