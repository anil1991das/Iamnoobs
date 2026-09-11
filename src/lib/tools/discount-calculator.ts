export interface DiscountResult {
  originalPrice: number;
  discountPercent: number;
  discountAmount: number;
  finalPrice: number;
  savedPercent: number;
}

export function calculateDiscount(price: number, discount: number): DiscountResult {
  if (price < 0) throw new Error("Price cannot be negative");
  if (discount < 0 || discount > 100) throw new Error("Discount must be 0-100%");
  const discountAmount = (price * discount) / 100;
  return {
    originalPrice: price,
    discountPercent: discount,
    discountAmount: Math.round(discountAmount * 100) / 100,
    finalPrice: Math.round((price - discountAmount) * 100) / 100,
    savedPercent: discount,
  };
}

export function findDiscountPercent(original: number, sale: number): number {
  if (original <= 0) throw new Error("Original price must be positive");
  return Math.round(((original - sale) / original) * 10000) / 100;
}

export function findOriginalPrice(salePrice: number, discountPercent: number): number {
  if (discountPercent >= 100) throw new Error("Discount cannot be 100% or more");
  return Math.round((salePrice / (1 - discountPercent / 100)) * 100) / 100;
}
