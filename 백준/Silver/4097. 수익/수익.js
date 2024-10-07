const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
while (true) {
  const n = Number(input[idx]);
  if (n === 0) break;

  const profits = [];
  for (let i = 1; i <= n; i++) {
    profits.push(Number(input[i + idx]));
  }

  const dp = Array(n).fill(0);
  dp[0] = profits[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + profits[i], profits[i]);
  }

  console.log(Math.max(...dp));

  idx += n + 1;
}
