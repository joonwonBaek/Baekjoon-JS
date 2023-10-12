var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;
let answer = Array.from(Array(n+1), () => 0);

answer[2] = 1;
answer[3] = 1;
for(let i=4; i<=n; i++){
    // -1 하는 경우 이전 값 +1
    answer[i] = answer[i-1] + 1;
    // 3으로 나누어지는 경우는 3으로 나누어지는 경우 +1
    if(i % 3 === 0) {
        answer[i] = Math.min(answer[i], answer[i/3]+1)
    }
    // 2으로 나누어지는 경우는 2으로 나누어지는 경우 +1
    if(i % 2 === 0) {
        answer[i] = Math.min(answer[i], answer[i/2]+1)
    }
}

console.log(answer[n]);