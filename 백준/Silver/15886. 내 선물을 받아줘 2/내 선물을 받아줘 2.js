const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const word = input[1].split("");

let cnt = 1;

for (let i = 1; i < n; i++) {
  if (word[i] === "E") {
    if (word[i - 1] === "W") {
      cnt += 1;
    }
  }
}

console.log(cnt);
