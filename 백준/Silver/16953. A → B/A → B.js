const { log } = require('console');
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N,K] = input[0].split(" ").map(Number);
let cnt = 1;
while(K > N){
    if(K%2 === 0){
        K /= 2;
        cnt +=1;
    }
    else {
        K = (K-1)/10;
        cnt +=1;
    }
}
if(K === N){
    console.log(cnt);
}
else{
    console.log(-1);
}

