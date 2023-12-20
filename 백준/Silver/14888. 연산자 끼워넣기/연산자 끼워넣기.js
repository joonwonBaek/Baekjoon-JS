const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let num = input[1].split(" ").map(Number);
let operator = input[2].split(" ").map(Number);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const calculator = ["+", "-", "*", "/"];

const isCalculate = (n, a, b) => {
  switch (n) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return parseInt(a / b);
  }
};

const dfs = (count, result) => {
  if (count === n - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  } else {
    for (let i = 0; i < operator.length; i++) {
      if (operator[i] === 0) {
        continue;
      }
      operator[i]--;
      dfs(count + 1, isCalculate(calculator[i], result, num[count + 1]));
      operator[i]++;
    }
  }
};

dfs(0, num[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);
