from collections import deque

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    visited = [[0]*m for _ in range(n)]
    
    def bfs(x, y):
        queue = deque()
        queue.append((x, y))
        visited[x][y] = 1
        
        while queue:
            x, y = queue.popleft()
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < n and 0 <= ny < m:
                    if visited[nx][ny] == 0 and maps[nx][ny] == 1:
                        visited[nx][ny] = visited[x][y] + 1
                        queue.append((nx, ny))
    bfs(0, 0)
    if visited[n-1][m-1] == 0:
        answer = -1
    else:
        answer = visited[n-1][m-1]
    return answer