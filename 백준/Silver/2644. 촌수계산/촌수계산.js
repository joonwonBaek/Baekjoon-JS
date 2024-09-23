const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const [x, y] = input[1].split(" ").map(Number);
const m = Number(input[2]);
const visited = Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 3; i < m + 3; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const now = queue.shift();

    for (const x of graph[now]) {
      if (visited[x] === 0) {
        queue.push(x);
        visited[x] = visited[now] + 1;
      }
    }
  }
};

bfs(x);

if (visited[y] === 0) {
  console.log(-1);
} else {
  console.log(visited[y] - 1);
}
