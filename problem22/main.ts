const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/names.txt`, "utf-8");

const nameValues: number[][] = data
  .split(",")
  .sort()
  .map((n: string) =>
    n
      .replace(/"/g, "")
      .split("")
      .map((c) => c.charCodeAt(0) - 64)
  );

let answer = 0;

for (const [index, values] of nameValues.entries()) {
  const sum = values.reduce((acc, n) => acc + n);
  answer += sum * (index + 1);
}

console.log(answer);
