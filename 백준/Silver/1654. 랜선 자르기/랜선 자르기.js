const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const tree = [];
for (let i = 1; i <= k; i++) {
  const a = Number(input[i]);
  tree.push(a);
}

let start = 1;
let end = Math.max(...tree);
let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let temp = 0;

  for (const t of tree) {
    temp += parseInt(t / mid);
  }

  if (temp < n) {
    end = mid - 1;
  } else {
    start = mid + 1;
    answer = mid;
  }
}

console.log(answer);
