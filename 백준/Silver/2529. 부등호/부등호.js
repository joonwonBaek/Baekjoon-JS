const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = Number(input[0]);
const arr = input[1].split(" ");
const visited = new Array(10).fill(0);
const result = [];

const dfs = (depth, num) => {
  if (depth === k) {
    result.push(num);
    return;
  }
  for (let i = 9; i > -1; i--) {
    if (arr[depth] === ">") {
      if (Number(num[num.length - 1]) > i && visited[i] == 0) {
        visited[i] = 1;
        dfs(depth + 1, num + String(i));
        visited[i] = 0;
      }
    }
    if (arr[depth] === "<") {
      if (Number(num[num.length - 1]) < i && visited[i] == 0) {
        visited[i] = 1;
        dfs(depth + 1, num + String(i));
        visited[i] = 0;
      }
    }
  }
};
for (let i = 9; i > -1; i--) {
  visited[i] = 1;
  dfs(0, String(i));
  visited[i] = 0;
}
console.log(result[0]);
console.log(result[result.length - 1]);
