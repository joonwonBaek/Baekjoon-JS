const readline = require("readline");

// 입출력을 위한 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length == Number(input[0]) + 1) {
    rl.close();
  }
}).on("close", () => {
  const n = Number(input[0]);
  const answer = new Set();

  for (let i = 1; i <= n; i++) {
    const arr = input[i].split("");
    arr.sort();
    const word = [];
    let dict = {};

    for (let a of arr) {
      if (a in dict) {
        dict[a] += 1;
      } else {
        dict[a] = 1;
      }
    }
    const dfs = (depth, word) => {
      if (depth === arr.length) {
        answer.add(word.join(""));
        return;
      }
      for (let key in dict) {
        if (dict[key]) {
          dict[key] -= 1;
          word.push(key);
          dfs(depth + 1, word);
          word.pop();
          dict[key] += 1;
        }
      }
      return;
    };

    dfs(0, word);
  }
  const answer_arr = [...answer];
  console.log(answer_arr.join("\n"));
  process.exit();
});
