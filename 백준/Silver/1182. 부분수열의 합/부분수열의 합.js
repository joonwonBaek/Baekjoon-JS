const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);
let ans = [];
let cnt = 0;
const dfs = (start) => {
  const sum = ans.reduce((a, c) => {
    return a + c;
  }, 0);

  if (sum === s && ans.length > 0) {
    cnt += 1;
  }

  for (let i = start; i < n; i++) {
    ans.push(arr[i]);
    dfs(i + 1);
    ans.pop();
  }
};

dfs(0);

console.log(cnt);
