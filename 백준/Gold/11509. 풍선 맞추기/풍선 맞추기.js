const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let height = input[1].split(" ").map(Number);
let arrow = new Array(1000001).fill(0);
let answer = 0;

for(var i of height){
    if(arrow[i] > 0){
        arrow[i] -= 1;
        arrow[i-1] +=1;
    }
    else {
        arrow[i-1] +=1;
        answer += 1;
    }
}
console.log(answer);