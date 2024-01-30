const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0].split("").map(Number);
if (!input[0].split("").includes("0")) {
  console.log(-1);
} else {
  const sum = arr.reduce((arr, cur) => arr + cur);
  if (sum % 3 === 0) {
    arr.sort((a, b) => b - a);
    console.log(arr.join(""));
  } else {
    console.log(-1);
  }
}
