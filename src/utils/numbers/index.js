export function calcDiscount(oldPrice, newPrice) {
  return Math.floor(100 - (newPrice / oldPrice) * 100);
}

export function sum(a, b) {
  return a + b;
}
