const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

const solution = (arr, m) => {
  let answer = [];
  let temp = [];

  const dfs = (depth) => {
    if (depth === m) {
      answer.push(temp.join(" "));
    } else {
      for (const i of arr) {
        if (temp[temp.length - 1] > i) continue;
        temp.push(i);
        dfs(depth + 1);
        temp.pop();
      }
    }
  };
  dfs(0);
  console.log(answer.join("\n"));
};

solution(arr, m);
