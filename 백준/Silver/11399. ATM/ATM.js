const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let sum = 0;
let answer = 0;
arr.sort((a,b)=>a-b);
for(let i=0; i<N; i++){
    sum += arr[i];
    answer += sum;
}
console.log(answer);