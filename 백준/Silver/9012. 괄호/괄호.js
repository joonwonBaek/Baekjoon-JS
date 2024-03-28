const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let arr = input[i].trim().split("");
  const stack = [];
  for (let j = 0; j < arr.length; j++) {
    if (stack.length === 0) {
      stack.push(arr[j]);
    } else {
      if (stack[stack.length - 1] === "(" && arr[j] === ")") {
        stack.pop();
      } else {
        stack.push(arr[j]);
      }
    }
  }
  console.log(stack.length === 0 ? "YES" : "NO");
}
