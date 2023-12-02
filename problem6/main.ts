let sumOfSquares = 0;
let sum = 0;

const maxNumber = 100;

for (let i = 1; i <= maxNumber; i++) {
  sumOfSquares += i * i;
  sum += i;
}

const product = sum ** 2;

console.log(product - sumOfSquares);
