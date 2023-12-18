const main = () => {
  const sum = 1000;
  for (let a = 1; a < sum; a++) {
    for (let b = a + 1; b < sum; b++) {
      let c = sum - a - b;

      if (a ** 2 + b ** 2 === c ** 2) {
        console.log({ a, b, c }, "Product: ", a * b * c);
        return;
      }
    }
  }
};

main();
