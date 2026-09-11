export function calculatePercentage(value: number, percentage: number): number {
  return (value * percentage) / 100;
}

export function whatPercent(part: number, total: number): number {
  if (total === 0) throw new Error("Total cannot be zero");
  return (part / total) * 100;
}

export function percentChange(oldVal: number, newVal: number): number {
  if (oldVal === 0) throw new Error("Original value cannot be zero");
  return ((newVal - oldVal) / Math.abs(oldVal)) * 100;
}

export function addPercent(value: number, percentage: number): number {
  return value + (value * percentage) / 100;
}

export function subtractPercent(value: number, percentage: number): number {
  return value - (value * percentage) / 100;
}
