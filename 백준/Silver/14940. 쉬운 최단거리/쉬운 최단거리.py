from collections import deque

n, m = map(int, input().split())

graph = [list(map(int, input().split())) for _ in range(n)]
result = [[-1]*m for _ in range(n)]
visited = [[0]*m for _ in range(n)]

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    queue = deque()
    queue.append((x,y))
    visited[x][y] = 1
    result[x][y] = 0

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0:
                if graph[nx][ny] == 0:
                    visited[nx][ny] = 1
                    result[nx][ny] = 0
                elif graph[nx][ny] == 1:
                    visited[nx][ny] = 1
                    result[nx][ny] = result[x][y] + 1
                    queue.append((nx, ny))
    return

x = 0
y = 0
for i in range(n):
    for j in range(m):
        if graph[i][j] == 2:
            x = i
            y = j
            break

bfs(x, y)

for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            print(0, end = " ")
        else:
            print(result[i][j], end = " ")
    print()