export function pivotIndex(nums: number[]): number {
  const firstElementIndex = 0;
  const lastElementIndex = nums.length;
  const notFoundValue = -1;

  for (let i = 0; i < nums.length; i++) {
    let beforeIndexSum = 0;
    let afterIndexSum = 0;

    if (i != firstElementIndex) {
      beforeIndexSum = nums
        .slice(0, i)
        .reduce((a: number, b: number): number => a + b, 0);
    }

    if (i != lastElementIndex) {
      afterIndexSum = nums
        .slice(i + 1)
        .reduce((a: number, b: number): number => a + b, 0);
    }

    if (beforeIndexSum == afterIndexSum) return i;
  }

  return notFoundValue;
}
