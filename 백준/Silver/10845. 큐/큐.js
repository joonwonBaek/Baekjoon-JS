const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let queue = [];
let answer = [];

for (let i = 1; i <= n; i++) {
  let order = input[i].trim().split(" ");
  if (order[0] === "push") {
    queue.push(order[1]);
  } else if (order[0] === "pop") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.shift());
    }
  } else if (order[0] === "size") {
    answer.push(queue.length);
  } else if (order[0] === "empty") {
    answer.push(queue.length === 0 ? 1 : 0);
  } else if (order[0] === "front") {
    answer.push(queue.length === 0 ? -1 : queue[0]);
  } else if (order[0] === "back") {
    answer.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
  }
}

console.log(answer.join("\n"));
