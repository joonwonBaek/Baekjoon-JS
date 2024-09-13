const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(0);

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const v = queue.shift();

    for (const g of graph[v]) {
      if (visited[g] === 0) {
        visited[g] = visited[v] + 1;
        queue.push(g);
      }
    }
  }
};

bfs(1);

console.log(visited.filter((v) => v >= 2 && v <= 3).length);
