export function rot13(text: string): string {
  return text.replace(/[a-zA-Z]/g, (ch) => {
    const base = ch <= "Z" ? 65 : 97;
    return String.fromCharCode(((ch.charCodeAt(0) - base + 13) % 26) + base);
  });
}

export interface PasswordAnalysis {
  score: number;
  label: string;
  feedback: string[];
  entropy: number;
}

export function checkPasswordStrength(password: string): PasswordAnalysis {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) score++; else feedback.push("Use at least 8 characters");
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (/[a-z]/.test(password)) score++; else feedback.push("Add lowercase letters");
  if (/[A-Z]/.test(password)) score++; else feedback.push("Add uppercase letters");
  if (/\d/.test(password)) score++; else feedback.push("Add numbers");
  if (/[^a-zA-Z0-9]/.test(password)) score++; else feedback.push("Add special characters");
  if (!/(.)\1{2,}/.test(password)) score++; else feedback.push("Avoid repeating characters");
  if (!/^(123|abc|qwerty|password|admin)/i.test(password)) score++; else feedback.push("Avoid common patterns");

  let charsetSize = 0;
  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/\d/.test(password)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 33;
  const entropy = Math.round(password.length * Math.log2(charsetSize || 1));

  const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"];
  const normalizedScore = Math.min(5, Math.floor(score / 1.8));

  return { score: normalizedScore, label: labels[normalizedScore], feedback, entropy };
}

export function validateCreditCard(number: string): { valid: boolean; type: string } {
  const cleaned = number.replace(/[\s-]/g, "");
  if (!/^\d{13,19}$/.test(cleaned)) return { valid: false, type: "Unknown" };

  // Luhn algorithm
  let sum = 0;
  let double = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (double) { digit *= 2; if (digit > 9) digit -= 9; }
    sum += digit;
    double = !double;
  }
  const valid = sum % 10 === 0;

  let type = "Unknown";
  if (/^4/.test(cleaned)) type = "Visa";
  else if (/^5[1-5]/.test(cleaned) || /^2[2-7]/.test(cleaned)) type = "Mastercard";
  else if (/^3[47]/.test(cleaned)) type = "American Express";
  else if (/^6(?:011|5)/.test(cleaned)) type = "Discover";
  else if (/^3(?:0[0-5]|[68])/.test(cleaned)) type = "Diners Club";
  else if (/^35/.test(cleaned)) type = "JCB";
  else if (/^6(?:304|759|7)/.test(cleaned)) type = "Maestro";
  else if (/^62/.test(cleaned)) type = "UnionPay";

  return { valid, type };
}

export function generateSecureToken(length: number, format: "hex" | "base64" | "alphanumeric" = "hex"): string {
  const bytes = new Uint8Array(Math.ceil(length * 0.75));
  crypto.getRandomValues(bytes);
  if (format === "hex") return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("").slice(0, length);
  if (format === "base64") return btoa(String.fromCharCode(...bytes)).slice(0, length);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, (v) => chars[v % chars.length]).join("");
}

export async function generateChecksum(data: ArrayBuffer, algorithm: string): Promise<string> {
  const hash = await crypto.subtle.digest(algorithm, data);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("");
}
