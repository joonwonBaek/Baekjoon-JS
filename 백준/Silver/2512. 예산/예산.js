const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let start = 1;
let end = arr.reduce((a,b) => Math.max(a,b));

let result = 0;
while(start <= end){ //이진 탐색 수행
    let mid = parseInt((start+end)/2);
    let total = 0; //총액
    for(x of arr) {
        total += Math.min(mid, x);
    }
    if(total <= m){ //조건 만족, 상한액 증가 시키기
        result = mid;
        start = mid + 1;
    }
    else{
        end = mid-1; //조건 만족X, 상한액 감소 시키기
    }
}
console.log(result);