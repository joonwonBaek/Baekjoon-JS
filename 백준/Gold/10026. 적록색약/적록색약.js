const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].trim().split(""));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  q = [];
  q.push([x, y]);
  visited[x][y] = 1;
  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && visited[nx][ny] === 0) {
        if (graph[x][y] === graph[nx][ny]) {
          visited[nx][ny] = 1;
          q.push([nx, ny]);
        }
      }
    }
  }
};

let cnt1 = 0;
let cnt2 = 0;
let visited = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0) {
      bfs(i, j);
      cnt1 += 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === "R") graph[i][j] = "G";
  }
}

visited = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0) {
      bfs(i, j);
      cnt2 += 1;
    }
  }
}

console.log(cnt1, cnt2);
