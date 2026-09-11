export const commonRequestHeaders: Record<string, string> = {
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9",
  "Cache-Control": "no-cache",
  "Connection": "keep-alive",
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
};

export const commonResponseHeaders: Record<string, string> = {
  "Content-Type": "text/html; charset=UTF-8",
  "Content-Encoding": "gzip",
  "Cache-Control": "max-age=3600",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": "default-src 'self'",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

export const httpStatusCodes: Record<number, string> = {
  100: "Continue", 101: "Switching Protocols",
  200: "OK", 201: "Created", 204: "No Content",
  301: "Moved Permanently", 302: "Found", 304: "Not Modified", 307: "Temporary Redirect", 308: "Permanent Redirect",
  400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed",
  408: "Request Timeout", 409: "Conflict", 410: "Gone", 429: "Too Many Requests",
  500: "Internal Server Error", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout",
};

export function getStatusDescription(code: number): string {
  return httpStatusCodes[code] ?? "Unknown Status Code";
}
