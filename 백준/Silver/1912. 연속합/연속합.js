const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const dp = new Array(n).fill(-1000);

dp[0] = arr[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
}
console.log(Math.max(...dp));
