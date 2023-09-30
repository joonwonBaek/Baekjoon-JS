function solution(k, dungeons) {
    
    let dungeon = {};
    const visited = Array(dungeons.length).fill(0);
    let answer = 0
    
    function dfs(k, cnt, dungeons, visited) {
        answer = Math.max(answer, cnt);
        for(let i = 0; i<dungeons.length; i++){
            if(visited[i] === 0 && k >= dungeons[i][0]) {
                visited[i] = 1;
                dfs(k-dungeons[i][1], cnt+1, dungeons, visited);
                visited[i] = 0;
            }
        }
    }
    dfs(k, 0, dungeons, visited)
    return answer;
}