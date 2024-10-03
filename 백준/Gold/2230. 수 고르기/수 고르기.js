const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let left = 0;
let right = 0;
let answer = Infinity;

while (right < n) {
  const temp = arr[right] - arr[left];
  if (temp >= m) {
    left += 1;
    answer = Math.min(answer, temp);
  } else {
    right += 1;
  }
}

console.log(answer);
