const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = input[0].trim().split("");
let flag = false;
const wordLen = word.length;
let answer = 0;

for (let i = 0; i < parseInt(wordLen / 2); i++) {
  // 펠린드롬이 아닌 경우
  if (word[i] !== word[wordLen - i - 1]) {
    answer = wordLen;
    break;
  } else if (word[i] != word[i + 1]) {
    flag = true;
  }
}

if (answer) {
  console.log(answer);
} else {
  if (flag) console.log(wordLen - 1);
  else console.log(-1);
}
