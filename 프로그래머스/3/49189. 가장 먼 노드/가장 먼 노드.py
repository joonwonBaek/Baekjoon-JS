from collections import deque

def solution(n, edge):
    answer = 0
    graph = [[] for _ in range(n+1)]
    visited = [0]*(n+1)
    for v in edge:
        graph[v[0]].append(v[1])
        graph[v[1]].append(v[0])
    
                
    def bfs(start):
        visited[start] = 1
        
        queue = deque()
        queue.append(start)
        
        while queue:
            s = queue.popleft()
            for i in graph[s]:
                if visited[i] == 0:
                    visited[i] = max(visited[s]+1, visited[i])
                    queue.append(i)
        
        
    bfs(1)
    max_num = max(visited)
    return visited.count(max_num)