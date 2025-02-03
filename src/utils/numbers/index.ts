export function calcDiscount(oldPrice: number, newPrice: number): number {
  return Math.floor(100 - (newPrice / oldPrice) * 100);
}

export function sum(a: number, b: number): number {
  return a + b;
}
