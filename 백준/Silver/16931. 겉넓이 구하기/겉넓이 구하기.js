const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let side1 = 0;
let side2 = 0;
let side3 = n * m;

const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (j === 0) {
      side1 += arr[i][j];
    } else {
      if (arr[i][j] > arr[i][j - 1]) {
        side1 += arr[i][j] - arr[i][j - 1];
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i === 0) {
      side2 += arr[i][j];
    } else {
      if (arr[i][j] > arr[i - 1][j]) {
        side2 += arr[i][j] - arr[i - 1][j];
      }
    }
  }
}

console.log((side1 + side2 + side3) * 2);
