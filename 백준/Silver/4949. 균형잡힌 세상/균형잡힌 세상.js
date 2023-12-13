const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const ans = [];
for (let i = 0; i < input.length; i++) {
  const stack = [];
  let text = input[i];
  if (text === ".") break;
  for (let k = 0; k < text.length; k++) {
    if (text[k] === "(" || text[k] === "[") {
      stack.push(text[k]);
    } else if (text[k] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(text[k]);
      }
    } else if (text[k] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        stack.push(text[k]);
      }
    }
  }

  if (stack.length === 0) {
    ans.push("yes");
  } else {
    ans.push("no");
  }
}

console.log(ans.join("\n"));
