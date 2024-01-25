const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b, n] = input[0].split(" ");

let king = a.trim().split("");
let stone = b.trim().split("");

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

let king1 = king[0].charCodeAt();
let king2 = Number(king[1]);

let stone1 = stone[0].charCodeAt();
let stone2 = Number(stone[1]);

for (let i = 1; i <= n; i++) {
  let arr = input[i].trim();
  const nx = king1 + move[arr][0];
  const ny = king2 + move[arr][1];

  if (65 <= nx && nx <= 72 && 0 < ny && ny <= 8) {
    if (nx === stone1 && ny === stone2) {
      const sx = stone1 + move[arr][0];
      const sy = stone2 + move[arr][1];
      if (65 <= sx && sx <= 72 && 0 < sy && sy <= 8) {
        [king1, king2] = [nx, ny];
        [stone1, stone2] = [sx, sy];
      } else {
        continue;
      }
    } else {
      [king1, king2] = [nx, ny];
    }
  } else {
    continue;
  }
}
const answerKing = String.fromCharCode(king1) + String(king2);
const answerStone = String.fromCharCode(stone1) + String(stone2);

console.log(answerKing);
console.log(answerStone);
