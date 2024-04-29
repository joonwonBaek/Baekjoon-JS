const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let end = 0;
let ans = 0;

const arr = [];
for (let i = 1; i <= n; i++) {
  const data = input[i].split(" ").map(Number);
  arr.push(data);
}
arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

for (const a of arr) {
  if (a[0] >= end) {
    end = a[1];
    ans += 1;
  }
}

console.log(ans);
