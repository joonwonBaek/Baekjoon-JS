const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const bfs = (cnt) => {
  let queue = [n];
  let visited = Array.from({ length: 100001 }, () => 0);
  visited[n] = 1;

  while (queue.length) {
    let x = queue.shift();
    if (x === k) {
      return visited[x] - 1;
    }
    for (let nx of [x - 1, x + 1, x * 2]) {
      if (nx >= 0 && nx <= 100000 && !visited[nx]) {
        visited[nx] = visited[x] + 1;
        queue.push(nx);
      }
    }
  }
};

console.log(bfs(0));
