const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
let answer = 0;

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
  answer = Math.max((i + 1) * arr[i], answer);
}

console.log(answer);
