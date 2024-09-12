const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let answer = 0;
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const bfs = (x, y) => {
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  const queue = [[x, y]];
  visited[x][y] = 1;

  while (queue.length) {
    const [dx, dy] = queue.shift();

    for (const d of dir) {
      const nx = dx + d[0];
      const ny = dy + d[1];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (graph[nx][ny] === 1) {
          return visited[dx][dy];
        }

        if (visited[nx][ny] === 0 && graph[nx][ny] === 0) {
          queue.push([nx, ny]);
          visited[nx][ny] = visited[dx][dy] + 1;
        }
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) {
      const temp = bfs(i, j);
      answer = Math.max(temp, answer);
    }
  }
}

console.log(answer);
