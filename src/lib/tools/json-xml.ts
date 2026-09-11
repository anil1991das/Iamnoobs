export function jsonToXml(json: string): string {
  const obj = JSON.parse(json);
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + toXml(obj, "root");
}

function toXml(value: unknown, tagName: string): string {
  if (value === null || value === undefined) {
    return `<${tagName}/>`;
  }
  if (Array.isArray(value)) {
    return value.map((item) => toXml(item, "item")).join("\n");
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    const inner = entries.map(([k, v]) => toXml(v, sanitizeTag(k))).join("\n");
    return `<${tagName}>\n${indent(inner)}\n</${tagName}>`;
  }
  return `<${tagName}>${escapeXml(String(value))}</${tagName}>`;
}

function sanitizeTag(name: string): string {
  return name.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/^(\d)/, "_$1");
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function indent(s: string): string {
  return s.split("\n").map((l) => "  " + l).join("\n");
}

export function xmlToJson(xml: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const err = doc.querySelector("parsererror");
  if (err) throw new Error("Invalid XML: " + err.textContent?.slice(0, 200));
  return JSON.stringify(xmlNodeToObj(doc.documentElement), null, 2);
}

function xmlNodeToObj(node: Element): unknown {
  const obj: Record<string, unknown> = {};
  if (node.children.length === 0) {
    return node.textContent || "";
  }
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const key = child.tagName;
    const val = xmlNodeToObj(child);
    if (obj[key] !== undefined) {
      if (!Array.isArray(obj[key])) obj[key] = [obj[key]];
      (obj[key] as unknown[]).push(val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
