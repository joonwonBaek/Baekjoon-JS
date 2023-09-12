const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [k,n] = input[0].split(" ").map(Number);
let arr = [];
for(let i =1; i<=k; i++){
    arr.push(Number(input[i]))
}
let start = 1;
let end = Math.max(...arr);

let result = 0;
while(start <= end){
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(x of arr){
        total += parseInt(x/mid);
    }
    if(total < n){ //랜선의 개수가 모자라면 end의 값을 줄인다
        end = mid-1;
    }
    else { //랜선의 개수가 남으면 start 값을 늘린다
        result = mid;
        start = mid+1;
    }
}
console.log(result);