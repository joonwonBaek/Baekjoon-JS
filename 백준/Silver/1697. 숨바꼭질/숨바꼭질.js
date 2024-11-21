const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);

const visited = Array(100001).fill(0);
let cnt = 0;

const bfs = () => {
  const q = [];
  q.push([n, 0]);
  visited[n] = 1;

  while (q.length) {
    const [now, cnt] = q.shift();
    if (now === k) return cnt;
    for (const nx of [now - 1, now + 1, now * 2]) {
      if (nx >= 0 && nx <= 100000 && visited[nx] === 0) {
        visited[nx] = 1;
        q.push([nx, cnt + 1]);
      }
    }
  }
};

console.log(bfs());
