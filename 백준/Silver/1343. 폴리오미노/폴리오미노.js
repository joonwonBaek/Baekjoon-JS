const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0].trim();

const a_arr = arr.replaceAll("XXXX", "AAAA");
const all_arr = a_arr.replaceAll("XX", "BB");

let answer = "";

for (let i = 0; i < all_arr.length; i++) {
  if (all_arr[i] === "X") {
    answer = "-1";
    break;
  } else {
    answer = all_arr;
  }
}

console.log(answer);
