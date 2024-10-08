const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const [plus, min, mul, div] = input[2].split(" ").map(Number);
const result = [];

const dfs = (plus, min, mul, div, depth, total) => {
  if (depth === n) {
    result.push(total);
    return;
  }

  if (plus > 0) dfs(plus - 1, min, mul, div, depth + 1, total + numbers[depth]);
  if (min > 0) dfs(plus, min - 1, mul, div, depth + 1, total - numbers[depth]);
  if (mul > 0) dfs(plus, min, mul - 1, div, depth + 1, total * numbers[depth]);
  if (div > 0) {
    const nextTotal =
      total < 0
        ? -Math.floor(Math.abs(total) / numbers[depth])
        : Math.floor(total / numbers[depth]);
    dfs(plus, min, mul, div - 1, depth + 1, nextTotal);
  }
};

dfs(plus, min, mul, div, 1, numbers[0]);

console.log(`${Math.max(...result)}\n${Math.min(...result)}`);
