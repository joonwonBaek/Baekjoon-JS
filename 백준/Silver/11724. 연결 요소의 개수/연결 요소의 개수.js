const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(0);

const dfs = (graph, v, visited) => {
  visited[v] = 1;
  for (const node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
};

let count = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(graph, i, visited);
    count++;
  }
}

console.log(count);
