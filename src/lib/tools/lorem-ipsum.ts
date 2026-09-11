const WORDS = [
  "lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit",
  "sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore",
  "magna","aliqua","enim","ad","minim","veniam","quis","nostrud",
  "exercitation","ullamco","laboris","nisi","aliquip","ex","ea","commodo",
  "consequat","duis","aute","irure","in","reprehenderit","voluptate",
  "velit","esse","cillum","fugiat","nulla","pariatur","excepteur","sint",
  "occaecat","cupidatat","non","proident","sunt","culpa","qui","officia",
  "deserunt","mollit","anim","id","est","laborum","ac","accumsan",
  "ante","arcu","at","auctor","augue","bibendum","blandit","commodo",
  "condimentum","congue","cras","curabitur","dapibus","diam","dictum",
  "dignissim","donec","dui","efficitur","egestas","eget","eleifend",
  "elementum","eros","eu","euismod","facilisi","fames","faucibus",
  "felis","fermentum","finibus","fringilla","fusce","gravida","habitant",
  "hendrerit","iaculis","integer","interdum","justo","lacinia","lacus",
];

export function generateLoremIpsum(paragraphs: number, wordsPerParagraph = 60): string {
  const result: string[] = [];
  for (let p = 0; p < paragraphs; p++) {
    const sentences: string[] = [];
    let remaining = wordsPerParagraph;
    while (remaining > 0) {
      const sentLen = Math.min(remaining, 8 + Math.floor(Math.random() * 10));
      const words: string[] = [];
      for (let w = 0; w < sentLen; w++) {
        words.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
      }
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      sentences.push(words.join(" ") + ".");
      remaining -= sentLen;
    }
    result.push(sentences.join(" "));
  }
  return result.join("\n\n");
}

export function generateWords(count: number): string {
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }
  return result.join(" ");
}

export function generateSentences(count: number): string {
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const len = 8 + Math.floor(Math.random() * 10);
    const words: string[] = [];
    for (let w = 0; w < len; w++) {
      words.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
    }
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    result.push(words.join(" ") + ".");
  }
  return result.join(" ");
}
