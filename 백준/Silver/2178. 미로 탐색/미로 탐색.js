const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split("").map(Number));
}

const nx = [0, 0, -1, 1];
const ny = [-1, 1, 0, 0];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const dx = x + nx[i];
      const dy = y + ny[i];
      if (dx < 0 || dx >= n || dy < 0 || dy >= m) continue;
      if (graph[dx][dy] === 0) continue;
      if (graph[dx][dy] === 1) {
        graph[dx][dy] = graph[x][y] + 1;
        queue.push([dx, dy]);
      }
    }
  }
  return graph[n - 1][m - 1];
};

console.log(bfs(0, 0));
