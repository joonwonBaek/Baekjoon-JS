const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  let count = [0, 0, 0, 0];
  let money = Number(input[i]);

  while (money > 0) {
    if (money >= 25) {
      count[0] += 1;
      money -= 25;
    } else if (money >= 10) {
      count[1] += 1;
      money -= 10;
    } else if (money >= 5) {
      count[2] += 1;
      money -= 5;
    } else if (money >= 1) {
      count[3] += 1;
      money -= 1;
    }
  }

  console.log(...count);
}
