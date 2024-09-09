const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);

arr.sort((a, b) => a - b);
let answer = 0;
let left = 0;
let right = n - 1;

while (left < right) {
  const temp = arr[left] + arr[right];

  if (temp === x) answer += 1;
  if (temp <= x) left += 1;
  else right -= 1;
}

console.log(answer);
