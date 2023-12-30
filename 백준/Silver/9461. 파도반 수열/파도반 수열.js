const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = new Array(n).fill(0);
arr[0] = 1;
arr[1] = 1;
arr[2] = 1;

for (let i = 1; i <= n; i++) {
  let a = Number(input[i]);
  for (let k = 3; k < a; k++) {
    arr[k] = arr[k - 2] + arr[k - 3];
  }

  console.log(arr[a - 1]);
}
