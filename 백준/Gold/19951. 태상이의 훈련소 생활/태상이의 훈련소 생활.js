const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const heights = input[1].split(" ").map(Number);
const diff = Array(n + 1).fill(0);

for (let i = 2; i <= m + 1; i++) {
  const [a, b, k] = input[i].split(" ").map(Number);
  diff[a - 1] += k;
  if (b < n) diff[b] -= k;
}

let current = 0;
for (let i = 0; i < n; i++) {
  current += diff[i];
  heights[i] += current;
}

console.log(...heights);
