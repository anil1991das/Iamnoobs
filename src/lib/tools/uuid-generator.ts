export function generateUUID(): string {
  return crypto.randomUUID();
}

export function generateMultipleUUIDs(count: number): string[] {
  return Array.from({ length: Math.min(count, 1000) }, () => generateUUID());
}

export function isValidUUID(input: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(input);
}
