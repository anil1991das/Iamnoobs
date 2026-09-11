export interface ParsedUrl {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  origin: string;
  searchParams: [string, string][];
}

export function parseUrl(urlStr: string): ParsedUrl {
  const url = new URL(urlStr);
  const searchParams: [string, string][] = [];
  url.searchParams.forEach((value, key) => searchParams.push([key, value]));
  return {
    protocol: url.protocol,
    hostname: url.hostname,
    port: url.port,
    pathname: url.pathname,
    search: url.search,
    hash: url.hash,
    origin: url.origin,
    searchParams,
  };
}
