const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const k = Number(input[1]);

const junglePrefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
const oceanPrefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
const icePrefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  const temp = input[i + 1].trim().split("");
  for (let j = 1; j <= n; j++) {
    junglePrefix[i][j] =
      junglePrefix[i - 1][j] +
      junglePrefix[i][j - 1] -
      junglePrefix[i - 1][j - 1];
    oceanPrefix[i][j] =
      oceanPrefix[i - 1][j] + oceanPrefix[i][j - 1] - oceanPrefix[i - 1][j - 1];
    icePrefix[i][j] =
      icePrefix[i - 1][j] + icePrefix[i][j - 1] - icePrefix[i - 1][j - 1];
    if (temp[j - 1] === "J") junglePrefix[i][j] += 1;
    if (temp[j - 1] === "O") oceanPrefix[i][j] += 1;
    if (temp[j - 1] === "I") icePrefix[i][j] += 1;
  }
}

let answer = "";
for (let i = m + 2; i <= m + k + 1; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  const jungleCount =
    junglePrefix[c][d] -
    junglePrefix[c][b - 1] -
    junglePrefix[a - 1][d] +
    junglePrefix[a - 1][b - 1];
  const oceanCount =
    oceanPrefix[c][d] -
    oceanPrefix[a - 1][d] -
    oceanPrefix[c][b - 1] +
    oceanPrefix[a - 1][b - 1];
  const iceCount =
    icePrefix[c][d] -
    icePrefix[a - 1][d] -
    icePrefix[c][b - 1] +
    icePrefix[a - 1][b - 1];
  answer += `${jungleCount} ${oceanCount} ${iceCount}\n`;
}

console.log(answer);
