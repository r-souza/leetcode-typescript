export function romanToInt(s: string): number {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const convertedNumbers: number[] = s
    .toUpperCase()
    .split('')
    .map((char: string): number => romanSymbols[char]);

  const sortedNumbers: number[] = [];

  convertedNumbers.forEach((value: number, index: number): void => {
    const nextValue: number = convertedNumbers[index + 1];
    const previousValue: number = convertedNumbers[index - 1];

    if (value > previousValue) return;

    if (value < nextValue) {
      const difference: number = nextValue - value;
      sortedNumbers.push(difference);
    } else {
      sortedNumbers.push(value);
    }
  });

  const result: number = sortedNumbers.reduce(
    (accumulator: number, current: number): number => accumulator + current,
    0,
  );

  return result;
}
