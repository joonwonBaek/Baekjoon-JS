const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = n - 1;
let answer = Math.abs(arr[left] + arr[right]);
let ans_left = left;
let ans_right = right;

while (left < right) {
  const temp = arr[left] + arr[right];
  if (Math.abs(temp) < answer) {
    ans_left = left;
    ans_right = right;
    answer = Math.abs(temp);

    if (answer === 0) break;
  }

  if (temp < 0) {
    left += 1;
  } else {
    right -= 1;
  }
}

console.log(arr[ans_left], arr[ans_right]);
