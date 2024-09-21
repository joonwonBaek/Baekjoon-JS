const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
let answer = "";

const next_permutation = (word) => {
  const wordArr = word.split("");
  const wordLen = word.length;

  let i = wordLen - 2;

  while (i >= 0 && wordArr[i] >= wordArr[i + 1]) {
    i -= 1;
  }

  if (i === -1) {
    return wordArr.join("");
  }

  let j = wordLen - 1;

  while (wordArr[i] >= wordArr[j]) {
    j -= 1;
  }

  [wordArr[i], wordArr[j]] = [wordArr[j], wordArr[i]];

  let left = i + 1;
  let right = wordLen - 1;

  while (left < right) {
    [wordArr[left], wordArr[right]] = [wordArr[right], wordArr[left]];
    left += 1;
    right -= 1;
  }

  return wordArr.join("");
};

for (let i = 1; i <= t; i++) {
  const word = input[i].trim();
  answer += next_permutation(word) + "\n";
}

console.log(answer);
