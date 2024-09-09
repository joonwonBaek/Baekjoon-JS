const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k, x] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

const visited = Array.from({ length: n + 1 }, () => 0);

const answer = [];

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const v = queue.shift();
    if (visited[v] === k + 1) {
      answer.push(v);
      continue;
    }

    for (const next of graph[v]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = visited[v] + 1;
      }
    }
  }
};

bfs(x);

answer.sort((a, b) => a - b);

if (answer.length === 0) {
  console.log(-1);
} else {
  answer.sort((a, b) => a - b);
  const temp = answer.join("\n");
  console.log(temp);
}
