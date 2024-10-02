const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 17503

const [n, m] = input[0].split(" ").map(Number);
const money = [];
for (let i = 1; i <= n; i++) {
  money.push(Number(input[i]));
}

let min = Math.max(...money);
let max = money.reduce((r, v) => r + v, 0);
let answer = Infinity;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let cnt = 1;
  let temp = 0;
  for (const a of money) {
    if (temp + a > mid) {
      cnt += 1;
      temp = a;
    } else {
      temp += a;
    }
  }

  if (cnt > m) {
    min = mid + 1;
  } else {
    max = mid - 1;
    answer = mid;
  }
}
console.log(answer);
