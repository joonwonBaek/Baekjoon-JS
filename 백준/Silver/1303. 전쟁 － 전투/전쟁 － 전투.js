const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) {
  const arr = input[i].trim().split("");
  graph.push(arr);
}

const visited = Array.from({ length: n }, () => new Array(m).fill(false));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

const dfs = (y, x, team, cnt) => {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

    if (!visited[ny][nx] && graph[ny][nx] === team) {
      cnt = dfs(ny, nx, team, cnt + 1);
    }
  }
  return cnt;
};

let [white, blue] = [0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j]) continue;

    graph[i][j] === "W"
      ? (white += dfs(i, j, "W", 1) ** 2)
      : (blue += dfs(i, j, "B", 1) ** 2);
  }
}

console.log(white, blue);
