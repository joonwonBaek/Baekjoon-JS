const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function lowerBound(arr, target, start, end){
    while(start<end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] >= target) end = mid;
        else start = mid+1;
    }
    return end;
}
function upperBound(arr, target, start, end){
    while(start<end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] > target) end = mid;
        else start = mid+1;
    }
    return end;
}

function countByRange(arr, leftvalue, rightvalue){
    let rightindex = upperBound(arr, rightvalue, 0, arr.length);
    let leftindex = lowerBound(arr, leftvalue, 0, arr.length)
    return rightindex-leftindex;
}

let n = Number(input[0]);
let arr1 = input[1].split(" ").map(Number);
arr1.sort((a,b) => {return a-b});
let m = Number(input[2]);
let arr2 = input[3].split(" ").map(Number);
let answer = [];

for(let i=0; i<m; i++){
    let cnt = countByRange(arr1, arr2[i], arr2[i]);
    answer.push(String(cnt));
}
console.log(answer.join(" "));