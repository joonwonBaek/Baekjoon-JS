const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0].split('').sort((a,b)=>b-a).map(Number).join('');
console.log(n);