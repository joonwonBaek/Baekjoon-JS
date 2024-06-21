const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split("");

// 오른쪽으로 빨간, 파랑 넘기기
let red = 0;
let blue = 0;
let visited_r = new Array(n).fill(0);
let visited_b = new Array(n).fill(0);
let answer = [];

for (let i = n - 2; i > -1; i--) {
  if (arr[i] == "R") {
    if (arr[i + 1] == "B") {
      visited_r[i] = 1;
      red += 1;
    } else {
      if (visited_r[i + 1] == 1) {
        visited_r[i] = 1;
        red += 1;
      }
    }
  }
}

for (let i = n - 2; i > -1; i--) {
  if (arr[i] == "B") {
    if (arr[i + 1] == "R") {
      visited_b[i] = 1;
      blue += 1;
    } else {
      if (visited_b[i + 1] == 1) {
        visited_b[i] = 1;
        blue += 1;
      }
    }
  }
}
answer.push(red);
answer.push(blue);

// 왼쪽으로 빨강, 파랑 넘기기
red = 0;
blue = 0;
visited_r = new Array(n).fill(0);
visited_b = new Array(n).fill(0);

for (let i = 1; i < n; i++) {
  if (arr[i] == "R") {
    if (arr[i - 1] == "B") {
      visited_r[i] = 1;
      red += 1;
    } else {
      if (visited_r[i - 1] == 1) {
        visited_r[i] = 1;
        red += 1;
      }
    }
  }
}

for (let i = 1; i < n; i++) {
  if (arr[i] == "B") {
    if (arr[i - 1] == "R") {
      visited_b[i] = 1;
      blue += 1;
    } else {
      if (visited_b[i - 1] == 1) {
        visited_b[i] = 1;
        blue += 1;
      }
    }
  }
}

answer.push(red);
answer.push(blue);

console.log(Math.min(...answer));
