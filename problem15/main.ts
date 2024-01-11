/**
 * Use binomial theorem for the solution: https://en.wikipedia.org/wiki/Binomial_theorem
 *
 * The number of paths through the grid is choosing the center of pascals triangle, skipping over rows with two equal middle values
 *
 * That is, the number of possible ways through the grid is the center of the 40th row
 **/

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

const numberOfPaths = (size) => factorial(2 * size) / factorial(size) ** 2;

console.log("");
const answer = numberOfPaths(20);
console.log({ answer });
