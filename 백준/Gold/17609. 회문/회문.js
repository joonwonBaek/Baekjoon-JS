const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function reverse_arr(x){
    return x == x.split("").reverse().join("");
}

let N = Number(input[0]);

for(let i=1; i<=N; i++){
    let data = input[i].trim();
    if(data === data.split("").reverse().join("")){
        console.log(0);
    }
    else{
        let found = false;
        let len = data.length;
        for(let j=0; j<parseInt(len/2); j++){
            if(data[j]!=data[len-j-1]){
                if(reverse_arr(data.slice(0,j)+data.slice(j+1,len))) found = true;
                if(reverse_arr(data.slice(0,len-j-1)+data.slice(len-j,len))) found = true;
                break;
            }
        }
        if(found) console.log(1);
        else console.log(2);
    }
}