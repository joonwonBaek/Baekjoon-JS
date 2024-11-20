const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const word1 = input[0].trim();
const word2 = input[1].trim();

const n1 = word1.length;
const n2 = word2.length;

const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

for (let i = 1; i <= n1; i++) {
  for (let j = 1; j <= n2; j++) {
    if (word1[i - 1] === word2[j - 1]) {
      dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i][j]);
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[n1][n2]);
