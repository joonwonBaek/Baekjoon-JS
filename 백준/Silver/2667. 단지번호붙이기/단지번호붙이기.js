let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const graph = Array.from({length:n});
const visited = Array.from({length:n}, () => new Array(n).fill(false));
const arr = [];

function bfs(x, y){
    const check = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]
    const queue = [[x,y]];

    let cnt = 1;
    while(queue.length) {
        const [curX, curY] = queue.shift();
        for(const [x, y] of check) {
            const [nx, ny] = [curX+x, curY+y];
            if(nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && graph[nx][ny] === 1){
                queue.push([nx, ny]);
                visited[nx][ny] = true;
                cnt ++;
            }
        }
    }
    return cnt;
}

for(let i=0; i < n; i++){
    graph[i] = input[i+1].trim().split('').map(Number);
}

for(let i=0; i< n; i++) {
    for(let j=0; j<n; j++) {
        if(graph[i][j] === 1 && !visited[i][j]){
            visited[i][j] = true;
            arr.push(bfs(i,j));
        }
    }
}
console.log(arr.length);
arr.sort((a, b) => a-b);
arr.forEach((num) => {
    console.log(num);
})


