import { isPalindrome } from '../../../src/problems/0009/palindrome-number.js';

describe('isPalindrome function', () => {
  it('should pass Case 1', (): void => {
    expect(isPalindrome(121)).toBe(true);
  });
  it('should pass Case 2', (): void => {
    expect(isPalindrome(-121)).toBe(false);
  });
  it('should pass Case 3', (): void => {
    expect(isPalindrome(10)).toBe(false);
  });
});
