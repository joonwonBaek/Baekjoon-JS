const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0].split("-");
num = [];
for (const a of arr) {
  let sum = 0;
  const temp = a.split("+");
  for (const t of temp) {
    sum += Number(t);
  }
  num.push(sum);
}

ans = num[0];

for (let i = 1; i < num.length; i++) {
  ans -= num[i];
}

console.log(ans);
