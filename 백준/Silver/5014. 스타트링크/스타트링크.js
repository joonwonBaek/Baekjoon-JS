const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [f, s, g, u, d] = input[0].split(" ").map(Number);
const visited = Array.from({ length: f + 1 }, () => 0);

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;

  while (queue.length) {
    const n = queue.shift();

    if (n === g) return visited[n] - 1;

    const arr = [n + u, n - d];

    for (const a of arr) {
      if (0 < a && a <= f && !visited[a]) {
        visited[a] = visited[n] + 1;
        queue.push(a);
      }
    }
  }
  return "use the stairs";
};

console.log(bfs(s));
