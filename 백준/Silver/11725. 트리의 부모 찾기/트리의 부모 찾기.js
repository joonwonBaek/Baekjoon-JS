const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(0);
for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

q = [];
q.push(1);

while (q.length) {
  const now = q.shift();
  for (const next of graph[now]) {
    if (visited[next] === 0) {
      visited[next] = now;
      q.push(next);
    }
  }
}

for (let i = 2; i <= n; i++) {
  console.log(visited[i]);
}
