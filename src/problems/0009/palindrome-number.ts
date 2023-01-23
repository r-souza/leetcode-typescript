export function isPalindrome(x: number): boolean {
  const input: string = x.toString();
  const reversed: string = input.split('').reverse().join('');

  return input === reversed;
}
