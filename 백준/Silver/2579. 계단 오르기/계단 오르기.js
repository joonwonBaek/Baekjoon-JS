const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
let stair = new Array(n);

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

stair[0] = arr[0];
stair[1] = stair[0] + arr[1];
stair[2] = Math.max(arr[0], arr[1]) + arr[2];

for (let k = 3; k < n; k++) {
  stair[k] = Math.max(
    stair[k - 3] + arr[k - 1] + arr[k],
    stair[k - 2] + arr[k]
  );
}

console.log(stair[n - 1]);
