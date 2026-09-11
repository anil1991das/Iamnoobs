export function generateBoxShadow(config: {
  hOffset: number; vOffset: number; blur: number; spread: number;
  color: string; opacity: number; inset: boolean;
}): string {
  const { hOffset, vOffset, blur, spread, color, opacity, inset } = config;
  const rgba = hexToRgba(color, opacity);
  return `${inset ? "inset " : ""}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${rgba}`;
}

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function generateColorPalette(hex: string): { name: string; colors: string[] }[] {
  const hsl = hexToHsl(hex);
  return [
    { name: "Complementary", colors: [hex, hslToHex((hsl[0] + 180) % 360, hsl[1], hsl[2])] },
    { name: "Analogous", colors: [hslToHex((hsl[0] - 30 + 360) % 360, hsl[1], hsl[2]), hex, hslToHex((hsl[0] + 30) % 360, hsl[1], hsl[2])] },
    { name: "Triadic", colors: [hex, hslToHex((hsl[0] + 120) % 360, hsl[1], hsl[2]), hslToHex((hsl[0] + 240) % 360, hsl[1], hsl[2])] },
    { name: "Split-Complementary", colors: [hex, hslToHex((hsl[0] + 150) % 360, hsl[1], hsl[2]), hslToHex((hsl[0] + 210) % 360, hsl[1], hsl[2])] },
    { name: "Shades", colors: Array.from({ length: 5 }, (_, i) => hslToHex(hsl[0], hsl[1], Math.max(0, hsl[2] - 15 * (2 - i)))) },
    { name: "Tints", colors: Array.from({ length: 5 }, (_, i) => hslToHex(hsl[0], hsl[1], Math.min(100, hsl[2] + 15 * i))) },
  ];
}

function hexToHsl(hex: string): [number, number, number] {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  const s1 = s / 100, l1 = l / 100;
  const a = s1 * Math.min(l1, 1 - l1);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l1 - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function calculateSubnet(ip: string, cidr: number) {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) throw new Error("Invalid IP");
  if (cidr < 0 || cidr > 32) throw new Error("CIDR must be 0-32");

  const ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  const mask = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
  const network = (ipNum & mask) >>> 0;
  const broadcast = (network | ~mask) >>> 0;
  const first = cidr >= 31 ? network : (network + 1) >>> 0;
  const last = cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;
  const hosts = cidr >= 31 ? (cidr === 32 ? 1 : 2) : Math.pow(2, 32 - cidr) - 2;

  const toIp = (n: number) => `${(n >>> 24) & 255}.${(n >>> 16) & 255}.${(n >>> 8) & 255}.${n & 255}`;
  return {
    networkAddress: toIp(network),
    broadcastAddress: toIp(broadcast),
    subnetMask: toIp(mask),
    firstHost: toIp(first),
    lastHost: toIp(last),
    totalHosts: hosts,
    cidr,
    wildcardMask: toIp((~mask) >>> 0),
  };
}

export const gitignoreTemplates: Record<string, string[]> = {
  "Node.js": ["node_modules/", "dist/", ".env", ".env.local", "npm-debug.log*", "yarn-debug.log*", "yarn-error.log*", ".next/", "out/", "build/", "coverage/"],
  Python: ["__pycache__/", "*.py[cod]", "*$py.class", "*.so", ".Python", "env/", "venv/", ".venv/", "*.egg-info/", "dist/", "build/", ".tox/", ".pytest_cache/"],
  Java: ["*.class", "*.jar", "*.war", "*.ear", "target/", ".gradle/", "build/", ".idea/", "*.iml", "out/"],
  Go: ["bin/", "*.exe", "*.test", "*.out", "vendor/", ".env"],
  Rust: ["target/", "Cargo.lock", "**/*.rs.bk"],
  "C/C++": ["*.o", "*.obj", "*.exe", "*.out", "*.so", "*.dll", "*.a", "*.lib", "build/", "cmake-build*/"],
  ".NET": ["bin/", "obj/", "*.suo", "*.user", ".vs/", "*.csproj.user", "packages/"],
  macOS: [".DS_Store", ".AppleDouble", ".LSOverride", "Icon\r", "._*", ".Spotlight-V100", ".Trashes"],
  Windows: ["Thumbs.db", "ehthumbs.db", "Desktop.ini", "$RECYCLE.BIN/", "*.lnk"],
  Linux: ["*~", ".fuse_hidden*", ".directory", ".Trash-*", ".nfs*"],
  IDEs: [".idea/", ".vscode/", "*.swp", "*.swo", "*~", ".project", ".classpath", ".settings/", "*.sublime-*"],
};

export const gitCommandTemplates = [
  { label: "Create & switch branch", command: "git checkout -b {branch}", vars: ["branch"] },
  { label: "Merge branch", command: "git merge {branch}", vars: ["branch"] },
  { label: "Rebase onto branch", command: "git rebase {branch}", vars: ["branch"] },
  { label: "Stash changes", command: "git stash", vars: [] },
  { label: "Pop stash", command: "git stash pop", vars: [] },
  { label: "Cherry-pick commit", command: "git cherry-pick {commit}", vars: ["commit"] },
  { label: "Reset to commit (soft)", command: "git reset --soft {commit}", vars: ["commit"] },
  { label: "Reset to commit (hard)", command: "git reset --hard {commit}", vars: ["commit"] },
  { label: "Amend last commit", command: "git commit --amend -m \"{message}\"", vars: ["message"] },
  { label: "Squash last N commits", command: "git rebase -i HEAD~{n}", vars: ["n"] },
  { label: "Delete local branch", command: "git branch -d {branch}", vars: ["branch"] },
  { label: "Delete remote branch", command: "git push origin --delete {branch}", vars: ["branch"] },
  { label: "Tag a release", command: "git tag -a v{version} -m \"{message}\"", vars: ["version", "message"] },
  { label: "Undo last commit (keep changes)", command: "git reset HEAD~1", vars: [] },
  { label: "View commit log (oneline)", command: "git log --oneline -n {count}", vars: ["count"] },
  { label: "Clone a repo", command: "git clone {url}", vars: ["url"] },
  { label: "Add remote", command: "git remote add {name} {url}", vars: ["name", "url"] },
  { label: "Fetch & prune", command: "git fetch --prune", vars: [] },
  { label: "Force push", command: "git push --force-with-lease", vars: [] },
  { label: "Diff staged changes", command: "git diff --staged", vars: [] },
];

export function validateJsonSchema(data: string, schema: string): { valid: boolean; errors: string[] } {
  try {
    const d = JSON.parse(data);
    const s = JSON.parse(schema);
    const errors: string[] = [];
    validateNode(d, s, "", errors);
    return { valid: errors.length === 0, errors };
  } catch (e) {
    return { valid: false, errors: [(e as Error).message] };
  }
}

function validateNode(data: unknown, schema: Record<string, unknown>, path: string, errors: string[]) {
  if (schema.type) {
    const t = schema.type as string;
    if (t === "object" && (typeof data !== "object" || data === null || Array.isArray(data)))
      errors.push(`${path || "root"}: expected object`);
    else if (t === "array" && !Array.isArray(data))
      errors.push(`${path || "root"}: expected array`);
    else if (t === "string" && typeof data !== "string")
      errors.push(`${path || "root"}: expected string`);
    else if (t === "number" && typeof data !== "number")
      errors.push(`${path || "root"}: expected number`);
    else if (t === "integer" && (typeof data !== "number" || !Number.isInteger(data)))
      errors.push(`${path || "root"}: expected integer`);
    else if (t === "boolean" && typeof data !== "boolean")
      errors.push(`${path || "root"}: expected boolean`);
  }
  if (schema.required && Array.isArray(schema.required) && typeof data === "object" && data !== null) {
    for (const key of schema.required as string[]) {
      if (!(key in (data as Record<string, unknown>))) errors.push(`${path || "root"}: missing required property "${key}"`);
    }
  }
  if (schema.properties && typeof data === "object" && data !== null && !Array.isArray(data)) {
    for (const [key, propSchema] of Object.entries(schema.properties as Record<string, Record<string, unknown>>)) {
      if (key in (data as Record<string, unknown>)) {
        validateNode((data as Record<string, unknown>)[key], propSchema, `${path}.${key}`, errors);
      }
    }
  }
  if (schema.items && Array.isArray(data)) {
    data.forEach((item, i) => validateNode(item, schema.items as Record<string, unknown>, `${path}[${i}]`, errors));
  }
  if (schema.minimum !== undefined && typeof data === "number" && data < (schema.minimum as number))
    errors.push(`${path || "root"}: value ${data} is less than minimum ${schema.minimum}`);
  if (schema.maximum !== undefined && typeof data === "number" && data > (schema.maximum as number))
    errors.push(`${path || "root"}: value ${data} is greater than maximum ${schema.maximum}`);
  if (schema.minLength !== undefined && typeof data === "string" && data.length < (schema.minLength as number))
    errors.push(`${path || "root"}: string length ${data.length} is less than minLength ${schema.minLength}`);
  if (schema.maxLength !== undefined && typeof data === "string" && data.length > (schema.maxLength as number))
    errors.push(`${path || "root"}: string length ${data.length} is greater than maxLength ${schema.maxLength}`);
  if (schema.enum && !((schema.enum as unknown[]).includes(data)))
    errors.push(`${path || "root"}: value must be one of ${JSON.stringify(schema.enum)}`);
}

export function calculateChmod(owner: boolean[], group: boolean[], others: boolean[]): { numeric: string; symbolic: string } {
  const toNum = (perms: boolean[]) => (perms[0] ? 4 : 0) + (perms[1] ? 2 : 0) + (perms[2] ? 1 : 0);
  const toSym = (perms: boolean[]) => (perms[0] ? "r" : "-") + (perms[1] ? "w" : "-") + (perms[2] ? "x" : "-");
  return {
    numeric: `${toNum(owner)}${toNum(group)}${toNum(others)}`,
    symbolic: `-${toSym(owner)}${toSym(group)}${toSym(others)}`,
  };
}

export function calculateBmi(weight: number, heightCm: number): { bmi: number; category: string; color: string } {
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let category: string, color: string;
  if (bmi < 18.5) { category = "Underweight"; color = "text-blue-500"; }
  else if (bmi < 25) { category = "Normal weight"; color = "text-green-500"; }
  else if (bmi < 30) { category = "Overweight"; color = "text-yellow-500"; }
  else { category = "Obese"; color = "text-red-500"; }
  return { bmi: Math.round(bmi * 10) / 10, category, color };
}

export function calculateCompoundInterest(principal: number, rate: number, years: number, compoundsPerYear: number = 12) {
  const r = rate / 100;
  const rows: { year: number; balance: number; interest: number }[] = [];
  for (let y = 1; y <= years; y++) {
    const balance = principal * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * y);
    rows.push({ year: y, balance: Math.round(balance * 100) / 100, interest: Math.round((balance - principal) * 100) / 100 });
  }
  const total = rows[rows.length - 1]?.balance || principal;
  return { total: Math.round(total * 100) / 100, totalInterest: Math.round((total - principal) * 100) / 100, rows };
}

export function calculateReadability(text: string) {
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length || 1;
  const words = text.split(/\s+/).filter((w) => w.length > 0);
  const wordCount = words.length || 1;
  const syllableCount = words.reduce((sum, w) => sum + countSyllables(w), 0);
  const fleschReading = 206.835 - 1.015 * (wordCount / sentences) - 84.6 * (syllableCount / wordCount);
  const fleschKincaid = 0.39 * (wordCount / sentences) + 11.8 * (syllableCount / wordCount) - 15.59;
  let level: string;
  if (fleschReading >= 90) level = "Very Easy (5th grade)";
  else if (fleschReading >= 80) level = "Easy (6th grade)";
  else if (fleschReading >= 70) level = "Fairly Easy (7th grade)";
  else if (fleschReading >= 60) level = "Standard (8th-9th grade)";
  else if (fleschReading >= 50) level = "Fairly Difficult (10th-12th grade)";
  else if (fleschReading >= 30) level = "Difficult (College)";
  else level = "Very Difficult (Graduate)";
  return {
    fleschReading: Math.round(fleschReading * 10) / 10,
    fleschKincaid: Math.round(fleschKincaid * 10) / 10,
    sentences, wordCount, syllableCount, level,
    avgWordsPerSentence: Math.round((wordCount / sentences) * 10) / 10,
    avgSyllablesPerWord: Math.round((syllableCount / wordCount) * 10) / 10,
  };
}

function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const m = word.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}

export const socialMediaSizes: Record<string, { label: string; width: number; height: number }[]> = {
  Instagram: [
    { label: "Post (Square)", width: 1080, height: 1080 },
    { label: "Post (Portrait)", width: 1080, height: 1350 },
    { label: "Story/Reel", width: 1080, height: 1920 },
    { label: "Profile Picture", width: 320, height: 320 },
  ],
  "Twitter / X": [
    { label: "Post Image", width: 1200, height: 675 },
    { label: "Header", width: 1500, height: 500 },
    { label: "Profile Picture", width: 400, height: 400 },
  ],
  Facebook: [
    { label: "Post Image", width: 1200, height: 630 },
    { label: "Cover Photo", width: 820, height: 312 },
    { label: "Profile Picture", width: 170, height: 170 },
  ],
  LinkedIn: [
    { label: "Post Image", width: 1200, height: 627 },
    { label: "Banner", width: 1584, height: 396 },
    { label: "Profile Picture", width: 400, height: 400 },
  ],
  YouTube: [
    { label: "Thumbnail", width: 1280, height: 720 },
    { label: "Channel Art", width: 2560, height: 1440 },
    { label: "Profile Picture", width: 800, height: 800 },
  ],
};

export function caesarCipher(text: string, shift: number, decrypt: boolean = false): string {
  const s = decrypt ? (26 - (shift % 26)) : (shift % 26);
  return text.replace(/[a-zA-Z]/g, (c) => {
    const base = c >= "a" ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + s) % 26) + base);
  });
}
