const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = 1;
const t = Number(input[0]);
for (let i = 0; i < t; i++) {
  const n = Number(input[cnt]);
  const people = [];
  for (let j = cnt + 1; j < n + cnt + 1; j++) {
    const arr = input[j].split(" ").map(Number);
    people.push(arr);
  }

  people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let answer = 1;
  let second = people[0][1];
  for (let i = 1; i < n; i++) {
    if (people[i][1] < second) {
      answer += 1;
      second = people[i][1];
    }
  }

  console.log(answer);
  cnt += n + 1;
}
