const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const halfN = n / 2;
const graph = [];
let answer = Infinity;
const visited = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const dfs = (depth, idx) => {
  if (depth === halfN) {
    const startTeam = [];
    const linkTeam = [];
    let startSum = 0;
    let linkSum = 0;

    for (let i = 0; i < n; i++) {
      if (visited[i]) startTeam.push(i);
      else linkTeam.push(i);
    }

    for (let i = 0; i < halfN; i++) {
      for (let j = i + 1; j < halfN; j++) {
        startSum =
          startSum +
          graph[startTeam[i]][startTeam[j]] +
          graph[startTeam[j]][startTeam[i]];
        linkSum =
          linkSum +
          graph[linkTeam[i]][linkTeam[j]] +
          graph[linkTeam[j]][linkTeam[i]];
      }
    }
    answer = Math.min(answer, Math.abs(startSum - linkSum));
    return;
  }

  for (let i = idx; i < n; i++) {
    visited[i] = 1;
    dfs(depth + 1, i + 1);
    visited[i] = 0;
  }
};

dfs(0, 0);

console.log(answer);
