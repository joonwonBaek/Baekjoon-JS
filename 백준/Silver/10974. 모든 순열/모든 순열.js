const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

let visited = new Array(n).fill(false);
let selected = new Array(n).fill(0);
let answer = "";

function dfs(depth) {
  if (depth === n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(selected[i]);
    }
    answer += result.join(" ") + "\n";
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    selected[depth] = i;
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
  }
}

dfs(0);

console.log(answer);
