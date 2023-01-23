import { romanToInt } from '../../../src/problems/0013/roman-to-integer.js';

describe('romanToInt function', () => {
  it('should convert a single roman symbol to integer', (): void => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('X')).toBe(10);
    expect(romanToInt('L')).toBe(50);
    expect(romanToInt('C')).toBe(100);
    expect(romanToInt('D')).toBe(500);
    expect(romanToInt('M')).toBe(1000);
  });

  it('should pass Case 1', (): void => {
    expect(romanToInt('III')).toBe(3);
  });
  it('should pass Case 2', (): void => {
    expect(romanToInt('LVIII')).toBe(58);
  });
  it('should pass Case 3', (): void => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
