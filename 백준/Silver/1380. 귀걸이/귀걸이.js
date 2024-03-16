const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
let answer = [];
while (idx < input.length) {
  const n = Number(input[idx]);
  if (n === 0) break;
  idx += 1;
  const arr = new Array(n).fill(0);
  const name = [];
  for (let i = 0; i < n; i++) {
    name.push(input[idx]);
    idx++;
  }
  for (let i = idx; i < idx + 2 * n - 1; i++) {
    const [num, cnt] = input[i].split(" ").map(Number);
    arr[num - 1] += cnt === 1 ? 1 : -1;
  }
  idx += 2 * n - 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      answer.push(name[i]);
    }
  }
}

answer.forEach((v, i) => {
  console.log(`${i + 1} ${v}`);
});
