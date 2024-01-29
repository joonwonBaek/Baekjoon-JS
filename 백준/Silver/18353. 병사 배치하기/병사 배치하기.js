const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function lowerBound(arr, target, start, end){
    while(start<end){
        let mid = parseInt((start+end)/2);
        if(arr[mid]>=target){
            end = mid;
        }
        else{
            start = mid+1;
        }
    }
    return end;
}
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.reverse();
let arr1 = [0];

for(x of arr){
    if(arr1[arr1.length-1] < x){
        arr1.push(x);
    }
    else{
        let index = lowerBound(arr1, x, 0, arr1.length);
        arr1[index] = x; 
    }
}

console.log(n-arr1.length+1);