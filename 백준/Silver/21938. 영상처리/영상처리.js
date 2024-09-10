const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const graph = [];
const arr = [];
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const [n, m] = input[0].split(" ").map(Number);
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const t = Number(input[n + 1]);

for (const a of arr) {
  const temp = [];
  for (let i = 0; i < 3 * m; i += 3) {
    const average = (a[i] + a[i + 1] + a[i + 2]) / 3;
    if (average >= t) {
      temp.push(255);
    } else {
      temp.push(0);
    }
  }
  graph.push(temp);
}

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const d of dir) {
      const nx = x + d[0];
      const ny = y + d[1];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (visited[nx][ny] === 0 && graph[nx][ny] === 255) {
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
  }
};

let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 255 && visited[i][j] === 0) {
      bfs(i, j);
      count += 1;
    }
  }
}

console.log(count);
