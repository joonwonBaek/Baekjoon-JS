let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((v)=> v.split(' ').map(Number));

let graph, visited, w, h;

function bfs(y, x){
    const check = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ];
    const queue = [[y, x]];
    while(queue.length) {
        const [curY, curX] = queue.shift();

        for(const [y, x] of check) {
            const [ny, nx] = [curY+y, curX+x];
            if (ny >= 0 && ny < h && nx >= 0 && nx < w && !visited[ny][nx] && graph[ny][nx]){
                visited[ny][nx] = true;
                queue.push([ny, nx])
            }
        }
    }
}

let tc = 0;
let len = input.length-1;
while(tc < len) {
    let cnt = 0;
    [w,h] = input[tc];
    graph = input.slice(tc+1, tc+h+1);
    visited = Array.from(Array(h), () => Array(w).fill(false));
    for(let i = 0; i < h; i++){
        for(let j = 0; j < w; j++){
            if(graph[i][j] === 1 && !visited[i][j]){
                bfs(i,j);
                cnt ++;
            }
        }
    }
    tc += h+1;
    console.log(cnt);
}


    