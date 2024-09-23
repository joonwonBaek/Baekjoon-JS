const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const graph = [];
for (let i = 1; i <= r; i++) {
  graph.push(input[i].trim().split(""));
}

const answer = [0, 0];

const visited = Array.from({ length: r }, () => Array(c).fill(0));

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = 1;
  let wolf = 0;
  let sheep = 0;

  if (graph[x][y] === "v") wolf += 1;
  if (graph[x][y] === "k") sheep += 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of dir) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
        if (visited[nx][ny] === 0 && graph[nx][ny] !== "#") {
          if (graph[nx][ny] === "v") wolf += 1;
          if (graph[nx][ny] === "k") sheep += 1;
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  if (sheep > wolf) {
    return [0, sheep];
  } else {
    return [wolf, 0];
  }
};

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (visited[i][j] == 0 && graph[i][j] !== "#") {
      const [wolf, sheep] = bfs(i, j);
      answer[0] += wolf;
      answer[1] += sheep;
    }
  }
}

console.log(answer[1], answer[0]);
