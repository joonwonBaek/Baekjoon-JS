const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

const result = [];
const answer = new Set();
const visited = Array(n).fill(0);

const dfs = (depth) => {
  if (depth === m) {
    answer.add(result.join(" "));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    result.push(arr[i]);
    visited[i] = 1;
    dfs(depth + 1);
    visited[i] = 0;
    result.pop();
  }
};

dfs(0);

answer.forEach((a) => {
  console.log(a);
});
