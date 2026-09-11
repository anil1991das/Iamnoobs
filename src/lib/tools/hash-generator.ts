export type HashAlgorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

export async function generateHash(text: string, algorithm: HashAlgorithm): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  return bufferToHex(hashBuffer);
}

export async function generateFileHash(file: ArrayBuffer, algorithm: HashAlgorithm): Promise<string> {
  const hashBuffer = await crypto.subtle.digest(algorithm, file);
  return bufferToHex(hashBuffer);
}

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const hashAlgorithms: HashAlgorithm[] = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
