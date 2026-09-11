export type HmacAlgorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

export async function generateHmac(message: string, secret: string, algorithm: HmacAlgorithm): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const msgData = encoder.encode(message);

  const key = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: algorithm },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", key, msgData);
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const hmacAlgorithms: HmacAlgorithm[] = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
