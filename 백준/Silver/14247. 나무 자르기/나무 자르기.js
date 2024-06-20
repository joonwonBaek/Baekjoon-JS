const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const tree = input[1].split(" ").map(Number);
const len = input[2].split(" ").map(Number);

len.sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < n; i++) {
  answer += tree[i];
  answer += len[i] * i;
}

console.log(answer);
