const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = input[0].split("");

const quacks = { q: 0, u: 0, a: 0, c: 0, k: 0 };

if (word.length % 5 !== 0 || word[word.length - 1] !== "k") {
  console.log(-1);
  return;
} else {
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const str = word[i];

    quacks[str] += 1;

    if (
      (str === "u" && quacks["q"] < quacks["u"]) ||
      (str === "a" && quacks["u"] < quacks["a"]) ||
      (str === "c" && quacks["a"] < quacks["c"]) ||
      (str === "k" && quacks["c"] < quacks["k"])
    ) {
      console.log(-1);
      return;
    } else {
      answer = Math.max(answer, quacks["q"] - quacks["k"]);
    }
  }
  console.log(answer);
}
