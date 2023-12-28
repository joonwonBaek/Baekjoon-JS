const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = [0, 0, 0];
let n = Number(input[0]);

while (n > 0) {
  if (n >= 300) {
    n -= 300;
    arr[0] += 1
  } else if ( n >= 60) {
    n -= 60;
    arr[1] += 1
  } else if (n >= 10) {
    n -= 10;
    arr[2] += 1
  } else {
    break;
  }
}

if(n === 0) {
  console.log(...arr);
} else {
  console.log(-1);
}

