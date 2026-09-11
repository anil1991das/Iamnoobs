export function removeDuplicateLines(text: string, caseSensitive = true): string {
  const lines = text.split("\n");
  const seen = new Set<string>();
  return lines.filter((line) => {
    const key = caseSensitive ? line : line.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).join("\n");
}

export function sortLines(text: string, order: "asc" | "desc" | "numeric-asc" | "numeric-desc" = "asc"): string {
  const lines = text.split("\n");
  const sorted = [...lines].sort((a, b) => {
    if (order === "numeric-asc" || order === "numeric-desc") {
      const na = parseFloat(a) || 0;
      const nb = parseFloat(b) || 0;
      return order === "numeric-asc" ? na - nb : nb - na;
    }
    return order === "asc" ? a.localeCompare(b) : b.localeCompare(a);
  });
  return sorted.join("\n");
}

export function reverseText(text: string, mode: "characters" | "words" | "lines" = "characters"): string {
  if (mode === "characters") return [...text].reverse().join("");
  if (mode === "words") return text.split(/\s+/).reverse().join(" ");
  return text.split("\n").reverse().join("\n");
}

export function generateRandomString(length: number, charset: string): string {
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, (v) => charset[v % charset.length]).join("");
}

export function shuffleText(text: string, mode: "characters" | "words" | "lines" = "characters"): string {
  const shuffle = <T>(arr: T[]): T[] => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  if (mode === "characters") return shuffle([...text]).join("");
  if (mode === "words") return shuffle(text.split(/\s+/)).join(" ");
  return shuffle(text.split("\n")).join("\n");
}

export function removeExtraSpaces(text: string): string {
  return text.split("\n").map((line) => line.replace(/\s+/g, " ").trim()).join("\n");
}

export interface CharCount {
  total: number;
  withoutSpaces: number;
  words: number;
  lines: number;
  letters: number;
  digits: number;
  spaces: number;
  special: number;
}

export function countCharacters(text: string): CharCount {
  return {
    total: text.length,
    withoutSpaces: text.replace(/\s/g, "").length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text ? text.split("\n").length : 0,
    letters: (text.match(/[a-zA-Z]/g) || []).length,
    digits: (text.match(/\d/g) || []).length,
    spaces: (text.match(/\s/g) || []).length,
    special: (text.match(/[^a-zA-Z0-9\s]/g) || []).length,
  };
}

export function textToBinary(text: string): string {
  return [...text].map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
}

export function binaryToText(binary: string): string {
  return binary.trim().split(/\s+/).map((b) => String.fromCharCode(parseInt(b, 2))).join("");
}

const MORSE_MAP: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..",
  J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
  "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
  ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
  '"': ".-..-.", "$": "...-..-", "@": ".--.-.",
};
const REVERSE_MORSE = Object.fromEntries(Object.entries(MORSE_MAP).map(([k, v]) => [v, k]));

export function textToMorse(text: string): string {
  return text.toUpperCase().split("").map((ch) => {
    if (ch === " ") return "/";
    return MORSE_MAP[ch] || "";
  }).filter(Boolean).join(" ");
}

export function morseToText(morse: string): string {
  return morse.split(" / ").map((word) =>
    word.split(" ").map((code) => REVERSE_MORSE[code] || "").join("")
  ).join(" ");
}
