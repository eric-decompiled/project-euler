// If we list all the natural numbers below that are multiples of or , we get and . The sum of these multiples is

// Find the sum of all the multiples of
// or below .

const maxNumber = 1000;

const divisors = [3, 5];

let sum = 0;

for (let i = 0; i < maxNumber; i++) {
  if (divisors.some((div) => i % div === 0)) {
    sum += i;
  }
}

console.log({ sum });
