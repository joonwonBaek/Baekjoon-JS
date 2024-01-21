const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const [nk, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = nk.split(" ").map(Number);
const A = arr[0].split(" ").map(Number);

const START = 0;
const END = Number(n) - 1;
const ROBOT = 1;

let belt = new Array(Number(n) * 2);
let zero_cnt = 0;
let turn = 0;

while (zero_cnt < k) {
  turn++;

  // 1
  belt.unshift(belt.pop());
  A.unshift(A.pop());
  pop_robot();

  // 2

  for (let i = END - 1; i >= START; i--) {
    if (belt[i] === ROBOT && belt[i + 1] !== ROBOT && A[i + 1] > 0) {
      belt[i] = null;
      belt[i + 1] = ROBOT;
      reduce_zero(i + 1);
    }
  }
  pop_robot();

  // 3

  if (A[START] > 0) {
    belt[START] = ROBOT;
    reduce_zero(START);
  }
}

console.log(turn);

function pop_robot() {
  if (belt[END] === ROBOT) belt[END] = null;
}

function reduce_zero(i) {
  A[i] -= 1;
  if (A[i] === 0) {
    zero_cnt += 1;
  }
}
