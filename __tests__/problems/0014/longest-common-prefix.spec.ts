import {
  arrayLongestWord,
  arrayNthChars,
  isArrayAllEqual,
  longestCommonPrefix,
} from '../../../src/problems/0014/longest-common-prefix.js';

describe('longestCommonPrefix function', () => {
  it('should pass Case 1', (): void => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });
  it('should pass Case 2', (): void => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
  it('should pass Case 3', (): void => {
    expect(longestCommonPrefix(['cir', 'car'])).toBe('c');
  });
});

describe('arrayLongestWord function', () => {
  it('should return the longest word present on a array', () => {
    expect(arrayLongestWord(['flower', 'flow', 'flight'])).toBe('flight');
    expect(arrayLongestWord(['dog', 'racecar', 'car'])).toBe('racecar');
  });
});

describe('arrayAllEqual function', () => {
  it('all equal', () => {
    expect(isArrayAllEqual(['d', 'r', 'c'])).toBe(false);
    expect(isArrayAllEqual(['f', 'f', 'f'])).toBe(true);
  });
});

describe('arrayNthChars function', () => {
  it('should return nth char of all array elements', () => {
    expect(arrayNthChars(['flower', 'flow', 'flight'], 1)).toEqual([
      'l',
      'l',
      'l',
    ]);
  });
});
