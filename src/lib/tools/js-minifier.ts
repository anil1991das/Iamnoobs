export function minifyJs(code: string): string {
  // Remove single-line comments (but not URLs with //)
  let result = code.replace(/(?<![:"'])\/\/.*$/gm, "");
  // Remove multi-line comments
  result = result.replace(/\/\*[\s\S]*?\*\//g, "");
  // Collapse whitespace
  result = result.replace(/\s+/g, " ");
  // Remove spaces around operators/punctuation
  result = result.replace(/\s*([{}();,=+\-*/<>!&|?:])\s*/g, "$1");
  // Restore needed spaces (after keywords)
  result = result.replace(/\b(var|let|const|return|typeof|instanceof|new|delete|throw|case|in|of)\b/g, " $1 ");
  result = result.replace(/\b(function|class|extends|import|export|from|async|await|yield)\b/g, " $1 ");
  result = result.replace(/\b(if|else|for|while|do|switch|try|catch|finally|with)\b/g, " $1 ");
  // Clean up extra spaces
  result = result.replace(/  +/g, " ").trim();
  return result;
}
