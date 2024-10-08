const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const visited = Array(n + 1).fill(0);
let answer = "";

const dfs = (depth, total, start) => {
  if (depth === m) {
    answer += total + "\n";
    return;
  }

  for (let i = start; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(depth + 1, total + " " + String(i), i);
      visited[i] = 0;
    }
  }
};

for (let i = 1; i <= n; i++) {
  visited[i] = 1;
  dfs(1, String(i), i);
  visited[i] = 0;
}

console.log(answer);
