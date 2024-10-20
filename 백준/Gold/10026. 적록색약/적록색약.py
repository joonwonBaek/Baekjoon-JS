from collections import deque

n = int(input())
graph = [list(input()) for _ in range(n)]
visited = [[0]*n for _ in range(n)]

normal = 0
redgreen = 0
q = deque()

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    q.append((x,y))
    visited[x][y] = 1
    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]

            if 0 <= nx < n and 0 <= ny < n:
                if visited[nx][ny] == 0:
                    if graph[nx][ny] == graph[x][y]:
                        visited[nx][ny] = 1
                        q.append((nx, ny))



for i in range(n):
    for j in range(n):
        if visited[i][j] == 0:
            bfs(i, j)
            normal += 1
for i in range(n):
    for j in range(n):
        if graph[i][j] == 'R':
            graph[i][j] = 'G'

visited = [[0]*n for _ in range(n)]

for i in range(n):
    for j in range(n):
        if visited[i][j] == 0:
            bfs(i, j)
            redgreen += 1

print(normal, redgreen)