const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let sugar = Number(input[0]);
let cnt = 0;
let answer = 0;
while(sugar > 0){
    if(sugar%5 === 0){
        sugar -= 5;
        cnt+=1;
    }
    else{
        sugar -= 3;
        cnt +=1;
    }
}
if(sugar === 0){
    answer = cnt;
}
else{
    answer = -1;
}

console.log(answer);
