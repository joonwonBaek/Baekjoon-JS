const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const cow = new Array(11);
let cnt = 0;

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (cow[a] === undefined) {
    cow[a] = b;
  } else {
    if (cow[a] !== b) {
      cow[a] = b;
      cnt++;
    }
  }
}

console.log(cnt);
