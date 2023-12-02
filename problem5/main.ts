const divs: number[] = [];

for (let i = 1; i <= 20; i++) {
  divs.push(i);
}

let candidate = 1;

while (true) {
  if (divs.every((div) => candidate % div === 0)) {
    break;
  }
  candidate++;
}

console.log({ candidate });
