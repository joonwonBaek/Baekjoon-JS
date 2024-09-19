const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const words = [];
const short = [];
const result = [];

for (let i = 1; i <= n; i++) {
  words.push(input[i].trim().split(" "));
}

for (let i = 0; i < n; i++) {
  let flag = false;
  for (let j = 0; j < words[i].length; j++) {
    const firstChar = words[i][j][0].toLowerCase();
    if (!short.includes(firstChar)) {
      flag = true;
      short.push(firstChar);
      words[i][j] = "[" + words[i][j][0] + "]" + words[i][j].slice(1);
      break;
    }
  }
  if (!flag) {
    const temp = words[i].join(" ");
    for (let k = 1; k < temp.length; k++) {
      if (temp[k] !== " " && !short.includes(temp[k].toLowerCase())) {
        short.push(temp[k].toLowerCase());
        const ans = temp.slice(0, k) + "[" + temp[k] + "]" + temp.slice(k + 1);
        result.push(ans);
        flag = true;
        break;
      }
    }
  }
  if (!flag) {
    result.push(words[i].join(" "));
  } else if (!result[i]) {
    result.push(words[i].join(" "));
  }
}

console.log(result.join("\n"));
