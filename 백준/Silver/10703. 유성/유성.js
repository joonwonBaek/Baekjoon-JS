const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, s] = input[0].split(" ").map(Number);
const graph = [];

let answer = "";

for (let i = 1; i <= r; i++) {
  const temp = input[i].split("");
  graph.push(temp);
}

let minDistance = Infinity;

// 각 열에서 유성이 얼마나 떨어질 수 있는지 계산
for (let col = 0; col < s; col++) {
  let groundRow = -1;
  let starRow = -1;
  for (let row = 0; row < r; row++) {
    if (graph[row][col] === "X") {
      starRow = row;
    }
    if (graph[row][col] === "#") {
      groundRow = row;
      if (starRow !== -1) {
        minDistance = Math.min(minDistance, groundRow - starRow - 1);
      }
    }
  }
}

// 유성을 아래로 떨어뜨리기
for (let col = 0; col < s; col++) {
  const newCol = Array(r).fill(".");
  for (let row = r - 1; row >= 0; row--) {
    if (graph[row][col] === "#") {
      newCol[row] = "#";
    } else if (graph[row][col] === "X") {
      newCol[row + minDistance] = "X";
    }
  }
  for (let row = 0; row < r; row++) {
    graph[row][col] = newCol[row];
  }
}

for (const g of graph) {
  answer += g.join("") + "\n";
}

console.log(answer);
