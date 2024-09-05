const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0].split("");
const answer = [];
let current = "";
for (const a of arr) {
  if (a === ">") {
    current += a;
    answer.push(current);
    current = "";
  } else if (a === " ") {
    if (current.includes("<")) {
      current += a;
    } else {
      const temp = current.split("").reverse().join("");
      answer.push(temp);
      answer.push(" ");
      current = "";
    }
  } else if (a === "<") {
    const temp = current.split("").reverse().join("");
    answer.push(temp);
    current = a;
  } else {
    current += a;
  }
}

if (current.length > 0) {
  answer.push(current.split("").reverse().join(""));
}
console.log(answer.join(""));
