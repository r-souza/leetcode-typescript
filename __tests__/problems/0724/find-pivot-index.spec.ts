import { pivotIndex } from '../../../src/problems/0724/find-pivot-index.js';

describe('pivotIndex function', () => {
  it('should pass Case 1', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
  });
  it('should pass Case 2', () => {
    expect(pivotIndex([1, 2, 3])).toEqual(-1);
  });
  it('should pass Case 3', () => {
    expect(pivotIndex([2, 1, -1])).toEqual(0);
  });
});
