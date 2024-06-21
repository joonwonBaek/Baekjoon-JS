const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [l, c] = input[0].split(" ").map(Number);
const arr = input[1].split(" ");
const temp = ["a", "e", "i", "o", "u"];
const visited = new Array(c).fill(0);
const answer = [];
arr.sort();

const find_word = (word) => {
  let a_count = 0;
  let b_count = 0;
  for (const w of word) {
    if (temp.includes(w)) {
      a_count += 1;
    } else {
      b_count += 1;
    }
  }
  if (a_count >= 1 && b_count >= 2) {
    return true;
  } else {
    return false;
  }
};

const dfs = (depth, result) => {
  if (result.length === l) {
    if (find_word(result)) {
      let temp = result.sort();
      if (!answer.includes(temp.join(""))) {
        answer.push(result.join(""));
        return;
      }
    }
  }
  for (let i = depth; i < c; i++) {
    result.push(arr[i]);
    dfs(i + 1, result);
    result.pop();
  }
};

dfs(0, []);
console.log(answer.join("\n"));
