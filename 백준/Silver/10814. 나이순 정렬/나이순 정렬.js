const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i=0; i<n; i++){
    let [n,k] = input[i+1].split(" ");
    arr.push([Number(n),k]);
}

arr.sort((a,b) => a[0]-b[0])
for(let i of arr){
    console.log(i.join(" "));
}