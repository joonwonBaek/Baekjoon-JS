const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const bingo = [];

for (let i = 0; i < 5; i++) {
  bingo.push(input[i].split(" ").map(Number));
}

const answer = [];

for (let i = 5; i < 10; i++) {
  answer.push(input[i].split(" ").map(Number));
}

const graph = new Array(5).fill(0).map((v) => new Array(5).fill(0));

const isCross = (visited) => {
  let cnt = 0;
  if (
    visited[0][0] &&
    visited[1][1] &&
    visited[2][2] &&
    visited[3][3] &&
    visited[4][4]
  )
    cnt++;
  if (
    visited[0][4] &&
    visited[1][3] &&
    visited[2][2] &&
    visited[3][1] &&
    visited[4][0]
  )
    cnt++;

  return cnt;
};

const isLine = (visited) => {
  let cnt = 0;
  for (let i = 0; i < 5; i++) {
    if (
      visited[i][0] &&
      visited[i][1] &&
      visited[i][2] &&
      visited[i][3] &&
      visited[i][4]
    )
      cnt++;
    if (
      visited[0][i] &&
      visited[1][i] &&
      visited[2][i] &&
      visited[3][i] &&
      visited[4][i]
    )
      cnt++;
  }
  return cnt;
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const now = answer[i][j];
    bingo.map((v, index) => {
      if (v.includes(now)) {
        graph[index][v.indexOf(now)] = 1;
      }
    });
    let line = isLine(graph);
    let cross = isCross(graph);

    if (line + cross >= 3) {
      console.log(i * 5 + j + 1);
      i = 5;
      break;
    }
  }
}
