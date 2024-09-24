const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const words = [];
let answer = n;

for (let i = 1; i <= n; i++) {
  words.push(input[i].trim());
}

for (const word of words) {
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) continue;
    if (word.slice(i + 1).includes(word[i])) {
      answer -= 1;
      break;
    }
  }
}

console.log(answer);
