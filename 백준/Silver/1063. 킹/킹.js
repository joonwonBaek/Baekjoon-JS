const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// A-H열을 숫자로 라벨링
const pos = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
};

// 방향 정의
const move = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

const [a, b, n] = input[0].split(" ");

let [king_x, king_y] = a.split("");
let [stone_x, stone_y] = b.split("");

king_y = Number(king_y);
stone_y = Number(stone_y);

let king = [pos[king_x], king_y];
let stone = [pos[stone_x], stone_y];

for (let i = 1; i <= Number(n); i++) {
  const command = input[i].trim();
  const nx = king[0] + move[command][0];
  const ny = king[1] + move[command][1];

  if (0 < nx && nx <= 8 && 0 < ny && ny <= 8) {
    if (nx === stone[0] && ny === stone[1]) {
      const sx = stone[0] + move[command][0];
      const sy = stone[1] + move[command][1];
      if (0 < sx && sx <= 8 && 0 < sy && sy <= 8) {
        king = [nx, ny];
        stone = [sx, sy];
      } else {
        continue;
      }
    } else {
      king = [nx, ny];
    }
  } else {
    continue;
  }
}
const result = [];

const kingAns = Object.keys(pos).find((key) => pos[key] === king[0]);
const stoneAns = Object.keys(pos).find((key) => pos[key] === stone[0]);

result.push([kingAns, king[1]].join(""));
result.push([stoneAns, stone[1]].join(""));

console.log(result.join("\n"));
