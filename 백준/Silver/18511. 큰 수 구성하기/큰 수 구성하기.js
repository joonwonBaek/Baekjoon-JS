const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].trim().split(" ").map(Number);

const arr = input[1].trim().split(" ").map(Number);

let answer = 0;

const dfs = (num) => {
  if (num > n) {
    return;
  }
  if (answer < num) {
    answer = num;
  }

  for (let i = k - 1; i > -1; i--) {
    dfs(num * 10 + arr[i]);
  }
};

dfs(0);

console.log(answer);
