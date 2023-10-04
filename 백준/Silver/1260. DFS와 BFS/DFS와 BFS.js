let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function DFS(graph, root) { //스택이용
    const visited = []; //탐색된 노드
    let willvisit = []; //탐색해야하는 노드

    willvisit.push(root);

    while(willvisit.length !== 0) {
        const node = willvisit.shift(); //pop을 사용하고 reverse()를 사용하면 graph가 변함
        if(!visited.includes(node)) {
            visited.push(node);
            willvisit = [...graph[node], ...willvisit]; //스택(LIFO) 최근 들어온게 앞에 들어오고 shift를 하여서 후입 선출되도록
        }
    }
    return visited
}

function BFS (graph, root) {
    const visited = [];
    let willvisit = [];

    willvisit.push(root);

    while(willvisit.length !== 0) {
        const node = willvisit.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            willvisit.push(...graph[node]);
        }
    }
    return visited
}
let [n, m, root] = input[0].split(" ").map(Number);
const graph = Array.from({length: n+1}, () => []);

for(let i = 0; i < m; i++){
    let [a, b] = input[i+1].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

for(a of graph) {
    a.sort((a,b) => a-b);
}

console.log(DFS(graph, root).join(" "));
console.log(BFS(graph, root).join(" "));