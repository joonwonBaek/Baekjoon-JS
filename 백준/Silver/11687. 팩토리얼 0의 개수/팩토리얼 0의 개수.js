const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const m = Number(input[0]);

let left = 1;
let right = m * 5;
let answer = 0;

const check = (n) => {
  let cnt = 0;
  while (n >= 5) {
    n = parseInt(n / 5);
    cnt += n;
  }
  return cnt;
};

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = check(mid);

  if (cnt < m) {
    left = mid + 1;
  } else {
    right = mid - 1;
    answer = mid;
  }
}

if (check(answer) === m) {
  console.log(answer);
} else {
  console.log(-1);
}
