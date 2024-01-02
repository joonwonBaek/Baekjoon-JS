const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let map = new Map();

for (let i = 1; i <= n; i++) {
  let num = BigInt(input[i]);
  if (map.has(num)) {
    map.set(num, BigInt(map.get(num)) + BigInt(1));
  } else {
    map.set(num, BigInt(1));
  }
}

let answer = Array.from(map);
answer.sort((a, b) => {
  if (b[1] < a[1]) {
    return -1;
  } else if (b[1] > a[1]) {
    return 1;
  } else {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    else return 0;
  }
});
console.log(answer[0][0].toString());
