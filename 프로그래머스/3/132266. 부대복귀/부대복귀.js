function solution(n, roads, sources, destination) {
    const graph = [[]]
    const answer = []
    let visited = []
    for(let i = 0; i < n+1; i++) {
        visited.push(Infinity)
    }
    for(let i = 0; i < n; i++) {
        graph.push([])
    }
    
    for(let r of roads) {
        [a, b] = r
        graph[a].push(b)
        graph[b].push(a)
    }
    
    const bfs = (start) => {
        const queue = [start]
        visited[start] = 0
        
        while(queue.length) {
            let idx = queue.shift()
            
            for(let i of graph[idx]) {
                if(visited[idx] + 1 < visited[i]) {
                    visited[i] = visited[idx] + 1
                    queue.push(i)
                }
            }
        }
    }
    
    bfs(destination)
    
    for(let s of sources) {
        if(visited[s] === Infinity) {
            answer.push(-1)
        } else {
            answer.push(visited[s])
        }
    }
    
    return answer;
}