const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [s, e] = input[1].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => 0);

for (let i = 2; i <= m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((el) => el.sort((a, b) => a - b));

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const now = queue.shift();
    const d = [now - 1, now + 1];
    if (graph[now]) {
      d.push(...graph[now]);
    }

    for (const a of d) {
      if (1 <= a <= n && visited[a] === 0) {
        queue.push(a);
        visited[a] = visited[now] + 1;
      }

      if (a === e) {
        return visited[a];
      }
    }
  }
};

const answer = bfs(s);

console.log(answer - 1);
