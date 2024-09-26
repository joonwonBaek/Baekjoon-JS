const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c, k] = input[0].split(" ").map(Number);
const graph = [];
const visited = Array.from({ length: r }, () => Array(c).fill(0));
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let answer = 0;

for (let i = 1; i <= r; i++) {
  graph.push(input[i].trim().split(""));
}

const dfs = (x, y, depth) => {
  if (depth === k) {
    if (x === 0 && y === c - 1) answer += 1;
    return;
  }

  for (const [dx, dy] of dir) {
    const [nx, ny] = [x + dx, y + dy];
    if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
      if (!visited[nx][ny] && graph[nx][ny] !== "T") {
        visited[nx][ny] = 1;
        dfs(nx, ny, depth + 1);
        visited[nx][ny] = 0;
      }
    }
  }
};

visited[r - 1][0] = 1;
dfs(r - 1, 0, 1);

console.log(answer);
