const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map(Number);
let total = arr.reduce((a, b) => a + b);
let fake = total - 100;
let found = false;

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (arr[i] + arr[j] === fake) {
      arr.splice(j, 1);
      arr.splice(i, 1);
      found = true;
      break;
    }
  }
  if (found) break;
}

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
