const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const dp = new Array(n).fill(0);

dp[0] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    } else {
      dp[i] = Math.max(dp[i], 1);
    }
  }
}

console.log(Math.max(...dp));
