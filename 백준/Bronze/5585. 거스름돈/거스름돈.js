const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let money = 1000 - Number(input[0]);
let cnt = 0;
while (money !== 0) {
  if (money >= 500) {
    money = money - 500;
    cnt += 1;
  } else if (money >= 100) {
    money = money - 100;
    cnt += 1;
  } else if (money >= 50) {
    money = money - 50;
    cnt += 1;
  } else if (money >= 10) {
    money = money - 10;
    cnt += 1;
  } else if (money >= 5) {
    money = money - 5;
    cnt += 1;
  } else if (money >= 1) {
    money = money - 1;
    cnt += 1;
  }
}

console.log(cnt);
