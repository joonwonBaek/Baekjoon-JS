const readline = require("readline");

// 입출력을 위한 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 3) {
    rl.close();
  }
}).on("close", () => {
  const n = Number(input[0]);
  const num = input[1].split(" ").map(Number);
  const oper = input[2].split(" ").map(Number);
  const answer = [];
  const dfs = (ans, idx, plus, minus, mul, div) => {
    if (idx === n) {
      answer.push(ans);
      return;
    }

    if (plus > 0) {
      dfs(ans + num[idx], idx + 1, plus - 1, minus, mul, div);
    }
    if (minus > 0) {
      dfs(ans - num[idx], idx + 1, plus, minus - 1, mul, div);
    }
    if (mul > 0) {
      dfs(ans * num[idx], idx + 1, plus, minus, mul - 1, div);
    }
    if (div > 0) {
      dfs(~~(ans / num[idx]), idx + 1, plus, minus, mul, div - 1);
    }
  };
  dfs(num[0], 1, oper[0], oper[1], oper[2], oper[3]);

  console.log(Math.max(...answer));
  console.log(Math.min(...answer));
  process.exit();
});
