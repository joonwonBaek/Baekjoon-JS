const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const chicken = [];
const house = [];

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1) {
      house.push([i, j]);
    } else if (graph[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

const combinations = getCombinations(chicken, m);
let minSum = Infinity;

combinations.forEach((combination) => {
  let sum = 0;
  house.forEach((home) => {
    let minDistance = Infinity;
    combination.forEach((chick) => {
      const distance =
        Math.abs(chick[0] - home[0]) + Math.abs(chick[1] - home[1]);
      minDistance = Math.min(minDistance, distance);
    });
    sum += minDistance;
  });
  minSum = Math.min(minSum, sum);
});

console.log(minSum);
