const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let a = input[1].trim().split(" ").map(Number);
let b = input[2].split(" ").map(Number);
let answer = 0;
for (let i = 0; i < n; i++) {
  minA = Math.min(...a);
  maxB = Math.max(...b);
  aIdx = a.indexOf(minA);
  bIdx = b.indexOf(maxB);
  answer += minA * maxB;
  a.splice(aIdx, 1);
  b.splice(bIdx, 1);
}
console.log(answer);
