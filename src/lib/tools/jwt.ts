export interface JwtParts {
  header: string;
  payload: string;
  signature: string;
  isExpired: boolean;
  expiresAt?: string;
  issuedAt?: string;
}

export function decodeJwt(token: string): JwtParts {
  const parts = token.trim().split(".");
  if (parts.length !== 3) throw new Error("Invalid JWT format: expected 3 parts separated by dots");

  const header = JSON.stringify(JSON.parse(base64UrlDecode(parts[0])), null, 2);
  const payloadObj = JSON.parse(base64UrlDecode(parts[1]));
  const payload = JSON.stringify(payloadObj, null, 2);

  let isExpired = false;
  let expiresAt: string | undefined;
  let issuedAt: string | undefined;

  if (payloadObj.exp) {
    const expDate = new Date(payloadObj.exp * 1000);
    expiresAt = expDate.toISOString();
    isExpired = expDate < new Date();
  }
  if (payloadObj.iat) {
    issuedAt = new Date(payloadObj.iat * 1000).toISOString();
  }

  return { header, payload, signature: parts[2], isExpired, expiresAt, issuedAt };
}

export function encodeJwt(headerJson: string, payloadJson: string): string {
  const header = JSON.parse(headerJson);
  const payload = JSON.parse(payloadJson);
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  // Unsigned JWT (for preview purposes)
  return `${encodedHeader}.${encodedPayload}.`;
}

function base64UrlDecode(str: string): string {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4;
  const fixed = pad ? padded + "=".repeat(4 - pad) : padded;
  return decodeURIComponent(
    atob(fixed)
      .split("")
      .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );
}

function base64UrlEncode(str: string): string {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
