const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const colors = [];
for (let i = 1; i <= m; i++) {
  colors.push(Number(input[i]));
}

let left = 0;
let right = Math.max(...colors);
let answer = Infinity;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 0;
  colors.forEach((color) => {
    cnt += Math.ceil(color / mid);
  });

  if (cnt <= n) {
    right = mid - 1;
    answer = Math.min(answer, mid);
  } else {
    left = mid + 1;
  }
}

console.log(answer);
