const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let set_arr = [...new Set(arr)]
set_arr.sort((a,b) => a-b);

let arr_map = new Map();
for(let i=0; i<set_arr.length; i++){
    arr_map.set(set_arr[i], i);
}
answer = "";
for(x of arr) answer += arr_map.get(x)+" ";
console.log(answer);