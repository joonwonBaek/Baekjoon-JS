const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dir = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [-1, 0, 0],
  [0, -1, 0],
  [0, 0, -1],
];
const [m, n, h] = input.shift().split(" ").map(Number);
const box = [];
for (let i = 1; i <= h; i++) {
  const temp = [];
  for (let j = 1; j <= n; j++) {
    temp.push(input.shift().split(" ").map(Number));
  }
  box.push(temp);
}

const queue = [];
let unripe = 0;
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (box[i][j][k] === 0) unripe += 1;
      if (box[i][j][k] === 1) queue.push([i, j, k, 0]);
    }
  }
}

let idx = 0;
let answer = 0;

while (queue.length > idx) {
  const [z, x, y, days] = queue[idx++];

  for (const [dx, dy, dz] of dir) {
    const [nx, ny, nz] = [x + dx, y + dy, z + dz];

    if (
      nz >= 0 &&
      nz < h &&
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      !box[nz][nx][ny]
    ) {
      box[nz][nx][ny] = 1;
      queue.push([nz, nx, ny, days + 1]);
      unripe -= 1;
    }
  }
  answer = days;
}

console.log(unripe ? -1 : answer);
