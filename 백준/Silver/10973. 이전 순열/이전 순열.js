const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let answer = 0;

let max = 0;
let i = n - 1;
while (i > 0 && arr[i] >= arr[i - 1]) i -= 1; // 내림차순이 끝나는 index

if (i === 0) {
  console.log(-1);
} else {
  let j = n - 1;
  while (arr[j] >= arr[i - 1]) j -= 1;
  [arr[j], arr[i - 1]] = [arr[i - 1], arr[j]];

  j = n - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i += 1;
    j -= 1;
  }
  console.log(arr.join(" "));
}
