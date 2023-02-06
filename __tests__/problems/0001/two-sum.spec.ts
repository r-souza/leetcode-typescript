import { twoSum } from '../../../src/problems/0001/two-sum.js';

describe('twoSum function', () => {
  it('should pass Case 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('should pass Case 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it('should pass Case 3', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
  it('should pass Case 4', () => {
    expect(twoSum([1, 7, 12, 19, 22], 31)).toEqual([2, 3]);
  });
  it('should pass Case 5', () => {
    expect(twoSum([12, 13, 43, 54, 100], 113)).toEqual([1, 4]);
  });
  it('should pass Case 6', () => {
    expect(twoSum([12, 13, 43, 54, 100], 55)).toEqual([0, 2]);
  });
  it('should pass Case 7', () => {
    expect(twoSum([12, 13], 25)).toEqual([0, 1]);
  });
});
