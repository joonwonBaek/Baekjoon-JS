const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ");

const cheeses = arr.filter((cheese) => cheese.trim().endsWith("Cheese"));
const cheeseCount = new Set(cheeses).size;

console.log(cheeseCount >= 4 ? "yummy" : "sad");
