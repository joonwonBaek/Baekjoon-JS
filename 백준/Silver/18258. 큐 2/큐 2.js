const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const queue = [];
const answer = [];
let front = 0;

for (let i = 1; i <= n; i++) {
  const command = input[i].trim().split(" ");
  if (command[0] === "push") {
    queue.push(Number(command[1]));
  } else if (command[0] === "pop") {
    if (front < queue.length) {
      answer.push(queue[front]);
      front++;
    } else {
      answer.push(-1);
    }
  } else if (command[0] === "size") {
    answer.push(queue.length - front);
  } else if (command[0] === "empty") {
    answer.push(queue.length === front ? 1 : 0);
  } else if (command[0] === "front") {
    answer.push(front < queue.length ? queue[front] : -1);
  } else if (command[0] === "back") {
    answer.push(front < queue.length ? queue[queue.length - 1] : -1);
  }
}

console.log(answer.join("\n"));
