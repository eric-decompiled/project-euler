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

const abundantNumbers = new Set<number>();
for (let i = 1; i < 28123; i++) {
  const divisors = findDivisors(i);
  const sum = sumNumber(divisors);
  if (sum > i) {
    abundantNumbers.add(i);
  }
}

let sum = 0;
for (let i = 1; i < 28123; i++) {
  let isAbundantSum = false;
  for (const [abundant] of abundantNumbers.entries()) {
    const need = i - abundant;
    if (abundantNumbers.has(need)) {
      isAbundantSum = true;
      break;
    }
  }

  if (!isAbundantSum) {
    sum += i;
  }
}

console.log({ sum });
