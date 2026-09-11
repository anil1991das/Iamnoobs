export interface KeywordResult {
  keyword: string;
  count: number;
  density: number;
}

export function analyzeKeywordDensity(text: string, minLength = 3): KeywordResult[] {
  const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  const totalWords = words.length;
  if (totalWords === 0) return [];

  const freq: Record<string, number> = {};
  for (const word of words) {
    if (word.length >= minLength) {
      freq[word] = (freq[word] || 0) + 1;
    }
  }

  return Object.entries(freq)
    .map(([keyword, count]) => ({
      keyword,
      count,
      density: Math.round((count / totalWords) * 10000) / 100,
    }))
    .sort((a, b) => b.count - a.count);
}

export function analyzePhrases(text: string, ngramSize: number): KeywordResult[] {
  const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  const totalPhrases = Math.max(0, words.length - ngramSize + 1);
  if (totalPhrases === 0) return [];

  const freq: Record<string, number> = {};
  for (let i = 0; i <= words.length - ngramSize; i++) {
    const phrase = words.slice(i, i + ngramSize).join(" ");
    freq[phrase] = (freq[phrase] || 0) + 1;
  }

  return Object.entries(freq)
    .filter(([, count]) => count > 1)
    .map(([keyword, count]) => ({
      keyword,
      count,
      density: Math.round((count / totalPhrases) * 10000) / 100,
    }))
    .sort((a, b) => b.count - a.count);
}
