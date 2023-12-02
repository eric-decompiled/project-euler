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

const gen = primeGenerator();
const targetPrime = 10000;

for (let i = 0; i < targetPrime; i++) {
  console.log(gen.next().value);
}

console.log(gen.next().value);
