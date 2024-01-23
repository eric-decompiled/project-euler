const findDivisors = (n: number): number[] => {
  const divisors: number[] = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const sumNumber = (numSet: number[]): number =>
  numSet.reduce((acc, n) => acc + n, 0);

const divisorSum = (n: number): number => sumNumber(findDivisors(n));

let answer = 0;

for (let i = 1; i < 10000; i++) {
  const sum = divisorSum(i);

  if (sum === i) continue; // a number can't be amicable with itself

  const amicableSum = divisorSum(sum);

  if (amicableSum === i) {
    answer += i;
  }
}

console.log({ answer });
