const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let money = Number(input[0]);

let cnt = 0;

if (money === 1 || money === 3) {
  console.log(-1);
  return;
}

while (money > 0) {
  if (money % 2 === 1 || money % 5 === 0) {
    cnt += 1;
    money -= 5;
  } else {
    cnt += 1;
    money -= 2;
  }
}

console.log(cnt);
