let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function dfs(result, depth) {
  if (depth == n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i++) {
      str += arr[i] + result[i];
    }
    str += arr[n - 1] + "";
    current = eval(str.split(" ").join(""));
    if (current === 0) {
      console.log(str);
    }
    return;
  }
  for (let x of [" ", "+", "-"]) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}
let tc = Number(input[0]);
let n = 0;
let arr = [];
for (let i = 0; i < tc; i++) {
  n = Number(input[i + 1]);
  arr = [];
  for (let j = 1; j <= n; j++) {
    arr.push(j);
  }
  dfs([], 0);
  console.log();
}
