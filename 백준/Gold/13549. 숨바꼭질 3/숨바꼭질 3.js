const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const visited = Array(100001).fill(0);

const bfs = () => {
  q = [];
  q.push([n, 0]);
  visited[n] = 1;

  while (q.length) {
    const [now, cnt] = q.shift();

    if (now === k) {
      console.log(cnt);
      return;
    }
    for (const nx of [now * 2, now - 1, now + 1]) {
      if (nx >= 0 && nx <= 100000 && visited[nx] === 0) {
        if (nx === now * 2) {
          q.push([nx, cnt]);
        } else {
          q.push([nx, cnt + 1]);
        }
        visited[nx] = 1;
      }
    }
  }
};

bfs();
