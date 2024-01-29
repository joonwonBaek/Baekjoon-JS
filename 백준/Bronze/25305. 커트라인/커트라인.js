const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ");

arr.sort((a, b) => b - a);

console.log(arr[k - 1]);
