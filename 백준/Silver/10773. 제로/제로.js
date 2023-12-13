const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let k = Number(input[0]);
let stack = [];
for (let i = 1; i <= k; i++) {
  let num = Number(input[i]);
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

let sum = 0;
for (let x of stack) {
  sum += x;
}

console.log(sum);
