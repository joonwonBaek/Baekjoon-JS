const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let dp = new Array(11);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 1; i <= n; i++) {
  let t = Number(input[i]);
  console.log(dp[t]);
}
