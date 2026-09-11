export interface CurlParsed {
  method: string;
  url: string;
  headers: Record<string, string>;
  data: string;
}

export function parseCurl(cmd: string): CurlParsed {
  const result: CurlParsed = { method: "GET", url: "", headers: {}, data: "" };
  const cleaned = cmd.replace(/\\\n/g, " ").replace(/\s+/g, " ").trim();

  const urlMatch = cleaned.match(/curl\s+(?:'([^']+)'|"([^"]+)"|(\S+))/i);
  if (!urlMatch) {
    const urlAlt = cleaned.match(/(?:^|\s)(?:'(https?:\/\/[^']+)'|"(https?:\/\/[^"]+)"|(https?:\/\/\S+))/);
    if (urlAlt) result.url = urlAlt[1] || urlAlt[2] || urlAlt[3];
  } else {
    const u = urlMatch[1] || urlMatch[2] || urlMatch[3];
    if (u.startsWith("http")) result.url = u;
  }

  const methodMatch = cleaned.match(/-X\s+(\w+)/i);
  if (methodMatch) result.method = methodMatch[1].toUpperCase();

  const headerRegex = /-H\s+(?:'([^']*)'|"([^"]*)")/gi;
  let hm;
  while ((hm = headerRegex.exec(cleaned)) !== null) {
    const h = hm[1] || hm[2];
    const idx = h.indexOf(":");
    if (idx > 0) result.headers[h.slice(0, idx).trim()] = h.slice(idx + 1).trim();
  }

  const dataMatch = cleaned.match(/(?:-d|--data|--data-raw)\s+(?:'([^']*)'|"([^"]*)")/i);
  if (dataMatch) { result.data = dataMatch[1] || dataMatch[2] || ""; if (!methodMatch) result.method = "POST"; }

  if (!result.url) {
    const tokens = cleaned.split(/\s+/);
    for (const t of tokens) {
      const clean = t.replace(/^['"]|['"]$/g, "");
      if (clean.startsWith("http")) { result.url = clean; break; }
    }
  }

  return result;
}

export function toJavaScript(p: CurlParsed): string {
  const opts: string[] = [`  method: "${p.method}"`, ];
  if (Object.keys(p.headers).length) opts.push(`  headers: ${JSON.stringify(p.headers, null, 4).replace(/\n/g, "\n  ")}`);
  if (p.data) opts.push(`  body: ${JSON.stringify(p.data)}`);
  return `fetch("${p.url}", {\n${opts.join(",\n")}\n})\n  .then(res => res.json())\n  .then(data => console.log(data));`;
}

export function toPython(p: CurlParsed): string {
  let code = `import requests\n\n`;
  const args: string[] = [];
  if (Object.keys(p.headers).length) args.push(`headers=${JSON.stringify(p.headers).replace(/"/g, "'")}`);
  if (p.data) args.push(`data='${p.data}'`);
  code += `response = requests.${p.method.toLowerCase()}('${p.url}'${args.length ? ", " + args.join(", ") : ""})\nprint(response.json())`;
  return code;
}

export function toPhp(p: CurlParsed): string {
  let code = `<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, '${p.url}');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n`;
  if (p.method !== "GET") code += `curl_setopt($ch, CURLOPT_CUSTOMREQUEST, '${p.method}');\n`;
  if (Object.keys(p.headers).length) {
    const hArr = Object.entries(p.headers).map(([k, v]) => `'${k}: ${v}'`);
    code += `curl_setopt($ch, CURLOPT_HTTPHEADER, [${hArr.join(", ")}]);\n`;
  }
  if (p.data) code += `curl_setopt($ch, CURLOPT_POSTFIELDS, '${p.data}');\n`;
  code += `$response = curl_exec($ch);\ncurl_close($ch);\necho $response;\n?>`;
  return code;
}
