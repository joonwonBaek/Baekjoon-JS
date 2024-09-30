const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = input[0].trim().split("");
const q = Number(input[1]);

const prefixSum = Array.from({ length: 26 }, () =>
  Array(word.length + 1).fill(0)
);

for (let i = 0; i < word.length; i++) {
  const charIndex = word[i].charCodeAt(0) - 97;
  for (let j = 0; j < 26; j++) {
    prefixSum[j][i + 1] = prefixSum[j][i] + (charIndex === j ? 1 : 0);
  }
}

let result = "";

for (let i = 2; i <= q + 1; i++) {
  const [a, l, r] = input[i].split(" ");
  const charIndex = a.charCodeAt(0) - 97;

  const left = Number(l);
  const right = Number(r);

  const answer = prefixSum[charIndex][right + 1] - prefixSum[charIndex][left];

  result += answer + "\n";
}

console.log(result);
