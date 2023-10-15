let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(" ").map(Number);


function dfs(visited, graph, i){
    visited[i] = true;
    
    for(const node of graph[i]){
        if(!visited[node]) {
            dfs(visited,graph,node);
        }
    }
}

const graph = Array.from({length:n+1}, () => []);
const visited = Array.from({length:n+1}, () => false);
let cnt = 0;

for(let i=1; i <= m; i++){
    const [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

for(let j=1; j<=n; j++) {
    if(!visited[j]){
        dfs(visited, graph, j);
        cnt += 1;
    }
}

console.log(cnt);