const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].trim().split("").map(Number));
}

let visited = Array.from(Array(n), () => Array(m).fill(false));

const bfs = (sx, sy) => {
  const queue = [];
  queue.push([sx, sy, 0]);
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    if (x === n - 1 && y === m - 1) return cnt;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (visited[nx][ny]) continue;
      if (graph[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, cnt + 1]);
      } else {
        visited[nx][ny] = true;
        queue.unshift([nx, ny, cnt]);
      }
    }
  }
};

console.log(bfs(0, 0));
