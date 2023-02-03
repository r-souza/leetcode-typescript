export function longestCommonPrefix(strs: string[]): string {
  const longestWord: string = arrayLongestWord(strs);
  const charCount: number[] = [...Array(longestWord.length).keys()];

  const prefix = [];

  charCount.forEach((value: number) => {
    prefix.push(arrayNthChars(strs, value));
  });

  const result: string[] = [];

  prefix.every((value: []): boolean => {
    if (!isArrayAllEqual(value)) {
      return false;
    }
    result.push(value.shift());
    return true;
  });

  return result.join('');
}

export function arrayLongestWord(words: string[]): string {
  return words.reduce((accumulator: string, currentValue: string): string => {
    return accumulator.length > currentValue.length
      ? accumulator
      : currentValue;
  });
}

export function arrayNthChars(words: string[], position: number): string[] {
  return words.map((word: string): string => word.charAt(position));
}

export function isArrayAllEqual(letters: string[]): boolean {
  return letters.every((value, _index, array) => value === array[0]);
}
