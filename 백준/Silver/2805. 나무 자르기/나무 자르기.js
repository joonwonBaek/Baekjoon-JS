const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const tree = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...tree);
let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let temp = 0;

  for (const t of tree) {
    if (t > mid) {
      temp += t - mid;
    }
  }

  if (temp < m) {
    end = mid - 1;
  } else {
    start = mid + 1;
    answer = mid;
  }
}

console.log(answer);
