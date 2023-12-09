const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let stack = [];
  arr = input[i].trim().split("");
  for (let k = 0; k < arr.length; k++) {
    if (stack.length === 0) {
      stack.push(arr[k]);
    } else {
      if (stack[stack.length - 1] === arr[k]) {
        stack.push(arr[k]);
      } else {
        if (stack[stack.length - 1] === "(" && arr[k] === ")") {
          stack.pop();
        }
      }
    }
  }
  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
