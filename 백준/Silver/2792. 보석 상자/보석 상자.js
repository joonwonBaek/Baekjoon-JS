const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const jewelry = [];

for (let i = 1; i <= n; i++) {
  jewelry.push(Number(input[i]));
}

let min = 0;
let max = Math.max(...jewelry);
let mid;
let answer = Infinity;

while (min <= max) {
  mid = Math.floor((min + max) / 2);
  let res = 0;

  jewelry.forEach((jewel) => {
    res += Math.ceil(jewel / mid);
  });

  if (res <= m) {
    max = mid - 1;
    answer = Math.min(answer, mid);
  } else {
    min = mid + 1;
  }
}

console.log(answer);
