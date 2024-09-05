const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let arr1 = [];
for (let i = 1; i <= n; i++) {
  const [ans, strike, ball] = input[i].split(" ").map(Number);
  const ansStr = String(ans);

  const arr2 = [];
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        if (i === j || j === k || k === i) continue;
        const numStr = String(i) + String(j) + String(k);
        const count = { strike: 0, ball: 0 };
        for (let l = 0; l < String(numStr).length; l++) {
          const idx = ansStr.indexOf(numStr[l]);
          if (idx === l) count.strike++;
          else if (idx !== -1) count.ball++;
        }
        if (count.strike === strike && count.ball === ball) arr2.push(numStr);
      }
    }
  }
  if (arr1.length === 0) arr1 = [...arr2];
  else arr1 = arr2.filter((a) => arr1.includes(a));
}
console.log(arr1.length);
