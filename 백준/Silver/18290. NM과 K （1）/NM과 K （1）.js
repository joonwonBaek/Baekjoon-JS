const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 18290
const [n, m, k] = input[0].split(" ").map(Number);
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const visited = Array.from({ length: n }, () => Array(m).fill(false));
let answer = -Infinity;

const isValid = (x, y) => {
  if (x >= 0 && x < n && y >= 0 && y < m) {
    return true;
  }
  return false;
};

const isAdjacent = (x, y) => {
  for (const [dx, dy] of dir) {
    const [nx, ny] = [x + dx, y + dy];
    if (isValid(nx, ny) && visited[nx][ny]) {
      return true;
    }
  }
  return false;
};

const dfs = (depth, total) => {
  if (depth === k) {
    answer = Math.max(answer, total);
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!isAdjacent(i, j) && !visited[i][j]) {
        visited[i][j] = true;
        dfs(depth + 1, total + graph[i][j]);
        visited[i][j] = false;
      }
    }
  }
};

dfs(0, 0);

console.log(answer);
