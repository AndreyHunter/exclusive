export function calcDiscount(oldPrice: number, newPrice: number): number {
  if (newPrice > 0) {
    return Math.floor(100 - (newPrice / oldPrice) * 100);
  }
  return oldPrice;
}

export function sum(a: number, b: number): number {
  return a + b;
}
