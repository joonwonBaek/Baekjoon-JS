const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let answer = Infinity;
let ryanCount = 0;

while (end < n) {
  if (arr[end] === 1) {
    ryanCount += 1;
  }

  while (ryanCount >= k) {
    answer = Math.min(answer, end - start + 1);
    if (arr[start] === 1) {
      ryanCount -= 1;
    }
    start += 1;
  }
  end += 1;
}

console.log(answer === Infinity ? -1 : answer);
