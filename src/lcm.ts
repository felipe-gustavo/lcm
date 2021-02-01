import getNextEntireMultipleResult from './getNextEntireMultipleResult';
import isEntireMultiple from './isEntireMultiple';

export default function lcm(...numbers: number[]): number {
  if (numbers.length < 1) {
    throw new Error('Missing parameters');
  }

  numbers.forEach((num) => {
    if (num < 0) throw new Error('Parameters in numbers[] must be ℕ');
  });

  if (numbers.some((num) => num === 0)) return 0;

  const numbersGrowing: number[] = numbers.sort().reverse();

  let lcmNumber: number;
  let entireMultiple: number = 1;

  do {
    entireMultiple = getNextEntireMultipleResult(
      numbersGrowing[0], 
      entireMultiple
    );

    numbersGrowing.some((num, index) => {
      const isEntireMultipleFromNum = isEntireMultiple(
        num,
        entireMultiple
      );

      if (!isEntireMultipleFromNum) {
        return true;
      } else if (isEntireMultipleFromNum && index + 1 === numbersGrowing.length) {
        lcmNumber = entireMultiple;
      };

      return false;
    });

  } while (lcmNumber === undefined)

  return lcmNumber as number;
}