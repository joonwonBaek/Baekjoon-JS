const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];
const answer = [];
arr.push(new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  const temp = input[i].split(" ").map(Number);
  temp.unshift(0);
  arr.push(temp);
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    arr[i][j] += arr[i - 1][j] + arr[i][j - 1] - arr[i - 1][j - 1];
  }
}

for (let i = n + 1; i < n + 1 + m; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  let temp =
    arr[x2][y2] - arr[x2][y1 - 1] - arr[x1 - 1][y2] + arr[x1 - 1][y1 - 1];
  answer.push(temp);
}

console.log(answer.join("\n"));
