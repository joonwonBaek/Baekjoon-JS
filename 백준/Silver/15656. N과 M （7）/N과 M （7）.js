const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].trim().split(" ");
let answer = "";
let result = [];
arr.sort((a, b) => a - b);

const dfs = (depth) => {
  if (depth === m) {
    for (let x of result) {
      answer += x + " ";
    }
    answer += "\n";
    return;
  }
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
    dfs(depth + 1);
    result.pop();
  }
};

dfs(0);
console.log(answer);
