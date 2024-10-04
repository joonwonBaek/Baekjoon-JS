const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

const maxVal = Math.max(...arr);

const dp = Array(Math.max(...arr) + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= maxVal; i++) {
  dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000009;
}

let answer = "";
for (const a of arr) {
  answer += String(dp[a]) + "\n";
}
console.log(answer);
