// let target = 13195;
let target = 600851475143;

const isPrime = (num: number): boolean => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function* primeGenerator() {
  let curr = 2;
  while (true) {
    if (isPrime(curr)) {
      yield curr;
    }
    curr++;
  }
}

const primeGen = primeGenerator();

const factors: number[] = [];
while (true) {
  const nextPrime = primeGen.next().value!;

  if (target % nextPrime === 0) {
    target = target / nextPrime;
    factors.push(nextPrime);
  }

  if (nextPrime > target) break;
}

const allPrime = factors.every((fac) => isPrime(fac));

console.log({ factors });
