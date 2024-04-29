const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map(Number);

const d_visited = new Array(n + 1).fill(0);
const b_visited = new Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (const a of graph) {
  a.sort((a, b) => a - b);
}

const dfs_arr = [];
const dfs = (start) => {
  if (d_visited[start]) return;
  d_visited[start] = 1;

  dfs_arr.push(start);
  for (const i of graph[start]) {
    if (d_visited[i] === 0) {
      dfs(i);
    }
  }
};

const bfs_arr = [];
const bfs = (start) => {
  let queue = [start];
  while (queue.length) {
    let now = queue.shift();
    if (b_visited[now] === 1) {
      continue;
    }
    b_visited[now] = 1;
    bfs_arr.push(now);
    for (const i of graph[now]) {
      if (b_visited[i] === 0) {
        queue.push(i);
      }
    }
  }
};
dfs(v);
bfs(v);
console.log(dfs_arr.join(" "));
console.log(bfs_arr.join(" "));
