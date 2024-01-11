const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let cur = 1;
let count = 1;

while (cur < n) {
  cur += count * 6;
  count += 1;
}

console.log(count);
