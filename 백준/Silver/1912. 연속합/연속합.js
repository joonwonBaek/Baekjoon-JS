const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let num_arr = input[1].split(" ").map(Number);
let max_num = num_arr[0];
let current_sum = num_arr[0];

for (let i = 1; i < n; i++) {
  current_sum = Math.max(num_arr[i], num_arr[i] + current_sum);

  max_num = Math.max(max_num, current_sum);
}

console.log(max_num);
