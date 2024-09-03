const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => {
  if (a % 10 === 0 && b % 10 === 0) {
    return a - b;
  }
  if (a % 10 !== 0 && b % 10 !== 0) {
    return a - b;
  }
  if (a % 10 === 0) {
    return -1;
  }
  if (b % 10 === 0) {
    return 1;
  }
});
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  while (arr[i] > 10) {
    if (m <= 0) {
      break;
    }
    arr[i] -= 10;
    answer += 1;
    m -= 1;
  }
  if (arr[i] === 10) {
    answer += 1;
  }
  if (m <= 0) {
    break;
  }
}

console.log(answer);
