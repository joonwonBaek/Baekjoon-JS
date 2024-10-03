const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const beers = [];
for (let i = 1; i <= k; i++) {
  const [v, c] = input[i].split(" ").map(Number);
  beers.push({ preference: v, level: c });
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;

    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallest = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      index = smallest;
    }

    return min;
  }

  top() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

beers.sort((a, b) => a.level - b.level);

let left = 1;
let right = Math.max(...beers.map((beer) => beer.level));
let answer = -1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  const heap = new MinHeap();
  let totalPreference = 0;

  for (const beer of beers) {
    if (beer.level > mid) break;

    heap.push(beer.preference);
    totalPreference += beer.preference;

    if (heap.size() > n) {
      totalPreference -= heap.pop();
    }
  }

  if (totalPreference >= m && heap.size() === n) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
