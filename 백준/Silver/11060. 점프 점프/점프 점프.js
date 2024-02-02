const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map((i) => Number(i));
const dp = Array(n).fill(1001);

dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < arr[i]; j++) {
    if (i + j + 1 < n) {
      dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i] + 1);
    }
  }
}

if (dp[n - 1] === 1001) {
  console.log(-1);
} else {
  console.log(dp[n - 1]);
}
