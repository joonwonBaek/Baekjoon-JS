const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = [];
const b = [];
let answer = 0;

for (let i = 1; i <= n; i++) {
  a.push(input[i].trim().split("").map(Number));
}

for (let i = n + 1; i <= 2 * n; i++) {
  b.push(input[i].trim().split("").map(Number));
}

// 테이블 값 변환 함수
const transition = (x, y) => {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      a[i][j] = 1 - a[i][j];
    }
  }
};

for (let i = 0; i < n - 2; i++) {
  for (let j = 0; j < m - 2; j++) {
    if (a[i][j] !== b[i][j]) {
      transition(i, j);
      answer += 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (a[i][j] !== b[i][j]) {
      answer = -1;
      break;
    }
  }
}

console.log(answer);
