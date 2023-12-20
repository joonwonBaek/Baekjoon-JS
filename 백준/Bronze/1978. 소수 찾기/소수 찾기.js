const { log } = require("console");
let fs = require("fs");
const { exit } = require("process");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

let n = Number(input[0]);
let arr = input[1].split(" ").map((x) => Number(x));

console.log(arr.filter((v) => isPrime(v)).length);
