export default function isEntireMultiple(product: number, value: number): boolean {
  if (product < 1) throw new Error('Parameter :product must be ℕ*');

  if (product > value) return false;

  return Number.isInteger(value / product);
}