export interface DiffResult {
  lines: DiffLine[];
  additions: number;
  deletions: number;
  unchanged: number;
}

export interface DiffLine {
  type: "add" | "remove" | "same";
  content: string;
  lineNumber: { old?: number; new?: number };
}

export function computeDiff(oldText: string, newText: string): DiffResult {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");

  const lcs = longestCommonSubsequence(oldLines, newLines);
  const lines: DiffLine[] = [];
  let oi = 0, ni = 0, li = 0;
  let additions = 0, deletions = 0, unchanged = 0;

  while (oi < oldLines.length || ni < newLines.length) {
    if (li < lcs.length && oi < oldLines.length && ni < newLines.length && oldLines[oi] === lcs[li] && newLines[ni] === lcs[li]) {
      lines.push({ type: "same", content: oldLines[oi], lineNumber: { old: oi + 1, new: ni + 1 } });
      unchanged++;
      oi++; ni++; li++;
    } else if (oi < oldLines.length && (li >= lcs.length || oldLines[oi] !== lcs[li])) {
      lines.push({ type: "remove", content: oldLines[oi], lineNumber: { old: oi + 1 } });
      deletions++;
      oi++;
    } else if (ni < newLines.length && (li >= lcs.length || newLines[ni] !== lcs[li])) {
      lines.push({ type: "add", content: newLines[ni], lineNumber: { new: ni + 1 } });
      additions++;
      ni++;
    }
  }

  return { lines, additions, deletions, unchanged };
}

function longestCommonSubsequence(a: string[], b: string[]): string[] {
  const m = a.length, n = b.length;
  // Use optimized approach for large inputs
  if (m > 5000 || n > 5000) {
    return simpleLCS(a, b);
  }
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const result: string[] = [];
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) { result.unshift(a[i - 1]); i--; j--; }
    else if (dp[i - 1][j] > dp[i][j - 1]) i--;
    else j--;
  }
  return result;
}

function simpleLCS(a: string[], b: string[]): string[] {
  const bSet = new Set(b);
  return a.filter((line) => bSet.has(line));
}
