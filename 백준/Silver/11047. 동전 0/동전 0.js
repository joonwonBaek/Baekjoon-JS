const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N,K] = input[0].split(" ").map(Number);
let arr = [];
for(let i=1; i<=N; i++){
    if(input[i] <= K){
        arr.push(Number(input[i]))
    }
}
arr.sort((a,b)=>b-a);
var answer = 0;
for(let i=0; i<arr.length; i++){
    if(K >= arr[i]){
        answer += parseInt(K/arr[i]);
        K%=arr[i];
    }
}
console.log(answer);