const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [k, l] = input.shift().split(" ").map(Number);

const arr = input.map((i) => i.trim());
const map = new Map();
const stack = [];

for (let i = 0; i < l; i++) {
  if (map.has(arr[i])) {
    map.delete(arr[i]);
    map.set(arr[i], 1);
  } else {
    map.set(arr[i], 1);
  }
}

let count = 0;
let answer = [];
map.forEach((value, key) => {
  if (count < k) {
    //k번째 까지 출력위함
    answer.push(key);
    count++;
  }
});

console.log(answer.join("\n"));
