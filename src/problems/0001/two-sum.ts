export function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  if (nums.length == 2) return [0, 1];

  for (let i = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
    if (result.length > 0) break;
  }

  return result;
}
