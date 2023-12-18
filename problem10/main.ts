const target = 2000000;

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

const main = (): number => {
  let sum = 0;
  for (const prime of primeGen) {
    if (prime < target) {
      sum += prime;
    } else {
      break;
    }
  }

  return sum;
};

console.log("answer: ", main());
