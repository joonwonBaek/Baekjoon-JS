const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let rgb = [];

for (let i = 1; i <= n; i++) {
  rgb.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  rgb[i][0] += Math.min(rgb[i - 1][1], rgb[i - 1][2]);
  rgb[i][1] += Math.min(rgb[i - 1][0], rgb[i - 1][2]);
  rgb[i][2] += Math.min(rgb[i - 1][0], rgb[i - 1][1]);
}

console.log(Math.min(...rgb[n - 1]));
