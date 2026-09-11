export interface RegexResult {
  matches: RegexMatch[];
  totalMatches: number;
  executionTime: number;
}

export interface RegexMatch {
  match: string;
  index: number;
  groups: string[];
}

export function testRegex(pattern: string, flags: string, testString: string): RegexResult {
  const start = performance.now();
  const regex = new RegExp(pattern, flags);
  const matches: RegexMatch[] = [];

  if (flags.includes("g")) {
    let m: RegExpExecArray | null;
    let safety = 0;
    while ((m = regex.exec(testString)) !== null && safety < 10000) {
      matches.push({
        match: m[0],
        index: m.index,
        groups: m.slice(1),
      });
      if (m[0].length === 0) regex.lastIndex++;
      safety++;
    }
  } else {
    const m = regex.exec(testString);
    if (m) {
      matches.push({
        match: m[0],
        index: m.index,
        groups: m.slice(1),
      });
    }
  }

  return {
    matches,
    totalMatches: matches.length,
    executionTime: performance.now() - start,
  };
}

export function isValidRegex(pattern: string, flags: string): { valid: boolean; error?: string } {
  try {
    new RegExp(pattern, flags);
    return { valid: true };
  } catch (e) {
    return { valid: false, error: (e as Error).message };
  }
}
