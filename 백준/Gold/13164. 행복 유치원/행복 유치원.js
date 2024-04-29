const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const ans = [];
let result = 0;

for (let i = 1; i < n; i++) {
  ans.push(arr[i] - arr[i - 1]);
}

ans.sort((a, b) => a - b);

for (i = 0; i < n - k; i++) {
  result += ans[i];
}

console.log(result);
