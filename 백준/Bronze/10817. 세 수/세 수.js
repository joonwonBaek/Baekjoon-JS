const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[1]);
