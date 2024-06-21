const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let answer = [];
const dfs = (sum, result) => {
  if (sum > n) {
    return;
  }
  if (n === sum) {
    answer.push(result.join("+"));
  }
  for (let i = 1; i <= 3; i++) {
    result.push(i);
    dfs(sum + i, result);
    result.pop();
  }
};

dfs(0, []);

if (answer.length < k) {
  console.log(-1);
} else {
  console.log(answer[k - 1]);
}
