const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].trim().split(" ");
let visited = new Array(n).fill(false);
let answer = "";
let result = [];
arr.sort((a, b) => a - b);

const dfs = (start, depth) => {
  if (depth === m) {
    for (let x of result) {
      answer += x + " ";
    }
    answer += "\n";
  }
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    result.push(arr[i]);
    visited[i] = true;
    dfs(i, depth + 1);
    result.pop();
    visited[i] = false;
  }
};

dfs(0, 0);
console.log(answer);
