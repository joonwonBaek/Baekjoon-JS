const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 누적합
const sumArr = arr.reduce((acc, cur, index) => {
  if (index === 0) {
    acc.push(cur);
  } else {
    acc.push(acc[index - 1] + cur);
  }
  return acc;
}, []);

let start = 0;
let end = 0;
let answer = 0;

for (const a of sumArr) {
  if (a === m) answer += 1;
}

while (end < n && start < n) {
  let temp = sumArr[end] - sumArr[start];
  if (temp === m) {
    answer += 1;
    end += 1;
  } else {
    if (temp < m) {
      end += 1;
    } else {
      start += 1;
    }
  }
}

console.log(answer);
