const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const tree = Array.from({ length: n + 1 }, () => []);
const answer = new Array(n + 1).fill(0);
const visited = new Array(n + 1).fill(0);

for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  tree[a].push(b);
  tree[b].push(a);
}

const dfs = (start) => {
  visited[start] = 1;
  for (const now of tree[start]) {
    if (visited[now] == 0) {
      answer[now] = start;
      dfs(now);
    }
  }
};

dfs(1);
const temp = answer.slice(2).join("\n");
console.log(temp);
