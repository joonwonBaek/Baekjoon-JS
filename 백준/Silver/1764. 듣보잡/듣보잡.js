const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const answer = [];
const words1 = [];
const words2 = new Set();
for (let i = 1; i <= n; i++) {
  words1.push(input[i].trim());
}
for (let i = n + 1; i <= n + m; i++) {
  words2.add(input[i].trim());
}

for (const word of words1) {
  if (words2.has(word)) answer.push(word);
}

console.log(answer.length);

console.log(answer.sort().join("\n"));
