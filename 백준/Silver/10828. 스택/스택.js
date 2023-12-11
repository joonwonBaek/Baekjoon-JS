const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let stack = [];
let top = 0;
let answer = "";
for (let i = 1; i <= n; i++) {
  const command = input[i].split(" ")[0].trim();
  let result = "";
  switch (command) {
    case "push":
      const pushItem = input[i].split(" ")[1].trim();
      stack[top++] = pushItem;
      break;
    case "pop":
      if (top) {
        top -= 1;
        result = stack.splice(-1);
        answer += result + " ";
      } else {
        result = -1;
        answer += result + " ";
      }
      break;
    case "top":
      result = top ? stack[top - 1] : -1;
      answer += result + " ";
      break;
    case "empty":
      result = top ? 0 : 1;
      answer += result + " ";
      break;
    case "size":
      result = top;
      answer += result + " ";
      break;
    default:
      break;
  }
}

console.log(answer);
