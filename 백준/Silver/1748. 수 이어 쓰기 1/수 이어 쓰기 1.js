const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const nlen = String(n).length;

let answer = 0;
let nine = 9;
answer = nlen * (n - 10 ** (nlen - 1) + 1); // 120 => 63 = 21*3
if (nlen > 1) {
  for (let i = 1; i < nlen; i++) {
    answer += nine * i;
    nine *= 10;
  }
}

console.log(answer);
