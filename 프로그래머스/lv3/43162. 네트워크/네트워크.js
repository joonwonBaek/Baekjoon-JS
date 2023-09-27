function dfs(n, computers, visited, start) {
    const stack = [start]; //dfs의 시작점을 초기화
    
    while (stack.length > 0) {
        const curr = stack.pop();
        visited[curr] = true;
        
        for(let i = 0; i < n; i++) {
            if(visited[i] === false && computers[curr][i] === 1) {
                stack.push(i);
            }
        }
    }
}
function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    for(let i = 0; i < n; i++) {
        if(visited[i] === false) {
            dfs(n, computers, visited, i);
            answer += 1;
        }
    }
    return answer;
}