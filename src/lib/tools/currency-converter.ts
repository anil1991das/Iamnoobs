// Static exchange rates (USD base) - updated periodically
const RATES: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, AUD: 1.53,
  CAD: 1.36, CHF: 0.88, CNY: 7.24, INR: 83.1, MXN: 17.15,
  BRL: 4.97, KRW: 1320, SGD: 1.34, HKD: 7.82, SEK: 10.42,
  NOK: 10.55, DKK: 6.87, NZD: 1.63, ZAR: 18.6, THB: 35.2,
  TRY: 30.2, RUB: 91.5, PLN: 4.02, PHP: 55.8, IDR: 15500,
  MYR: 4.65, AED: 3.67, SAR: 3.75, TWD: 31.5, ARS: 350,
  EGP: 30.9, VND: 24300, CLP: 880, COP: 3950, PEN: 3.72,
  PKR: 280, BDT: 110, NGN: 780, KES: 155, GHS: 12.5,
};

export const currencies = Object.keys(RATES).sort();

export function convertCurrency(amount: number, from: string, to: string): number {
  const fromRate = RATES[from];
  const toRate = RATES[to];
  if (!fromRate || !toRate) throw new Error(`Unsupported currency: ${!fromRate ? from : to}`);
  return (amount / fromRate) * toRate;
}

export function getRate(from: string, to: string): number {
  return (RATES[to] || 0) / (RATES[from] || 1);
}
