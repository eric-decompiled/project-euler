// The numbers need bigint!

const factorial = (n: bigint): bigint =>
  n === 1n ? 1n : n * factorial(n - 1n);

console.log(factorial(100n).toString());

const answer = factorial(100n)
  .toString()
  .split("")
  .reduce((acc: number, digit: string) => acc + Number(digit), 0);

console.log({ answer });
