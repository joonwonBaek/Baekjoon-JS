const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}
arr.sort((a, b) => a[0] - b[0]);

dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  if (i === 0) dp[i] = arr[i][2];
  else if (i === 1) dp[i] = Math.max(arr[i][2], dp[i - 1]);
  else dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i][2]);
}

console.log(Math.max(...dp));
