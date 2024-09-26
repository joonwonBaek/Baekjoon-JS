const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l, r, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const visited = Array(n).fill(0);
let answer = 0;

const dfs = (depth, total, idx) => {
  if (depth >= 2) {
    const temp = total.split(",").map(Number);
    const sumTemp = temp.reduce((arr, cur) => {
      return arr + cur;
    }, 0);
    const maxNum = Math.max(...temp);
    const minNum = Math.min(...temp);
    if (sumTemp >= l && sumTemp <= r) {
      if (maxNum - minNum >= x) {
        answer += 1;
      }
    }
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(depth + 1, total + "," + String(arr[i]), i);
      visited[i] = 0;
    }
  }
};

for (let i = 0; i < n; i++) {
  visited[i] = 1;
  dfs(1, String(arr[i]), i);
  visited[i] = 0;
}

console.log(answer);
