const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let answer = -Infinity;

const prefixSum = Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  prefixSum[i + 1] += prefixSum[i] + arr[i];
}

for (let i = k; i <= n; i++) {
  answer = Math.max(answer, prefixSum[i] - prefixSum[i - k]);
}

console.log(answer);
