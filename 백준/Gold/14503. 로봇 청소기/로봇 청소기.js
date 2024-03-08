const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);

const arr = [];
for (let i = 2; i < n + 2; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let cnt = 0;
const dfs = (x, y, d) => {
  if (arr[x][y] === 0) {
    // 1. 현재 위치를 청소한다.
    arr[x][y] = 2;
    cnt++;
  }

  for (let i = 0; i < 4; i++) {
    let nd = (d + 3 - i) % 4;
    let nx = x + dx[nd];
    let ny = y + dy[nd];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (arr[nx][ny] === 0) {
        // 4칸 중 청소된지 않은 빈 칸이 있는 경우
        dfs(nx, ny, nd);
        return;
      }
    }
  }

  let nx = x - dx[d]; // 2. 네 방향 모두 청소가 이미 되어있거나 벽인 경우 한칸 후진
  let ny = y - dy[d];
  if (arr[nx][ny] === 1) {
    // 2-1. 뒤쪽 방향이 벽이라 후진도 못하는 경우 작동을 멈춘다
    return;
  } else {
    // 2-2. 후진할 수 있는 경우에는 바라보는 방향을 유지한 채로 한 칸 후진을 한다.
    dfs(nx, ny, d);
  }
};

dfs(r, c, d);

console.log(cnt);
