function* triangleGen() {
  let number = 0,
    index = 1;

  while (true) {
    number += index;
    index++;
    yield number;
  }
}

const gen = triangleGen();

for (const triangle of gen) {
  const divisors = [1, triangle];

  const sqrt = Math.sqrt(triangle);
  for (let i = 2; i < sqrt; i++) {
    if (triangle % i === 0) {
      divisors.push(i);
      divisors.push(triangle / i);
    }
  }

  if (divisors.length >= 500) {
    console.log(`First triangle num with 500 divisors is: ${triangle}`);
    break;
  }
}
