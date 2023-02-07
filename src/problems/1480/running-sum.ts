export function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  nums.every((value, index) => {
    if (index == 0) {
      result.push(value);
      return true;
    }

    const previousNumber: number = result[index - 1];
    result.push(previousNumber + value);

    return true;
  });

  return result;
}
