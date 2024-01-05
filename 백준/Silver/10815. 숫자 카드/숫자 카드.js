const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr1 = new Set(input[1].split(" ").map((x) => Number(x)));
let m = Number(input[2]);
let arr2 = new Set(input[3].split(" ").map((x) => Number(x)));

let result = [];

for (let x of arr2) {
  if (arr1.has(x)) result.push(1);
  else result.push(0);
}

console.log(...result);
