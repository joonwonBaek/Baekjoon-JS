const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const s = new Set();
let answer = 0;
for (let i = 1; i < n + 1; i++) {
  s.add(input[i]);
}

for (let i = n + 1; i < n + 1 + m; i++) {
  if (s.has(input[i])) {
    answer++;
  }
}

console.log(answer);
