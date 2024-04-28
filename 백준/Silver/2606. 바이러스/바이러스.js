const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

c = Number(input[0]);
n = Number(input[1]);

const graph = Array.from({ length: c + 1 }, () => []);
let visited = [...new Array(c + 1).fill(0)];
let ans = 0;

for (let i = 2; i < n + 2; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

visited[1] = 1;
const dfs = (start) => {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      dfs(end);
      ans += 1;
    }
  }
};
dfs(1);
console.log(ans);
