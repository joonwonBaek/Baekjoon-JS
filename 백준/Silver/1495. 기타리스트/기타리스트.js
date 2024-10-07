const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s, m] = input[0].split(" ").map(Number);
const volume = input[1].split(" ").map(Number);

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
dp[0][s] = true;

let answer = -1;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    if (!dp[i - 1][j]) {
      continue;
    }
    if (j - volume[i - 1] >= 0) {
      dp[i][j - volume[i - 1]] = true;
    }
    if (j + volume[i - 1] <= m) {
      dp[i][j + volume[i - 1]] = true;
    }
  }
}

for (let i = 0; i <= m; i++) {
  if (dp[n][i]) {
    if (i > answer) {
      answer = i;
    }
  }
}
console.log(answer);
