var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);

let graph = Array.from({length:n+1}, ()=>[]);

for(let i = 2; i<m+2; i++) {
    const [key, value] = input[i].split(" ").map(Number);
    graph[key].push(value);
    graph[value].push(key);
}

let cnt = 0;
let visited = new Array(n+1).fill(false);

function dfs(x) {
    visited[x] = true;
    cnt++;
    
    for(num of graph[x]){
        if(!visited[num]){
            dfs(num);
        }
    }
}
dfs(1);
console.log(cnt-1);