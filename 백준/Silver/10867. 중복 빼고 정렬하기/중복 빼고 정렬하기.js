const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let answer = [...new Set(arr)].sort((a, b) => a - b);

console.log(answer.join(" "));
