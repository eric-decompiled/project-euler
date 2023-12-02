const isPalindrome = (input: string): boolean => {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  if (input[0] !== input[input.length - 1]) {
    return false;
  }

  return isPalindrome(input.substring(1, input.length - 1));
};

let largest = 0;
for (let i = 1; i < 1000; i++) {
  for (let j = 1; j < 1000; j++) {
    const product = i * j;
    if (isPalindrome(product.toString())) {
      console.log({ product }, "was palindrome");
      if (product > largest) {
        largest = product;
      }
    }
  }
}

console.log(largest);
