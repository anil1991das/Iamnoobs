export const timezones = [
  "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "America/Anchorage", "Pacific/Honolulu", "America/Toronto", "America/Vancouver",
  "America/Mexico_City", "America/Sao_Paulo", "America/Argentina/Buenos_Aires",
  "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Rome", "Europe/Madrid",
  "Europe/Amsterdam", "Europe/Moscow", "Europe/Istanbul",
  "Asia/Dubai", "Asia/Kolkata", "Asia/Bangkok", "Asia/Singapore", "Asia/Hong_Kong",
  "Asia/Shanghai", "Asia/Tokyo", "Asia/Seoul",
  "Australia/Sydney", "Australia/Melbourne", "Pacific/Auckland",
  "Africa/Cairo", "Africa/Lagos", "Africa/Johannesburg",
];

export function convertTimezone(date: string, time: string, fromTz: string, toTz: string): string {
  const dt = new Date(`${date}T${time}`);
  // Create date in source timezone
  const sourceStr = dt.toLocaleString("en-US", { timeZone: fromTz });
  const sourceDate = new Date(sourceStr);

  const utcStr = dt.toLocaleString("en-US", { timeZone: "UTC" });
  const utcDate = new Date(utcStr);

  const offset = sourceDate.getTime() - utcDate.getTime();
  const utcTime = dt.getTime() - offset;

  const result = new Date(utcTime);
  return result.toLocaleString("en-US", {
    timeZone: toTz,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: true,
  });
}

export function getCurrentTimeInZone(tz: string): string {
  return new Date().toLocaleString("en-US", {
    timeZone: tz,
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: true,
  });
}
