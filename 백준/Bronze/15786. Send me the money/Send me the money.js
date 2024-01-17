const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const [nm, alp, ...posts] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = nm.split(" ").map(Number);
posts.forEach((post) => {
  let idx = 0;
  for (let i = 0; i < post.length; i++) {
    if (alp[idx] === post[i]) idx += 1;
  }
  let answer = Math.min(idx, n);
  if (answer === n) {
    console.log("true");
  } else {
    console.log("false");
  }
});
