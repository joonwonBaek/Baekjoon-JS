const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

[a, b] = input[0].trim().split(" ").map(Number);

let cnt = 0;

while (b > a) {
  if (b % 10 === 1) {
    b = Number(String(b).slice(0, String(b).length - 1));
    cnt += 1;
  } else if (b % 2 === 0) {
    b /= 2;
    cnt += 1;
  } else {
    break;
  }
}

if (b === a) {
  console.log(cnt + 1);
} else {
  console.log(-1);
}
