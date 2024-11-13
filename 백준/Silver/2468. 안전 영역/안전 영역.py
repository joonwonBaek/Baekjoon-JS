from collections import deque

n = int(input())
graph = [list(map(int, input().split())) for _ in range(n)]

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

results = 0

def bfs(x, y, max_r):
    q = deque()
    q.append((x, y))
    visited[x][y] = 1

    while q:
        x, y = q.popleft()

        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if 0 <= nx < n and 0 <= ny < n:
                if visited[nx][ny] == 0 and graph[nx][ny] > max_r:
                    q.append((nx, ny))
                    visited[nx][ny] = 1

max_rain = max(map(max, graph))

for r in range(max_rain):
    visited = [[0] * n for _ in range(n)]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if graph[i][j] > r and visited[i][j] == 0:
                bfs(i, j, r)
                cnt += 1
    if cnt > results:
        results = cnt

print(results)