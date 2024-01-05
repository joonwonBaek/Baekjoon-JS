const { log } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const binarySearch = (dp, start, end, target) => {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (dp[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
};

let n = Number(input[0]);
let arr = input[1].split(" ").map((x) => Number(x));

let dp = [arr[0]];

for (let i = 1; i < n; i++) {
  if (dp[dp.length - 1] < arr[i]) {
    dp.push(arr[i]);
  } else {
    let idx = binarySearch(dp, 0, dp.length - 1, arr[i]);
    dp[idx] = arr[i];
  }
}
console.log(dp.length);
