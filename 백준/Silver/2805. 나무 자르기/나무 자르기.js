const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let start = 1;
let end = Math.max(...arr);

let result = 0;
while(start <= end){
    let mid = parseInt((start+end)/2);
    let total = 0;
    for(x of arr){
        if(x >= mid){
            total += (x-mid);
        }
    }
    if(total < m){ //m의 길이보다 짧으면 mid 값을 줄여야 함
        end = mid-1;
    }
    else { //m의 길이보다 길거나 같으면 mid 늘려야 함
        result = mid;
        start = mid+1;
    }
}
console.log(result);