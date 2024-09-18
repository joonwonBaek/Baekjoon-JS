const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const graph = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m + 1 }, () => 0)
);

let result = 0;

for (let i = 1; i <= k; i++) {
  const [r, c] = input[i].split(" ").map(Number);
  graph[r][c] = 1;
}

const bfs = (x, y) => {
  const queue = [[x, y]];

  const visited = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );

  visited[x][y] = 1;
  let answer = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) {
        if (!visited[nx][ny] && graph[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
          answer += 1;
        }
      }
    }
  }
  return answer;
};

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (graph[i][j] === 1) {
      const temp = bfs(i, j);
      result = Math.max(temp, result);
    }
  }
}

console.log(result);
