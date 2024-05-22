const readline = require("readline");

// 입출력을 위한 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;

rl.on("line", (input) => {
  num = Number(input);
  rl.close();
});

rl.on("close", () => {
  const down = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let cnt = 1;

  while (cnt <= 10) {
    for (let d of down) {
      if (d.length === cnt) {
        for (let i = 0; i <= 9; i++) {
          if (Number(d[d.length - 1]) > i) {
            down.push(d + String(i));
          }
        }
      }
    }
    cnt += 1;
  }

  if (down[num - 1]) {
    console.log(down[num - 1]);
  } else {
    console.log(-1);
  }

  process.exit();
});
