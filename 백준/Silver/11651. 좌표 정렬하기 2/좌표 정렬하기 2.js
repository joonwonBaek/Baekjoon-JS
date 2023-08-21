const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
let answer = ""
for(let i=0; i<n; i++){
    arr.push(input[i+1].split(" ").map(Number));
}
arr.sort((a,b) => a[1] === b[1] ? a[0]-b[0] : a[1]-b[1]);

for(let i of arr){
    answer += i.join(" ")+"\n";
}

console.log(answer);