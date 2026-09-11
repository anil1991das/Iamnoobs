export interface ParsedUserAgent {
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  device: string;
  engine: string;
}

export function parseUserAgent(ua: string): ParsedUserAgent {
  const result: ParsedUserAgent = { browser: "Unknown", browserVersion: "", os: "Unknown", osVersion: "", device: "Desktop", engine: "Unknown" };

  // Browser
  if (/Edg\/(\d[\d.]*)/i.test(ua)) { result.browser = "Microsoft Edge"; result.browserVersion = RegExp.$1; }
  else if (/OPR\/(\d[\d.]*)/i.test(ua)) { result.browser = "Opera"; result.browserVersion = RegExp.$1; }
  else if (/Chrome\/(\d[\d.]*)/i.test(ua)) { result.browser = "Chrome"; result.browserVersion = RegExp.$1; }
  else if (/Firefox\/(\d[\d.]*)/i.test(ua)) { result.browser = "Firefox"; result.browserVersion = RegExp.$1; }
  else if (/Safari\/(\d[\d.]*)/i.test(ua) && /Version\/(\d[\d.]*)/i.test(ua)) { result.browser = "Safari"; result.browserVersion = RegExp.$1; }
  else if (/MSIE\s(\d[\d.]*)/i.test(ua) || /Trident.*rv:(\d[\d.]*)/i.test(ua)) { result.browser = "Internet Explorer"; result.browserVersion = RegExp.$1; }

  // OS
  if (/Windows NT 10/i.test(ua)) { result.os = "Windows"; result.osVersion = "10/11"; }
  else if (/Windows NT 6\.3/i.test(ua)) { result.os = "Windows"; result.osVersion = "8.1"; }
  else if (/Windows NT 6\.2/i.test(ua)) { result.os = "Windows"; result.osVersion = "8"; }
  else if (/Windows NT 6\.1/i.test(ua)) { result.os = "Windows"; result.osVersion = "7"; }
  else if (/Mac OS X ([\d_]+)/i.test(ua)) { result.os = "macOS"; result.osVersion = RegExp.$1.replace(/_/g, "."); }
  else if (/Android\s([\d.]+)/i.test(ua)) { result.os = "Android"; result.osVersion = RegExp.$1; }
  else if (/iPhone OS ([\d_]+)/i.test(ua) || /iPad.*OS ([\d_]+)/i.test(ua)) { result.os = "iOS"; result.osVersion = RegExp.$1.replace(/_/g, "."); }
  else if (/Linux/i.test(ua)) { result.os = "Linux"; }
  else if (/CrOS/i.test(ua)) { result.os = "Chrome OS"; }

  // Device
  if (/Mobile|Android.*Mobile|iPhone/i.test(ua)) result.device = "Mobile";
  else if (/Tablet|iPad/i.test(ua)) result.device = "Tablet";

  // Engine
  if (/Gecko\//i.test(ua) && !/like Gecko/i.test(ua)) result.engine = "Gecko";
  else if (/AppleWebKit/i.test(ua)) result.engine = "WebKit";
  else if (/Trident/i.test(ua)) result.engine = "Trident";

  return result;
}
