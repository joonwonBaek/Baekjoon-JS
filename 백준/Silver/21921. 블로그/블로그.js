const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let start = 0;
let end = 0;
let sum = visitors[0];
let max_sum = 0;
let cnt = 1;
let count = 0;

while (end < n - 1) {
  end++;
  cnt++;
  sum += visitors[end];
  if (cnt === x) {
    if (max_sum < sum) {
      max_sum = sum;
      count = 0;
    }
    if (max_sum === sum) {
      count += 1;
    }
    sum -= visitors[start];
    start += 1;
    cnt -= 1;
  }
}

if (max_sum === 0) {
  console.log("SAD");
} else {
  console.log(`${max_sum}\n${count}`);
}
