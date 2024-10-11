const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const halfN = n / 2;
const visited = Array(n + 1).fill(0);
let answer = Infinity;
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const dfs = (depth, start, m) => {
  if (depth === m) {
    let startSum = 0;
    let linkSum = 0;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (i !== j) {
          if (visited[i] && visited[j]) startSum += graph[i][j] + graph[j][i];
          if (!visited[i] && !visited[j]) linkSum += graph[i][j] + graph[j][i];
        }
      }
    }
    answer = Math.min(answer, Math.abs(startSum - linkSum));
    return;
  }

  for (let i = start; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(depth + 1, i + 1, m);
      visited[i] = 0;
    }
  }
};

for (let i = 1; i <= halfN; i++) {
  dfs(0, 0, i);
}

console.log(answer);
