const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const n = Number(input[i]);
  cnt = 1;
  temp = 1;

  while (true) {
    if (temp % n === 0) {
      console.log(cnt);
      break;
    }
    cnt += 1;
    temp = (temp * 10 + 1) % n;
  }
}
