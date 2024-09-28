const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const energy = input[1].split(" ").map(Number);
let answer = 0;

const dfs = (arr, total) => {
  if (arr.length === 2) {
    answer = Math.max(answer, total);
    return;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    const temp = [...arr.slice(0, i), ...arr.slice(i + 1)];
    dfs(temp, total + arr[i - 1] * arr[i + 1]);
  }
};

dfs(energy, 0);

console.log(answer);
