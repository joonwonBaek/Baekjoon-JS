const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let answer = [];
let stack = [];
let stackNum = 1;
for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);

  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum += 1;
    answer.push("+");
  }

  let stackPop = stack.pop();
  answer.push("-");

  if (stackPop !== num) {
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));
