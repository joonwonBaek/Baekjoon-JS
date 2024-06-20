const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const x_arr = [];
const y_arr = [];
let x_temp = 0;
let y_temp = 0;
let answer = 0;

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  x_arr.push(x);
  y_arr.push(y);
}

x_arr.sort((a, b) => a - b);
y_arr.sort((a, b) => a - b);

x_temp = x_arr[parseInt((n - 1) / 2)];
y_temp = y_arr[parseInt((n - 1) / 2)];

for (let i = 0; i < n; i++) {
  answer += Math.abs(x_temp - x_arr[i]);
  answer += Math.abs(y_temp - y_arr[i]);
}

console.log(answer);
