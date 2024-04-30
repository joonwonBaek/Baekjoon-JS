const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const visited = new Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);
const answer = new Array(n + 1).fill(0);
for (i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const dfs = (start) => {
  visited[start] = 1;

  for (const now of graph[start]) {
    if (visited[now] == 0) {
      answer[now] = start;
      dfs(now);
    }
  }
};

dfs(1);

let result = "";
for (let i = 2; i < answer.length; i++) {
  result += answer[i] + "\n";
}

console.log(result);
