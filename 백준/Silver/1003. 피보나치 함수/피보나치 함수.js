var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);

for(let i = 1; i <= cnt; i++) {
    const n = Number(input[i]);

    const fibonacci = [[1,0], [0,1]];

    for(let j = 2; j<=n ; j++){
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0],
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }

    console.log(fibonacci[n].join(" "));
}