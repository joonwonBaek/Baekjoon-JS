const { log } = require("console");
let fs = require("fs");
const { exit } = require("process");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].trim().split("");
let stack = [];

for (let i = 0; i < arr.length; i++) {
  if (stack.length == 0 && (arr[i] === ")" || arr[i] === "]")) {
    console.log(0);
    exit();
  }
  if (arr[i] === "(" || arr[i] === "[") stack.push(arr[i]);

  if (arr[i] === ")") {
    if (stack[stack.length - 1] === "(") {
      stack.pop();
      stack.push(2);
    } else if (
      stack[stack.length - 2] === "(" &&
      stack[stack.length - 1] !== "["
    ) {
      const num = stack.pop();
      stack.pop();
      stack.push(2 * num);
    } else {
      console.log(0);
      exit();
    }
  }

  if (arr[i] === "]") {
    if (stack[stack.length - 1] === "[") {
      stack.pop();
      stack.push(3);
    } else if (
      stack[stack.length - 2] === "[" &&
      stack[stack.length - 1] !== "("
    ) {
      const num = stack.pop();
      stack.pop();
      stack.push(3 * num);
    } else {
      console.log(0);
      exit();
    }
  }

  if (
    typeof stack[stack.length - 1] === "number" &&
    typeof stack[stack.length - 2] === "number"
  ) {
    const num1 = stack.pop();
    const num2 = stack.pop();
    stack.push(num1 + num2);
  }
}

if (stack.length !== 1 || typeof stack[0] != "number") {
  console.log(0);
} else {
  console.log(stack[0]);
}
