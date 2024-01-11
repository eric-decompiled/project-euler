const collazt = (num: number): number => {
  let steps = 0;
  while (num !== 1) {
    steps++;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = 3 * num + 1;
    }
  }

  return steps;
};

let mostSteps = 0;
let mostStart = 0;
for (let i = 1; i < 1000000; i++) {
  const steps = collazt(i);
  if (steps > mostSteps) {
    mostSteps = steps;
    mostStart = i;
  }
}

console.log({ mostStart, mostSteps });
