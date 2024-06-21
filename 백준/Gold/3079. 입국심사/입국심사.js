const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const time = [];
for (let i = 1; i <= n; i++) {
  const a = Number(input[i]);
  time.push(a);
}
let answer = 0;
let start = BigInt(1);
let end = BigInt(Math.max(...time) * m);

while (start <= end) {
  let mid = BigInt((start + end) / BigInt(2));
  let temp = BigInt(0);
  for (const t of time) {
    if (mid >= t) {
      temp += BigInt(mid / BigInt(t));
    }
  }

  if (temp < m) {
    start = mid + BigInt(1);
  } else {
    end = mid - BigInt(1);
    answer = mid;
  }
}

console.log(String(answer));
