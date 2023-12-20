const { log } = require("console");
let fs = require("fs");
const { exit } = require("process");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let arr = input[i].split(" ").map(Number);

  arr.sort((a, b) => b - a);

  console.log(arr[2]);
}
