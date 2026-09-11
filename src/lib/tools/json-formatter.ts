export function formatJSON(input: string, spaces = 2): string {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed, null, spaces);
}

export function validateJSON(input: string): { valid: boolean; error?: string } {
  try {
    JSON.parse(input);
    return { valid: true };
  } catch (e) {
    return { valid: false, error: (e as Error).message };
  }
}

export function minifyJSON(input: string): string {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed);
}
