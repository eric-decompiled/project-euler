let curr = 1n;
let prev = 0n;
let old = 0n;
let step = 1;

while (step++) {
  const next = curr + prev;
  old = prev;
  prev = curr;
  curr = next;

  if (curr.toString().length >= 1000) break;
}

console.log({ step });
