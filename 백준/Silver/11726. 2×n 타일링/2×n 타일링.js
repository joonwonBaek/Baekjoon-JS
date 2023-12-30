const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = new Array(n).fill(0);
arr[0] = 1;
arr[1] = 2;

for (let i = 2; i < n; i++) {
  arr[i] = (arr[i - 2] + arr[i - 1]) % 10007;
}

console.log(arr[n - 1]);
