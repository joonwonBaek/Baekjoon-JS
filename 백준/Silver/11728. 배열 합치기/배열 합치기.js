const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

const answer = [];

const a_length = a.length;
const b_length = b.length;

let a_idx = 0;
let b_idx = 0;

while (a_idx < a_length || b_idx < b_length) {
  if (a_idx < a_length && b_idx < b_length) {
    if (a[a_idx] > b[b_idx]) {
      answer.push(b[b_idx]);
      b_idx += 1;
    } else {
      answer.push(a[a_idx]);
      a_idx += 1;
    }
  } else {
    if (a_idx < a_length) {
      answer.push(...a.slice(a_idx));
      a_idx = a_length;
    } else {
      answer.push(...b.slice(b_idx));
      b_idx = b_length;
    }
  }
}

console.log(answer.join(" "));
