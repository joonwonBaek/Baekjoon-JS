const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const primeNum = (num) => {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
};

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let answer = 0;
  let start = 0;
  let end = 0;
  let num = Number(input[i]);
  if (primeNum(num)) {
    answer = 0;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      if (primeNum(i)) {
        start = i;
        break;
      }
    }
    let idx = num + 1;
    while (true) {
      if (primeNum(idx)) {
        end = idx;
        break;
      }
      idx++;
    }
    answer = end - start;
  }
  console.log(answer);
}
