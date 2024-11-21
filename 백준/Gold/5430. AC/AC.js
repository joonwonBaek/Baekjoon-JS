const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);
for (let i = 1; i <= t * 3; i += 3) {
  const fn = input[i].split("");
  const n = Number(input[i + 1]);
  const arr = JSON.parse(input[i + 2]);
  let isReverse = false;
  let isError = false;
  for (const f of fn) {
    if (f === "R") {
      isReverse = !isReverse;
    }
    if (f === "D") {
      if (arr.length === 0) {
        isError = true;
      }
      if (isReverse) {
        arr.pop();
      }
      if (!isReverse) {
        arr.shift();
      }
    }
  }
  if (isError) {
    console.log("error");
  } else {
    if (isReverse) {
      console.log(JSON.stringify(arr.reverse()));
    } else {
      console.log(JSON.stringify(arr));
    }
  }
}
