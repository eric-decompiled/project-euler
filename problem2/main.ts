const generateFib = (maxNumber: number) => {
  let seq: number[] = [];
  let curr = 1,
    prev = 0,
    tmp = 0;

  while (true) {
    tmp = prev;
    prev = curr;
    curr = curr + tmp;
    console.log({ curr });
    seq.push(curr);

    if (curr >= maxNumber) {
      break;
    }
  }

  return seq;
};

const biggestNumber = 4000000;

const seq = generateFib(biggestNumber);
// maybe pop?

console.log("last", seq[seq.length - 1]);

const answer = seq
  .filter((v) => v % 2 === 0)
  .reduce((ans, val) => ans + val, 0);

console.log({ answer });
