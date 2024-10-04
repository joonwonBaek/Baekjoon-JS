const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

const maxVal = Math.max(...arr);
const dp = Array.from({ length: maxVal + 1 }, () => Array(4).fill(0));

if (maxVal >= 1) dp[1][1] = 1;
if (maxVal >= 2) dp[2][2] = 1;
if (maxVal >= 3) dp[3][1] = dp[3][2] = dp[3][3] = 1;

for (let i = 4; i <= maxVal; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % 1000000009;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % 1000000009;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % 1000000009;
}
let answer = "";
for (const a of arr) {
  const temp = (dp[a][1] + dp[a][2] + dp[a][3]) % 1000000009;
  answer += String(temp) + "\n";
}

console.log(answer);
