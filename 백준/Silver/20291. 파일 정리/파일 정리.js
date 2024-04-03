const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const file = new Map();

let answer = "";

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].trim().split(".");
  if (!file.has(b)) {
    file.set(b, 1);
  } else {
    file.set(b, file.get(b) + 1);
  }
}

const fileArray = [...file];
fileArray.sort();

for (const [key, value] of fileArray) {
  answer += `${key} ${value}\n`;
}

console.log(answer);
