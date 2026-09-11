const KEYWORDS = new Set([
  "SELECT","FROM","WHERE","AND","OR","NOT","IN","ON","AS","JOIN",
  "LEFT","RIGHT","INNER","OUTER","FULL","CROSS","NATURAL",
  "INSERT","INTO","VALUES","UPDATE","SET","DELETE",
  "CREATE","TABLE","ALTER","DROP","INDEX","VIEW","DATABASE",
  "GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","UNION","ALL",
  "DISTINCT","BETWEEN","LIKE","IS","NULL","TRUE","FALSE",
  "EXISTS","CASE","WHEN","THEN","ELSE","END","ASC","DESC",
  "COUNT","SUM","AVG","MIN","MAX","CAST","COALESCE",
]);

const NEWLINE_BEFORE = new Set(["SELECT","FROM","WHERE","JOIN","LEFT","RIGHT","INNER","OUTER","FULL","CROSS","NATURAL","GROUP","ORDER","HAVING","LIMIT","OFFSET","UNION","INSERT","UPDATE","DELETE","CREATE","ALTER","DROP","SET","VALUES","AND","OR","ON"]);

export function formatSql(sql: string): string {
  const tokens = sql.match(/'[^']*'|"[^"]*"|--.*$|\/\*[\s\S]*?\*\/|\w+|[^\s\w]/gm) || [];
  let result = "";
  let indent = 0;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const upper = token.toUpperCase();

    if (token === "(") {
      result += " (";
      indent++;
      continue;
    }
    if (token === ")") {
      indent = Math.max(0, indent - 1);
      result += "\n" + "  ".repeat(indent) + ")";
      continue;
    }

    if (NEWLINE_BEFORE.has(upper)) {
      if (upper === "AND" || upper === "OR" || upper === "ON") {
        result += "\n" + "  ".repeat(indent + 1) + upper;
      } else {
        result += "\n" + "  ".repeat(indent) + upper;
      }
    } else if (KEYWORDS.has(upper)) {
      result += " " + upper;
    } else {
      result += " " + token;
    }
  }

  return result.trim();
}
