const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);
const li = [];
let cnt = 0;

const dfs = (depth) => {
  if (depth === 10) {
    s = 0;
    for (let i = 0; i < 10; i++) {
      if (li[i] === arr[i]) s += 1;
    }
    if (s >= 5) cnt += 1;
    return;
  }

  for (let i = 1; i <= 5; i++) {
    if (depth > 1 && li[depth - 2] === i && li[depth - 1] === i) continue;
    li.push(i);
    dfs(depth + 1);
    li.pop();
  }
};

dfs(0);

console.log(cnt);
