const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const words = [];
let cnt = 0;

for (let i = 1; i <= n; i++) {
  cnt += input[i].trim().length;
  words.push(input[i].trim());
}

const baseLen = parseInt((m - cnt) / (n - 1));
let answer = words[0];
let r = m - cnt - baseLen * (n - 1);

for (let i = 1; i < n; i++) {
  if (words[i][0] === words[i][0].toLowerCase() && r !== 0) {
    const temp = "_".repeat(baseLen + 1) + words[i];
    r -= 1;
    answer += temp;
  } else if (i + r === n) {
    const temp = "_".repeat(baseLen + 1) + words[i];
    r -= 1;
    answer += temp;
  } else {
    const temp = "_".repeat(baseLen) + words[i];
    answer += temp;
  }
}

console.log(answer);
