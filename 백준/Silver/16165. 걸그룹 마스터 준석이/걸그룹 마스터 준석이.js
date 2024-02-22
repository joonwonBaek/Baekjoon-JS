const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let index = 1;
let member = 0;
let group_member = new Map();
let group_name = new Map();

for (let i = 0; i < n; i++) {
  group_name.set(input[index], input[index + 1]);
  member = Number(input[index + 1]);
  for (let j = 0; j < member; j++) {
    group_member.set(input[index + 2 + j], input[index]);
  }
  index += member + 2;
}

let member_sort = new Map([...group_member.entries()].sort());

for (let i = 0; i < m; i++) {
  if (Number(input[index + 1]) === 1) {
    console.log(group_member.get(input[index]));
    index += 2;
  } else {
    for (let [key, value] of member_sort) {
      if (value === input[index]) {
        console.log(key);
      }
    }
    index += 2;
  }
}
