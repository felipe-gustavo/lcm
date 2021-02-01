export default function getNextEntireMultipleResult(num: number, bigger: number = 1): number {
  const numFiltered = Math.floor(num);
  const biggerFiltered = Math.floor(bigger);

  if (numFiltered < 1) throw new Error('Parameter :num must be ℕ*');
  if (biggerFiltered < 1) throw new Error('Parameter :bigger must be ℕ*');

  const nextMultiple = Math.floor(biggerFiltered / numFiltered) + 1;
  return numFiltered * nextMultiple;
}