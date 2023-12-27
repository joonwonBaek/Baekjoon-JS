const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  let k = Number(input[2 * i - 1]); // 층
  let n = Number(input[2 * i]); // 호

  let arr = new Array(k + 1).fill(0).map(() => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    arr[0][j] = j + 1;
  }

  for (let x = 1; x < k + 1; x++) {
    for (let y = 0; y < n; y++) {
      if (y === 0) {
        arr[x][y] = 1;
      } else {
        arr[x][y] = arr[x - 1][y] + arr[x][y - 1];
      }
    }
  }
  console.log(arr[k][n - 1]);
}
