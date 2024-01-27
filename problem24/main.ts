const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const permutations = (digits: number[], base: number[] = []): number[][] => {
  if (digits.length === 0) return [base];

  return digits.reduce((acc: number[][], digit: number, index: number) => {
    const remaining = [...digits.slice(0, index), ...digits.slice(index + 1)];
    return acc.concat(permutations(remaining, [...base, digit]));
  }, []);
};

const perms = permutations(input);

console.log(perms[999999].toString().replace(/,/g, ""));
