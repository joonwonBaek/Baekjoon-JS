const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const rotate = (arr) => {
  let change = Array.from(Array(n), () => Array(m).fill(0));

  let startRow = 0;
  let startColumn = 0;
  let maxRow = n;
  let maxColumn = m;

  while (startRow < maxRow && startColumn < maxColumn) {
    // 맨위 column 2~m까지
    for (let column = startColumn; column < maxColumn - 1; column++) {
      change[startRow][column] = arr[startRow][column + 1];
    }

    // 왼쪽 row 1~n-1까지
    for (let row = startRow + 1; row < maxRow; row++) {
      change[row][startColumn] = arr[row - 1][startColumn];
    }

    // 아래 column 1~m-1
    for (let column = startColumn + 1; column < maxColumn; column++) {
      change[maxRow - 1][column] = arr[maxRow - 1][column - 1];
    }

    // 오른쪽 row 2~n까지
    for (let row = startRow; row < maxRow - 1; row++) {
      change[row][maxColumn - 1] = arr[row + 1][maxColumn - 1];
    }

    startRow++;
    startColumn++;
    maxRow--;
    maxColumn--;
  }

  return change;
};

let answer = arr;
for (let count = 0; count < r; count++) {
  answer = rotate(answer);
}

for (let ans of answer) {
  console.log(ans.join(" "));
}
