const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let answer = 0;

while (true) {
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 1) {
      arr[i] -= 1;
      answer += 1;
    }
  }
  let cnt = arr.filter((element) => 0 === element).length;
  if (cnt === n) {
    break;
  }
  for (let i = 0; i < n; i++) {
    arr[i] /= 2;
  }
  answer += 1;
}

console.log(answer);
