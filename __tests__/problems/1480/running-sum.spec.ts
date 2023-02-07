import { runningSum } from '../../../src/problems/1480/running-sum.js';

describe('runningSum function', () => {
  it('should pass Case 1', () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });
  it('should pass Case 2', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it('should pass Case 3', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
});
