const findPythagoreanTripletProduct = (sum) => {
  for (let a = 1; a < sum; a++) {
    for (let b = a + 1; b < sum; b++) {
      let c = sum - a - b;
      if (a ** 2 + b ** 2 === c ** 2) {
        return a * b * c;
      }
    }
  }
  return null;
};

const main = () => {
  const sum = 1000;
  const product = findPythagoreanTripletProduct(sum);
  if (product) {
    console.log("Product: ", product);
  }
};

main();
