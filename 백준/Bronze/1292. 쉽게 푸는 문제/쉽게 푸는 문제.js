const { log } = require("console");
let fs = require("fs");
const { exit } = require("process");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let cnt = 0;
let ans = 0;
for (let i = 1; i <= 1000; i++) {
  for (let j = 1; j <= i; j++) {
    cnt += 1;
    if (a <= cnt && cnt <= b) {
      ans += i;
    }
    if (cnt > b) {
      break;
    }
  }
}
console.log(ans);
