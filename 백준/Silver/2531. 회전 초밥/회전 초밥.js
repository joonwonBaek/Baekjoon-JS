const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, d, k, c] = input[0].split(" ").map(Number);
const sushi = [];
for (let i = 1; i <= n; i++) {
  sushi.push(Number(input[i]));
}

for (let i = 0; i < k - 1; i++) {
  sushi.push(sushi[i]);
}

const check = Array(d + 1).fill(0);
check[c] = 1;

let kind = 1; // 초밥의 종류

for (let i = 0; i < k; i++) {
  if (check[sushi[i]] === 0) {
    check[sushi[i]] = 1;
    kind += 1;
  } else {
    check[sushi[i]] += 1;
  }
}

let max = kind;

for (let i = k; i < sushi.length; i++) {
  check[sushi[i - k]] -= 1;
  if (check[sushi[i - k]] === 0) kind -= 1;
  check[sushi[i]] += 1;
  if (check[sushi[i]] === 1 && sushi[i] !== c) kind += 1;
  max = Math.max(max, kind);
}

console.log(max);
