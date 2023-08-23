const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 피보나치 수들 계산
pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

let n = Number(input[0]);
for(let i=1; i<=n; i++){
    let num = Number(input[i]);
    let arr = [];
    let pibo_len = pibo.length-1;
    while(num > 0){
        if(num >= pibo[pibo_len]){
            num-=pibo[pibo_len];
            arr.push(pibo[pibo_len]);
        }
        pibo_len-=1;
    }
    arr.sort((a,b)=>a-b);
    let answer = arr.join(" ");
    console.log(answer);
}