const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const arr = [];
const queue = [];

for (let i = 1; i <= n; i++) {
  queue.push(i);
}

let count = 1;
while (queue.length) {
  const shiftItem = queue.shift();
  if (count % k === 0) {
    arr.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  count += 1;
}

console.log(`<${arr.join(", ")}>`);
