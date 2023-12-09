const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [r, c] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= r; i++) {
  arr.push(input[i]);
}
let visited = new Array(26).fill(false);
let maxDepth = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
    if (visited[arr[nx][ny].charCodeAt() - 65]) continue;
    visited[arr[nx][ny].charCodeAt() - 65] = true;
    dfs(depth + 1, nx, ny);
    visited[arr[nx][ny].charCodeAt() - 65] = false;
  }
}
visited[arr[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);
console.log(maxDepth);
