const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const answer = [];

for (let i = 0; i < k; i++) {
  answer.push([]);
}

function recur(arr, depth) {
  if (arr.length === 1) {
    answer[depth].push(arr[0]);
    return;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid + 1, arr.length);

  answer[depth].push(arr[mid]);
  recur(left, depth + 1);
  recur(right, depth + 1);
  return;
}

recur(arr, 0);
console.log(answer.map((v) => v.join(" ")).join("\n"));
