const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const [r, c] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 1; i <= r; i++) {
  graph.push(input[i].split(""));
}

let flag = 0;

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (graph[i][j] === "S") {
      for (let k = 0; k < 4; k++) {
        const nx = i + dir[k][0];
        const ny = j + dir[k][1];
        if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
        if (graph[nx][ny] === "W") {
          flag = 1;
          break;
        } else if (graph[nx][ny] === ".") {
          graph[nx][ny] = "D";
        }
      }
    }
  }
}

if (flag) {
  console.log(0);
} else {
  console.log(1);
  for (const el of graph) {
    console.log(el.join(""));
  }
}
