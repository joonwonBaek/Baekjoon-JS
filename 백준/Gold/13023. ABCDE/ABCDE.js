const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n }, () => []);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n).fill(0);
let found = false;

const dfs = (node, depth) => {
  if (depth === 4) {
    found = true;
    return;
  }

  visited[node] = 1;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);
    }
    if (found) return;
  }

  visited[node] = 0;
};

for (let i = 0; i < n; i++) {
  dfs(i, 0);
  if (found) break;
}

console.log(found ? 1 : 0);
