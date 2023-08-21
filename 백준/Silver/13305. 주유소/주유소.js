const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);
let minValue = cost[0];
for(let i=0; i<cost.length; i++){
    minValue = Math.min(minValue, cost[i]);
    cost[i] = minValue;
}
let sum = 0;
for(let i=0; i<dist.length; i++){
    sum += cost[i]*dist[i];
}
console.log(sum);