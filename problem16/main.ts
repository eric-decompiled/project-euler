// Power of two = shift left. "n" to make sure we are using BigInt to avoid overflow
(1n << 1000n)
  .toString()
  .split("")
  .map((n) => Number(n))
  .reduce((acc, n) => acc + n, 0);
