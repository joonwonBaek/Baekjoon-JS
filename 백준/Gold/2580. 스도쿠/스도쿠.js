const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const graph = [];
const blank = [];

for (let i = 0; i < 9; i++) {
  graph.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (graph[i][j] === 0) {
      blank.push([i, j]);
    }
  }
}

const row = (x, a) => {
  for (let i = 0; i < 9; i++) {
    if (a === graph[x][i]) {
      return false;
    }
  }
  return true;
};

const column = (y, a) => {
  for (let i = 0; i < 9; i++) {
    if (a === graph[i][y]) {
      return false;
    }
  }
  return true;
};

const square = (x, y, a) => {
  const nx = Math.floor(x / 3) * 3;
  const ny = Math.floor(y / 3) * 3;
  for (let i = nx; i < nx + 3; i++) {
    for (let j = ny; j < ny + 3; j++) {
      if (a === graph[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const dfs = (depth) => {
  if (depth === blank.length) {
    for (const g of graph) {
      console.log(g.join(" "));
    }
    process.exit();
  }

  for (let i = 1; i < 10; i++) {
    const [x, y] = blank[depth];

    if (row(x, i) && column(y, i) && square(x, y, i)) {
      graph[x][y] = i;
      dfs(depth + 1);
      graph[x][y] = 0;
    }
  }
};

dfs(0);
